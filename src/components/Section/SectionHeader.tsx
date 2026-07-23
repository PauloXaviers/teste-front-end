import "./Section.scss"
import { type SectionProps } from "../../types/section";

const SectionHeader = ({ children, className = "section-header" }: SectionProps) => {
  return <header className={className}>{children}</header>;
};

export default SectionHeader;
