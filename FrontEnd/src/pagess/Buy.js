import React, { useState } from 'react';

const ProductPage = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Add logic to add the product to the cart here (if needed)
    // For simplicity, we're only setting the message here
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 3000); // Display the message for 3 seconds before resetting
  };

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product Name: XYZ</p>
      <p>Product Price: $10</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {isAddedToCart && <p>Product has been added to the cart!</p>}
    </div>
  );
};

export default ProductPage;
