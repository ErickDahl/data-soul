import styles from "./productPage.module.scss";
import { ProductDetails } from "../../components/organisms/ProductDetails/productDetails";
import { ResponsiveImg } from "../../components/atoms/ResponsiveImg/responsiveImg";
import { ProductShelf } from "../../components/organisms/ProductShelf/productShelf";
import { useProductContext } from "../../context/productContext";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { products, isLoading } = useProductContext();
  const { productId } = useParams();

  if (isLoading) return <p>Carregando...</p>;

  const produtIdNumber = productId ? parseInt(productId, 10) : undefined;
  const productToShow = products.find(
    (product) => product.id === produtIdNumber
  );
  const displayProduct = productToShow ?? products[0];

  return (
    <div className={styles.productPageContainer}>
      <div className={styles.product}>
        <ResponsiveImg src={displayProduct.image} maxWidth="358px" />
        <ProductDetails {...displayProduct} />
      </div>

      <div>
        <h2 className={styles.recommendedProductsTitle}>
          PRODUTOS RECOMENDADOS
        </h2>
        <ProductShelf products={products} />
      </div>
    </div>
  );
};

export { ProductPage };
