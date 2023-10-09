import { PriceRender } from "../../atoms/PriceRender/priceRender";
import { ProductReview } from "../../molecules/ProductReview/productReview";
import { Button } from "../../molecules/Button/button";
import { RenderLine } from "../../atoms/RenderLine/renderLine";
import { ProductDescription } from "../../atoms/ProductDescription/productDescription";
import AddToCartIcon from "../../../assets/svgs/ShoppingCartSimple.svg";
import styles from "./productDetails.module.scss";
import { Product } from "../../../context/productContext";
import { useMinicartContext } from "../../../context/minicarContext";

const ProductDetails = (product: Product) => {
  const { AddToCart } = useMinicartContext();

  const handleAddToCart = () => {
    const productToAdd = {
      item: product,
      quantity: 1,
    };

    AddToCart(productToAdd);
  };

  return (
    <div className={styles.productDetails}>
      <h1 className={styles.productName}>{product.title}</h1>
      <ProductReview
        starsNumber={product.rating.rate}
        reviewsNumber={product.rating.count}
      />
      <div className={styles.priceContainer}>
        <PriceRender isListPrice value={product.price + product.price * 0.2} />
        <PriceRender value={product.price} />
      </div>
      <Button
        className={styles.buyButton}
        icon={AddToCartIcon}
        textContent="ADICIONAR AO CARRINHO"
        onClick={handleAddToCart}
      />
      <RenderLine />
      <ProductDescription
        customStyle={{ marginTop: "32px" }}
        productDescription={product.description}
      />
    </div>
  );
};

export { ProductDetails };
