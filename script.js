/* ============================================================
   Kalpana Paridhaan — script.js
   Organised sections:
   1. Product data & rendering
   2. Spotlight overlay
   3. Booking modal
   4. Contact & newsletter forms
   5. Toast & scroll helpers
   6. Animations (loader, cursor, particles, tilt, ripple…)
   ============================================================ */

"use strict";


/* ══════════════════════════════════════════════════════════════
   SECTION 1 — PRODUCT DATA & RENDERING
   ══════════════════════════════════════════════════════════════ */

const products = [
  { id:1,  name:"Royal Blue Lehenga",             cat:"bridesmaids", catLbl:"Bridesmaids Lehenga", price:1500, per:"/ day",    badge:"bridesmaids", rating:5, img:"images/lehengas/lehengas_image1.webp" },
  { id:2,  name:"Multi Colour Jewellery Set",     cat:"jewellery",   catLbl:"Bridal Jewellery",    price:180,  per:"/ day",    badge:"bridesmaids", rating:5, img:"images/jewellery/j_1.webp" },
  { id:3,  name:"Heavy Dark Green Gown",          cat:"gown",        catLbl:"Gown",                price:1700, per:"/ day",    badge:"rental",      rating:5, img:"images/gowns/g_2.webp" },
  { id:4,  name:"Silver Stone Jewellery Set",     cat:"jewellery",   catLbl:"Bridal Jewellery",    price:300,  per:"/ day",    badge:"new",         rating:5, img:"images/jewellery/j_2.webp" },
  { id:5,  name:"Red Bridal Heavy Lehenga",       cat:"bridal",      catLbl:"Bridal Wear",         price:4500, per:"/ rental", badge:"bridal",      rating:5, img:"images/bridel/bridal_image1.webp" },
  { id:6,  name:"Silver AD Jewellery Set",        cat:"jewellery",   catLbl:"Bridal Jewellery",    price:150,  per:"/ day",    badge:"rental",      rating:4, img:"images/jewellery/j_3.webp" },
  { id:7,  name:"Pink Bridal Lehenga",            cat:"bridal",      catLbl:"Bridal Wear",         price:3200, per:"/ day",    badge:"new",         rating:5, img:"images/bridel/bridal_image2.webp" },
  { id:8,  name:"Antique Brown Stone Jewellery",  cat:"jewellery",   catLbl:"Bridal Jewellery",    price:120,  per:"/ day",    badge:"new",         rating:4, img:"images/jewellery/j_4.webp" },
  { id:9,  name:"Maroon Peacock Lehenga",         cat:"bridesmaids", catLbl:"Bridesmaids Lehenga", price:1350, per:"/ day",    badge:"bridesmaids", rating:5, img:"images/lehengas/lehengas_image2.webp" },
  { id:10, name:"Lavender Jewellery Set",         cat:"jewellery",   catLbl:"Bridal Jewellery",    price:230,  per:"/ day",    badge:"bridesmaids", rating:5, img:"images/jewellery/j_5.webp" },
  { id:11, name:"Green Heavy Work Gown",          cat:"gown",        catLbl:"Gown",                price:1375, per:"/ day",    badge:"new",         rating:4, img:"images/gowns/g_1.webp" },
  { id:12, name:"Pink Mirror Work Lehenga",       cat:"lehnga",      catLbl:"Designer Lehenga",    price:1500, per:"/ day",    badge:"new",         rating:4, img:"images/lehengas/lehengas_image3.webp" },
  { id:13, name:"Brown Velvet Bridal Lehenga",    cat:"bridal",      catLbl:"Bridal Wear",         price:2800, per:"/ day",    badge:"new",         rating:4, img:"images/bridel/bridal_image3.webp" },
  { id:14, name:"Pink Heavy Bridal Lehenga",      cat:"bridal",      catLbl:"Bridal Wear",         price:3000, per:"/ rental", badge:"bridal",      rating:5, img:"images/bridel/bridal_image5.webp" },
  { id:15, name:"Baby Pink Gown",                 cat:"gown",        catLbl:"Gown",                price:1530, per:"/ day",    badge:"rental",      rating:5, img:"images/gowns/g_3.webp" },
  { id:16, name:"Pink Heavy Work Poshak",         cat:"bridal",      catLbl:"Bridal Wear",         price:1300, per:"/ day",    badge:"rental",      rating:5, img:"images/bridel/bridal_image6.webp" },
  { id:17, name:"Off-White Lehenga",              cat:"bridesmaids", catLbl:"Bridesmaids Lehenga", price:1300, per:"/ day",    badge:"bridesmaids", rating:4, img:"images/lehengas/lehengas_image4.webp" },
  { id:18, name:"Lavender Lehenga",               cat:"lehnga",      catLbl:"Designer Lehenga",    price:999,  per:"/ day",    badge:"rental",      rating:5, img:"images/lehengas/lehengas_image5.webp" },
  { id:19, name:"Off-White Pearl Work Lehenga",   cat:"lehnga",      catLbl:"Designer Lehenga",    price:1500, per:"/ day",    badge:"rental",      rating:4, img:"images/lehengas/lehengas_image6.webp" },
  { id:20, name:"Mustard Yellow Lehenga",         cat:"lehnga",      catLbl:"Designer Lehenga",    price:999,  per:"/ day",    badge:"rental",      rating:4, img:"images/lehengas/lehengas_image7.webp" },
  { id:21, name:"Rama Green Lehenga",             cat:"lehnga",      catLbl:"Designer Lehenga",    price:800,  per:"/ day",    badge:"rental",      rating:4, img:"images/lehengas/lehengas_image8.webp" },
  { id:22, name:"Contrast Orange Golden Lehenga", cat:"lehnga",      catLbl:"Designer Lehenga",    price:500,  per:"/ day",    badge:"rental",      rating:4, img:"images/lehengas/lehengas_image9.webp" },
  { id:23, name:"Rajput Royal Lavender Lehenga",  cat:"lehnga",      catLbl:"Designer Lehenga",    price:1200, per:"/ day",    badge:"rental",      rating:4, img:"images/lehengas/lehengas_image10.webp" },
];

const badgeLabels = { bridal:"Bridal", rental:"Rental", new:"New", buy:"Buy", bridesmaids:"Bridesmaids" };
const badgeColors  = { bridal:"background:var(--maroon)", rental:"background:var(--teal)", new:"background:#2E5D4B", buy:"background:var(--gold-dark)", bridesmaids:"background:#6b3a6b" };

function stars(n) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const list = filter === "all"
    ? products
    : products.filter(p => p.cat === filter);

  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center py-5" style="color:var(--teal-deep);font-family:'Cinzel',serif;letter-spacing:2px;font-size:0.9rem;">No items found in this category yet. Check back soon!</div>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((p, i) => {
    const badgeHtml = p.badge
      ? `<div class="prod-badge" style="${badgeColors[p.badge] || "background:var(--teal)"}">${badgeLabels[p.badge] || p.badge}</div>`
      : "";

    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-3 card-animate";
    col.style.transitionDelay = `${i * 0.07}s`;

    col.innerHTML = `
      <div class="product-card h-100" role="article" aria-label="${p.name}">
        <div class="prod-img-wrap">
          ${badgeHtml}
          <!-- Clicking the IMAGE opens spotlight (product detail view) -->
          <img
            src="${p.img}"
            alt="${p.name} — ${p.catLbl || ""}"
            loading="lazy"
            onclick="event.stopPropagation(); openSpotlight(${p.id})"
            style="cursor:pointer;">
          <!-- Hover overlay button opens BOOKING directly -->
          <div class="prod-overlay">
            <button class="overlay-book" type="button" onclick="event.stopPropagation(); openBooking(${p.id})">Book / Buy</button>
          </div>
        </div>
        <div class="prod-body">
          <div class="prod-cat">${p.catLbl || ""}</div>
          <div class="prod-name">${p.name}</div>
          <div class="prod-price">₹${(p.price || 0).toLocaleString("en-IN")}<span>${p.per || ""}</span></div>
          <div class="prod-rating" aria-label="${p.rating} out of 5 stars">${stars(p.rating || 0)}</div>
          <button class="overlay-book" type="button"
            style="display:block;width:100%;margin-top:0.85rem;transform:none;background:var(--teal);color:#fff;"
            onclick="event.stopPropagation(); openBooking(${p.id})">
            <i class="bi bi-calendar-heart" style="margin-right:5px;" aria-hidden="true"></i>Book Now
          </button>
        </div>
      </div>`;

    fragment.appendChild(col);
  });

  grid.appendChild(fragment);
  // Trigger scroll animations on freshly rendered cards
  setTimeout(observeCards, 100);
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
    this.classList.add("active");
    renderProducts(this.dataset.filter);
  });
});

// Initial render
renderProducts("all");


/* ══════════════════════════════════════════════════════════════
   SECTION 2 — SPOTLIGHT OVERLAY
   Opens on product image click. Separate from booking modal.
   ══════════════════════════════════════════════════════════════ */

// Per-product detail overrides. Falls back to _default.
const productDetails = {
  _default: {
    desc: "A stunning designer piece adorned with intricate craftsmanship — the centrepiece of every celebration.",
    details: { Fabric:"Premium Quality", Work:"Embroidery & Thread", Pieces:"Complete Set", Jewellery:"Complimentary", Designer:"Included", "Home Delivery":"Available" },
    includes: ["Includes Jewellery", "3-Piece Set", "Home Delivery"],
    reviews: "48 reviews",
  },
  5: {
    desc: "A stunning crimson bridal lehenga adorned with intricate zari work — the centrepiece of every wedding stage.",
    details: { Fabric:"Banarasi Silk", Work:"Zari & Thread", Pieces:"3-piece Set", Jewellery:"Complimentary", Designer:"Included", "Home Delivery":"Available" },
    includes: ["Includes Jewellery", "3-Piece Set", "Home Delivery"],
    reviews: "86 reviews",
  },
  7: {
    desc: "A dreamy pink bridal lehenga with delicate embroidery — perfect for your fairy-tale moment.",
    details: { Fabric:"Raw Silk", Work:"Thread & Sequins", Pieces:"3-piece Set", Jewellery:"Complimentary", Designer:"Included", "Home Delivery":"Available" },
    includes: ["Includes Jewellery", "3-Piece Set", "Home Delivery"],
    reviews: "72 reviews",
  },
};

function openSpotlight(id) {
  const prod    = products.find(p => p.id === id);
  const overlay = document.getElementById("spotlightOverlay");
  if (!prod || !overlay) return;

  const detail  = productDetails[id] || productDetails["_default"];

  // Populate content
  const slImg = document.getElementById("slImg");
  slImg.src = prod.img;
  slImg.alt = prod.name + " — " + (prod.catLbl || "");

  document.getElementById("slCat").textContent   = prod.catLbl || "";
  document.getElementById("slTitle").textContent = prod.name;
  document.getElementById("slPrice").innerHTML   = `₹${prod.price.toLocaleString("en-IN")}<span>${prod.per || ""}</span>`;
  document.getElementById("slStars").textContent = stars(prod.rating || 0);
  document.getElementById("slReviews").textContent = detail.reviews || "32 reviews";
  document.getElementById("slDesc").textContent  = detail.desc;

  document.getElementById("slIncludes").innerHTML = (detail.includes || [])
    .map(chip => `<span class="sl-chip">${chip}</span>`).join("");

  document.getElementById("slDetailsGrid").innerHTML = Object.entries(detail.details)
    .map(([label, value]) => `
      <div class="sl-detail-item">
        <span class="sl-detail-label">${label}</span>
        <span class="sl-detail-value">${value}</span>
      </div>`).join("");

  // Book Now — close spotlight first, then open booking after brief delay
  document.getElementById("slBtnBook").onclick = function () {
    closeSpotlight();
    setTimeout(() => openBooking(id), 120);
  };

  // WhatsApp pre-filled message
  const waText = encodeURIComponent(
    `Hi Kalpana Paridhaan! 🌸\n\nI'm interested in:\n*${prod.name}*\nPrice: ₹${prod.price.toLocaleString("en-IN")} ${prod.per}\n\nCould you please share availability?`
  );
  document.getElementById("slBtnWa").href = `https://wa.me/919340726059?text=${waText}`;

  // Show overlay
  overlay.classList.add("sl-open");
  document.body.style.overflow = "hidden";

  // Scroll info panel to top
  const infoCol = overlay.querySelector(".sl-info-col");
  if (infoCol) infoCol.scrollTop = 0;
}

function closeSpotlight() {
  const overlay = document.getElementById("spotlightOverlay");
  if (!overlay) return;
  overlay.classList.remove("sl-open");
  document.body.style.overflow = "";
}

// Attach spotlight close handlers once DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("spotlightOverlay");
  const inner   = document.getElementById("slInner");
  const closeBtn= document.getElementById("slClose");

  // Click outside sl-inner closes overlay
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (inner && !inner.contains(e.target)) closeSpotlight();
    });
  }
  // Close button
  if (closeBtn) closeBtn.addEventListener("click", closeSpotlight);

  // ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSpotlight();
  });
});


/* ══════════════════════════════════════════════════════════════
   SECTION 3 — BOOKING MODAL
   ══════════════════════════════════════════════════════════════ */

let curProd = null;

function openBooking(id) {
  curProd = products.find(p => p.id === id);
  if (!curProd) return;

  document.getElementById("mImg").src          = curProd.img;
  document.getElementById("mImg").alt          = curProd.name;
  document.getElementById("mName").textContent = curProd.name;
  document.getElementById("mPrice").textContent= "₹" + curProd.price.toLocaleString("en-IN") + " " + curProd.per;
  document.getElementById("mCat").textContent  = curProd.catLbl;

  updateTotal();
  new bootstrap.Modal(document.getElementById("bookingModal")).show();
}

function updateTotal() {
  if (!curProd) return;
  const typeEl  = document.getElementById("bType");
  const daysEl  = document.getElementById("bDays");
  const totalEl = document.getElementById("totalAmt");
  const daysRow = document.getElementById("daysRow");
  if (!typeEl || !daysEl || !totalEl) return;

  const type = typeEl.value;
  const days = parseInt(daysEl.value) || 1;
  const amt  = type === "buy" ? curProd.price * 8 : curProd.price * days;
  totalEl.textContent = "₹" + amt.toLocaleString("en-IN");
  if (daysRow) daysRow.style.display = type === "buy" ? "none" : "flex";
}

// Listeners for booking form changes
const bDaysEl = document.getElementById("bDays");
const bTypeEl = document.getElementById("bType");
if (bDaysEl) bDaysEl.addEventListener("change", updateTotal);
if (bTypeEl) bTypeEl.addEventListener("change", updateTotal);

function confirmBooking() {
  const name     = document.getElementById("bName").value.trim();
  const phone    = document.getElementById("bPhone").value.trim();
  const date     = document.getElementById("bDate").value;
  const type     = document.getElementById("bType").value;
  const days     = document.getElementById("bDays").value;
  const occasion = document.getElementById("bOcc").value.trim();
  const address  = document.getElementById("bAddr").value.trim();

  if (!name)    { showToast("Missing Field ❌", "Please enter your full name.");      return; }
  if (!phone)   { showToast("Missing Field ❌", "Please enter your phone number.");   return; }
  if (!date)    { showToast("Missing Field ❌", "Please select an event date.");      return; }
  if (!address) { showToast("Missing Field ❌", "Please enter a delivery address."); return; }

  // Block past dates
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0,0,0,0);
  if (selectedDate < today) { showToast("Invalid Date ❌", "Event date cannot be in the past."); return; }

  const amount = document.getElementById("totalAmt").textContent;

  // Save to Google Sheet (fire-and-forget, no-cors)
  fetch(SHEET_URL, {
    method: "POST", mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sheet:"Bookings", type:"booking", name, phone, product:curProd.name, category:curProd.catLbl, eventDate:date, bookingType:type, rentalDays:type==="rental"?days:"N/A", occasion, address, amount, timestamp:new Date().toISOString() }),
  }).catch(() => console.warn("Sheet save failed silently."));

  // Open WhatsApp summary
  const waText = encodeURIComponent(
    `Hi Kalpana Paridhaan! 🌸\n\n*New Booking Request*\n` +
    `👤 Name: ${name}\n📞 Phone: ${phone}\n👗 Outfit: ${curProd.name}\n💰 Amount: ${amount}\n` +
    `📅 Event Date: ${date}\n🏷️ Type: ${type}\n🎉 Occasion: ${occasion || "Not specified"}\n📍 Address: ${address}`
  );
  setTimeout(() => window.open(`https://wa.me/919340726059?text=${waText}`, "_blank"), 600);

  showToast("Booking Confirmed! 🎉", "We'll contact you shortly to confirm.");

  // Close modal and reset form
  const modalEl = document.getElementById("bookingModal");
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();
  ["bName","bPhone","bDate","bOcc","bAddr"].forEach(id => { document.getElementById(id).value = ""; });
}


/* ══════════════════════════════════════════════════════════════
   SECTION 4 — CONTACT & NEWSLETTER FORMS
   ══════════════════════════════════════════════════════════════ */

function sendContact() {
  const name     = document.getElementById("cName").value.trim();
  const phone    = document.getElementById("cPhone").value.trim();
  const email    = document.getElementById("cEmail").value.trim();
  const occasion = document.getElementById("cOccasion").value;
  const msg      = document.getElementById("cMsg").value.trim();

  if (!name)  { showToast("Missing Field ❌", "Please enter your name.");         return; }
  if (!phone) { showToast("Missing Field ❌", "Please enter your phone number."); return; }
  if (!email) { showToast("Missing Field ❌", "Please enter your email address."); return; }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("Invalid Email ❌", "Please enter a valid email address."); return;
  }
  if (phone.replace(/\D/g,"").length < 10) {
    showToast("Invalid Phone ❌", "Please enter a valid 10-digit phone number."); return;
  }

  fetch(SHEET_URL, {
    method:"POST", mode:"no-cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({ sheet:"Contacts", type:"contact", name, phone, email, occasion, message:msg, timestamp:new Date().toISOString() }),
  })
  .then(() => {
    showToast("Message Sent! ✦", "We'll get back to you soon.");
    ["cName","cPhone","cEmail","cMsg"].forEach(id => { document.getElementById(id).value = ""; });
    document.getElementById("cOccasion").value = "";
  })
  .catch(() => showToast("Error ❌", "Something went wrong. Please try again."));
}

function subscribeNews() {
  const emailEl = document.getElementById("newsEmail");
  const email   = emailEl ? emailEl.value.trim() : "";

  if (!email) { showToast("Missing Email ❌", "Please enter your email address."); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("Invalid Email ❌", "Please enter a valid email address."); return;
  }

  fetch(SHEET_URL, {
    method:"POST", mode:"no-cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({ sheet:"Newsletter", type:"newsletter", email, timestamp:new Date().toISOString() }),
  }).catch(() => {});

  showToast("Subscribed! ✦", "You'll receive our latest arrivals & offers.");
  if (emailEl) emailEl.value = "";
}


/* ══════════════════════════════════════════════════════════════
   SECTION 5 — TOAST, SCROLL, NAVBAR HELPERS
   ══════════════════════════════════════════════════════════════ */

let toastTimer = null;

function showToast(title, msg) {
  document.getElementById("toastT").textContent = title;
  document.getElementById("toastM").textContent = msg;
  const t = document.getElementById("kpToast");
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 4200);
  if (navigator.vibrate) navigator.vibrate(60);
}

// Scroll progress + navbar state + active link highlighting
window.addEventListener("scroll", () => {
  const nav       = document.getElementById("mainNav");
  const st        = document.getElementById("scrollTop");
  const progress  = document.getElementById("kp-progress");
  const scrollY   = window.scrollY;

  // Navbar shrink
  if (nav) nav.classList.toggle("scrolled", scrollY > 80);
  // Scroll-to-top button
  if (st)  st.classList.toggle("visible",   scrollY > 80);

  // Progress bar
  if (progress) {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (docH > 0 ? (scrollY / docH) * 100 : 0) + "%";
  }

  // Active nav link
  ["home","about","collection","bridal","contact"].forEach(id => {
    const el  = document.getElementById(id);
    const lnk = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!el || !lnk) return;
    const r = el.getBoundingClientRect();
    lnk.classList.toggle("active", r.top <= 100 && r.bottom >= 100);
  });

  // Navbar brand glow
  const brandText = document.querySelector(".navbar-brand-text");
  if (brandText) brandText.style.textShadow = scrollY > 200 ? "0 0 20px rgba(201,168,76,0.4)" : "";

  // Hero parallax
  if (scrollY < window.innerHeight) {
    const hero = document.getElementById("home");
    if (hero) {
      const blobs    = hero.querySelector(".hero-blobs");
      const kintsugi = hero.querySelector(".kintsugi");
      if (blobs)    blobs.style.transform    = `translateY(${scrollY * 0.3}px)`;
      if (kintsugi) kintsugi.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
  }
}, { passive: true });

// Scroll animation observer
function observeCards() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".card-animate").forEach(el => obs.observe(el));
}
observeCards();

// Section tag reveal
(function initSectionTags() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  document.querySelectorAll(".section-tag").forEach(t => obs.observe(t));
})();

// Smooth anchor scroll with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById("mainNav")?.offsetHeight || 70;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 10, behavior: "smooth" });
  });
});

// Collapse navbar on mobile link click / outside click
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector("#navMenu");
    if (navMenu && navMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});
document.addEventListener("click", e => {
  const navMenu = document.querySelector("#navMenu");
  const toggle  = document.querySelector(".navbar-toggler");
  if (!navMenu || !toggle) return;
  if (!navMenu.contains(e.target) && !toggle.contains(e.target) && navMenu.classList.contains("show")) {
    bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
  }
});


/* ══════════════════════════════════════════════════════════════
   SECTION 6 — ANIMATION ENGINE (IIFE)
   Page Loader · Custom Cursor · Gold Dust · Particles Canvas
   Ripple · Tilt Cards · Counters · Magnetic Buttons
   Hero Particles · Stagger Delays · About Frame Tilt
   ══════════════════════════════════════════════════════════════ */
(function () {
  const isTouch = window.matchMedia("(hover:none)").matches;

  /* ── Page Loader ─────────────────────────────────────────── */
  const loader = document.getElementById("kp-loader");
  function hideLoader() {
    if (!loader) return;
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 800);
  }
  if (document.readyState === "complete") setTimeout(hideLoader, 900);
  else window.addEventListener("load", () => setTimeout(hideLoader, 900));


  /* ── Custom Cursor + Gold Dust ───────────────────────────── */
  const cursor      = document.getElementById("kp-cursor");
  const cursorTrail = document.getElementById("kp-cursor-trail");

  if (!isTouch && cursor && cursorTrail) {
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top  = mouseY + "px";
      if (Math.random() > 0.75) spawnDust(mouseX, mouseY);
    });

    (function animateTrail() {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      cursorTrail.style.left = trailX + "px";
      cursorTrail.style.top  = trailY + "px";
      requestAnimationFrame(animateTrail);
    })();

    // Hover expand on interactive elements
    const hoverSel = "a,button,.product-card,.filter-btn,.pkg-card,.soc-btn,.service-chip,.overlay-book";
    document.querySelectorAll(hoverSel).forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  function spawnDust(x, y) {
    const dust = document.createElement("div");
    dust.className = "gold-dust";
    const size = 3 + Math.random() * 5;
    const ox   = (Math.random() - 0.5) * 20;
    const oy   = (Math.random() - 0.5) * 20;
    dust.style.cssText = `left:${x+ox}px;top:${y+oy}px;width:${size}px;height:${size}px;opacity:${0.4+Math.random()*0.4};`;
    document.body.appendChild(dust);
    setTimeout(() => dust.remove(), 800);
  }


  /* ── Floating Particles Canvas ───────────────────────────── */
  const canvas = document.getElementById("kp-particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];
    const COLORS = ["rgba(201,168,76,","rgba(232,212,154,","rgba(26,95,110,","rgba(123,30,46,"];

    function resizeCanvas() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive:true });

    function createParticle() {
      return { x:Math.random()*W, y:H+10, r:1+Math.random()*2.5, speed:0.4+Math.random()*0.8, drift:(Math.random()-0.5)*0.4, opacity:0.2+Math.random()*0.5, color:COLORS[Math.floor(Math.random()*COLORS.length)], life:0, maxLife:200+Math.random()*300 };
    }
    for (let i=0; i<60; i++) { const p=createParticle(); p.y=Math.random()*H; particles.push(p); }

    (function draw() {
      ctx.clearRect(0,0,W,H);
      particles.forEach((p,i) => {
        p.y -= p.speed; p.x += p.drift; p.life++;
        const alpha = p.opacity * Math.sin((p.life/p.maxLife)*Math.PI);
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = p.color+alpha+")"; ctx.fill();
        if (p.y < -10 || p.life >= p.maxLife) particles[i] = createParticle();
      });
      requestAnimationFrame(draw);
    })();
  }


  /* ── Ripple Effect ───────────────────────────────────────── */
  function addRipple(e) {
    const btn  = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple-circle";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }
  function initRipples() {
    document.querySelectorAll(".ripple-wrap").forEach(el => {
      el.removeEventListener("click", addRipple);
      el.addEventListener("click", addRipple);
    });
  }
  initRipples();


  /* ── Tilt Card 3D Effect ─────────────────────────────────── */
  function initTilt() {
    document.querySelectorAll(".product-card").forEach(card => {
      if (!card.querySelector(".tilt-shine")) {
        const shine = document.createElement("div");
        shine.className = "tilt-shine";
        card.appendChild(shine);
      }
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const dx   = (e.clientX - rect.left - rect.width/2)  / (rect.width/2);
        const dy   = (e.clientY - rect.top  - rect.height/2) / (rect.height/2);
        card.style.transform = `translateY(-12px) rotateX(${dy*-6}deg) rotateY(${dx*6}deg)`;
        card.style.setProperty("--mouse-x", ((e.clientX-rect.left)/rect.width*100)+"%");
        card.style.setProperty("--mouse-y", ((e.clientY-rect.top) /rect.height*100)+"%");
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }


  /* ── Counter Animation ───────────────────────────────────── */
  function animateCounter(el, target, duration = 1800) {
    let start = null;
    (function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor((1 - Math.pow(1-progress, 3)) * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    })(performance.now());
  }
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target, parseInt(e.target.dataset.target)); counterObs.unobserve(e.target); }
    });
  }, { threshold:0.5 });
  document.querySelectorAll("[data-target]").forEach(el => counterObs.observe(el));


  /* ── Magnetic Button Effect ──────────────────────────────── */
  if (!isTouch) {
    document.querySelectorAll(".btn-primary-kp,.btn-secondary-kp").forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width/2)  * 0.25;
        const dy = (e.clientY - rect.top  - rect.height/2) * 0.25;
        btn.style.transform = `translate(${dx}px,${dy}px) translateY(-2px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }


  /* ── Hero Floating Particles (CSS-driven) ────────────────── */
  const hero = document.getElementById("home");
  if (hero) {
    const colors = ["rgba(201,168,76,0.6)","rgba(255,255,255,0.3)","rgba(240,217,213,0.5)"];
    for (let i=0; i<18; i++) {
      const p = document.createElement("div");
      p.className = "hero-particle";
      const size = 3 + Math.random() * 7;
      p.style.cssText = `left:${Math.random()*100}%;bottom:${Math.random()*20}%;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${6+Math.random()*10}s;animation-delay:${Math.random()*8}s;`;
      hero.appendChild(p);
    }
  }


  /* ── About Image Tilt ────────────────────────────────────── */
  const aboutFrame = document.querySelector(".about-img-frame");
  if (aboutFrame && !isTouch) {
    const aImg = aboutFrame.querySelector("img");
    aboutFrame.addEventListener("mousemove", e => {
      const rect = aboutFrame.getBoundingClientRect();
      const dx = ((e.clientX-rect.left)/rect.width  - 0.5) * 8;
      const dy = ((e.clientY-rect.top) /rect.height - 0.5) * 8;
      if (aImg) aImg.style.transform = `scale(1.04) rotateX(${-dy}deg) rotateY(${dx}deg)`;
    });
    aboutFrame.addEventListener("mouseleave", () => { if (aImg) aImg.style.transform = ""; });
  }


  /* ── Stagger animation delays for static cards ───────────── */
  document.querySelectorAll("#about .card-animate, #bridal .card-animate, #contact .card-animate").forEach((el,i) => {
    el.style.transitionDelay = (i*0.1)+"s";
  });
  document.querySelectorAll(".pkg-card").forEach((card,i)  => { card.style.transitionDelay = (i*0.12)+"s"; });
  document.querySelectorAll(".feat-card").forEach((card,i) => { card.style.transitionDelay = (i*0.1)+"s"; });


  /* ── Re-init effects when product grid updates ───────────── */
  const productGrid = document.getElementById("productGrid");
  if (productGrid) {
    const gridObserver = new MutationObserver(() => {
      initTilt();
      initRipples();
      // Re-attach cursor hover on new product cards
      if (!isTouch) {
        document.querySelectorAll(".product-card").forEach(el => {
          el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
          el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
        });
      }
    });
    gridObserver.observe(productGrid, { childList:true });
  }

})(); // end animation IIFE
