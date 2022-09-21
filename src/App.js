import { useEffect, useState } from 'react'; 
// import { Navbar } from './components';
// import  Products from './components/Products/Products.jsx';

import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);
    
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(()=>{
fetchProducts();
    }, []);

    console.log(products);
    
    return (
        <div>
        <Navbar />
Kristen's E-Commerce App

Left off at 32:51
<Products products={products}/>
        </div>
    )
}

export default App;