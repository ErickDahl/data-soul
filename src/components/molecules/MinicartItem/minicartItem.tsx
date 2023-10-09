import { ResponsiveImg } from "../../atoms/ResponsiveImg/responsiveImg";
import { PriceRender } from "../../atoms/PriceRender/priceRender";
import {
  MinicartItemType,
  useMinicartContext,
} from "../../../context/minicarContext";
import { Button } from "../Button/button";
import { Stepper } from "../Stepper/stepper";
import RemoveItemCart from "../../../assets/svgs/removeItemCart.svg";
import styles from "./minicartItem.module.scss";

const MinicartItem = ({
  product,
  className,
}: {
  product: MinicartItemType;
  className?: string;
}) => {
  const { RemoveItemFromCart } = useMinicartContext();

  return (
    <div className={`${styles.minicartItemContainer} ${className ?? ""}`}>
      <div className={styles.productInfo}>
        <div>
          <ResponsiveImg src={product.item.image} maxWidth={"40px"} />
        </div>
        <div className={styles.productInfoTextContainer}>
          <span className={styles.productName}>{product.item.title}</span>
          <div className={styles.priceContainer}>
            <PriceRender
              className={styles.listPrice}
              isListPrice
              value={product.item.price + product.item.price * 0.2}
            />
            <PriceRender className={styles.price} value={product.item.price} />
          </div>
        </div>
      </div>

      <div className={styles.editProduct}>
        <Button
          icon={RemoveItemCart}
          onClick={() => RemoveItemFromCart(product.item.id)}
        />
        <Stepper id={product.item.id} quantity={product.quantity} />
      </div>
    </div>
  );
};

export { MinicartItem };
