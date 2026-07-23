import corridaIcon from "../assets/category-icons/corrida.png";
import cuidadosSaudeIcon from "../assets/category-icons/cuidados-de-saude.png";
import ferramentasIcon from "../assets/category-icons/ferramentas.png";
import tecnologiaIcon from "../assets/category-icons/tecnologia.png";
import bebidasIcon from "../assets/category-icons/whiskey.png";
import supermercadosIcon from "../assets/category-icons/supermercados.png";
import modaIcon from "../assets/category-icons/moda.png";
import type { Category, CategoryTab } from "../types/category";

export const categories: Category[] = [
  {
    id: "tecnologia",
    label: "Tecnologia",
    icon: tecnologiaIcon,
    alt: "Icone de um monitor para a categoria Tecnologia",
  },
  {
    id: "supermercado",
    label: "Supermercado",
    icon: supermercadosIcon,
    alt: "Icone de uma loja para a categoria Supermercado",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: bebidasIcon,
    alt: "Icone de uma garrafa para a categoria Bebidas",
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    icon: ferramentasIcon,
    alt: "Icone de ferramentas para a categoria Ferramentas",
  },
  {
    id: "saude",
    label: "Saúde",
    icon: cuidadosSaudeIcon,
    alt: "Icone de cuidado para a categoria Saude",
  },
  {
    id: "esportes",
    label: "Esportes e Fitness",
    icon: corridaIcon,
    alt: "Icone de exercicio para a categoria Esportes e Fitness",
  },
  {
    id: "moda",
    label: "Moda",
    icon: modaIcon,
    alt: "Icone de roupa para a categoria Moda",
  },
];

export const categoryTabs: CategoryTab[] = [
  {
    id: "celular",
    label: "Celular",
  },
  {
    id: "acessórios",
    label: "Acessórios",
  },
  {
    id: "tablets",
    label: "Tablets",
  },
  {
    id: "notebooks",
    label: "Notebooks",
  },
  {
    id: "tvs",
    label: "TVs",
  },
  {
    id: "todos",
    label: "Ver todos",
  },
];
