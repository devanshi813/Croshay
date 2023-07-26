// Function to fetch product data from the backend API
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
  
  // Function to display products on the page
  function displayProducts(products) {
    const productContainer = document.querySelector('.product-container');
  
    products.forEach((product) => {
      const productCard = `
        <div class="product-card">
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Price: $${product.price.toFixed(2)}</p>
          <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        </div>
      `;
      productContainer.insertAdjacentHTML('beforeend', productCard);
    });
  
    // Add event listeners to the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', addToCart);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(event) {
    const productId = event.target.dataset.productId;
    // Perform any additional logic based on the clicked product, e.g., updating the cart object or making API calls to add to cart.
  
    // For this basic example, we'll just display a simple alert.
    alert(`Product with ID ${productId} added to cart.`);
  }
  
  // Function to initialize the page
  async function initPage() {
    const products = await fetchProducts();
    displayProducts(products);
  }
  
  // Run the initialization function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', initPage);
  