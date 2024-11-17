import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

//Task 5: Each item has a  unique key that is assigned according to the id of the item in the array.