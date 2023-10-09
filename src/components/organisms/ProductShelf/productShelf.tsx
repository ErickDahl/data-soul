import { ProductItemShelf } from "../../molecules/ProductItemShelf/productItemShelf";
import { Product } from "../../../context/productContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import styles from "./productShelf.module.scss";
import "swiper/css";

type ProductShelfProps = {
  products: Product[];
};

const ProductShelf = ({ products }: ProductShelfProps) => {
  return (
    <Swiper className={styles.productShelf} spaceBetween={10} slidesPerView={4}>
      {products.map((product) => (
        <SwiperSlide key={uuidv4()}>
          <ProductItemShelf {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { ProductShelf };
