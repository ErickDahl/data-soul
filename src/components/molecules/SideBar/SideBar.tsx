import { ReactNode } from "react";
import { Button } from "../Button/button";
import IconClose from "../../../assets/svgs/icon-close.svg";
import styles from "./SideBar.module.scss";
import { useIsMobile } from "../../../utils/isMobile";

type SideBarProps = {
  children: ReactNode;
  isOpen: boolean;
  position?: "left" | "right"; // Keep the position prop
  onClose: () => void;
  overlay?: boolean;
};

const SideBar = ({
  children,
  isOpen,
  position = "right", // Default to "right" position
  overlay = false,
  onClose = () => {},
}: SideBarProps) => {
  const isMobile = useIsMobile();

  // Calculate the icon position based on both position and isMobile
  let iconStyle = {};

  if (position === "right") {
    iconStyle = isMobile ? { right: "6%" } : { right: "9%" };
  } else if (position === "left") {
    iconStyle = isMobile ? { left: "101%" } : { left: "102%" };
  }

  const sidebarStyle = isOpen ? { [position]: 0 } : { [position]: "-100%" };
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
