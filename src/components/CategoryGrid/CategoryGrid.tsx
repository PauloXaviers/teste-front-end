import "./CategoryGrid.scss";
import type { Category } from "../../types/category";

interface CategoryGridProps {
  category: Category[];
  activeCategoryId: string;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryGrid = ({
  category,
  activeCategoryId,
  onCategoryClick,
}: CategoryGridProps) => {
  return (
    <section className="container-category">
      {category.map((item) => (
        <div key={item.id} className="container-buttons">
          <button
            className={`button ${item.id === activeCategoryId ? "active" : ""}`}
            onClick={() => onCategoryClick(item.id)}
          >
            <img src={item.icon} alt={item.alt} />
          </button>
          <span className={`${item.id === activeCategoryId ? "active" : ""}`}>{item.label}</span>
        </div>
      ))}
    </section>
  );
};
export default CategoryGrid;
