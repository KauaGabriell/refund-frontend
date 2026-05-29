import { useState } from "react";
import { Input } from "../components/Input";
import searchSvg from "../assets/search.svg";
import { Button } from "../components/Button";
import { CATEGORIES } from "../utils/categories";
import { Pagination } from "../components/Pagination";
import { RefundItem, type RefundItemProps } from "../components/RefundItem";
import { formatCurrency } from "../utils/formatCurrency";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Peixe",
  category: "Transport",
  amount: formatCurrency(55.23),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPages] = useState(10);
  const [refunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

  function fetchRefunds(e: React.SubmitEvent) {
    e.preventDefault();
    console.log(name);
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPages) return prevPage + 1;

      if (action === "previous" && prevPage > 1) return prevPage - 1;

      return prevPage;
    });
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-2 border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar por nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Icone de Lupa" />
        </Button>
      </form>
      <div className="my-6 flex flex-col gap-4 max-h-80 overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>
      <Pagination
        onPrevious={() => handlePagination("previous")}
        onNext={() => handlePagination("next")}
        current={page}
        total={totalOfPages}
      />
    </div>
  );
}
