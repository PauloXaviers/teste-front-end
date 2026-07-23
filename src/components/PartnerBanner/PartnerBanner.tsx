import type { CSSProperties } from "react";
import Button from "../Button/Button";
import "./PartnerBanner.scss";

interface PartnerBannerProps {
  title: string;
  description: string;
  backgroundImg: string;
  buttonAction?: () => void;
  buttonText: string;
}

const PartnerBanner = ({
  title,
  description,
  backgroundImg,
  buttonAction,
  buttonText,
}: PartnerBannerProps) => {
  const bannerStyle = {
    "--partner-banner-background-image": `url(${backgroundImg})`,
  } as CSSProperties;

  return (
    <div className="partner-banner" style={bannerStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button variant="yellow" size="xs" onClick={buttonAction}>
        {buttonText}
      </Button>
    </div>
  );
};

export default PartnerBanner;
