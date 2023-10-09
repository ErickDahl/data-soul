import {
  createContext,
  useState,
  useMemo,
  useEffect,
  FC,
  ReactNode,
  useContext,
  useCallback,
} from "react";

import { Product } from "./productContext";

export type MinicartItemType = {
  item: Product;
  quantity: number;
};

const MinicartContext = createContext<
  | {
      minicartItems: MinicartItemType[];
      AddToCart: (item: MinicartItemType) => void;
      ToggleMinicart: () => void;
      IncrementItemQuantity: (id: number) => void;
      DecrementItemQuantity: (id: number) => void;
      RemoveItemFromCart: (id: number) => void;
      isOpen: boolean;
      minicartTotalPrice: number;
    }
  | undefined
>(undefined);

export const MinicartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [minicartItems, setMinicartItems] = useState<MinicartItemType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [minicartTotalPrice, setMinicartTotalPrice] = useState(0);
  const ToggleMinicart = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  useEffect(() => {
    const UpdateTotalPrice = () => {
      const totalPrice = minicartItems.reduce((total, item) => {
        return total + item.item.price * item.quantity;
      }, 0);

      setMinicartTotalPrice(totalPrice);
    };

    UpdateTotalPrice();
  }, [minicartItems]);

  const AddToCart = useCallback(
    (item: MinicartItemType) => {
      const existingItem = minicartItems.find(
        (cartItem) => cartItem.item.id === item.item.id
      );

      if (existingItem) {
        setMinicartItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.item.id === item.item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      } else {
        setMinicartItems((prevItems) => [
          ...prevItems,
          { ...item, quantity: 1 },
        ]);
      }

      setIsOpen(true);
    },
    [minicartItems]
  );

  const IncrementItemQuantity = useCallback(
    (id: number) => {
      const existingItem = minicartItems.find(
        (cartItem) => cartItem.item.id === id
      );

      if (existingItem) {
        setMinicartItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.item.id === id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      }
    },
    [minicartItems]
  );

  const RemoveItemFromCart = useCallback((id: number) => {
    setMinicartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item.id !== id)
    );
  }, []);

  const DecrementItemQuantity = useCallback(
    (id: number) => {
      const existingItem = minicartItems.find(
        (cartItem) => cartItem.item.id === id
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          RemoveItemFromCart(id);
        } else {
          setMinicartItems((prevItems) =>
            prevItems.map((cartItem) =>
              cartItem.item.id === id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
          );
        }
      }
    },
    [minicartItems, RemoveItemFromCart]
  );

  const contextValue = useMemo(
    () => ({
      minicartItems,
      AddToCart,
      ToggleMinicart,
      IncrementItemQuantity,
      DecrementItemQuantity,
      RemoveItemFromCart,
      isOpen,
      minicartTotalPrice,
    }),
    [
      AddToCart,
      minicartItems,
      ToggleMinicart,
      IncrementItemQuantity,
      DecrementItemQuantity,
      RemoveItemFromCart,
      isOpen,
      minicartTotalPrice,
    ]
  );

  return (
    <MinicartContext.Provider value={contextValue}>
      {children}
    </MinicartContext.Provider>
  );
};

export function useMinicartContext(): {
  minicartItems: MinicartItemType[];
  AddToCart: (item: MinicartItemType) => void;
  ToggleMinicart: () => void;
  IncrementItemQuantity: (id: number) => void;
  DecrementItemQuantity: (id: number) => void;
  RemoveItemFromCart: (id: number) => void;
  isOpen: boolean;
  minicartTotalPrice: number;
} {
  const context = useContext(MinicartContext);
  if (!context) {
    throw new Error(
      "useMinicartContext must be used within a MinicartProvider"
    );
  }
  return context;
}
