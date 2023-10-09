import { Link } from "../../atoms/Link/link";
import { v4 as uuidv4 } from "uuid";
import { HeaderMenuItem } from "../../../common/Header/header";
import styles from "./menuItemList.module.scss";

type MenuItemListProps = {
  items: HeaderMenuItem[];
  className?: string;
};

const MenuItemList = ({
  items,
  className = styles.menuList,
}: MenuItemListProps) => {
  return (
    <ul className={className}>
      {items.map((item) => {
        return (
          <li key={uuidv4()}>
            <Link
              className={styles.menuItem}
              textContent={item.textContent}
              href={item.href}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { MenuItemList };
