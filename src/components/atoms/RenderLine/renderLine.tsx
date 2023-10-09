import styles from "./renderLine.module.scss";

type RenderLineProps = {
  lineColor?: string;
  className?: string;
};

const RenderLine = ({
  lineColor = "#dddddd",
  className = styles.line,
}: RenderLineProps) => {
  return (
    <div style={{ backgroundColor: lineColor }} className={className}></div>
  );
};

export { RenderLine };
