// Network canvas animation
function initNetwork(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let nodes = [], w, h, raf;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function init() {
    nodes = [];
    for (let i = 0; i < 35; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2.5 + 1.5
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 170) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(230,0,58,${(1 - d/170)*0.3})`;
          ctx.lineWidth = 1;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(230,0,58,0.85)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r+5, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(230,0,58,0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init(); draw();
}

// FAQ accordion
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// Active nav link
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// Price ticker (mock data - replace with API when listed)
function initTicker() {
  const el = document.getElementById('clawPrice');
  const chEl = document.getElementById('clawChange');
  if (!el) return;
  // Once listed on CoinGecko, fetch real price:
  // fetch('https://api.coingecko.com/api/v3/simple/price?ids=claw&vs_currencies=usd&include_24hr_change=true')
  el.textContent = 'TBA';
  if (chEl) chEl.textContent = 'Listing Soon';
}

// Email signup
function initSignup() {
  const form = document.getElementById('signupForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type=email]').value;
    if (email) {
      form.innerHTML = `<p style="color:#00e676;font-weight:600;font-size:15px;">✓ You're on the list! We'll notify you at launch.</p>`;
    }
  });
}

// Mobile nav
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'white';
    navLinks.style.borderBottom = '1px solid #eee';
    navLinks.style.padding = '8px 0';
    navLinks.style.zIndex = '998';
  });
}

// Scroll reveal
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNetwork('netCanvas');
  initFAQ();
  setActiveNav();
  initTicker();
  initSignup();
  initMobileNav();
  initReveal();
});
