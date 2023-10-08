import styles from "./responsive.module.scss";

type ResponsiveImgProps = {
  src: string;
  maxWidth: string;
  alt?: string;
  className?: string;
};

const ResponsiveImg = ({
  src,
  maxWidth,
  alt = "img",
  className = styles.defaultImgClass,
}: ResponsiveImgProps) => {
  const imgStyle = {
    maxWidth,
    width: "100%",
    height: "auto",
  };

  return <img src={src} alt={alt} style={imgStyle} className={className} />;
};

export { ResponsiveImg };
