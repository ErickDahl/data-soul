import styles from "./productDescription.module.scss";

type ProductDescriptionProps = {
  productDescription: string;
  customStyle?: React.CSSProperties;
};

const ProductDescription = ({
  productDescription,
  customStyle = {},
}: ProductDescriptionProps) => {
  return (
    <div className={styles.productDescriptionContainer} style={customStyle}>
      <span className={styles.productDescriptionTitle}>DESCRIÇÃO</span>
      <span className={styles.productDescriptionText}>
        {productDescription}
      </span>
    </div>
  );
};

export { ProductDescription };
