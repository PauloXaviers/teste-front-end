import "./ProductsSection.scss";
import { useState, type ReactNode } from "react";
import { Section } from "../Section";
import ProductCard from "../ProductCard/ProductCard";
import { type Product } from "../../types/products";

const PRODUCTS_PER_PAGE = 4;

interface ProductsSectionProps {
  title: string;
  subtitle?: ReactNode;
  products: Product[];
  onBuy: (product: Product) => void;
}

const ProductsSection = ({ title, subtitle, products, onBuy }: ProductsSectionProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + PRODUCTS_PER_PAGE < products.length;

  const handlePreviousProducts = () => {
    if (!canGoBack) return;
    setStartIndex((previousIndex) => previousIndex - PRODUCTS_PER_PAGE);
  };

  const handleNextProducts = () => {
    if (!canGoForward) return;
    setStartIndex((previousIndex) => previousIndex + PRODUCTS_PER_PAGE);
  };

  return (
    <Section.Root className="section-products">
      <Section.Header>
        <Section.Title hasLine>{title}</Section.Title>
        {subtitle ? <Section.Subtitle as="div">{subtitle}</Section.Subtitle> : null}
      </Section.Header>

      <div className="section-products-body">
        <button
          type="button"
          className="products-navigation-button"
          onClick={handlePreviousProducts}
          disabled={!canGoBack}
          aria-label="Mostrar produtos anteriores"
        >
          {"<"}
        </button>

        <div className="container-products">
          <Section.Content>
            <div className="container-products-card">
              {visibleProducts.map((product) => (
                <ProductCard key={product.productName} product={product} onBuy={onBuy} />
              ))}
            </div>
          </Section.Content>
        </div>

        <button
          type="button"
          className="products-navigation-button"
          onClick={handleNextProducts}
          disabled={!canGoForward}
          aria-label="Mostrar próximos produtos"
        >
          {">"}
        </button>
      </div>
    </Section.Root>
  );
};

export default ProductsSection;
