import React, { useState } from "react";

const CredentialsInfoPage: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"admin" | "officer" | "landowner">(
    "admin"
  );

  const credentials = {
    admin: {
      username: "admin",
      password: "admin123",
      description:
        "Full administrative access. Can create and manage all user accounts.",
      permissions: [
        "Create officer and landowner accounts",
        "Access all system features",
        "Manage user permissions",
        "View system analytics",
      ],
    },
    officer: {
      username: "Create via admin panel",
      password: "Set by admin",
      description:
        "Can view and process land records. Limited administrative access.",
      permissions: [
        "View all land records",
        "Process ownership transfers",
        "Verify property documents",
        "Generate official reports",
      ],
    },
    landowner: {
      username: "Create via admin panel",
      password: "Set by admin",
      description: "Can view personal land records and submit applications.",
      permissions: [
        "View personal land records",
        "Apply for ownership transfer",
        "Download property documents",
        "Track application status",
      ],
    },
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleLoginRedirect = () => {
    window.location.href =
      "https://land-management-system-alextaweke-5562s-projects.vercel.app/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 md:mb-16 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Land Management System - Portfolio Project
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Login credentials for accessing my ongoing full-stack project
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              React + TypeScript
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Node.js + MongoDB
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Credentials */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  {(["admin", "officer", "landowner"] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setActiveTab(role)}
                      className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                        activeTab === role
                          ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {role === "admin" && (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                        {role === "officer" && (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        )}
                        {role === "landowner" && (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        )}
                        <span className="capitalize">{role}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Credentials Content */}
              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {activeTab === "admin"
                      ? "Administrator Credentials"
                      : activeTab === "officer"
                      ? "Officer Access"
                      : "Landowner Access"}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {credentials[activeTab].description}
                  </p>

                  {/* Credentials Display */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Username
                        </label>
                        <div className="flex gap-2">
                          <code className="flex-1 bg-white px-4 py-3 rounded-lg border border-gray-300 font-mono text-gray-800 break-all">
                            {credentials[activeTab].username}
                          </code>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                credentials[activeTab].username,
                                "username"
                              )
                            }
                            className="px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors whitespace-nowrap"
                          >
                            {copied === "username" ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="flex gap-2">
                          <code className="flex-1 bg-white px-4 py-3 rounded-lg border border-gray-300 font-mono text-gray-800 break-all">
                            {credentials[activeTab].password}
                          </code>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                credentials[activeTab].password,
                                "password"
                              )
                            }
                            className="px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors whitespace-nowrap"
                          >
                            {copied === "password" ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {activeTab === "admin" && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <svg
                            className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.308 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                          <p className="text-yellow-800 text-sm">
                            <strong>Important:</strong> Use admin credentials to
                            create officer and landowner accounts. Regular users
                            cannot create accounts themselves.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Permissions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Access Permissions
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {credentials[activeTab].permissions.map(
                      (permission, index) => (
                        <div
                          key={index}
                          className="flex items-start p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{permission}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 md:px-8 pb-8">
                <button
                  onClick={handleLoginRedirect}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Go to Login Page
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Instructions */}
          <div className="space-y-8">
            {/* Quick Instructions */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                How to Access
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700">
                    Copy the credentials from the left panel
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700">
                    Click "Go to Login Page" button
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700">
                    Paste credentials on the login page
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-700">
                    Explore the Land Management System
                  </p>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                About This Project
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Full-stack land management system</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Role-based authentication system</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Real-time data processing</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Interactive document management</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Responsive dashboard design</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Project Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    In Development
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Login Link */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Direct Login Link
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <code className="text-sm text-gray-800 break-all font-mono">
                  https://land-management-system-alextaweke-5562s-projects.vercel.app/login
                </code>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "https://land-management-system-alextaweke-5562s-projects.vercel.app/login",
                      "link"
                    )
                  }
                  className="w-full mt-3 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
                >
                  {copied === "link" ? "Link Copied!" : "Copy Login URL"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Alex Taweke - Portfolio Project
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This page displays credentials for accessing my Land Management
            System project
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CredentialsInfoPage;
