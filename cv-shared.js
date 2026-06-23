// Chatham Valet — shared nav/footer injector
// Each page includes this script and it injects the nav and footer.

const CV_NAV = `
<nav id="mainNav">
  <div class="topbar">
    <div class="topbar-left">
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg><a href="tel:5082404913">508-240-4913</a></span>
      <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:sales@chathamvalet.com">sales@chathamvalet.com</a></span>
      <span class="tb-hide-sm"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Chatham, Cape Cod, MA</span>
    </div>
    <div class="tb-tagline">"If you have nowhere to park, look for the shark."</div>
  </div>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="https://assets.cdn.filesafe.space/NIZ8oew6UGdymnCIXEDN/media/6845f8a9bf90d267780770bf.png" alt="Chatham Valet">
    </a>
    <button class="nav-hamburger" id="navToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-page="index">Home</a></li>
      <li><a href="weddings.html" data-page="weddings">Weddings & Events</a></li>
      <li><a href="airport.html" data-page="airport">Airport Transfers</a></li>
      <li><a href="valet.html" data-page="valet">Valet & Parking</a></li>
      <li><a href="party-buses.html" data-page="party">Party Buses</a></li>
      <li><a href="contact.html" class="nav-cta" data-page="contact">Start Reservation</a></li>
    </ul>
  </div>
</nav>`;

const CV_FOOTER = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="https://assets.cdn.filesafe.space/NIZ8oew6UGdymnCIXEDN/media/6845f8a9bf90d267780770bf.png" alt="Chatham Valet">
        <p>"If you have nowhere to park,<br>look for the shark."</p>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="weddings.html">Weddings & Private Events</a></li>
          <li><a href="airport.html">Airport Transfers</a></li>
          <li><a href="valet.html">Valet & Parking Management</a></li>
          <li><a href="party-buses.html">Party Buses & Nights Out</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="contact.html">Start a Reservation</a></li>
          <li><a href="contact.html">Request a Proposal</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:5082404913">508-240-4913</a></li>
          <li><a href="mailto:sales@chathamvalet.com">sales@chathamvalet.com</a></li>
          <li><span style="color:rgba(255,255,255,0.4)">Chatham, Cape Cod, MA</span></li>
          <li><span style="color:rgba(255,255,255,0.4)">Available Year-Round</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Chatham Valet. All Rights Reserved.</span>
      <span>Cape Cod's Premier Transportation & Valet Service</span>
      <span><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Legal Center</a></span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav before first child of body
  document.body.insertAdjacentHTML('afterbegin', CV_NAV);
  // Inject footer at end of body
  document.body.insertAdjacentHTML('beforeend', CV_FOOTER);

  // Active nav link
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Scroll behavior
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Intersection observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .rl, .rr').forEach(el => obs.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Form handler
  window.handleSubmit = function(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = "Request Sent — We'll Be in Touch!";
    btn.style.background = 'var(--gold3)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Reservation Request';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 4000);
  };
});
