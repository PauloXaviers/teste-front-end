import "./Section.scss"
import { type SectionProps } from "../../types/section";

const SectionRoot = ({ children, className = "" }: SectionProps) => {
  return <section className={`section-root ${className}`}>{children}</section>;
};

export default SectionRoot;
