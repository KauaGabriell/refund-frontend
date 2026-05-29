import { BrowserRouter } from "react-router";
import { EmployeeRoutes } from "./Employee";
// import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
