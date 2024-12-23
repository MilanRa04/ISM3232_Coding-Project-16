//Task 4: Create the ProductItem component
import React from 'react';

function ProductItem({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
