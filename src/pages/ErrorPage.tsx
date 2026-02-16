import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center space-y-4">
                <h1 className="text-8xl font-bold text-gray-900">404</h1>
                <p className="text-lg text-gray-500">Page not found</p>
                <Link
                    to="/"
                    className="inline-block mt-4 px-6 py-2.5 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;