import logoSvg from "../assets/logo.svg";
import logoutSvg from "../assets/logout.svg";
import { useAuth } from "../hooks/useContext";

export function Header() {
  const auth = useAuth();
  return (
    <header className="w-full flex justify-between ">
      <img src={logoSvg} alt="Logo" className="my-8" />
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          {auth.session?.user.name}
        </span>
        <img
          onClick={auth.remove}
          src={logoutSvg}
          alt="Logout Logo(Icone de Sair)"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
