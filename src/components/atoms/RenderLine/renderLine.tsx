import styles from "./renderLine.module.scss";

type RenderLineProps = {
  lineColor?: string;
};

const RenderLine = ({ lineColor = "#dddddd" }: RenderLineProps) => {
  return (
    <div style={{ backgroundColor: lineColor }} className={styles.line}></div>
  );
};

export { RenderLine };
