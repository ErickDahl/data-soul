import { ReactNode } from "react";
import { Button } from "../Button/button";
import IconClose from "../../../assets/svgs/icon-close.svg";
import styles from "./SideBar.module.scss";

type SideBarProps = {
  children: ReactNode;
  isOpen: boolean;
  position?: "left" | "right";
  onClose: () => void;
  overlay?: boolean;
};

const SideBar = ({
  children,
  isOpen,
  position = "right",
  overlay = false,
  onClose = () => {},
}: SideBarProps) => {
  const initialStyle =
    position === "left" ? { left: "-50%" } : { right: "-50%" };

  const iconStyle = position === "left" ? { left: "102%" } : { right: "9%" };

  let sidebarStyle;

  if (isOpen) {
    sidebarStyle = position === "left" ? { left: 0 } : { right: 0 };
  } else {
    sidebarStyle = initialStyle;
  }

  const overlayStyle = isOpen ? { display: "block" } : { display: "none" };

  return (
    <>
      {overlay && (
        <div
          className={styles.overlay}
          onClick={onClose}
          style={overlayStyle}
        ></div>
      )}

      <div className={styles.sideBar} style={sidebarStyle}>
        <Button
          className={styles.closeButton}
          icon={IconClose}
          onClick={onClose}
          style={iconStyle}
        />
        <div className={styles.sideBarContent}>{children}</div>
      </div>
    </>
  );
};

export { SideBar };
