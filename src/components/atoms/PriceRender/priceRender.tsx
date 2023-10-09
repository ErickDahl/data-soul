import styles from "./priceRender.module.scss";

type PriceRenderProps = {
  value: number;
  isListPrice?: boolean;
  className?: string;
};

const PriceRender = ({
  value,
  isListPrice = false,
  className,
}: PriceRenderProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  const priceClassName = isListPrice ? styles.listPrice : styles.price;

  const combinedClassName = `${priceClassName} ${className ?? ""}`;

  return <span className={combinedClassName}>{formattedPrice}</span>;
};

export { PriceRender };
