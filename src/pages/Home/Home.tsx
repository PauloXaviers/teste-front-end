import "./Home.scss";
import { Banner } from "../../components/HeroBanner";
import Button from "../../components/Button/Button";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { categories, categoryTabs } from "../../data/categories";
import { useProducts } from "../../hooks/useProducts";
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const Home = () => {
  const { activeCategoryId, activeTabId, selectCategory, selectTab, products, selectProduct} = useProducts();

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

      <ProductsSection
        title="Produtos relacionados"
        subtitle={
          <CategoryTabs
            onTabSelect={selectTab}
            activeTabId={activeTabId}
            categoryTabs={categoryTabs}
          />
        }
        products={products}
        onBuy={selectProduct}
      />

      <ProductsSection
        title="Produtos relacionados"
        subtitle="Ver produtos"
        products={products}
        onBuy={selectProduct}
      />

      <ProductsSection
        title="Produtos relacionados"
        subtitle="Ver produtos"
        products={products}
        onBuy={selectProduct}
      />
    </main>
  );
};
export default Home;
