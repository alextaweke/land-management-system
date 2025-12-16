#!/usr/bin/env bash
set -o errexit

echo "=== DROPPING ALL DJANGO TABLES ==="
python manage.py shell << EOF
from django.db import connection
try:
    with connection.cursor() as cursor:
        # Drop all Django-related tables
        cursor.execute("""
            DO \$\$ 
            DECLARE
                r RECORD;
            BEGIN
                FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
                    EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
                    RAISE NOTICE 'Dropped table: %', r.tablename;
                END LOOP;
            END \$\$;
        """)
        print("All tables dropped successfully")
except Exception as e:
    print(f"Error dropping tables: {e}")
EOF

echo "=== CREATE AND APPLY FRESH MIGRATIONS ==="
python manage.py makemigrations --noinput
python manage.py migrate --noinput

echo "=== CREATE SUPERUSER ==="
python manage.py shell << EOF
from django.contrib.auth import get_user_model
User = get_user_model()
try:
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
        print("Superuser created: admin/admin123")
    else:
        print("Superuser already exists")
except Exception as e:
    print(f"Note: Could not create superuser yet: {e}")
EOF

echo "=== COLLECT STATIC ==="
python manage.py collectstatic --noinput

echo "=== START SERVER ==="
gunicorn config.wsgi:application --bind 0.0.0.0:$PORT