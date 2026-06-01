import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { useActionState } from "react";
import { useAuth } from "../hooks/useContext";

import { api } from "../services/api";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";

const signInSchema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, { message: "Informe a Senha" }),
});

export function SingIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);
  const auth = useAuth();

  async function signIn(_prevState: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data)
    } catch (error) {
      if (error instanceof ZodError)
        return { message: error.issues[0].message };

      if (error instanceof AxiosError)
        return { message: error.response?.data.message };

      return alert("Não foi possível fazer o login");
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="Seu Email"
        name="email"
      />
      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        name="password"
      />

      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>
      <Button isLoading={isLoading} type="submit">
        Entrar
      </Button>
      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:to-gray-800 hover:underline transition ease-linear"
      >
        Criar Conta
      </a>
    </form>
  );
}
