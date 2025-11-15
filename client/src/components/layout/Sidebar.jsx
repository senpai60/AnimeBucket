import { NavLink } from "react-router-dom";
import { LayoutDashboard, Search, Film, Heart, Menu, ShoppingBasket } from "lucide-react";
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
    w-64 bg-[#d8d2c6]
    border-r-[4px] border-[#4d4c4a]
    shadow-[8px_0_0_#4d4c4a]
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        <div className="p-6 font-bold text-2xl text-[#4d4c4a]">AnimeBucket <ShoppingBasket className="inline" size={20} /></div>

        <nav className="space-y-3 px-4">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `
           flex items-center gap-3 px-4 py-3 rounded-xl
           border-[3px] border-[#4d4c4a]
           shadow-[4px_4px_0_#4d4c4a]
           transition-all
           ${
             isActive
               ? "bg-[#61c470] text-[#4d4c4a]"
               : "bg-[#f5f1e8] text-[#4d4c4a] hover:bg-[#e8e2d6]"
           }
         `
              }
            >
              <Icon size={20} />
              {name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="
    md:hidden fixed top-4 left-4 z-50 
    bg-[#e65e5e] p-2 rounded-xl
    border-[3px] border-[#4d4c4a]
    shadow-[3px_3px_0_#4d4c4a]
    text-[#4d4c4a] font-bold
  "
      >
        <Menu size={26} />
      </button>
    </>
  );
}
