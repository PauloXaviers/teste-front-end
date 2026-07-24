import "./Home.scss";
import { Banner } from "../../components/HeroBanner";
import Button from "../../components/Button/Button";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { categories, categoryTabs } from "../../data/categories";
import { useProducts } from "../../hooks/useProducts";
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import PartnerBanner from "../../components/PartnerBanner/PartnerBanner";
import partnerBannerImg from "../../assets/partner-banner.png";
import { Section } from "../../components/Section";
import { brands } from "../../data/brands";
import BrandCard from "../../components/BrandCard/BrandCard";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  const { activeCategoryId, activeTabId, selectCategory, selectTab, products, selectProduct } =
    useProducts();

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

      <Section.Root className="partner-brand-section">
        <Section.Content>
          <PartnerBanner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            buttonText="CONFIRA"
            backgroundImg={partnerBannerImg}
          />
          <PartnerBanner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            buttonText="CONFIRA"
            backgroundImg={partnerBannerImg}
          />
        </Section.Content>
      </Section.Root>

      <ProductsSection
        title="Produtos relacionados"
        subtitle="Ver produtos"
        products={products}
        onBuy={selectProduct}
      />

      <Section.Root className="partner-brand-section">
        <Section.Content>
          <PartnerBanner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            buttonText="CONFIRA"
            backgroundImg={partnerBannerImg}
          />
          <PartnerBanner
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            buttonText="CONFIRA"
            backgroundImg={partnerBannerImg}
          />
        </Section.Content>
      </Section.Root>

      <Section.Root className="brands-section">
        <Section.Header>
          <Section.Title>Navegue por marcas</Section.Title>
        </Section.Header>

        <Section.Content>
          <div className="brands-section-list">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </Section.Content>
      </Section.Root>

      <ProductsSection
        title="Produtos relacionados"
        subtitle="Ver produtos"
        products={products}
        onBuy={selectProduct}
      />
      <Newsletter
        title="Inscreva-se na nossa newsletter"
        subtitle="Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse."
      />
    </main>
  );
};
export default Home;
