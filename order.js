  //
  document.addEventListener('DOMContentLoaded', () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersContainer = document.getElementById("ordersContainer");

if (!ordersContainer) {
  console.error("ordersContainer element not found");
} else {
  ordersContainer.innerHTML = "<p>No orders have been placed yet.</p>";
}
    
    const list = document.createElement('ul');
  
    orders.forEach((order, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `{index + 1}. order.name ordered{order.quantity} tons of order.stoneType on{order.date}`;
      list.appendChild(listItem);
    });
  
    const errorMsg = document.getElementById('errorMsg');

if (!name || !stoneType || !quantity || isNaN(quantity) || quantity <= 0) {
  errorMsg.textContent = '❌ Please fill in all fields correctly.';
  return;
} else {
  errorMsg.textContent = ''; // Clear errors
}
    ordersContainer.appendChild(list);
  // Retrieve form and attach submit event listener
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form behavior

  // Get user input values
  const name = document.getElementById('name').value.trim();
  const stoneType = document.getElementById('stoneType').value;
  const quantity = document.getElementById('quantity').value.trim();

  // Basic validation for empty or invalid input
  if (!name || !stoneType || !quantity || isNaN(quantity) || quantity <= 0) {
    errorMsg.textContent = '❌ Please fill in all fields correctly.';
    return;
  }

  // Save new order to localStorage
  const order = { name, stoneType, quantity: Number(quantity), date: new Date().toLocaleString() };
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
});
  });