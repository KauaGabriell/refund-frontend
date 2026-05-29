export function formatCurrency(value: number) {
  const currency = Intl.NumberFormat("pt-br", {
    currency: "BRL",
  });
  return currency.format(value).replace("R$","");
}
