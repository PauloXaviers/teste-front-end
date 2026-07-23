import "./Home.scss";
import { Banner } from "../../components/HeroBanner";
import Button from "../../components/Button/Button";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { categories } from "../../data/categories";
import { useState } from "react";

const Home = () => {  
  const [activeCategoryId, setActiveCategoryId] = useState<string>( categories[0]?.id || "");

  const handleCategoryClick = (categoryId: string) => setActiveCategoryId(categoryId);
  
  return (
    <main className="home">
      <Banner.Root className="container-banner">
        <div className="banner-wrapper">
          <Banner.Title as="h1" className="banner-title">
            Venha conhecer nossas promoções
          </Banner.Title>
          <Banner.Subtitle as="p" className="banner-subtitle">
            <span>50% Off</span> nos produtos
          </Banner.Subtitle>
          <Button type="button" variant="yellow" size="md">
            Ver produto
          </Button>
        </div>
      </Banner.Root>

      <CategoryGrid
        category={categories}
        activeCategoryId={activeCategoryId}
        onCategoryClick={handleCategoryClick}
      />
    </main>
  );
};
export default Home;
