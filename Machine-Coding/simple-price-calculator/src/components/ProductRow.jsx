function ProductRow({ setProducts, singleProduct, products, productIndex }) {
  const updateField = (e) => {
    const newProducts = [...products];
    newProducts[productIndex] = {...singleProduct, [e.target.name]:e.target.value};
    setProducts(newProducts);
  };

  const deleteField = (e) => {
    const newProducts = [...products];
   const filteredProducts = newProducts.filter((data) => data.id !== singleProduct.id);
   setProducts(filteredProducts)    
  }

  return (
    <>
      <div className="product-row">
        <input type="number" name="quantity" onChange={(e) => updateField(e)} />
        <input type="number" name="price" onChange={(e) => updateField(e)} />
        <div>{singleProduct.quantity * singleProduct.price}</div>
        { productIndex > 0 && <button onClick={deleteField}>Delete</button>}
      </div>
    </>
  );
}

export default ProductRow;
