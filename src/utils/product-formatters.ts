export const getDiscountedPrice = (price: number, percentage: number) => {
  return price * (1 - percentage / 100);
};

export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const removeLastWord = (text: string) => {
  return text.trim().split(" ").slice(0, -1).join(" ");
};
