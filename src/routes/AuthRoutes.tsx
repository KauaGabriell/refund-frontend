import { Routes, Route } from "react-router";
import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";
import { AuthLayout } from "../components/AuthLayout";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<SingIn />} />
        <Route path="signup" element={<SingUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
