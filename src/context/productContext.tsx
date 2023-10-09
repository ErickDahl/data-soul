import {
  createContext,
  useState,
  useMemo,
  useEffect,
  FC,
  ReactNode,
  useContext,
} from "react";
import axios from "axios";

type ProductContextType = {
  products: Product[];
  isLoading: boolean;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type Rating = {
  rate: number;
  count: number;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(FilterCategorys(response.data));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const FilterCategorys = (products: Product[]) => {
    return products.filter(
      (product) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );
  };

  const contextValue = useMemo(() => ({ products, isLoading }), [isLoading, products]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext(): ProductContextType {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
