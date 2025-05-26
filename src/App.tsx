import { Route, Routes } from "react-router";
import { ROUTES } from "./constants/routes";
import { Overview, Settings, Users, Layout } from "./pages";

function App() {
  return (
    <section className="h-screen w-screen bg-slate-950">
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route path={ROUTES.USERS} element={<Users />} />
          <Route path={ROUTES.OVERVIEW} element={<Overview />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
