import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to continue to the AI Interview Platform.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Forgot Password?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-slate-900 hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
