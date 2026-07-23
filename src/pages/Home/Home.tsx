import "./Home.scss";
import { Banner } from "../../components/HeroBanner";
import Button from "../../components/Button/Button";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { categories, categoryTabs } from "../../data/categories";
import { useProducts } from "../../hooks/useProducts";
import { Section } from "../../components/Section";
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs";

const Home = () => {
  const { activeCategoryId, activeTabId, selectCategory, selectTab } = useProducts();

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
        onCategoryClick={selectCategory}
      />

      <Section.Root className="section-products">
        <Section.Header>
          <Section.Title hasLine>Produtos relacionados</Section.Title>
          <Section.Subtitle as="div">
            <CategoryTabs
              onTabSelect={selectTab}
              activeTabId={activeTabId}
              categoryTabs={categoryTabs}
            />
          </Section.Subtitle>
        </Section.Header>
      </Section.Root>
    </main>
  );
};
export default Home;
