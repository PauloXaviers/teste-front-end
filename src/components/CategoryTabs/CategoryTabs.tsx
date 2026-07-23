import "./CategoryTabs.scss";
import { type CategoryTab } from "../../types/category";

interface CategoryTabsProps {
  categoryTabs: CategoryTab[];
  onTabSelect: (activeTabId: string) => void;
  activeTabId: string;
}

const CategoryTabs = ({ categoryTabs, onTabSelect, activeTabId }: CategoryTabsProps) => {
  return (
    <div className="category-tabs">
      {categoryTabs.map((item) => (
        <button
          key={item.id}
          className={`button-tab ${item.id === activeTabId && "active" || ""}`}
          onClick={() => onTabSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
