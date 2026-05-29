import { Route, Routes } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
