import { useState } from "react";
import storeLogo from "../../../assets/imgs/logo.png";
import MinicartIcon from "../../../assets/svgs/minicartIcon.svg";
import MenuMobile from "../../../assets/svgs/menuMobile.svg";
import { ResponsiveImg } from "../../../components/atoms/ResponsiveImg/responsiveImg";
import { Button } from "../../../components/molecules/Button/button";
import { Link } from "../../../components/atoms/Link/link";
import { Drawer } from "../../../components/organisms/Drawer/drawer";
import { HeaderMenuItem } from "../header";
import styles from "./headerMobile.module.scss";

type HeaderMobile = {
  ToggleMinicart: () => void;
  items: HeaderMenuItem[];
};

const HeaderMobile = ({ ToggleMinicart, items }: HeaderMobile) => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        className={styles.drawerButton}
        icon={MenuMobile}
        onClick={ToggleDrawer}
      />
      <Link href={"/"}>
        <ResponsiveImg src={storeLogo} maxWidth="90px" />
      </Link>
      <Button
        className={styles.minicartButton}
        icon={MinicartIcon}
        onClick={ToggleMinicart}
      />
      <Drawer items={items} isOpen={isOpen} onClose={() => ToggleDrawer()} />
    </>
  );
};

export { HeaderMobile };
