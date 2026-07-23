import type { Product } from "../types/products";

interface GetProductsResponse {
  success: true;
  products: Product[];
}

export const getProducts = async (): Promise<GetProductsResponse> => {
  try {
    const response = await fetch("/api/produtos.json", {
      signal: AbortSignal.timeout(7000),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const data: GetProductsResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      throw new Error("A requisição demorou muito e foi cancelada.", {
        cause: error,
      });
    }

    throw new Error("Erro ao obter produtos.", {
      cause: error,
    });
  }
};
