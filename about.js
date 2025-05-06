//
document.addEventListener('DOMContentLoaded', () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const ordersContainer = document.getElementById('ordersContainer');

  if (orders.length === 0) {
     ordersContainer.innerHTML = '<p>No orders have been placed yet.</p>';
    return;
  }

  const table = document.createElement('table');
  const headerRow = document.createElement('tr');

  ['Name', 'Stone Type', 'Quantity (tons)', 'Date'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  orders.forEach(order => {
    const row = document.createElement('tr');

    [order.name, order.stoneType, order.quantity, order.date].forEach(text => {
      const td = document.createElement('td');
      td.textContent = text;
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  ordersContainer.appendChild(table);
});