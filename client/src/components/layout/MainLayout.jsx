import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";

export default function MainLayout() {
  const location = useLocation();

  const pageTitle = location.pathname === "/"
    ? "Home"
    : location.pathname.replace("/", "").replace(/^\w/, (c) => c.toUpperCase());

  return (
    <main className="flex h-screen w-full bg-neutral-900 text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar title={pageTitle} />

        <section className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
