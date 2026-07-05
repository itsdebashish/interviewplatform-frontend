import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h2>
      </div>

      <nav className="space-y-2 px-4">
        <NavLink
          to="/dashboard"
          className="block rounded-md px-4 py-2 text-slate-700 hover:bg-slate-100"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          className="block rounded-md px-4 py-2 text-slate-700 hover:bg-slate-100"
        >
          Profile
        </NavLink>

        <NavLink
          to="/interviews"
          className="block rounded-md px-4 py-2 text-slate-700 hover:bg-slate-100"
        >
          Interviews
        </NavLink>

        <NavLink
          to="/notifications"
          className="block rounded-md px-4 py-2 text-slate-700 hover:bg-slate-100"
        >
          Notifications
        </NavLink>

        <NavLink
          to="/settings"
          className="block rounded-md px-4 py-2 text-slate-700 hover:bg-slate-100"
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
