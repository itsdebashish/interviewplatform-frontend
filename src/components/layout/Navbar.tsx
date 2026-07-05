import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-xl font-bold text-slate-900"
        >
        CodeJIT
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-slate-600 hover:text-slate-900">
            Home
          </Link>

          <Link to="/login" className="text-slate-600 hover:text-slate-900">
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
