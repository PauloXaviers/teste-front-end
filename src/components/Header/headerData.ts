import shield from "../../assets/safety-icons/shield-check.png";
import truck from "../../assets/safety-icons/truck.png";
import creditCard from "../../assets/safety-icons/credit-card.png";
import crownSimple from "../../assets/header-icons/crown-simple.png";

export const topBarBenefits = [
  {
    id: "compra",
    label: "Compra",
    subtext: "100% segura",
    icon: shield,
  },
  {
    id: "frete",
    label: "Frete grátis",
    subtext: "acima de R$ 200",
    icon: truck,
  },
  {
    id: "parcela",
    label: "Parcele",
    subtext: "suas compras",
    icon: creditCard,
  },
];

export const navigationItems = [
  { label: "Todas Categorias", link: "#" },
  { label: "Supermercado", link: "#" },
  { label: "Livros", link: "#" },
  { label: "Moda", link: "#" },
  { label: "Lançamentos", link: "#" },
  { label: "Ofertas do Dia", link: "#" },
  { label: "Assinatura", link: "#", img: crownSimple },
];
