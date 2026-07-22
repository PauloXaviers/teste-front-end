import shield from "../../assets/safety-icons/shield-check.png";
import truck from "../../assets/safety-icons/truck.png";
import creditCard from "../../assets/safety-icons/credit-card.png";
import crownSimple from "../../assets/header-icons/crown-simple.png";
import box from "../../assets/header-icons/box.png";
import heart from "../../assets/header-icons/heart.png";
import shoppingCard from "../../assets/header-icons/shopping-card.png";
import userCircle from "../../assets/header-icons/user-circle.png";

interface TopBarBenefit {
  id: string;
  label: string;
  subtext: string;
  icon: string;
}

export const topBarBenefits: TopBarBenefit[] = [
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

interface ActionIcon {
  id: string;
  img: string;
  label: string;
}

export const actionIcons: ActionIcon[] = [
  {
    id: "box",
    img: box,
    label: "Icone de caixa",
  },
  {
    id: "heart",
    img: heart,
    label: "Icone de coração",
  },
  {
    id: "user",
    img: userCircle,
    label: "Icone de usuário",
  },
  {
    id: "shopping",
    img: shoppingCard,
    label: "Icone de carrinho de compras",
  },
];

interface NavigationItem {
  label: string;
  link: string;
  img?: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Todas Categorias", link: "#" },
  { label: "Supermercado", link: "#" },
  { label: "Livros", link: "#" },
  { label: "Moda", link: "#" },
  { label: "Lançamentos", link: "#" },
  { label: "Ofertas do Dia", link: "#" },
  { label: "Assinatura", link: "#", img: crownSimple },
];
