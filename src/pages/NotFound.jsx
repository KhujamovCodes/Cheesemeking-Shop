import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFBED] text-gray-900">
        <h1 className="text-6xl font-bold mb-4 text-[#F97316]">404</h1>
        <p className="text-2xl mb-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-lg mb-8">It might have been moved or deleted.</p>
        <Link to="/" className="text-[#F97316] hover:text-[#FBE8BB] text-xl">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;