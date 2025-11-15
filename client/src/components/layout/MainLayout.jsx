import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";

export default function MainLayout() {
  const location = useLocation();

  const pageTitle =
    location.pathname === "/"
      ? "Home"
      : location.pathname
          .replace("/", "")
          .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <main className="flex h-screen w-full bg-[#f5f1e8] text-[#4d4c4a] font-inter">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div
        className="flex-1 flex flex-col overflow-hidden
    border-l-[4px] border-[#4d4c4a] 
    bg-[#f5f1e8]"
      >
        <Navbar title={pageTitle} />

        <section className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
