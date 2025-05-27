import { Outlet } from "react-router";
import { Sidebar } from "../../components";

export const Layout = () => {
  return (
    <div className="w-full min-h-screen flex">
      <aside className="w-32 md:w-44 shrink-0 p-3">
        <Sidebar />
      </aside>
      <main className="py-3">
        <Outlet />
      </main>
    </div>
  );
};
