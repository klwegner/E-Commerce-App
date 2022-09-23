import { useEffect, useState } from "react";
// import { Navbar } from './components';
// import  Products from './components/Products/Products.jsx';

import { Products, Navbar, Cart } from "./components";
import { commerce } from "./lib/commerce";



const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      Kristen's E-Commerce App 
      
      Left off at 
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
    <Cart cart={cart}/>
    </div>
  );
};

export default App;
