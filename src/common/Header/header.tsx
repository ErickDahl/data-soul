import storeLogo from "../../assets/imgs/logo.png";
import MinicartIcon from "../../assets/svgs/minicartIcon.svg";
import { Minicart } from "../../components/organisms/Minicart/minicart";
import { ResponsiveImg } from "../../components/atoms/ResponsiveImg/responsiveImg";
import { MenuItemList } from "../../components/molecules/MenuItemList/menuItemList";
import { Button } from "../../components/molecules/Button/button";
import { Link } from "../../components/atoms/Link/link";
import { useMinicartContext } from "../../context/minicarContext";
import styles from "./header.module.scss";

const Header = () => {
  const { ToggleMinicart } = useMinicartContext();

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
      <Link href={"/"}>
        <ResponsiveImg src={storeLogo} maxWidth="112px" />
      </Link>
      <MenuItemList items={menuItensList} />
      <Button
        className={styles.minicartButton}
        textContent="CART"
        icon={MinicartIcon}
        onClick={ToggleMinicart}
      />
      <Minicart />
    </header>
  );
};

export { Header };
