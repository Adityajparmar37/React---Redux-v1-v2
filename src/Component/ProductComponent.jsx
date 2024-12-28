import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setProducts } from "../Actions/productsActions";

function ProductComponent({ products, setProducts }) {
  const [productList, setProductList] = useState(products || []);
  const [product, setProduct] = useState("");

  const handleAddProduct = () => {
    if (product && !productList.includes(product)) {
      setProductList([...productList, product]);
      setProduct(" ");
    }
  };

  // console.log(productList);
  const handleSetProduct = () => {
    setProducts(productList);
  };
  return (
    <>
      <h1>Product List</h1>
      <input
        type="text"
        value={product}
        placeholder="Enter Product"
        onChange={(e) => setProduct(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleSetProduct}>Set Product</button>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>{prod}</li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
  };
};

const mapDispatchToProps = {
  setProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
