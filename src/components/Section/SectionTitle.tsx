import "./Section.scss"
import { type SectionProps } from "../../types/section";

const SectionTitle = ({
  as: Component = "h2",
  children,
  className = "section-title",
}: SectionProps) => {
  return <Component className={className}><hr />{children}</Component>;
};

export default SectionTitle;
