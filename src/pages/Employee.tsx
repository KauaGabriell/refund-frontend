import { Route, Routes } from "react-router";
import { Refund } from "./Refund";
import { NotFound } from "./NotFound";
import { AppLayout } from "../components/AppLayout";
import { Confirm } from "./Confirm";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />}></Route>
        <Route path="/confirm" element={<Confirm />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
