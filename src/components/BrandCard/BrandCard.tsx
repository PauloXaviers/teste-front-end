import "./BrandCard.scss";
import type { Brand } from "../../types/brand";

interface BrandCardProps {
  brand: Brand;
  onClick?: (brandId: string) => void;
}

const BrandCard = ({ brand, onClick }: BrandCardProps) => {
  return (
    <button
      type="button"
      className="brand-card"
      onClick={() => onClick?.(brand.id)}
      aria-label={`Navegar para a marca ${brand.name}`}
    >
      <img className="brand-card-logo" src={brand.logo} alt={brand.alt} loading="lazy" />
    </button>
  );
};

export default BrandCard;
