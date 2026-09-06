// ============================================
// StyleHub — App Router & Global State
// ============================================

// Global state
let state = {
  cart: [],
  wishlist: []
};

// Load state from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem('stylehub_state');
    if (saved) {
      state = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('stylehub_state', JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

// Cart helpers
function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getWishlistCount() {
  return state.wishlist.length;
}

function addToCart(productId, size, color) {
  const existing = state.cart.find(
    item => item.productId === productId && item.size === size && item.color === color
  );

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ productId, size, color, qty: 1 });
  }

  saveState();
  updateNavbarBadges();
  showToast('🛒 Added to cart!');
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx >= 0) {
    state.wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('❤️ Added to wishlist!');
  }
  saveState();
  updateNavbarBadges();

  // Update wishlist button appearance
  const wishBtn = document.querySelector(`#card-${productId} .product-card-wishlist`);
  if (wishBtn) {
    wishBtn.classList.toggle('active');
    wishBtn.innerHTML = state.wishlist.includes(productId) ? '❤️' : '♡';
  }
}

function updateNavbarBadges() {
  const cartBtn = document.getElementById('cart-btn');
  const wishlistBtn = document.getElementById('wishlist-btn');
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  if (cartBtn) {
    const existing = cartBtn.querySelector('.badge');
    if (existing) existing.remove();
    if (cartCount > 0) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = cartCount;
      cartBtn.appendChild(badge);
    }
  }

  if (wishlistBtn) {
    const existing = wishlistBtn.querySelector('.badge');
    if (existing) existing.remove();
    if (wishlistCount > 0) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = wishlistCount;
      wishlistBtn.appendChild(badge);
    }
  }
}

// Navigation
function navigate(path) {
  window.location.hash = path;
}

// Router
function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function renderApp() {
  const route = getRoute();
  const app = document.getElementById('app');
  const navbarContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  // Render navbar and footer
  if (navbarContainer) navbarContainer.innerHTML = renderNavbar();
  if (footerContainer) footerContainer.innerHTML = renderFooter();

  // Parse route
  let pageContent = '';
  let activePage = '';

  if (route === '/' || route === '') {
    pageContent = renderHomePage();
    activePage = 'home';
  } else if (route.startsWith('/shop')) {
    const params = route.includes('?') ? route.split('?')[1] : '';
    pageContent = renderShopPage(params);
    activePage = 'shop';
    if (params.includes('sale=true')) activePage = 'sale';
    if (params.includes('new=true')) activePage = 'new';
    if (params.includes('category=')) activePage = 'categories';
  } else if (route.startsWith('/product/')) {
    const id = route.split('/product/')[1];
    pageContent = renderProductPage(id);
    activePage = 'shop';
  } else if (route === '/cart') {
    pageContent = renderCartPage();
    activePage = '';
  } else if (route === '/checkout') {
    pageContent = renderCheckoutPage();
    activePage = '';
  } else if (route === '/orders') {
    pageContent = renderOrdersPage();
    activePage = '';
  } else {
    pageContent = `
      <div class="container" style="text-align:center; padding:120px 24px;">
        <h1 style="font-family:var(--font-heading); font-size:72px; font-weight:900; margin-bottom:16px;">404</h1>
        <p style="font-size:18px; color:var(--text-secondary); margin-bottom:32px;">Page not found</p>
        <button class="btn btn-dark btn-lg" onclick="navigate('/')">Back to Home</button>
      </div>
    `;
  }

  // Inject page content
  if (app) {
    app.innerHTML = pageContent;
  }

  // Update active nav link
  updateNavActive(activePage);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Initialize scroll animations
  requestAnimationFrame(() => {
    initScrollAnimations();
    // Start countdown if sale page
    if (route.includes('sale=true')) {
      startCountdown();
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Toast notifications
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Scroll to top button
function initScrollToTop() {
  const btn = document.getElementById('scroll-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Initialize
function init() {
  loadState();
  renderApp();
  initNavbarScroll();
  initScrollToTop();

  // Listen for hash changes
  window.addEventListener('hashchange', renderApp);
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
