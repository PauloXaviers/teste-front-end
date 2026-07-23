import "./Section.scss"
import { type SectionProps } from "../../types/section";

const SectionSubtitle = ({
  children,
  className = "section-subtitle",
  as: Component = "p",
}: SectionProps) => {
  return <Component className={className}>{children}</Component>;
};

export default SectionSubtitle;
