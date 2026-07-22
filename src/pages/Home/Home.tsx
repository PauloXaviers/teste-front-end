import "./Home.scss";
import { Banner } from "../../components/HeroBanner";

const Home = () => {
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
        </div>
      </Banner.Root>
    </main>
  );
};
export default Home;
