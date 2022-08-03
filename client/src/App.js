import './styles/normalize.scss';
import './styles/global.scss';

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import HomePage from './components/views/HomePage/HomePage'
import ProductPage from "./components/views/ProductPage/ProductPage";
import NotFound from "./components/views/NotFound/NotFound";
import CartPage from "./components/views/CartPage/CartPage";
import OrderPage from "./components/views/OrderPage/OrderPage";

const App = () => {
  return (
    <main>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/product/:id" element={ <ProductPage /> } />
            <Route path="/cart" element={ <CartPage /> } />
            <Route path="/order" element={ <OrderPage /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Container>
    
    </main>
  );
}

export default App;
