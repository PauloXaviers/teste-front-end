import "./Section.scss";
import { type SectionProps } from "../../types/section";

const SectionTitle = ({
  as: Component = "h2",
  children,
  className = "section-title",
  hasLine = false,
}: SectionProps & { hasLine?: boolean }) => {
  return <Component className={`${className} ${hasLine && "has-line"}`}>{children}</Component>;
};

export default SectionTitle;
