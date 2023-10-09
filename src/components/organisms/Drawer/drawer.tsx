import { SideBar } from "../../molecules/SideBar/SideBar";
import { MenuItemList } from "../../molecules/MenuItemList/menuItemList";
import { HeaderMenuItem } from "../../../common/Header/header";
import styles from "./drawer.module.scss";

type DrawerProps = {
  items: HeaderMenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ items, isOpen, onClose }: DrawerProps) => {
  return (
    <SideBar position="left" isOpen={isOpen} onClose={onClose}>
      <MenuItemList className={styles.menuListDrawer} items={items} />
    </SideBar>
  );
};

export { Drawer };
