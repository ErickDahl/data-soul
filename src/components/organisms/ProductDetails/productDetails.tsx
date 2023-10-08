import { PriceRender } from "../../atoms/PriceRender/priceRender";
import { ProductReview } from "../../molecules/ProductReview/productReview";
import { Button } from "../../molecules/Button/button";
import { RenderLine } from "../../atoms/RenderLine/renderLine";
import { ProductDescription } from "../../atoms/ProductDescription/productDescription";
import AddToCartIcon from "../../../assets/svgs/ShoppingCartSimple.svg";
import styles from "./productDetails.module.scss";

type ProductDetailsProps = {
  productName: string;
  productPrice: number;
};

const ProductDetails = ({
  productName,
  productPrice,
}: ProductDetailsProps) => {
  return (
    <div className={styles.productDetails}>
      <h1 className={styles.productName}>{productName}</h1>
      <ProductReview starsNumber={4} reviewsNumber={10} />
      <div className={styles.priceContainer}>
        <PriceRender isListPrice value={productPrice + productPrice * 0.2} />
        <PriceRender value={productPrice} />
      </div>
      <Button
        buttonClassName={styles.buyButton}
        icon={AddToCartIcon}
        textContent="ADICIONAR AO CARRINHO"
      />
      <RenderLine />
      <ProductDescription
        customStyle={{ marginTop: "32px" }}
        productDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla sapien eros, ac vehicula est imperdiet vel. Vestibulum non vehicula magna. Fusce eget vestibulum sapien. Integer maximus ligula a ipsum iaculis, a venenatis justo fermentum. Donec accumsan odio eget velit pharetra, ac malesuada magna pulvinar. Maecenas molestie neque eget metus lacinia, nec sollicitudin mauris dapibus. Pellentesque vulputate orci nunc, vel egestas lectus tincidunt vitae. Vivamus maximus urna vitae ultricies fermentum."
        }
      />
    </div>
  );
};

export { ProductDetails };
