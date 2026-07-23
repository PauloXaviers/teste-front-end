import "./Section.scss";
import { type SectionProps } from "../../types/section";

const SectionContent = ({
  children,
  className = "section-content",
}: SectionProps) => {
  return <div className={className}>{children}</div>;
};

export default SectionContent;
