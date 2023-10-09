import { Button } from "../../../molecules/Button/button";
import styles from "./emptyMinicar.module.scss";

type EmptyMinicartProps = {
  onClick: () => void;
};

const EmptyMinicart = ({ onClick }: EmptyMinicartProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Seu carrinho está vazio</span>
      <Button
        onClick={onClick}
        className={styles.button}
        textContent="CONTINUAR COMPRANDO"
      />
    </div>
  );
};

export { EmptyMinicart };
