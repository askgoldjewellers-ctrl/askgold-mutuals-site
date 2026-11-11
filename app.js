const collections = [
  {
    id: "statement",
    name: "Statement sets",
    description: "Make an entrance with bold, occasion-ready styling.",
    note: "Festive looks",
    art: "statement"
  },
  {
    id: "everyday",
    name: "Everyday accents",
    description: "Find the finishing touch for dinners, gifting, and daily wear.",
    note: "Easy to style",
    art: "everyday"
  },
  {
    id: "occasion",
    name: "Wedding & occasion",
    description: "Explore standout looks for celebrations and special days.",
    note: "Celebration edit",
    art: "occasion"
  }
];

function collectionCard(collection) {
  return `
    <article class="collection-card">
      <div class="collection-art art-${collection.art}" aria-hidden="true">
        <span class="art-orbit"></span>
        <span class="jewel-shape"></span>
        <span class="jewel-drop"></span>
        <span class="art-sparkle sparkle-one">✦</span>
        <span class="art-sparkle sparkle-two">✧</span>
      </div>
      <div class="collection-copy">
        <span class="collection-note">${collection.note}</span>
        <h3>${collection.name}</h3>
        <p>${collection.description}</p>
        <div class="collection-actions">
          <button class="text-link" type="button" data-enquire="buy" data-style="${collection.name}">Ask to buy <span aria-hidden="true">↗</span></button>
          <button class="text-link" type="button" data-enquire="rent" data-style="${collection.name}">Ask to rent <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </article>`;
}

function page() {
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#home" aria-label="Ask Gold Studio home">
          <span class="brand-mark" aria-hidden="true">A</span>
          <span>ask gold<span class="brand-light"> studio</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">Menu</button>
        <nav class="main-nav" id="main-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#rentals">Rentals</a>
          <a href="#about">Our approach</a>
          <a href="#faqs">FAQs</a>
        </nav>
        <a class="header-cta" href="#enquire">Enquire <span aria-hidden="true">↗</span></a>
      </div>
    </header>

    <main>
      <section class="hero section-wrap" id="home">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> Imitation jewellery, made for your moments</p>
          <h1>A little extra<br>looks good <em>on you.</em></h1>
          <p class="hero-description">Discover feel-good finishing touches for everyday plans and big celebrations. Shop a look to keep, or enquire about renting a statement style.</p>
          <div class="hero-actions">
            <a class="button button-dark" href="#collections">Explore collections <span aria-hidden="true">↗</span></a>
            <a class="button button-outline" href="#rentals">Discover rentals</a>
          </div>
          <p class="material-note"><span aria-hidden="true">✦</span> Fashion jewellery only — not solid gold or fine jewellery.</p>
        </div>
        <div class="hero-visual" role="img" aria-label="Decorative illustration of statement jewellery">
          <div class="visual-caption"><span>THE STYLE EDIT</span><span>01 / 03</span></div>
          <div class="hero-jewels" aria-hidden="true">
            <span class="hero-hoop hoop-left"></span>
            <span class="hero-hoop hoop-right"></span>
            <span class="hero-gem gem-one"></span>
            <span class="hero-gem gem-two"></span>
            <span class="hero-necklace"></span>
            <span class="hero-pendant"></span>
            <span class="hero-star star-one">✦</span>
            <span class="hero-star star-two">✧</span>
          </div>
          <p class="visual-footnote">Illustrative styles · Ask us about current pieces</p>
        </div>
      </section>

      <section class="assurance-strip" aria-label="Shop and rental options">
        <div><span class="strip-icon">01</span><p><strong>Choose your look</strong><span>Browse the style edits</span></p></div>
        <span class="strip-divider" aria-hidden="true"></span>
        <div><span class="strip-icon">02</span><p><strong>Buy or rent</strong><span>Ask about either option</span></p></div>
        <span class="strip-divider" aria-hidden="true"></span>
        <div><span class="strip-icon">03</span><p><strong>Confirm the details</strong><span>Check price and availability</span></p></div>
      </section>

      <section class="section section-wrap collections-section" id="collections">
        <div class="section-heading">
          <div><p class="eyebrow eyebrow-small">Find your kind of sparkle</p><h2>Jewellery for every kind of plan.</h2></div>
          <p>Browse a few style directions, then ask us about the pieces, prices, and availability.</p>
        </div>
        <div class="collection-grid">${collections.map(collectionCard).join("")}</div>
        <p class="catalog-note">Collection categories and artwork are illustrative. Specific designs and availability are confirmed on enquiry.</p>
      </section>

      <section class="rental-section" id="rentals">
        <div class="rental-inner section-wrap">
          <div class="rental-art" aria-hidden="true">
            <div class="rental-disc"><span>RENT<br>THE<br>MOMENT</span></div>
            <span class="rental-star rental-star-one">✦</span>
            <span class="rental-star rental-star-two">✧</span>
            <span class="rental-line"></span>
          </div>
          <div class="rental-copy">
            <p class="eyebrow eyebrow-small">A special look, just for the occasion</p>
            <h2>Love the look.<br><em>Rent the moment.</em></h2>
            <p>Ask us whether a style is available to rent. We’ll confirm the rental price, dates, deposit (if any), and care or return details before you decide.</p>
            <ol class="rental-steps">
              <li><span>01</span><div><strong>Tell us what caught your eye</strong><p>Share a style or occasion in the enquiry form.</p></div></li>
              <li><span>02</span><div><strong>Check the details together</strong><p>We’ll need to confirm availability and rental terms.</p></div></li>
              <li><span>03</span><div><strong>Decide before you book</strong><p>Review the full terms before making a commitment.</p></div></li>
            </ol>
            <a class="button button-light" href="#enquire">Ask about renting <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section class="about-section section-wrap" id="about">
        <div class="about-heading">
          <p class="eyebrow eyebrow-small">A little clarity goes a long way</p>
          <h2>Style should feel<br><em>easy to say yes to.</em></h2>
        </div>
        <div class="about-copy">
          <p>Ask Gold Studio is a storefront concept for imitation jewellery you can enquire about buying or renting. We want every piece to be clear about what it is, what it costs, and what to expect.</p>
          <div class="clarity-note"><span aria-hidden="true">✳</span><p><strong>No fine-jewellery confusion.</strong><br>Our offer is imitation fashion jewellery. Materials and finishes can vary by piece, so please check the listing details before ordering.</p></div>
        </div>
      </section>

      <section class="faq-section">
        <div class="section-wrap faq-layout" id="faqs">
          <div><p class="eyebrow eyebrow-small">Good to know</p><h2>Questions, answered.</h2><p>Need details about a particular style? Send us an enquiry and tell us what you’re looking for.</p></div>
          <div class="faq-list">
            <details><summary>Is this real gold or fine jewellery?</summary><p>No. This is imitation fashion jewellery, not solid gold or fine jewellery. Specific materials and finishes should be confirmed for each piece.</p></details>
            <details><summary>How much does a piece cost to buy or rent?</summary><p>Prices are not listed in this preview. Ask about a style and confirm the current purchase price or rental quote before you decide.</p></details>
            <details><summary>How do rental bookings work?</summary><p>Availability, dates, deposit (if any), care instructions, and return arrangements need to be confirmed for each rental before booking.</p></details>
            <details><summary>Does this website send my enquiry?</summary><p>Not yet. This is a front-end preview and its enquiry form does not send or save your details. Contact information and a working enquiry service need to be added before launch.</p></details>
          </div>
        </div>
      </section>

      <section class="enquiry-section section-wrap" id="enquire">
        <div class="enquiry-intro">
          <p class="eyebrow eyebrow-small">Let’s find your finishing touch</p>
          <h2>What are you<br><em>looking for?</em></h2>
          <p>Tell us which style you like and whether you’d like to buy or rent. We’ll confirm details once a real contact service is connected.</p>
          <p class="preview-warning"><strong>Preview only:</strong> this form does not send or store enquiries.</p>
        </div>
        <form class="enquiry-form" id="enquiry-form">
          <label for="enquiry-name">Your name</label>
          <input id="enquiry-name" name="name" type="text" autocomplete="name" placeholder="How should we address you?" required>
          <div class="form-row">
            <div><label for="enquiry-contact">Email or phone</label><input id="enquiry-contact" name="contact" type="text" autocomplete="email" placeholder="Your preferred contact" required></div>
            <div><label for="enquiry-interest">I’m interested in</label><select id="enquiry-interest" name="interest"><option value="buying">Buying</option><option value="renting">Renting</option><option value="either">Either option</option></select></div>
          </div>
          <label for="enquiry-style">Style or occasion</label>
          <input id="enquiry-style" name="style" type="text" placeholder="e.g. statement set, wedding guest">
          <label for="enquiry-message">Anything else we should know? <span>(optional)</span></label>
          <textarea id="enquiry-message" name="message" rows="3" placeholder="Share a date, occasion, or question"></textarea>
          <button class="button button-dark" type="submit">Preview enquiry <span aria-hidden="true">↗</span></button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner section-wrap">
        <a class="brand brand-footer" href="#home" aria-label="Ask Gold Studio home"><span class="brand-mark" aria-hidden="true">A</span><span>ask gold<span class="brand-light"> studio</span></span></a>
        <p>Imitation jewellery to buy or rent.<br>Choose a look. Ask for the details.</p>
        <a class="footer-link" href="#enquire">Make an enquiry <span aria-hidden="true">↗</span></a>
      </div>
      <div class="footer-bottom section-wrap"><span>© 2026 Ask Gold Studio</span><span>Imitation fashion jewellery · Not fine gold or precious jewellery</span></div>
    </footer>`;
}

document.getElementById("app").innerHTML = page();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "Close" : "Menu";
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("#main-nav a");
  if (link) {
    nav.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "Menu";
  }

  const enquiryButton = event.target.closest("[data-enquire]");
  if (enquiryButton) {
    document.getElementById("enquiry-interest").value = enquiryButton.dataset.enquire === "rent" ? "renting" : "buying";
    document.getElementById("enquiry-style").value = enquiryButton.dataset.style;
  }
});

document.getElementById("enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".form-status").textContent = "Thanks for trying the preview. Your enquiry was not sent or saved; connect a contact service before accepting real enquiries.";
});
