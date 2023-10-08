import styles from "./priceRender.module.scss";

type PriceRenderProps = {
  value: number;
  isListPrice?: boolean;
};

const PriceRender = ({ value, isListPrice = false }: PriceRenderProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  const priceClassName = isListPrice ? styles.listPrice : styles.price;

  return <span className={priceClassName}>{formattedPrice}</span>;
};

export { PriceRender };
