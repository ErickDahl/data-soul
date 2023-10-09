import StarIcon from "../../../assets/svgs/star.svg";
import StarIconEmpty from "../../../assets/svgs/starEmpty.svg";
import { ResponsiveImg } from "../../atoms/ResponsiveImg/responsiveImg";
import { v4 as uuidv4 } from "uuid";
import styles from "./productReview.module.scss";

type ProductReviewProps = {
  starsNumber: number;
  reviewsNumber: number;
};

const ProductReview = ({ starsNumber, reviewsNumber }: ProductReviewProps) => {
  const maxStars = 5;
  const limitedStarsNumber = Math.round(
    Math.min(Math.max(starsNumber, 0), maxStars)
  );
  const emptyStarsNumber = maxStars - limitedStarsNumber;

  return (
    <div className={styles.reviewContainer}>
      <span className={styles.starsNumberText}>
        {limitedStarsNumber} de {maxStars}
      </span>
      <div className={styles.starsContainer}>
        {[...Array(limitedStarsNumber)].map(() => {
          return (
            <ResponsiveImg key={uuidv4()} src={StarIcon} maxWidth="18px" />
          );
        })}
        {emptyStarsNumber > 0 &&
          [...Array(emptyStarsNumber)].map(() => {
            return (
              <ResponsiveImg
                key={uuidv4()}
                src={StarIconEmpty}
                maxWidth="18px"
              />
            );
          })}
      </div>
      <span className={styles.reviewsNumberText}>({reviewsNumber})</span>
    </div>
  );
};

const validateStarsNumber = (props: ProductReviewProps) => {
  if (props.starsNumber < 0 || props.starsNumber > 5) {
    return new Error("starsNumber must be between 0 and 5");
  }
  return null;
};

ProductReview.propTypes = {
  starsNumber: validateStarsNumber,
};

export { ProductReview };
