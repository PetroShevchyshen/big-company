import { Route, Routes } from "react-router";
import { ROUTES } from "./constants/routes";
import { Overview, Settings, Users, Layout, Home } from "./pages";

function App() {
  return (
    <section className="min-h-screen min-w-screen bg-slate-100 dark:bg-slate-950">
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.USERS} element={<Users />} />
          <Route path={ROUTES.OVERVIEW} element={<Overview />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
