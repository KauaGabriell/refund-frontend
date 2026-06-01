import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { z, ZodError } from "zod";

const singUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Informe o Nome" }),
    email: z.email({ message: "Email Inválido" }),
    password: z
      .string()
      .min(5, { message: "Senha deve ter no mínimo 5 dígitos" }),
    passwordConfirm: z
      .string()
      .min(5, { message: "Senha deve ter no mínimo 5 dígitos" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    error: "As senhas devem ser iguais",
    path: ["passwordConfirm"],
  });

export function SingUp() {
  const [name, setName] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = singUpSchema.parse({ name, email, password, passwordConfirm });
    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      alert("Não foi possível cadastrar");
    } finally {
      setIsLoading(true);
    }
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
        placeholder="12345"
        value={passwordConfirm}
        onChange={(e) => setpasswordConfirm(e.target.value)}
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
