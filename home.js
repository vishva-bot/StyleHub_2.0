// Home Page
function renderHomePage() {
  const featured = PRODUCTS.filter(p => p.isTrending || p.badge === 'Best Seller').slice(0, 6);
  const newArrivals = PRODUCTS.filter(p => p.isNew || p.badge === 'NEW');
  const saleItems = PRODUCTS.filter(p => p.isSale).slice(0, 4);

  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop')"></div>
      <div class="hero-content">
        <p class="hero-tag">NEW SEASON 2026</p>
        <h1 class="hero-title">DEFINE YOUR<br><em>STYLE.</em></h1>
        <p class="hero-subtitle">Discover fashion designed for your everyday confidence. Premium quality, curated collections.</p>
        <div class="hero-buttons">
          <button class="btn btn-primary btn-lg" onclick="navigate('/shop')">SHOP COLLECTION →</button>
          <button class="btn btn-outline btn-lg" onclick="navigate('/shop?new=true')">EXPLORE</button>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag">Browse By</p>
          <h2 class="section-title">Shop Categories</h2>
          <p class="section-subtitle">Find exactly what you're looking for</p>
        </div>
        <div class="categories-grid">
          ${CATEGORIES.map((cat, i) => `
            <div class="category-card fade-in" onclick="navigate('/shop?category=${cat.name}')" style="animation-delay: ${i * 0.1}s">
              <img class="category-card-img" src="${cat.image}" alt="${cat.name}" loading="lazy">
              <div class="category-card-overlay">
                <h3 class="category-card-name">${cat.name}</h3>
                <span class="category-card-count">${cat.count} Products</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured / Trending -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag">Curated For You</p>
          <h2 class="section-title">Trending Now</h2>
          <p class="section-subtitle">The most popular picks this season</p>
        </div>
        <div class="featured-scroll">
          ${featured.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag">Just Landed</p>
          <h2 class="section-title">New Arrivals</h2>
          <p class="section-subtitle">Fresh styles, just dropped</p>
        </div>
        <div class="products-grid">
          ${newArrivals.map(p => renderProductCard(p)).join('')}
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <button class="btn btn-outline-dark" onclick="navigate('/shop?new=true')">View All New Arrivals →</button>
        </div>
      </div>
    </section>

    <!-- Sale Preview -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag" style="color: var(--accent-red);">Flash Sale</p>
          <h2 class="section-title">Up to 50% Off</h2>
          <p class="section-subtitle">Limited time deals on top styles</p>
        </div>
        <div class="products-grid">
          ${saleItems.map(p => renderProductCard(p)).join('')}
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <button class="btn btn-orange" onclick="navigate('/shop?sale=true')">Shop All Sale →</button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section">
      <div class="container">
        <div class="newsletter fade-in">
          <h2 class="newsletter-title">Stay in the Loop</h2>
          <p class="newsletter-subtitle">Subscribe for exclusive drops, style tips, and 10% off your first order.</p>
          <form class="newsletter-form" onsubmit="handleNewsletter(event)">
            <input type="email" placeholder="Enter your email address" required>
            <button class="btn btn-orange" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function handleNewsletter(e) {
  e.preventDefault();
  showToast('🎉 Subscribed! Check your inbox for 10% off.');
  e.target.reset();
}

// Shared Product Card Renderer
function renderProductCard(product) {
  const isWished = state.wishlist.includes(product.id);
  return `
    <div class="product-card fade-in" id="card-${product.id}">
      <div class="product-card-image" onclick="navigate('/product/${product.id}')">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-card-badge ${getBadgeClass(product.badge)}">${product.badge}</span>` : ''}
        ${!product.badge && product.discount > 0 ? `<span class="product-card-badge badge-sale">-${product.discount}%</span>` : ''}
      </div>
      <button class="product-card-wishlist ${isWished ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Add to wishlist">
        ${isWished ? '❤️' : '♡'}
      </button>
      <div class="product-card-info">
        <p class="product-card-category">${product.subcategory}</p>
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-colors">
          ${product.colors.slice(0, 4).map(c => `<span class="color-dot" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
        </div>
        <div class="product-card-price">
          <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
          ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          ${product.discount > 0 ? `<span class="price-discount">${product.discount}% OFF</span>` : ''}
        </div>
        <button class="btn btn-orange btn-sm" onclick="event.stopPropagation(); addToCart(${product.id}, '${product.sizes[1] || product.sizes[0]}', '${product.colors[0].name}')">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  `;
}

function getBadgeClass(badge) {
  const map = {
    'NEW': 'badge-new',
    'TRENDING': 'badge-trending',
    'Best Seller': 'badge-best'
  };
  return map[badge] || 'badge-sale';
}
