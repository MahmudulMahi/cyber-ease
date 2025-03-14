import { useEffect } from "react";
import { changeTitleAndFavicon } from "../../ChangeTitle/ChangeTitle";

export default function NotFoundPage() {
        useEffect(() => {
          
          changeTitleAndFavicon('*');
        }, []);
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
          Go Home
        </a>
      </div>
    );
  }