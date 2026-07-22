import "./HeroBanner.scss"

interface HeroBannerProps {
  className?: string;
  children: React.ReactNode;
}

const HeroBanner = ({ className, children }: HeroBannerProps) => {
  return <section className={`hero-banner ${className || ""}`}>{children}</section>;
};

export default HeroBanner;
