// Cart Page
function renderCartPage() {
  if (state.cart.length === 0) {
    return `
      <div class="container">
        <div class="cart-page">
          <div class="cart-empty fade-in">
            <div class="cart-empty-icon">🛒</div>
            <h2 class="cart-empty-title">Your cart is empty</h2>
            <p class="cart-empty-text">Looks like you haven't added anything to your cart yet.</p>
            <button class="btn btn-dark btn-lg" onclick="navigate('/shop')">Start Shopping</button>
          </div>
        </div>
      </div>
    `;
  }

  const subtotal = getCartSubtotal();
  const shipping = subtotal >= 999 ? 0 : 99;
  const discount = Math.round(subtotal * 0.05);
  const total = subtotal + shipping - discount;

  return `
    <div class="container">
      <div class="cart-page">
        <h1 class="cart-title fade-in">Shopping Cart</h1>
        <p class="cart-count fade-in">${state.cart.length} item${state.cart.length > 1 ? 's' : ''} in your cart</p>
        
        <div class="cart-layout">
          <!-- Cart Items -->
          <div class="cart-items">
            ${state.cart.map((item, index) => {
              const product = PRODUCTS.find(p => p.id === item.productId);
              if (!product) return '';
              const itemTotal = product.price * item.qty;
              return `
                <div class="cart-item fade-in" id="cart-item-${index}">
                  <div class="cart-item-image" onclick="navigate('/product/${product.id}')">
                    <img src="${product.image}" alt="${product.name}">
                  </div>
                  <div class="cart-item-details">
                    <h3 class="cart-item-name">${product.name}</h3>
                    <p class="cart-item-variant">Size: ${item.size} &nbsp;|&nbsp; Color: ${item.color}</p>
                    <div class="cart-item-qty">
                      <button class="qty-btn" onclick="updateQty(${index}, -1)">−</button>
                      <span class="qty-value">${item.qty}</span>
                      <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                    </div>
                  </div>
                  <div class="cart-item-actions">
                    <span class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">🗑️ Remove</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Summary -->
          <div class="cart-summary fade-in">
            <h3 class="cart-summary-title">Order Summary</h3>
            
            <div class="coupon-input">
              <input type="text" placeholder="Coupon code" id="coupon-input">
              <button onclick="applyCoupon()">Apply</button>
            </div>

            <div class="summary-row">
              <span class="label">Subtotal</span>
              <span class="value">₹${subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row">
              <span class="label">Shipping</span>
              <span class="${shipping === 0 ? 'free' : 'value'}">${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
            </div>
            <div class="summary-row">
              <span class="label">Discount (5%)</span>
              <span class="discount">-₹${discount.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row total">
              <span>Total</span>
              <span>₹${total.toLocaleString('en-IN')}</span>
            </div>

            ${subtotal < 999 ? `<p style="font-size:12px; color:var(--accent-orange); margin-top:12px;">Add ₹${(999 - subtotal).toLocaleString('en-IN')} more for free shipping!</p>` : ''}

            <button class="btn btn-orange btn-full btn-lg" style="margin-top: 20px;" onclick="navigate('/checkout')">
              Proceed to Checkout →
            </button>

            <button class="btn btn-outline-dark btn-full" style="margin-top: 12px;" onclick="navigate('/shop')">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateQty(index, delta) {
  const item = state.cart[index];
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(index);
    return;
  }
  
  saveState();
  renderApp();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveState();
  renderApp();
  showToast('Item removed from cart');
}

function applyCoupon() {
  const code = document.getElementById('coupon-input')?.value?.trim();
  if (code && code.toUpperCase() === 'STYLE10') {
    showToast('🎉 Coupon applied! 10% extra discount');
  } else if (code) {
    showToast('❌ Invalid coupon code');
  }
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}
