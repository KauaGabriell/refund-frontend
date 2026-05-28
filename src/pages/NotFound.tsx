import { Link } from "react-router";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center">
      <span className="text-7xl font-bold text-green-100 leading-none">404</span>

      <h1 className="mt-6 text-xl font-bold text-gray-100">
        Pagina nao encontrada
      </h1>

      <p className="mt-2 mb-8 text-sm text-gray-200 max-w-80">
        O endereco acessado nao existe ou foi movido.
      </p>

      <Link to="/">
        <Button className="">Voltar para login</Button>
      </Link>
    </section>
  );
}
