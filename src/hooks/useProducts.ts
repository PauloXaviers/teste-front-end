import type { Product } from "../types/products";
import { useEffect, useState } from "react";
import { categories, categoryTabs } from "../data/categories";
import { getProducts } from "../api/getProducts";

export const useProducts = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0].id);
  const [activeTabId, setActiveTabId] = useState<string>(categoryTabs[0].id);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getProducts();
        setProducts(response.products);
      } catch (err) {
        setErrorMessage("Erro ao obter produtos, tente novamente");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const selectCategory = (categoryId: string) => setActiveCategoryId(categoryId);

  const selectTab = (tabId: string) => setActiveTabId(tabId);

  const selectProduct = (product: Product) => setSelectedProduct(product);

  return {
    activeCategoryId,
    activeTabId,
    products,
    isLoading,
    errorMessage,
    selectedProduct,
    selectCategory,
    selectTab,
    selectProduct,
  };
};
