import styles from "./link.module.scss";

type LinkProps = {
  href: string;
  textContent: string;
  className?: string;
};

const Link = ({ href, textContent, className = styles.link }: LinkProps) => {
  return (
    <a className={className} href={href}>
      {textContent}
    </a>
  );
};

export { Link };
