// Navbar Component
function renderNavbar() {
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();
  
  return `
    <div class="announcement-bar" id="announcement-bar">
      FREE SHIPPING ON ORDERS ABOVE <span>₹999</span> &nbsp;•&nbsp; <a href="#/shop">SHOP NOW →</a>
      <button class="close-btn" onclick="closeAnnouncement()" aria-label="Close">✕</button>
    </div>
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a class="navbar-logo" onclick="navigate('/')" role="button">STYLE<em>HUB</em></a>
        <div class="navbar-links" id="nav-links">
          <a onclick="navigate('/')" data-page="home">Home</a>
          <a onclick="navigate('/shop')" data-page="shop">Shop</a>
          <a onclick="navigate('/shop?category=Men')" data-page="categories">Categories</a>
          <a onclick="navigate('/shop?new=true')" data-page="new">New Arrivals</a>
          <a onclick="navigate('/shop?sale=true')" class="sale-link" data-page="sale">Sale</a>
        </div>
        <div class="navbar-actions">
          <button class="navbar-action-btn" onclick="toggleSearch()" aria-label="Search" id="search-btn">🔍</button>
          <button class="navbar-action-btn" onclick="navigate('/shop')" aria-label="Wishlist" id="wishlist-btn">
            ♡
            ${wishlistCount > 0 ? `<span class="badge">${wishlistCount}</span>` : ''}
          </button>
          <button class="navbar-action-btn" onclick="navigate('/cart')" aria-label="Cart" id="cart-btn">
            🛒
            ${cartCount > 0 ? `<span class="badge">${cartCount}</span>` : ''}
          </button>
          <button class="navbar-action-btn" onclick="navigate('/orders')" aria-label="Account" id="account-btn">👤</button>
          <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Menu">☰</button>
        </div>
      </div>
    </nav>
    <div class="mobile-nav" id="mobile-nav">
      <button class="close-mobile" onclick="toggleMobileMenu()">✕</button>
      <a onclick="navigate('/'); toggleMobileMenu()">Home</a>
      <a onclick="navigate('/shop'); toggleMobileMenu()">Shop</a>
      <a onclick="navigate('/shop?category=Men'); toggleMobileMenu()">Categories</a>
      <a onclick="navigate('/shop?new=true'); toggleMobileMenu()">New Arrivals</a>
      <a onclick="navigate('/shop?sale=true'); toggleMobileMenu()" style="color:var(--accent-red)">Sale</a>
      <a onclick="navigate('/cart'); toggleMobileMenu()">Cart (${cartCount})</a>
      <a onclick="navigate('/orders'); toggleMobileMenu()">My Orders</a>
    </div>
    <div class="search-overlay" id="search-overlay" onclick="closeSearch(event)">
      <div class="search-box">
        <button>🔍</button>
        <input type="text" placeholder="Search for products..." id="search-input" onkeyup="handleSearch(event)" autofocus>
        <button onclick="toggleSearch()">✕</button>
      </div>
    </div>
  `;
}

function closeAnnouncement() {
  const bar = document.getElementById('announcement-bar');
  if (bar) {
    bar.style.display = 'none';
  }
}

function toggleSearch() {
  const overlay = document.getElementById('search-overlay');
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    setTimeout(() => document.getElementById('search-input')?.focus(), 100);
  }
}

function closeSearch(e) {
  if (e.target.id === 'search-overlay') {
    toggleSearch();
  }
}

function handleSearch(e) {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      toggleSearch();
    }
  }
}

function toggleMobileMenu() {
  document.getElementById('mobile-nav').classList.toggle('active');
}

function updateNavActive(page) {
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}
