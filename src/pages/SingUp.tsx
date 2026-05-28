import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

export function SingUp() {
  const [name, setName] = useState("");
  const [confirmedPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    alert("enviado");
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        type="text"
        placeholder="Insira seu Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="Seu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        required
        legend="Confirme Sua senha"
        type="password"
        placeholder="123456"
        value={confirmedPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button isLoading={isLoading} type="submit">
        Cadastrar
      </Button>
      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:to-gray-800 hover:underline transition ease-linear"
      >
        Já tenho um conta
      </a>
    </form>
  );
}
