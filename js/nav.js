// Shared nav + footer HTML
const NAV_HTML = `
<div class="top-banner">
  CLAW is launching soon — Follow <a href="https://x.com/clawnode" target="_blank">@clawnode</a> on X for updates &nbsp;·&nbsp; <a href="community.html">Join the community</a>
</div>
<nav>
  <a class="nav-logo" href="index.html">
    <img src="claw-logo.png" alt="CLAW" />
    <span>claw</span>
  </a>
  <ul class="nav-links">
    <li>
      <a href="getting-started.html">Introduction ▾</a>
      <div class="dropdown">
        <a href="getting-started.html">Getting Started</a>
        <a href="how-it-works.html">How It Works</a>
        <a href="whitepaper.html">White Paper</a>
        <a href="faq.html">FAQ</a>
      </div>
    </li>
    <li>
      <a href="wallets.html">Resources ▾</a>
      <div class="dropdown">
        <a href="wallets.html">Wallets</a>
        <a href="exchanges.html">Exchanges</a>
        <a href="community.html">Community</a>
        <a href="vocabulary.html">Vocabulary</a>
      </div>
    </li>
    <li><a href="innovation.html">Innovation</a></li>
    <li>
      <a href="community.html">Participate ▾</a>
      <div class="dropdown">
        <a href="community.html">Community</a>
        <a href="buy.html">Buy CLAW</a>
        <a href="developers.html">Developers</a>
        <a href="run-node.html">Run a Node</a>
      </div>
    </li>
    <li><a href="faq.html">FAQ</a></li>
  </ul>
  <div class="nav-right">
    <span class="nav-lang">English ▾</span>
    <a href="buy.html" class="btn nav-cta">Buy CLAW</a>
  </div>
  <div class="hamburger"><span></span><span></span><span></span></div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="claw-logo.png" alt="CLAW" />
          <span>claw</span>
        </div>
        <p class="footer-tagline">The AI-native peer-to-peer payment network. Open source. Decentralized. Built for the future.</p>
        <div class="footer-socials">
          <a href="https://x.com/clawnode" target="_blank" class="social-btn" title="X / Twitter @clawnode">𝕏</a>
          <a href="#" class="social-btn" title="Telegram">✈</a>
          <a href="#" class="social-btn" title="Discord">◈</a>
          <a href="#" class="social-btn" title="GitHub">⌥</a>
          <a href="#" class="social-btn" title="Reddit">◉</a>
        </div>
        <p style="font-size:12px;color:#444;margin-top:12px;">Follow us: <a href="https://x.com/clawnode" target="_blank" style="color:var(--primary);font-weight:700;">@clawnode</a></p>
      </div>
      <div class="footer-cols">
        <div class="footer-col">
          <h4>Introduction</h4>
          <ul>
            <li><a href="getting-started.html">Getting Started</a></li>
            <li><a href="how-it-works.html">How It Works</a></li>
            <li><a href="whitepaper.html">White Paper</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="vocabulary.html">Vocabulary</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="wallets.html">Wallets</a></li>
            <li><a href="exchanges.html">Exchanges</a></li>
            <li><a href="developers.html">Developers</a></li>
            <li><a href="run-node.html">Run a Node</a></li>
            <li><a href="innovation.html">Innovation</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Participate</h4>
          <ul>
            <li><a href="buy.html">Buy CLAW</a></li>
            <li><a href="community.html">Community</a></li>
            <li><a href="run-node.html">Run a Node</a></li>
            <li><a href="developers.html">Build on CLAW</a></li>
            <li><a href="community.html">Events</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Other</h4>
          <ul>
            <li><a href="scams.html">Avoid Scams</a></li>
            <li><a href="legal.html">Legal</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="press.html">Press</a></li>
            <li><a href="about.html">About claw.org</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© CLAW Project 2026 — Released under the MIT license</span>
      <div class="status-badge">
        <div class="status-dot"></div>
        <span>Network Status</span>
      </div>
      <span>English ▾</span>
    </div>
  </div>
</footer>`;

// Inject on load
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-root');
  const footEl = document.getElementById('footer-root');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footEl) footEl.innerHTML = FOOTER_HTML;

  // Fix logo/image paths if in subdirectory
  const isRoot = !window.location.pathname.includes('/pages/');
  if (!isRoot) {
    document.querySelectorAll('img[src="claw-logo.png"]').forEach(i => i.src = '../claw-logo.png');
    document.querySelectorAll('a[href]').forEach(a => {
      const h = a.getAttribute('href');
      if (h && !h.startsWith('http') && !h.startsWith('#') && !h.startsWith('../')) {
        // keep as is
      }
    });
  }
});
