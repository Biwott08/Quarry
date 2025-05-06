//
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
    
      const name = document.getElementById('name').value.trim();
      const stoneType = document.getElementById('stoneType').value;
      const quantity = document.getElementById('quantity').value.trim();
  
      // Basic validation
      if (!name || !stoneType || !quantity || isNaN(quantity) || quantity <= 0) {
        alert('Please fill in all fields correctly.');
        return;
      }
  
      // Create order object
      const order = {
        name,
        stoneType,
        quantity: Number(quantity),
        date: new Date().toLocaleString()
      };
  
      // Retrieve existing orders from localStorage or initialize empty array
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
      // Add new order to orders array
      orders.push(order);
      // Save updated orders array back to localStorage
      localStorage.setItem('orders', JSON.stringify(orders));
  
      // Provide feedback to user
      alert('Order placed successfully!');
  
      // Reset the form
      form.reset();
    });
    document.getElementById('orderForm').innerHTML = "<p>✅ Thank you! Your order has been submitted.</p>";
  });