import { BrowserRouter } from "react-router";
import { EmployeeRoutes } from "./Employee";
import { AuthRoutes } from "./AuthRoutes";
import { Loading } from "../components/Loading";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = false;
const session = { 
  user: {
    role: "manager",
  },
};

export function Routes() {
  if (isLoading) return <Loading />;

  function Route() {
    switch (session.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
