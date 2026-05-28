import { Input } from "../components/Input";

export function SingIn() {
  return (
    <form action="" className="w-full flex flex-col gap-4">
      <Input required legend="E-mail" type="email" placeholder="Seu Email" />
      <Input required legend="Senha" type="password" placeholder="Sua Senha" />
    </form>
  );
}
