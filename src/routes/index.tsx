import { BrowserRouter } from "react-router";
import { EmployeeRoutes } from "./Employee";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
