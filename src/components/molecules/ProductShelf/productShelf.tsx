import { ResponsiveImg } from "../../atoms/ResponsiveImg/responsiveImg";
import { PriceRender } from "../../atoms/PriceRender/priceRender";
import styles from "./productShef.module.scss";

type ProductShelfProps = {
  productImage: string;
  productPrice: number;
  productName: string;
};

const ProductShelf = ({
  productImage,
  productPrice,
  productName,
}: ProductShelfProps) => {
  return (
    <div className={styles.productShelf}>
      <ResponsiveImg src={productImage} maxWidth={"288px"} />
      <span className={styles.productName}>{productName}</span>
      <div className={styles.priceContainer}>
        <PriceRender isListPrice value={productPrice + productPrice * 0.2} />
        <PriceRender value={productPrice} />
      </div>
    </div>
  );
};

export { ProductShelf };
