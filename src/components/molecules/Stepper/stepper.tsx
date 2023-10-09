import { Button } from "../Button/button";
import UpArrow from "../../../assets/svgs/upArrow.svg";
import DownArrow from "../../../assets/svgs/downArrow.svg";
import { useMinicartContext } from "../../../context/minicarContext";
import styles from "./stepper.module.scss";

type StepperProps = {
  id: number;
  quantity: number;
};

const Stepper = ({ id, quantity }: StepperProps) => {
  const { IncrementItemQuantity, DecrementItemQuantity } = useMinicartContext();

  const prefix = quantity < 10 ? "0" : "";

  return (
    <div className={styles.stepperContainer}>
      <span>{prefix}{quantity}</span>
      <div>
        <Button icon={UpArrow} onClick={() => IncrementItemQuantity(id)} />
        <Button icon={DownArrow} onClick={() => DecrementItemQuantity(id)} />
      </div>
    </div>
  );
};

export { Stepper };
