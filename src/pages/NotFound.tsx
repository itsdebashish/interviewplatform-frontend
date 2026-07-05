import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-7xl font-bold text-slate-900">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-600">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
