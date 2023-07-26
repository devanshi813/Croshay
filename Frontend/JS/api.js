// Function to fetch products from the backend API
async function fetchProducts() {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  
  // Function to add a product to the cart on the backend
  async function addToCart(productId) {
    try {
      const response = await fetch(`/api/cart/add/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: 1 }), // You can adjust the quantity as needed
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding product to cart:', error);
      return { success: false, message: 'Failed to add product to cart.' };
    }
  }
  
  // Function to place an order on the backend
  async function placeOrder(cartItems) {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error placing order:', error);
      return { success: false, message: 'Failed to place order.' };
    }
  }
  
  // Export the functions to be used in other JavaScript files
  export { fetchProducts, addToCart, placeOrder };
  