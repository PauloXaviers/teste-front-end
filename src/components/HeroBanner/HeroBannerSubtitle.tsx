import type { ElementType, ReactNode } from "react";
import "./HeroBanner.scss";

interface HeroBannerSubtitleProps {
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

const HeroBannerSubtitle = ({
  children,
  className,
  as: Component = "h2",
}: HeroBannerSubtitleProps) => {
  return <Component className={`hero-subtitle ${className || ""}`}>{children}</Component>;
};

export default HeroBannerSubtitle;
