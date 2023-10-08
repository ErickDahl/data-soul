import storeLogo from "../../assets/imgs/logo.png";
import MinicartIcon from "../../assets/svgs/minicartIcon.svg";
import { ResponsiveImg } from "../../components/atoms/ResponsiveImg/responsiveImg";
import { MenuItemList } from "../../components/molecules/MenuItemList/menuItemList";
import { Button } from "../../components/molecules/Button/button";
import styles from "./header.module.scss";

const Header = () => {
  const menuItensList = [
    { textContent: "MENU ITEM 01", href: "/" },
    { textContent: "MENU ITEM 02", href: "/" },
    { textContent: "MENU ITEM 03", href: "/" },
    { textContent: "MENU ITEM 04", href: "/" },
    { textContent: "MENU ITEM 05", href: "/" },
    { textContent: "MENU ITEM 06", href: "/" },
  ];

  return (
    <header className={styles.headerContainer}>
      <ResponsiveImg src={storeLogo} maxWidth="112px" />
      <MenuItemList items={menuItensList} />
      <Button textContent="CART" icon={MinicartIcon} />
    </header>
  );
};

export { Header };
