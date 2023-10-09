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
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    981: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      className={styles.productShelf}
      loop={true}
      breakpoints={breakpoints}
    >
      {products.map((product) => (
        <SwiperSlide key={uuidv4()}>
          <ProductItemShelf {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { ProductShelf };
