import { ResponsiveImg } from "../../atoms/ResponsiveImg/responsiveImg";
import { PriceRender } from "../../atoms/PriceRender/priceRender";
import { Link } from "../../atoms/Link/link";
import styles from "./productItemShelf.module.scss";
import { Product } from "../../../context/productContext";

const ProductItemShelf = (product: Product) => {
  return (
    <Link href={`/product/${product.id}`} className={styles.productShelf}>
      <div className={styles.productImageWrapper}>
        <ResponsiveImg
          className={styles.productImage}
          src={product.image}
          maxWidth={"288px"}
        />
      </div>

      <span className={styles.productName}>{product.title}</span>
      <div className={styles.priceContainer}>
        <PriceRender isListPrice value={product.price + product.price * 0.2} />
        <PriceRender value={product.price} />
      </div>
    </Link>
  );
};

export { ProductItemShelf };
