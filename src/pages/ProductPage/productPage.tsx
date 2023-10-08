import styles from "./productPage.module.scss";
import { ProductDetails } from "../../components/organisms/ProductDetails/productDetails";
import { ResponsiveImg } from "../../components/atoms/ResponsiveImg/responsiveImg";
import { ProductShelf } from "../../components/molecules/ProductShelf/productShelf";
import ProductImage from "../../assets/imgs/productImage.png";

const ProductPage = () => {
  return (
    <div className={styles.productPageContainer}>
      <div className={styles.product}>
        <ResponsiveImg src={ProductImage} maxWidth="358px" />
        <ProductDetails productName={"Título do Produto"} productPrice={100} />
      </div>

      <div>
        <h2 className={styles.recommendedProductsTitle}>PRODUTOS RECOMENDADOS</h2>
        <ProductShelf
          productImage={ProductImage}
          productPrice={100}
          productName={"Título do Produto"}
        />
      </div>
    </div>
  );
};

export { ProductPage };
