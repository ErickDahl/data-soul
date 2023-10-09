import React from "react";
import { SideBar } from "../../molecules/SideBar/SideBar";
import { useMinicartContext } from "../../../context/minicarContext";
import { MinicartItem } from "../../molecules/MinicartItem/minicartItem";
import { EmptyMinicart } from "./EmptyMinicart/emptyMinicart";
import { RenderLine } from "../../atoms/RenderLine/renderLine";
import { PriceRender } from "../../atoms/PriceRender/priceRender";
import { Button } from "../../molecules/Button/button";
import styles from "./Minicar.module.scss";

const Minicart = () => {
  const { minicartItems, isOpen, ToggleMinicart, minicartTotalPrice } =
    useMinicartContext();
  const isMinicartEmpty = minicartItems.length === 0;

  console.log(minicartItems);

  return (
    <SideBar position="right" overlay isOpen={isOpen} onClose={ToggleMinicart}>
      {isMinicartEmpty ? (
        <EmptyMinicart onClick={ToggleMinicart} />
      ) : (
        <>
          <span className={styles.minicartTitle}>Meu Carrinho</span>
          <div className={styles.minicartItemsContainer}>
            {minicartItems.map((product) => {
              return <MinicartItem key={product.item.id} product={product} />;
            })}
          </div>
          <div className={styles.minicartFooter}>
            <RenderLine />
            <div className={styles.totalPrice}>
              <span className={styles.totalPriceTitle}>Total</span>
              <PriceRender
                className={styles.totalPriceValue}
                value={minicartTotalPrice}
              />
            </div>
            <RenderLine className={styles.line} />
            <Button
              className={styles.checkoutButton}
              textContent="FINALIZAR COMPRA"
            />
            <Button
              className={styles.keepBuying}
              onClick={ToggleMinicart}
              textContent="CONTINUAR COMPRANDO"
            />
          </div>
        </>
      )}
    </SideBar>
  );
};

export { Minicart };
