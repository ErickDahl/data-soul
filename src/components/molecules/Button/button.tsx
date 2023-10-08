import { ResponsiveImg } from "../../atoms/ResponsiveImg/responsiveImg";
import styles from "./button.module.scss";

type ButtonProps = {
  textContent: string;
  buttonClassName?: string;
  icon?: string;
  maxIconWidth?: string;
};

const Button = ({
  textContent,
  icon,
  buttonClassName = styles.button,
  maxIconWidth = "24px",
}: ButtonProps) => {
  return (
    <button className={buttonClassName}>
      {!!icon && (
        <ResponsiveImg src={icon} alt="button Icon" maxWidth={maxIconWidth} />
      )}
      <span>{textContent}</span>
    </button>
  );
};

export { Button };
