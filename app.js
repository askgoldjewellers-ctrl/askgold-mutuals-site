const plans = [
  {
    id: "three-month",
    label: "3 Months",
    monthly: 2100,
    total: 6300,
    description: "A quick 3-month sprint to your first gold coin."
  },
  {
    id: "six-month",
    label: "6 Months",
    monthly: 1060,
    total: 6360,
    description: "The sweet spot: affordable monthly payments, real gold in 6 months.",
    badge: "Most Popular"
  },
  {
    id: "twelve-month",
    label: "12 Months",
    monthly: 535,
    total: 6420,
    description: "Lowest monthly commitment. Perfect for long-term family savings.",
    badge: "Best Value"
  },
  {
    id: "one-time",
    label: "Buy Now",
    monthly: 6240,
    total: 6240,
    description: "Skip the plan. Buy 1gm gold today at live market price.",
    instant: true
  }
];

const icon = (name, size = 20) => {
  const paths = {
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    cart: '<path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.4L22 8H6"/><circle cx="10" cy="21" r="1"/><circle cx="18" cy="21" r="1"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/>',
    medal: '<circle cx="12" cy="8" r="5"/><path d="m8.4 12-1 9 4.6-2.8 4.6 2.8-1-9"/>',
    truck: '<path d="M3 6h12v12H3zM15 10h4l3 3v5h-7"/><circle cx="7.5" cy="19" r="1.5"/><circle cx="18.5" cy="19" r="1.5"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5H10a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8.5M12 6.5v11"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    chart: '<path d="M4 19V5M4 19h16M7 15l4-4 3 2 5-7"/>',
    sparkle: '<path d="m12 3 1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5L12 3Z"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    back: '<path d="m15 18-6-6 6-6"/><path d="M9 12h12"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
  };
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.sparkle}</svg>`;
};

const money = (amount) => `&#8377;${amount.toLocaleString("en-IN")}`;
const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem("askgold-cart") || "[]");
  } catch {
    return [];
  }
};
const saveCart = (cart) => localStorage.setItem("askgold-cart", JSON.stringify(cart));
const routeUrl = (path) => `#/${path}`;

function header() {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#/" aria-label="AskGold Mutuals home">
          <span class="brand-mark">${icon("coin", 24)}</span>
          <span>AskGold <span class="brand-light">Mutuals</span></span>
        </a>
        <button class="menu-toggle icon-button" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">${icon("menu", 23)}</button>
        <nav class="main-nav" id="main-nav" aria-label="Main navigation">
          <a href="#/" data-home-link>Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#plans">Plans</a>
          <a href="#buy-gold">Buy Gold</a>
        </nav>
        <div class="header-actions">
          <a class="sign-in-link" href="${routeUrl("signin")}">Sign In</a>
          <a class="cart-link icon-button" href="${routeUrl("cart")}" aria-label="Cart, ${count} items">
            ${icon("cart", 23)}<span class="cart-count" ${count ? "" : "hidden"}>${count}</span>
          </a>
          <a class="button button-small button-gold" href="${routeUrl("signup")}">Get Started</a>
        </div>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-main wrap">
        <div class="footer-about">
          <a class="brand brand-footer" href="#/">
            <span class="brand-mark">${icon("coin", 22)}</span>
            <span>AskGold <span class="brand-light">Mutuals</span></span>
          </a>
          <p>India's simplest way to invest in 1gm gold. Start a savings plan, grow your gold, and take delivery when you're ready.</p>
          <div class="social-links" aria-label="Social links">
            <a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">x</a><a href="#" aria-label="YouTube">yt</a>
          </div>
        </div>
        <div class="footer-column">
          <h2>Platform</h2>
          <a href="#how-it-works">How It Works</a><a href="#plans">Gold Plans</a><a href="#buy-gold">Buy Instantly</a><a href="#plans">Sell Gold</a>
        </div>
        <div class="footer-column">
          <h2>Company</h2>
          <a href="${routeUrl("about")}">About Us</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Contact</a>
        </div>
        <div class="footer-column">
          <h2>Legal</h2>
          <a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Refund Policy</a><a href="#">Grievance</a>
        </div>
      </div>
      <div class="footer-bottom wrap">
        <p>&copy; 2026 AskGold Mutuals. All rights reserved.</p>
        <p><strong>Disclaimer:</strong> Gold investment involves market risk. Past performance is not indicative of future results. Please read all scheme-related documents carefully before investing. AskGold Mutuals is not a bank or NBFC.</p>
      </div>
    </footer>`;
}

function planCard(plan) {
  const action = plan.instant ? "Buy Now" : "Start Plan";
  return `
    <article id="${plan.instant ? "buy-gold" : `plan-${plan.id}`}" class="plan-card ${plan.badge ? "plan-featured" : ""} ${plan.instant ? "plan-instant" : ""}">
      ${plan.badge ? `<span class="plan-badge">${plan.badge}</span>` : plan.instant ? '<span class="plan-badge badge-quiet">Instant</span>' : ""}
      <div class="plan-heading"><span>${plan.instant ? "One-time" : "Savings Plan"}</span><h3>${plan.label}</h3></div>
      <div class="plan-price"><strong>${money(plan.monthly)}${plan.instant ? "" : '<small>/mo</small>'}</strong><span>${plan.instant ? "One-time payment" : `${money(plan.total)} total`}</span></div>
      <div class="plan-delivery"><span class="plan-coin">${icon("coin", 22)}</span><strong>1gm Gold Coin</strong></div>
      <p>${plan.description}</p>
      <a class="button button-dark plan-action" href="${routeUrl(`signup?plan=${plan.id}`)}">${action}${icon("arrow", 17)}</a>
      <button class="add-cart-button" type="button" data-add="${plan.id}">Add to cart</button>
    </article>`;
}

function homePage() {
  const prices = [
    ["24K Gold Today", "6,240/gm", "+0.8%"],
    ["22K Gold Today", "5,720/gm", "+0.6%"],
    ["18K Gold Today", "4,680/gm", "+0.4%"],
    ["Gold MCX", "62,400/10gm", "+1.1%"],
    ["Silver Today", "78/gm", "-0.2%"]
  ];
  return `
    <main>
      <section class="hero wrap">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span> India's Simplest Gold Investment Platform</p>
          <h1>Start Small.<br><span>Grow in Gold.</span></h1>
          <p class="hero-description">Invest in 1gm gold every month through flexible savings plans. Choose your cycle, pay monthly, and receive real gold when your plan completes.</p>
          <div class="hero-actions">
            <a class="button button-gold button-large" href="${routeUrl("signup")}">Start Your Plan ${icon("arrow", 19)}</a>
            <a class="button button-outline button-large" href="#buy-gold">Buy Instantly</a>
          </div>
          <div class="trust-points">
            <span>${icon("lock", 17)} Secure &amp; Encrypted</span><span>${icon("medal", 17)} Hallmark Certified</span><span>${icon("truck", 18)} Doorstep Delivery</span>
          </div>
        </div>
        <div class="hero-art reveal">
          <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
          <img class="hero-gold-image" src="assets/hero-gold.jpg" alt="A stack of bright gold bars against a blue backdrop">
          <div class="gold-quote"><span class="quote-icon">${icon("coin", 21)}</span><div><span>24K Gold Today</span><strong>&#8377;6,240/gm</strong></div><span class="quote-change">+0.8%</span></div>
          <div class="hero-caption"><span class="caption-dot"></span> Pure gold. Clear growth.</div>
        </div>
      </section>

      <div class="market-strip" aria-label="Today's market prices">
        <div class="market-track">${[...prices, ...prices].map(([label, value, change]) => `<div class="market-item"><span>${label}</span><strong>&#8377;${value}</strong><em class="${change.startsWith("-") ? "down" : "up"}">${change.startsWith("-") ? "▼" : "▲"} ${change}</em></div>`).join("")}</div>
      </div>

      <section class="section wrap how-section" id="how-it-works">
        <div class="section-heading"><p class="section-kicker">A clear path to something lasting</p><h2>How AskGold Works</h2><p>Three simple steps to start your gold investment journey</p></div>
        <div class="steps-grid">
          <article class="step-item"><span class="step-number">01</span><span class="step-icon">${icon("chart", 24)}</span><h3>Choose a Plan</h3><p>Pick a savings cycle from 1 to 12 months. Each plan lets you invest in 1gm of pure 24K gold at today's price.</p></article>
          <article class="step-item"><span class="step-number">02</span><span class="step-icon">${icon("shield", 24)}</span><h3>Pay Monthly</h3><p>Make easy monthly payments through UPI, net banking, or card. Your gold is reserved and secured from day one.</p></article>
          <article class="step-item"><span class="step-number">03</span><span class="step-icon">${icon("truck", 24)}</span><h3>Receive Your Gold</h3><p>Once your plan completes, your 1gm gold coin or bar is delivered to your doorstep. Or sell during a price hike.</p></article>
        </div>
      </section>

      <section class="section plans-section" id="plans">
        <div class="wrap">
          <div class="section-heading"><p class="section-kicker">A plan for every pace</p><h2>Pick Your Gold Plan</h2><p>Flexible cycles designed for every family's budget</p></div>
          <div class="plans-grid">${plans.map(planCard).join("")}</div>
        </div>
      </section>

      <section class="section wrap why-section">
        <div class="why-story">
          <p class="section-kicker">Why AskGold Mutuals</p><h2>1gm Gold.<br>Every Month.<br><span>Yours Forever.</span></h2><p class="why-lede">Built for families who believe in the power of gold.</p>
          <div class="trust-stat"><span>${icon("medal", 22)}</span><div><strong>87% of Indians</strong><p>trust gold as their #1 long-term investment</p></div></div>
          <img src="assets/family-savings.jpg" alt="A family receiving gold jewellery in a home setting" loading="lazy">
        </div>
        <div class="benefit-list">
          <article class="benefit-item"><span class="benefit-icon">${icon("lock", 23)}</span><div><h3>Secure Payments</h3><p>All transactions are encrypted and processed through RBI-regulated payment gateways.</p></div></article>
          <article class="benefit-item"><span class="benefit-icon">${icon("medal", 23)}</span><div><h3>Real Gold Delivery</h3><p>Certified 24K gold coins and bars delivered to your door with hallmark guarantee.</p></div></article>
          <article class="benefit-item"><span class="benefit-icon">${icon("chart", 23)}</span><div><h3>Sell Anytime</h3><p>If gold prices spike during your plan, sell your accumulated gold at market rate instantly.</p></div></article>
          <article class="benefit-item"><span class="benefit-icon">${icon("coin", 23)}</span><div><h3>Transparent Pricing</h3><p>No hidden charges. You pay today's live gold price: no markups, no surprises.</p></div></article>
        </div>
      </section>

      <section class="closing-band">
        <div class="closing-inner wrap">
          <div><p class="section-kicker">A little gold goes a long way</p><h2>Your Family's Gold Journey Starts Today</h2><p>Join thousands of families already saving in gold. Start with as little as &#8377;535 per month.</p><a class="button button-dark button-large" href="${routeUrl("signup")}">Start Your Gold Plan ${icon("arrow", 18)}</a><small>No lock-in. Cancel anytime.</small></div>
          <div class="closing-stats"><div><strong>1gm</strong><span>Minimum Gold Investment</span></div><div><strong>&#8377;535</strong><span>Starting from per month</span></div><div><strong>12</strong><span>Flexible plan durations</span></div><div><strong>24K</strong><span>Pure hallmark gold</span></div></div>
        </div>
      </section>
    </main>`;
}

function cartPage() {
  const cart = readCart();
  if (!cart.length) {
    return `<main class="subpage wrap cart-page"><a class="back-link" href="#/">${icon("back", 18)} Continue Shopping</a><div class="page-title"><p class="section-kicker">A little gold, on its way</p><h1>Your Gold Cart</h1><p>0 items</p></div><div class="empty-cart"><span class="empty-cart-icon">${icon("cart", 32)}</span><h2>Your cart is empty</h2><p>Add a gold savings plan to get started!</p><a class="button button-gold" href="#plans">Browse Plans ${icon("arrow", 17)}</a></div></main>`;
  }
  const rows = cart.map((item) => {
    const plan = plans.find((entry) => entry.id === item.id);
    return `<article class="cart-row"><span class="cart-item-icon">${icon("coin", 24)}</span><div class="cart-item-copy"><strong>${plan.label} Gold Plan</strong><span>${plan.instant ? "One-time payment" : `${money(plan.monthly)} per month`} · 1gm 24K gold</span></div><strong class="cart-item-price">${money(plan.total)}</strong><button class="icon-button remove-item" type="button" data-remove="${plan.id}" aria-label="Remove ${plan.label} from cart">${icon("trash", 18)}</button></article>`;
  }).join("");
  const total = cart.reduce((sum, item) => {
    const plan = plans.find((entry) => entry.id === item.id);
    return sum + (plan ? plan.total * item.quantity : 0);
  }, 0);
  return `<main class="subpage wrap cart-page"><a class="back-link" href="#/">${icon("back", 18)} Continue Shopping</a><div class="page-title"><p class="section-kicker">Your next step in gold</p><h1>Your Gold Cart</h1><p>${cart.reduce((sum, item) => sum + item.quantity, 0)} ${cart.length === 1 ? "item" : "items"}</p></div><div class="cart-layout"><div class="cart-items">${rows}</div><aside class="order-summary"><h2>Order Summary</h2><div><span>Plan total</span><strong>${money(total)}</strong></div><div><span>Delivery</span><strong>Calculated later</strong></div><div class="summary-total"><span>Total</span><strong>${money(total)}</strong></div><a class="button button-gold" href="${routeUrl(`signup?plan=${cart[0].id}`)}">Continue ${icon("arrow", 17)}</a><p>Final pricing and delivery details will be confirmed before payment.</p></aside></div></main>`;
}

function aboutPage() {
  return `<main class="subpage wrap about-page"><p class="section-kicker">About AskGold Mutuals</p><h1>Make gold a part of your family's future.</h1><div class="about-layout"><div><p class="about-lede">We believe saving in gold should feel clear, accessible, and built around real life. AskGold helps families make a steady start, one gram at a time.</p><p>Choose a monthly cycle that fits your budget, follow your progress, and receive certified 24K gold when your plan completes. Straightforward prices and dependable delivery keep every step easy to understand.</p><a class="button button-gold" href="${routeUrl("signup")}">Explore a gold plan ${icon("arrow", 17)}</a></div><img src="assets/family-savings.jpg" alt="A family holding a gold jewellery box together"></div><div class="about-values"><article><span>${icon("coin", 24)}</span><h2>Start small</h2><p>Begin with an amount that fits your monthly budget.</p></article><article><span>${icon("shield", 24)}</span><h2>Stay informed</h2><p>Know what you are paying and what your plan includes.</p></article><article><span>${icon("medal", 24)}</span><h2>Receive real gold</h2><p>Complete your plan and choose doorstep delivery.</p></article></div></main>`;
}

function authPage(kind, params) {
  const isSignup = kind === "signup";
  const selected = plans.find((plan) => plan.id === params.get("plan"));
  return `<main class="auth-page wrap"><section class="auth-aside"><p class="section-kicker">A future worth holding</p><h1>${isSignup ? "Start your gold story." : "Welcome back to your gold journey."}</h1><p>${isSignup ? "A few details are all it takes to begin saving in 24K gold." : "Sign in to keep an eye on your plan and your progress."}</p><div class="auth-proof"><span>${icon("shield", 20)}</span><div><strong>Made for steady saving</strong><span>Simple plans. Hallmark-certified gold.</span></div></div></section><section class="auth-panel"><a class="auth-back" href="#/">${icon("back", 18)} Back to home</a><div class="auth-form-heading"><span class="brand-mark">${icon("coin", 23)}</span><h2>${isSignup ? "Create your account" : "Sign in"}</h2><p>${isSignup ? "Begin with a plan that works for you." : "Enter your details to continue."}</p></div>${selected ? `<div class="selected-plan"><span>${selected.instant ? "One-time purchase" : "Selected savings plan"}</span><strong>${selected.label} · ${money(selected.monthly)}${selected.instant ? "" : "/mo"}</strong><a href="#plans">Change plan</a></div>` : ""}<form class="auth-form" data-form="${kind}">
    ${isSignup ? '<label>Full name<input name="name" type="text" autocomplete="name" placeholder="Your name" required></label>' : ""}
    <label>Email address<input name="email" type="email" autocomplete="email" placeholder="you@example.com" required></label>
    ${isSignup ? '<label>Mobile number<input name="phone" type="tel" autocomplete="tel" inputmode="numeric" placeholder="10-digit mobile number" pattern="[0-9]{10}" required></label>' : ""}
    <label>Password<input name="password" type="password" autocomplete="${isSignup ? "new-password" : "current-password"}" placeholder="At least 8 characters" minlength="8" required></label>
    <button class="button button-gold auth-submit" type="submit">${isSignup ? "Create Account" : "Sign In"} ${icon("arrow", 17)}</button><p class="form-status" aria-live="polite"></p>
  </form><p class="auth-switch">${isSignup ? "Already have an account?" : "New to AskGold?"} <a href="${routeUrl(isSignup ? "signin" : "signup")}">${isSignup ? "Sign in" : "Create an account"}</a></p><p class="form-disclaimer">Gold investment involves market risk. Please review all plan details before continuing.</p></section></main>`;
}

function cookieBanner() {
  if (localStorage.getItem("askgold-consent")) return "";
  return `<section class="cookie-banner" aria-label="Cookie consent"><div class="cookie-copy"><strong>Cookie Consent</strong><p>We use cookies to enable essential services and understand how visitors use our site. By choosing Accept, you agree to cookies for advertising, analytics, and support.</p></div><div class="cookie-actions"><button class="button button-dark" type="button" data-consent="declined">Decline</button><button class="button button-gold" type="button" data-consent="accepted">Accept</button></div></section>`;
}

function currentRoute() {
  if (!window.location.hash.startsWith("#/")) return { path: "home", params: new URLSearchParams() };
  const [path, query = ""] = window.location.hash.slice(2).split("?");
  return { path: path || "home", params: new URLSearchParams(query) };
}

function render() {
  const { path, params } = currentRoute();
  let content;
  if (path === "cart") content = cartPage();
  else if (path === "about") content = aboutPage();
  else if (path === "signup" || path === "signin") content = authPage(path, params);
  else content = homePage();
  document.title = path === "home" ? "AskGold Mutuals | Start Small. Grow in Gold." : `${path[0].toUpperCase()}${path.slice(1)} | AskGold Mutuals`;
  document.getElementById("app").innerHTML = `${header()}${content}${footer()}${cookieBanner()}<a class="floating-mark" href="#/" aria-label="Back to AskGold home">${icon("coin", 24)}</a>`;
  bindReveal();
  if (path === "home" && window.location.hash && !window.location.hash.startsWith("#/")) {
    requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function bindReveal() {
  const items = document.querySelectorAll(".reveal, .step-item, .plan-card, .benefit-item");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function updateCartBadge() {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.querySelector(".cart-count");
  const cartLink = document.querySelector(".cart-link");
  if (badge) {
    badge.textContent = count;
    badge.hidden = count === 0;
  }
  if (cartLink) cartLink.setAttribute("aria-label", `Cart, ${count} items`);
}

function addToCart(planId) {
  const cart = readCart();
  const entry = cart.find((item) => item.id === planId);
  if (entry) entry.quantity += 1;
  else cart.push({ id: planId, quantity: 1 });
  saveCart(cart);
  updateCartBadge();
  const button = document.querySelector(`[data-add="${planId}"]`);
  if (button) {
    button.textContent = "Added to cart";
    button.classList.add("added");
    window.setTimeout(() => {
      if (button.isConnected) {
        button.textContent = "Add to cart";
        button.classList.remove("added");
      }
    }, 1600);
  }
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(addButton.dataset.add);
    return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    saveCart(readCart().filter((item) => item.id !== removeButton.dataset.remove));
    render();
    return;
  }
  const consentButton = event.target.closest("[data-consent]");
  if (consentButton) {
    localStorage.setItem("askgold-consent", consentButton.dataset.consent);
    consentButton.closest(".cookie-banner").remove();
    return;
  }
  const menuButton = event.target.closest("#menu-toggle");
  if (menuButton) {
    const nav = document.getElementById("main-nav");
    const open = nav.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuButton.innerHTML = icon(open ? "close" : "menu", 23);
  }
  if (event.target.closest("#main-nav a")) {
    document.getElementById("main-nav")?.classList.remove("nav-open");
    document.getElementById("menu-toggle")?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-form]");
  if (!form) return;
  event.preventDefault();
  const status = form.querySelector(".form-status");
  const isSignup = form.dataset.form === "signup";
  const name = form.elements.name?.value.trim();
  status.textContent = isSignup
    ? `Thanks${name ? `, ${name}` : ""}. This front-end preview does not create or send account data yet.`
    : "This front-end preview is not connected to an account service yet.";
  status.classList.add("form-status-visible");
});

window.addEventListener("hashchange", () => {
  if (window.location.hash.startsWith("#/")) render();
});
window.addEventListener("storage", updateCartBadge);
render();
