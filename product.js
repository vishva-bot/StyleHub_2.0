// Product Detail Page
function renderProductPage(productId) {
  const product = PRODUCTS.find(p => p.id === parseInt(productId));
  if (!product) {
    return `<div class="container" style="text-align:center; padding:100px 24px;">
      <h2 style="font-family:var(--font-heading); font-size:32px;">Product Not Found</h2>
      <p style="color:var(--text-secondary); margin:12px 0 24px;">The product you're looking for doesn't exist.</p>
      <button class="btn btn-dark" onclick="navigate('/shop')">Back to Shop</button>
    </div>`;
  }

  const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory)).slice(0, 4);
  const starsHtml = renderStars(product.rating);

  return `
    <div class="container">
      <!-- Breadcrumb -->
      <div class="breadcrumb fade-in">
        <a onclick="navigate('/')">Home</a>
        <span class="sep">›</span>
        <a onclick="navigate('/shop')">Shop</a>
        <span class="sep">›</span>
        <a onclick="navigate('/shop?category=${product.category}')">${product.category}</a>
        <span class="sep">›</span>
        <span>${product.name}</span>
      </div>

      <!-- Product Detail -->
      <div class="product-detail">
        <!-- Gallery -->
        <div class="product-gallery fade-in">
          <div class="product-thumbnails">
            ${product.images.map((img, i) => `
              <div class="product-thumb ${i === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                <img src="${img}" alt="${product.name} view ${i + 1}" loading="lazy">
              </div>
            `).join('')}
          </div>
          <div class="product-main-image">
            <img src="${product.images[0]}" alt="${product.name}" id="main-product-image">
            <button class="wishlist-btn" onclick="toggleWishlist(${product.id})" aria-label="Add to wishlist">
              ${state.wishlist.includes(product.id) ? '❤️' : '♡'}
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="product-info fade-in">
          <div class="product-badges">
            ${product.badge ? `<span class="product-badge best-seller">${product.badge}</span>` : ''}
            <div class="product-rating">
              <span class="stars">${starsHtml}</span>
              <span>${product.rating}</span>
              <span style="color:var(--text-muted)">${product.reviews} Reviews</span>
            </div>
          </div>

          <h1 class="product-detail-name">${product.name}</h1>
          <p class="product-detail-desc">${product.description}</p>

          <div class="product-detail-price">
            <span class="current">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `<span class="original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            ${product.discount > 0 ? `<span class="off">${product.discount}% OFF</span>` : ''}
          </div>

          <!-- Color -->
          <div class="option-section">
            <p class="option-label">Color: <span id="selected-color">${product.colors[0].name}</span></p>
            <div class="color-options">
              ${product.colors.map((c, i) => `
                <button class="color-swatch ${i === 0 ? 'active' : ''}" 
                  style="background:${c.hex}" 
                  title="${c.name}" 
                  onclick="selectColor(this, '${c.name}')"
                  aria-label="${c.name}">
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Size -->
          <div class="option-section">
            <p class="option-label">Size <a class="size-guide-link">Size Guide</a></p>
            <div class="size-options">
              ${product.sizes.map((s, i) => `
                <button class="size-option ${i === 1 ? 'active' : ''}" onclick="selectSize(this, '${s}')">${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Add to Cart -->
          <button class="btn btn-orange add-to-cart-btn" id="add-to-cart-detail" onclick="addToCartFromDetail(${product.id})">
            🛍️ Add to Bag
          </button>

          <!-- Delivery Info -->
          <div class="delivery-info">
            <div class="delivery-item">
              🚚 Free Delivery by <strong>Thursday</strong>
            </div>
            <div class="delivery-item">
              ✅ 100% Original Product
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="product-tabs fade-in">
        <div class="tabs-header">
          <button class="tab-btn active" onclick="switchTab(this, 'tab-desc')">Description</button>
          <button class="tab-btn" onclick="switchTab(this, 'tab-specs')">Specifications</button>
          <button class="tab-btn" onclick="switchTab(this, 'tab-reviews')">Reviews (${product.reviews})</button>
        </div>
        <div class="tab-content" id="tab-desc">
          <p>${product.description}</p>
          <ul style="margin-top: 16px;">
            ${product.specs.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
        <div class="tab-content hidden" id="tab-specs">
          <table style="width:100%; border-collapse:collapse;">
            ${product.specs.map(s => {
              const parts = s.split(',');
              return `<tr style="border-bottom:1px solid var(--border-light);">
                <td style="padding:12px 0; font-weight:600; width:40%;">${parts[0].split(' ').slice(0, 2).join(' ')}</td>
                <td style="padding:12px 0;">${s}</td>
              </tr>`;
            }).join('')}
            <tr style="border-bottom:1px solid var(--border-light);">
              <td style="padding:12px 0; font-weight:600;">Category</td>
              <td style="padding:12px 0;">${product.category} / ${product.subcategory}</td>
            </tr>
            <tr>
              <td style="padding:12px 0; font-weight:600;">Available Sizes</td>
              <td style="padding:12px 0;">${product.sizes.join(', ')}</td>
            </tr>
          </table>
        </div>
        <div class="tab-content hidden" id="tab-reviews">
          <div style="display:flex; align-items:center; gap:16px; margin-bottom:24px;">
            <div style="font-size:48px; font-family:var(--font-heading); font-weight:800;">${product.rating}</div>
            <div>
              <div style="font-size:20px; color:var(--accent-gold);">${starsHtml}</div>
              <div style="color:var(--text-muted); font-size:14px;">${product.reviews} reviews</div>
            </div>
          </div>
          ${renderSampleReviews()}
        </div>
      </div>

      <!-- Complete The Look -->
      ${related.length > 0 ? `
        <div class="complete-look fade-in">
          <h2 class="complete-look-title">Complete The Look</h2>
          <div class="complete-look-grid">
            ${related.map(p => `
              <div class="complete-look-card" onclick="navigate('/product/${p.id}')">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="info">
                  <p class="name">${p.name}</p>
                  <div class="card-price">
                    ₹${p.price.toLocaleString('en-IN')}
                    ${p.originalPrice ? `<span style="text-decoration:line-through; color:var(--text-muted); font-weight:400; font-size:13px; margin-left:6px;">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                  </div>
                  <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id}, '${p.sizes[1] || p.sizes[0]}', '${p.colors[0].name}')">Add</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '★';
    else if (i - rating < 1) html += '★';
    else html += '☆';
  }
  return html;
}

function renderSampleReviews() {
  const reviews = [
    { name: 'Arjun M.', date: 'Aug 2026', rating: 5, text: 'Absolutely love this! The quality is outstanding and it fits perfectly. Highly recommend to anyone looking for premium fashion.' },
    { name: 'Priya S.', date: 'Jul 2026', rating: 4, text: 'Great product overall. The material feels luxurious and the color is exactly as shown. Shipping was fast too.' },
    { name: 'Rahul K.', date: 'Jul 2026', rating: 5, text: 'Best purchase I\'ve made this season. The craftsmanship is top-notch. Will definitely be ordering more from StyleHub!' }
  ];

  return reviews.map(r => `
    <div style="border-bottom:1px solid var(--border-light); padding:20px 0;">
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <div>
          <strong>${r.name}</strong>
          <span style="color:var(--accent-gold); margin-left:8px;">${renderStars(r.rating)}</span>
        </div>
        <span style="color:var(--text-muted); font-size:13px;">${r.date}</span>
      </div>
      <p style="color:var(--text-secondary); line-height:1.7;">${r.text}</p>
    </div>
  `).join('');
}

function changeMainImage(src, thumbEl) {
  document.getElementById('main-product-image').src = src;
  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectColor(el, colorName) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('selected-color').textContent = colorName;
}

function selectSize(el, size) {
  document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function switchTab(btn, tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.remove('hidden');
}

function addToCartFromDetail(productId) {
  const activeSize = document.querySelector('.size-option.active');
  const activeColor = document.getElementById('selected-color');
  const size = activeSize ? activeSize.textContent : '';
  const color = activeColor ? activeColor.textContent : '';
  addToCart(productId, size, color);
}
