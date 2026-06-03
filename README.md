<p align="center">
  <img src="./src/assets/logo.svg" alt="Refund" width="160" />
</p>

# Refund Frontend

Frontend do sistema **Refund**, uma aplicação para solicitação e análise de reembolsos. Este projeto consome a API [`refund-api`](https://github.com/KauaGabriell/refund-api), também disponível no GitHub.

> [!NOTE]
> Este foi um projeto de estudo da Rocketseat. Alguns conceitos foram bem difíceis no início, principalmente autenticação, contexto, rotas protegidas, integração com API, upload de arquivos e validações. Com prática, leitura e repetição, consegui entender melhor o fluxo e pretendo continuar praticando para dominar o conteúdo.

## Sobre

A aplicação possui fluxos para dois perfis:

- **Employee**: cria solicitações de reembolso, envia comprovantes e acompanha confirmação.
- **Manager**: lista solicitações, pesquisa reembolsos, pagina resultados e visualiza detalhes.

O frontend já está configurado para se comunicar com a API em:

```txt
http://localhost:1111
```

Configuração atual em [`src/services/api.ts`](./src/services/api.ts).

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- Zod

## Funcionalidades

- Login com persistência de sessão
- Controle de rotas por perfil (`employee` e `manager`)
- Cadastro de usuário
- Criação de solicitação de reembolso
- Upload de comprovante
- Listagem paginada de reembolsos
- Busca por nome
- Visualização de detalhes do reembolso
- Logout

## Projeto relacionado

Este frontend depende da API:

- [refund-api](https://github.com/KauaGabriell/refund-api)

> [!IMPORTANT]
> Execute a API antes do frontend. O frontend já está apontando para `http://localhost:1111`, então os dois projetos funcionam juntos quando a API está rodando nessa porta.

## Requisitos

- Node.js
- npm
- Docker e Docker Compose para executar o banco usado pela API
- API `refund-api` configurada e rodando

## Como executar os dois projetos

### 1. Clone os repositórios

```bash
git clone https://github.com/KauaGabriell/refund-api.git
git clone https://github.com/KauaGabriell/refund-frontend.git
```

### 2. Execute a API

Entre na pasta da API:

```bash
cd refund-api
```

Instale as dependências:

```bash
npm install
```

Configure o `.env` com base no `.env.example`.

Suba o banco:

```bash
docker compose up -d
```

Rode as migrations:

```bash
npx prisma migrate dev
```

Gere o Prisma Client:

```bash
npx prisma generate
```

Inicie a API:

```bash
npm run dev
```

A API deve ficar em:

```txt
http://localhost:1111
```

### 3. Execute o frontend

Em outro terminal, entre na pasta do frontend:

```bash
cd refund-frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

O Vite mostrará a URL local, normalmente:

```txt
http://localhost:5173
```

## Scripts

```bash
npm run dev
```

Executa o frontend em modo desenvolvimento.

```bash
npm run build
```

Gera a versão de produção.

```bash
npm run preview
```

Executa o preview da build.

## Estrutura principal

```txt
src/
  components/   Componentes reutilizáveis
  contexts/     Contexto de autenticação
  dtos/         Tipagens das respostas da API
  hooks/        Hooks reutilizáveis
  pages/        Telas da aplicação
  routes/       Rotas por perfil
  services/     Configuração do Axios
  utils/        Helpers e dados auxiliares
```

## Observações

Este projeto ainda é focado em estudo. A ideia é evoluir a implementação com mais prática, melhorar detalhes de UI, fortalecer tipagens e continuar refinando a integração com a API.
