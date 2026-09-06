// Orders Page
function renderOrdersPage() {
  return `
    <div class="container">
      <div class="orders-page">
        <h1 class="orders-title fade-in">Order History</h1>
        <p class="orders-subtitle fade-in">View and manage your recent purchases.</p>

        ${SAMPLE_ORDERS.map(order => {
          const orderItems = order.items.map(item => PRODUCTS.find(p => p.id === item.productId)).filter(Boolean);
          let statusClass = '';
          let statusIcon = '';
          
          switch (order.status) {
            case 'Shipped':
              statusClass = 'status-shipped';
              statusIcon = '📦';
              break;
            case 'Delivered':
              statusClass = 'status-delivered';
              statusIcon = '✅';
              break;
            case 'Cancelled':
              statusClass = 'status-cancelled';
              statusIcon = '❌';
              break;
          }

          return `
            <div class="order-card fade-in">
              <div class="order-card-header">
                <div>
                  <div class="order-id">ORDER #${order.id}</div>
                  <div class="order-date">Placed on ${order.date}</div>
                </div>
                <div>
                  <div class="order-total">₹${order.total.toLocaleString('en-IN')}</div>
                  <span class="order-status ${statusClass}">${statusIcon} ${order.status}</span>
                </div>
              </div>
              <div class="order-items-row">
                ${orderItems.map(p => `
                  <div class="order-item-thumb" onclick="navigate('/product/${p.id}')">
                    <img src="${p.image}" alt="${p.name}">
                  </div>
                `).join('')}
              </div>
              <div class="order-card-footer">
                ${order.status === 'Shipped' ? `<button class="btn btn-orange btn-sm">Track Order</button>` : ''}
                ${order.status === 'Delivered' ? `<button class="btn btn-outline-dark btn-sm">View Details</button>` : ''}
                ${order.status === 'Cancelled' ? `<button class="btn btn-outline-dark btn-sm" onclick="reorder('${order.id}')">Reorder</button>` : ''}
              </div>
            </div>
          `;
        }).join('')}

        <div style="text-align:center; padding:40px 0;" class="fade-in">
          <p style="color:var(--text-muted); font-size:14px;">Showing all orders</p>
        </div>
      </div>
    </div>
  `;
}

function reorder(orderId) {
  const order = SAMPLE_ORDERS.find(o => o.id === orderId);
  if (order) {
    order.items.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (product) {
        addToCart(item.productId, item.size, product.colors[0].name);
      }
    });
    showToast('🛒 Items added to cart');
    navigate('/cart');
  }
}
