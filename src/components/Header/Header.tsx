import "./Header.scss";
import { topBarBenefits, navigationItems, actionIcons } from "./headerData";
import logo from "../../assets/econverse-logo.png";
import SearchBar from "../Search/SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">

        <div className="header-top">
          {topBarBenefits.map((benefit) => (
            <div key={benefit.id}>
              <img src={benefit.icon} alt={`Icone de ${benefit.id}`} />
              <p className={`${benefit.id !== "compra" && "highlight"}`}>
                {benefit.label}
              </p>
              <span className={`${benefit.id === "compra" && "highlight"} `}>
                {benefit.subtext}
              </span>
            </div>
          ))}
        </div>

        <div className="main-header">
          <img src={logo} alt="Imagem da empresa" />

          <SearchBar placeholder="O que você está buscando?" className="search-field" />

          <div className="container-actions">
            {actionIcons.map((item) => (
              <button key={item.id} type="button" aria-label={item.label}>
                <img src={item.img} aria-hidden="true" />
              </button>
            ))}
          </div>

        </div>
        <div className="container-navbar">

          <nav className="navbar">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className={`${item.label === "Ofertas do Dia" && "highlight"}`}
              >
                {item.img && <img src={item.img} alt="" aria-hidden="true" />}
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};
export default Header;
