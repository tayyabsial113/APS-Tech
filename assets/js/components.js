// ============================================================
// components.js — injects shared Navbar + Footer into every page
// ============================================================

const SERVICES = [
  { href: '/APS-Tech/pages/services/rpa.html',      icon: '🤖', label: 'RPA Automation',         sub: 'Robotic Process Automation' },
  { href: '/APS-Tech/pages/services/ai-ml.html',    icon: '🧠', label: 'AI & Machine Learning',  sub: 'Intelligent AI Solutions' },
  { href: '/APS-Tech/pages/services/software.html', icon: '💻', label: 'Software Development',   sub: 'Custom Software & Apps' },
  { href: '/APS-Tech/pages/services/erp.html',      icon: '⚙️',  label: 'ERP & BPO',              sub: 'Business Process Optimization' },
  { href: '/APS-Tech/pages/services/cloud.html',    icon: '☁️',  label: 'Cloud & Infrastructure', sub: 'Scalable Cloud Solutions' },
  { href: '/APS-Tech/pages/services/uiux.html',     icon: '🎨', label: 'UI/UX Design',           sub: 'Design & Animations' },
  { href: '/APS-Tech/pages/services/it.html',       icon: '🔒', label: 'IT & Cybersecurity',     sub: 'Managed IT Services' },
  { href: '/APS-Tech/pages/services/data.html',     icon: '📊', label: 'Data Analytics',         sub: 'Business Intelligence & BI' },
  { href: '/APS-Tech/pages/services/api.html',      icon: '🔗', label: 'API Integration',        sub: 'Systems & API Integration' },
];

const PAGES = [
  { href: '/APS-Tech/',                    label: 'Home' },
  { href: '/APS-Tech/pages/services.html', label: 'Services', hasDropdown: true },
  { href: '/APS-Tech/pages/about.html',    label: 'About' },
  { href: '/APS-Tech/pages/how.html',      label: 'How It Works' },
  { href: '/APS-Tech/pages/contact.html',  label: 'Contact' },
];

function getDropdownHTML() {
  const items = SERVICES.map(s => `
    <a href="${s.href}" class="dd-item">
      <span class="dd-icon">${s.icon}</span>
      <span class="dd-text">
        <strong>${s.label}</strong>
        <small>${s.sub}</small>
      </span>
    </a>`).join('');
  return `
  <div class="nav-dropdown">
    <div class="dd-grid">${items}</div>
    <div class="dd-footer">
      <a href="/APS-Tech/pages/services.html" class="dd-all">View All Services →</a>
    </div>
  </div>`;
}

function getNavHTML() {
  const current = window.location.pathname;
  const links = PAGES.map(p => {
    const isActive = current === p.href || (p.href !== '/' && current.includes(p.href.replace('.html','')));
    if (p.hasDropdown) {
      return `<li class="nav-has-dropdown">
        <a href="${p.href}" class="${isActive ? 'active' : ''}">${p.label} <span class="dd-caret">▾</span></a>
        ${getDropdownHTML()}
      </li>`;
    }
    return `<li><a href="${p.href}" class="${isActive ? 'active' : ''}">${p.label}</a></li>`;
  }).join('');

  const mobileLinks = PAGES.map(p => {
    if (p.hasDropdown) {
      const subLinks = SERVICES.map(s =>
        `<a href="${s.href}" class="mob-sub-link">${s.icon} ${s.label}</a>`
      ).join('');
      return `<div class="mob-group">
        <span class="mob-group-title">${p.label} ▾</span>
        <div class="mob-sub">${subLinks}</div>
      </div>`;
    }
    return `<a href="${p.href}">${p.label}</a>`;
  }).join('');

  return `
  <nav id="navbar">
    <a href="/APS-Tech/" class="nav-logo">
      <div class="logo-box">APS</div>
      <span class="logo-text"><span>APS</span> Tech</span>
    </a>
    <ul class="nav-links">
      ${links}
      <li><a href="/APS-Tech/pages/contact.html" class="btn-nav">Get Started</a></li>
    </ul>
    <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    ${mobileLinks}
    <a href="/APS-Tech/pages/contact.html" style="color:var(--green)">Get Started →</a>
  </div>`;
}

function getFooterHTML() {
  const footerServiceLinks = SERVICES.map(s =>
    `<li><a href="${s.href}">${s.label}</a></li>`
  ).join('');
  return `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/APS-Tech/" class="nav-logo" style="margin-bottom:4px;display:inline-flex;">
          <div class="logo-box">APS</div>
          <span class="logo-text" style="color:var(--white)"><span>APS</span> Tech</span>
        </a>
        <p>Smart Automation for Smarter Businesses. We engineer intelligent solutions that transform how companies operate — at any scale, in any industry.</p>
        <div class="footer-social">
          <a class="soc-icon" href="#" title="LinkedIn">in</a>
          <a class="soc-icon" href="#" title="Twitter">𝕏</a>
          <a class="soc-icon" href="#" title="GitHub">⌨</a>
          <a class="soc-icon" href="#" title="YouTube">▶</a>
        </div>
      </div>
      <div class="footer-col"><h4>Services</h4><ul>${footerServiceLinks}</ul></div>
      <div class="footer-col">
        <h4>Industries</h4>
        <ul>
          <li><a href="/APS-Tech/pages/services.html#industries">Healthcare</a></li>
          <li><a href="/APS-Tech/pages/services.html#industries">Finance</a></li>
          <li><a href="/APS-Tech/pages/services.html#industries">Logistics</a></li>
          <li><a href="/APS-Tech/pages/services.html#industries">E-Commerce</a></li>
          <li><a href="/APS-Tech/pages/services.html#industries">Manufacturing</a></li>
          <li><a href="/APS-Tech/pages/services.html#industries">Government</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/APS-Tech/pages/about.html">About Us</a></li>
          <li><a href="/APS-Tech/pages/how.html">How It Works</a></li>
          <li><a href="/APS-Tech/pages/contact.html">Contact</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 APS Tech. All rights reserved. Built with ❤️ by <a href="#">APS Tech Team</a></p>
      <p style="color:rgba(230,241,251,0.2);font-size:12px;">Automated Process Solutions — Smart Automation for Smarter Businesses.</p>
    </div>
  </footer>`;
}

function initComponents() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = getNavHTML();
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = getFooterHTML();

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if (ham && mob) {
    ham.addEventListener('click', () => mob.classList.toggle('open'));
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));
    mob.querySelectorAll('.mob-group-title').forEach(title => {
      title.addEventListener('click', () => title.closest('.mob-group').classList.toggle('open'));
    });
  }
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = target === 98 ? '%' : '+';
        let current = 0;
        const inc = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + inc, target);
          el.textContent = Math.floor(current) + suffix;
          if (current >= target) clearInterval(timer);
        }, 25);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initComponents();
  initReveal();
  initCounters();
});
