import { ResponsiveImg } from "../../atoms/ResponsiveImg/responsiveImg";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./button.module.scss";

type ButtonProps = {
  textContent?: string;
  className?: string;
  icon?: string;
  maxIconWidth?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  isLoading?: boolean;
};

const Button = ({
  textContent = "",
  icon,
  className = styles.button,
  isLoading = false,
  maxIconWidth = "24px",
  onClick = () => {},
  style = {},
}: ButtonProps) => {
  return (
    <button
      onClick={isLoading ? undefined : onClick}
      className={className}
      style={style}
    >
      {isLoading ? (
        <ClipLoader color={"#fff"} loading={isLoading} size={24} />
      ) : (
        <>
          {!!icon && (
            <ResponsiveImg
              src={icon}
              alt="button Icon"
              maxWidth={maxIconWidth}
            />
          )}
          <span>{textContent}</span>
        </>
      )}
    </button>
  );
};

export { Button };
