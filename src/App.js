import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      // If product exists in the cart already, update its quantity
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      // If product does not exist in the cart, add it
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)));
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
      </div>
    </div>
  );
}

export default App;
