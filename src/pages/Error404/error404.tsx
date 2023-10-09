import styles from "./error404.module.scss";

const Error404 = () => {
  return (
    <div className={styles.errorContainer}>
      <span className={styles.errorMessage404}>
        Parece que a página que você procura não existe
      </span>
    </div>
  );
};

export { Error404 };
