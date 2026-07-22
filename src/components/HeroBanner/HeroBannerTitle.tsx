import type { ElementType, ReactNode } from "react";
import "./HeroBanner.scss";

interface HeroBannerTitleProps {
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

const HeroBannerTitle = ({
  children,
  className,
  as: Component = "h1",
}: HeroBannerTitleProps) => {
  return <Component className={`hero-title ${className || ""}`}>{children}</Component>;
};

export default HeroBannerTitle;
