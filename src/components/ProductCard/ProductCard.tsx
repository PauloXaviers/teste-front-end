import "./ProductCard.scss";
import { type Product } from "../../types/products";
import Button from "../Button/Button";
import { removeLastWord, getDiscountedPrice, formatPrice } from "../../utils/product-formatters";

interface ProductProps {
  product: Product;
  onBuy: (product: Product) => void;
}

const ProductCard = ({ product, onBuy }: ProductProps) => {
  const discountedPrice = getDiscountedPrice(product.price, 3.67);

  return (
    <article className="product-card">
      <img
        className="product-card-image"
        src={product.photo}
        alt={`Imagem ${product.productName}`}
        loading="lazy"
      />

      <h3 className="product-card-description">{removeLastWord(product.descriptionShort)}</h3>

      <p className="product-card-original-price">
        <s>{formatPrice(product.price)}</s>
      </p>
      <p className="product-card-current-price">{formatPrice(discountedPrice)}</p>
      <p className="product-card-installment">ou 2x {formatPrice(discountedPrice / 2)} sem juros</p>
      <p className="product-card-shipping">Frete grátis</p>

      <Button variant="blue" size="lg" onClick={() => onBuy(product)}>
        COMPRAR
      </Button>
    </article>
  );
};

export default ProductCard;
