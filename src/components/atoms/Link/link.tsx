import styles from "./link.module.scss";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  href: string;
  textContent?: string;
  className?: string;
  children?: React.ReactNode;
};

const Link = ({
  href,
  textContent = "",
  className = styles.link,
  children,
}: LinkProps) => {
  return (
    <RouterLink className={className} to={href}>
      {textContent !== "" && textContent}
      {children}
    </RouterLink>
  );
};

export { Link };
