// Shop Page
function renderShopPage(params) {
  const searchParams = new URLSearchParams(params);
  const categoryFilter = searchParams.get('category');
  const saleFilter = searchParams.get('sale') === 'true';
  const newFilter = searchParams.get('new') === 'true';
  const searchQuery = searchParams.get('search');

  let filtered = [...PRODUCTS];

  if (categoryFilter) {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }
  if (saleFilter) {
    filtered = filtered.filter(p => p.isSale);
  }
  if (newFilter) {
    filtered = filtered.filter(p => p.isNew);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    );
  }

  let pageTitle = 'Shop All';
  let pageSubtitle = 'Discover our complete collection. Fresh styles, just landed.';

  if (categoryFilter) {
    pageTitle = categoryFilter;
    pageSubtitle = `Browse our ${categoryFilter.toLowerCase()} collection`;
  }
  if (saleFilter) {
    pageTitle = 'Sale';
    pageSubtitle = 'Limited time deals on top styles. Don\'t miss out!';
  }
  if (newFilter) {
    pageTitle = 'New Arrivals';
    pageSubtitle = 'Discover the latest additions to our collection. Fresh styles, just landed.';
  }
  if (searchQuery) {
    pageTitle = `Search: "${searchQuery}"`;
    pageSubtitle = `${filtered.length} results found`;
  }

  const categories = ['Men', 'Women', 'Footwear', 'Accessories'];
  const catCounts = {};
  categories.forEach(cat => {
    catCounts[cat] = PRODUCTS.filter(p => p.category === cat).length;
  });

  return `
    <div class="container">
      <div class="shop-header fade-in">
        <h1 class="shop-title">${pageTitle}</h1>
        <p class="shop-subtitle">${pageSubtitle}</p>
      </div>

      ${saleFilter ? renderSaleBanner() : ''}

      <div class="shop-layout">
        <!-- Filters Sidebar -->
        <aside class="filters-sidebar fade-in">
          <h3 class="filters-title">Filters</h3>

          <div class="filter-group">
            <h4 class="filter-group-title">Category</h4>
            ${categories.map(cat => `
              <label class="filter-checkbox">
                <input type="checkbox" value="${cat}" onchange="applyFilter('category', '${cat}')" ${categoryFilter === cat ? 'checked' : ''}>
                ${cat}
                <span class="count">(${catCounts[cat]})</span>
              </label>
            `).join('')}
          </div>

          <div class="filter-group">
            <h4 class="filter-group-title">Size</h4>
            <div class="size-grid">
              ${['XS', 'S', 'M', 'L', 'XL'].map(s => `
                <button class="size-btn" onclick="this.classList.toggle('active')">${s}</button>
              `).join('')}
            </div>
          </div>

          <div class="filter-group">
            <h4 class="filter-group-title">Color</h4>
            <div class="filter-colors">
              ${[
                { name: 'Black', hex: '#1a1a1a' },
                { name: 'White', hex: '#ffffff' },
                { name: 'Brown', hex: '#8B4513' },
                { name: 'Navy', hex: '#1b2a4a' },
                { name: 'Green', hex: '#556b2f' },
                { name: 'Blue', hex: '#4169e1' }
              ].map(c => `
                <button class="filter-color-swatch" style="background:${c.hex}" title="${c.name}" onclick="this.classList.toggle('active')"></button>
              `).join('')}
            </div>
          </div>

          <div class="filter-group">
            <h4 class="filter-group-title">Price Range</h4>
            <label class="filter-checkbox">
              <input type="checkbox"> Under ₹2,000
            </label>
            <label class="filter-checkbox">
              <input type="checkbox"> ₹2,000 - ₹5,000
            </label>
            <label class="filter-checkbox">
              <input type="checkbox"> ₹5,000 - ₹10,000
            </label>
            <label class="filter-checkbox">
              <input type="checkbox"> Above ₹10,000
            </label>
          </div>
        </aside>

        <!-- Product Grid -->
        <div>
          <div class="shop-toolbar">
            <span class="shop-results">Showing <strong>${filtered.length}</strong> of ${PRODUCTS.length} items</span>
            <div class="shop-sort">
              <select id="sort-select" onchange="sortProducts(this.value)">
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
          <div class="products-grid" id="products-grid">
            ${filtered.map(p => renderProductCard(p)).join('')}
          </div>
          ${filtered.length === 0 ? `
            <div style="text-align: center; padding: 80px 24px;">
              <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
              <h3 style="font-family: var(--font-heading); font-size: 24px; margin-bottom: 8px;">No products found</h3>
              <p style="color: var(--text-secondary);">Try adjusting your filters or search terms</p>
              <button class="btn btn-outline-dark" style="margin-top: 20px;" onclick="navigate('/shop')">View All Products</button>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderSaleBanner() {
  return `
    <div class="sale-banner fade-in">
      <div class="sale-banner-bg" style="background-image: url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&h=400&fit=crop')"></div>
      <div class="sale-banner-content">
        <span class="sale-flash-tag">🔥 FLASH SALE EVENT</span>
        <h2 class="sale-banner-title">UP TO 50% OFF</h2>
        <p class="sale-banner-desc">Refresh your wardrobe with our biggest sale of the season. Limited time only.</p>
        <div class="countdown" id="countdown">
          <div class="countdown-item"><span class="countdown-number" id="cd-days">02</span><span class="countdown-label">Days</span></div>
          <span class="countdown-sep">:</span>
          <div class="countdown-item"><span class="countdown-number" id="cd-hours">14</span><span class="countdown-label">Hrs</span></div>
          <span class="countdown-sep">:</span>
          <div class="countdown-item"><span class="countdown-number" id="cd-mins">36</span><span class="countdown-label">Min</span></div>
          <span class="countdown-sep">:</span>
          <div class="countdown-item"><span class="countdown-number" id="cd-secs">00</span><span class="countdown-label">Sec</span></div>
        </div>
      </div>
    </div>
  `;
}

function applyFilter(type, value) {
  if (type === 'category') {
    navigate(`/shop?category=${value}`);
  }
}

function sortProducts(sortBy) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let products = [...PRODUCTS];
  
  switch (sortBy) {
    case 'price-low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
  }

  grid.innerHTML = products.map(p => renderProductCard(p)).join('');
  initScrollAnimations();
}

// Countdown timer for sale
function startCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 2);
  endDate.setHours(endDate.getHours() + 14);

  function update() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}
