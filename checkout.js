// Checkout / Payment Page
function renderCheckoutPage() {
  if (state.cart.length === 0) {
    return `
      <div class="container">
        <div class="checkout-page" style="text-align:center; padding:100px 24px;">
          <h2 style="font-family:var(--font-heading); font-size:32px; margin-bottom:12px;">Your cart is empty</h2>
          <p style="color:var(--text-secondary); margin-bottom:24px;">Add some items before checking out.</p>
          <button class="btn btn-dark btn-lg" onclick="navigate('/shop')">Start Shopping</button>
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
      <div class="checkout-page">
        <h1 class="checkout-title fade-in">Checkout</h1>

        <!-- Stepper -->
        <div class="checkout-stepper fade-in">
          <div class="step completed" id="step-1">
            <span class="step-number">✓</span>
            <span class="step-label">Cart</span>
          </div>
          <div class="step-line completed"></div>
          <div class="step active" id="step-2">
            <span class="step-number">2</span>
            <span class="step-label">Shipping & Payment</span>
          </div>
          <div class="step-line"></div>
          <div class="step" id="step-3">
            <span class="step-number">3</span>
            <span class="step-label">Confirmation</span>
          </div>
        </div>

        <div class="checkout-layout">
          <!-- Forms -->
          <div>
            <!-- Shipping Form -->
            <div class="checkout-form-section fade-in">
              <h2 class="checkout-section-title">📦 Shipping Information</h2>
              <div class="form-grid">
                <div class="form-group">
                  <label for="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="John" required>
                </div>
                <div class="form-group">
                  <label for="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Doe" required>
                </div>
                <div class="form-group full">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 98765 43210" required>
                </div>
                <div class="form-group">
                  <label for="pincode">PIN Code</label>
                  <input type="text" id="pincode" placeholder="400001" required>
                </div>
                <div class="form-group full">
                  <label for="address">Street Address</label>
                  <input type="text" id="address" placeholder="123, MG Road, Apartment 4B" required>
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <input type="text" id="city" placeholder="Mumbai" required>
                </div>
                <div class="form-group">
                  <label for="state">State</label>
                  <select id="state" required>
                    <option value="">Select State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Uttar Pradesh</option>
                    <option>Gujarat</option>
                    <option>Rajasthan</option>
                    <option>West Bengal</option>
                    <option>Telangana</option>
                    <option>Kerala</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Payment Method -->
            <div class="checkout-form-section fade-in">
              <h2 class="checkout-section-title">💳 Payment Method</h2>
              <div class="payment-methods">
                <label class="payment-method selected" onclick="selectPayment(this, 'card')">
                  <input type="radio" name="payment" value="card" checked>
                  <span class="payment-method-icon">💳</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">Credit / Debit Card</div>
                    <div class="payment-method-desc">Visa, Mastercard, RuPay</div>
                  </div>
                </label>
                <label class="payment-method" onclick="selectPayment(this, 'upi')">
                  <input type="radio" name="payment" value="upi">
                  <span class="payment-method-icon">📱</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">UPI</div>
                    <div class="payment-method-desc">Google Pay, PhonePe, Paytm</div>
                  </div>
                </label>
                <label class="payment-method" onclick="selectPayment(this, 'netbanking')">
                  <input type="radio" name="payment" value="netbanking">
                  <span class="payment-method-icon">🏦</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">Net Banking</div>
                    <div class="payment-method-desc">All major banks supported</div>
                  </div>
                </label>
                <label class="payment-method" onclick="selectPayment(this, 'cod')">
                  <input type="radio" name="payment" value="cod">
                  <span class="payment-method-icon">💵</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">Cash on Delivery</div>
                    <div class="payment-method-desc">Pay when you receive</div>
                  </div>
                </label>
              </div>

              <!-- Card Form -->
              <div class="card-form" id="card-form">
                <div class="form-grid">
                  <div class="form-group full">
                    <label for="card-number">Card Number</label>
                    <input type="text" id="card-number" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNumber(this)">
                  </div>
                  <div class="form-group full">
                    <label for="card-name">Name on Card</label>
                    <input type="text" id="card-name" placeholder="JOHN DOE">
                  </div>
                  <div class="form-group">
                    <label for="card-expiry">Expiry Date</label>
                    <input type="text" id="card-expiry" placeholder="MM/YY" maxlength="5" oninput="formatExpiry(this)">
                  </div>
                  <div class="form-group">
                    <label for="card-cvv">CVV</label>
                    <input type="password" id="card-cvv" placeholder="•••" maxlength="4">
                  </div>
                </div>
              </div>

              <!-- UPI Form -->
              <div class="card-form" id="upi-form" style="display:none;">
                <div class="form-grid">
                  <div class="form-group full">
                    <label for="upi-id">UPI ID</label>
                    <input type="text" id="upi-id" placeholder="yourname@upi">
                  </div>
                </div>
              </div>
            </div>

            <!-- Place Order -->
            <button class="btn btn-orange btn-full btn-lg fade-in" onclick="placeOrder()" style="margin-bottom:32px;">
              🔒 Place Order — ₹${total.toLocaleString('en-IN')}
            </button>

            <p class="fade-in" style="text-align:center; font-size:13px; color:var(--text-muted);">
              🔒 Your payment info is secure and encrypted. By placing your order, you agree to our Terms of Service.
            </p>
          </div>

          <!-- Order Summary Sidebar -->
          <div class="order-summary-sidebar fade-in">
            <h3 class="order-summary-title">Order Summary</h3>
            <div class="order-summary-items">
              ${state.cart.map(item => {
                const product = PRODUCTS.find(p => p.id === item.productId);
                if (!product) return '';
                return `
                  <div class="order-summary-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="order-summary-item-info">
                      <div class="order-summary-item-name">${product.name}</div>
                      <div class="order-summary-item-variant">${item.size} • ${item.color} • Qty: ${item.qty}</div>
                    </div>
                    <div class="order-summary-item-price">₹${(product.price * item.qty).toLocaleString('en-IN')}</div>
                  </div>
                `;
              }).join('')}
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
              <span class="label">Discount</span>
              <span class="discount">-₹${discount.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row total">
              <span>Total</span>
              <span>₹${total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Meesho-style Order Confirmation Page
function renderOrderConfirmPage(orderId, orderItems) {
  return `
    <div class="container">
      <div class="order-confirm-page">
        <canvas id="confetti-canvas"></canvas>

        <!-- Animated Checkmark -->
        <div class="confirm-check-wrap">
          <svg class="confirm-checkmark" viewBox="0 0 50 50">
            <path d="M14 27 L22 35 L38 16" />
          </svg>
        </div>

        <h1 class="confirm-title">Order Placed Successfully! 🎉</h1>
        <p class="confirm-subtitle">Thank you for shopping with StyleHub</p>
        <p class="confirm-order-id">Order ID: ${orderId}</p>

        <div class="confirm-delivery-est">
          🚚 Estimated Delivery: ${getEstimatedDelivery()}
        </div>

        <!-- Ordered Items Thumbnails -->
        <div class="confirm-items-summary">
          ${orderItems.map(item => {
            const p = PRODUCTS.find(pr => pr.id === item.productId);
            return p ? `<div class="confirm-item-thumb"><img src="${p.image}" alt="${p.name}"></div>` : '';
          }).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-orange btn-lg" onclick="navigate('/orders')">
            📦 Track My Order
          </button>
          <button class="btn btn-outline-dark btn-lg" onclick="navigate('/shop')">
            Continue Shopping →
          </button>
        </div>
      </div>
    </div>
  `;
}

function getEstimatedDelivery() {
  const d = new Date();
  d.setDate(d.getDate() + 5);
  return d.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' });
}

function selectPayment(el, method) {
  document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');

  const cardForm = document.getElementById('card-form');
  const upiForm = document.getElementById('upi-form');

  if (cardForm) cardForm.style.display = method === 'card' ? 'block' : 'none';
  if (upiForm) upiForm.style.display = method === 'upi' ? 'block' : 'none';
}

function formatCardNumber(input) {
  let value = input.value.replace(/\D/g, '');
  value = value.replace(/(.{4})/g, '$1 ').trim();
  input.value = value;
}

function formatExpiry(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length >= 2) {
    value = value.substring(0, 2) + '/' + value.substring(2);
  }
  input.value = value;
}

function placeOrder() {
  const firstName = document.getElementById('first-name')?.value?.trim();
  const email = document.getElementById('email')?.value?.trim();
  const phone = document.getElementById('phone')?.value?.trim();
  const address = document.getElementById('address')?.value?.trim();

  if (!firstName || !email || !phone || !address) {
    showToast('❌ Please fill in all required fields');
    return;
  }

  const orderId = 'ORD-2026-' + Math.floor(Math.random() * 9000 + 1000);
  const orderItems = [...state.cart];

  // Clear cart
  state.cart = [];
  saveState();

  // Navigate to confirmation page
  const app = document.getElementById('app');
  app.innerHTML = renderOrderConfirmPage(orderId, orderItems);
  updateNavbarBadges();

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Launch confetti after a short delay
  setTimeout(() => launchConfetti(), 300);
  setTimeout(() => launchConfetti(), 1200);
  setTimeout(() => launchConfetti(), 2500);
}

// ─── Confetti Animation (Meesho-style) ───
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const colors = ['#e8590c', '#d4a017', '#2f9e44', '#e03131', '#1971c2', '#9c36b5', '#f59f00', '#ff6b6b', '#51cf66'];
  const confettiPieces = [];

  for (let i = 0; i < 120; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      speedY: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 4,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.random() * 0.1 + 0.03,
      opacity: 1,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let frame = 0;
  const maxFrames = 200;

  function animate() {
    if (frame > maxFrames) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    frame++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(frame * p.wobbleSpeed) * p.wobble * 0.05;
      p.rotation += p.rotSpeed;

      if (frame > maxFrames - 50) {
        p.opacity = Math.max(0, p.opacity - 0.02);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}
