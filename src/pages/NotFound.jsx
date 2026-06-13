// src/pages/NotFound.jsx

import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#EDF1F5] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
          <AlertTriangle
            size={40}
            className="text-[#0145F2]"
          />
        </div>

        <h1 className="text-7xl font-extrabold text-[#0145F2]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0145F2] px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;