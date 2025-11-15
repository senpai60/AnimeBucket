import { NavLink } from "react-router-dom";
import { LayoutDashboard, Search, Film, Heart, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: LayoutDashboard },
    { name: "Search", path: "/search", icon: Search },
    { name: "Anime", path: "/anime", icon: Film },
    { name: "Playlists", path: "/playlists", icon: Heart },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-40 left-0 top-0 h-full
          w-64 bg-neutral-900 border-r border-neutral-700
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-6 font-bold text-xl text-white">ViVeePanel</div>

        <nav className="space-y-2 px-4">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg 
                 transition 
                 ${isActive ? "bg-blue-600 text-white" : "text-neutral-300 hover:bg-neutral-800"}`
              }
            >
              <Icon size={20} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 text-white"
      >
        <Menu size={26} />
      </button>
    </>
  );
}
