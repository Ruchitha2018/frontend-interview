import { useState } from "react";
import "./App.css";
import ProductRow from "./components/ProductRow";

function App() {
  const [products, setProducts] = useState([{id: 1, quantity:0, price:0}]);

  const addProduct = () => {
    console.log(products)
    setProducts((prev) => [
      ...prev,
      {
        id: products.length + 1,
        quantity:0,
        price:0
      }
    ]);
  };

  const totalAmount = products.reduce((total, product) => total + product.quantity * product.price, 0)

  return (
    <>
      {products.map((data, index) => (
        <div>
          <ProductRow setProducts={setProducts} singleProduct={data} products={products} productIndex={index}/>
        </div>
      ))}
      <button onClick={addProduct}>Add Item</button>   
      <p>Total Item: {totalAmount}</p> 
    </>
  );
}

export default App;
