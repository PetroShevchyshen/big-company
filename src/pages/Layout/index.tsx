import { Outlet } from "react-router";
import { Sidebar } from "../../components";

export const Layout = () => {
  return (
    <section className="w-full h-full flex p-4">
      <Sidebar />
      <div className="px-2">
        <Outlet />
      </div>
    </section>
  );
};
