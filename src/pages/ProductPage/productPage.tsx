import styles from "./productPage.module.scss";
import { ProductDetails } from "../../components/organisms/ProductDetails/productDetails";
import { ResponsiveImg } from "../../components/atoms/ResponsiveImg/responsiveImg";
import ProductImage from "../../assets/imgs/productImage.png";

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <ResponsiveImg src={ProductImage} maxWidth="358px" />
      <ProductDetails productTitle={"Título do Produto"} productPrice={100} />
    </div>
  );
};

export { ProductPage };
