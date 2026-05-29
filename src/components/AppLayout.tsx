import { Outlet } from "react-router";
import { Header } from "./Header";
export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="w-full max-w-6xl items-center flex flex-col p-3">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
