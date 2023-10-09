import { Header } from "./common/Header/header";
import { ProductPage } from "./pages/ProductPage/productPage";
import { Error404 } from "./pages/Error404/error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
