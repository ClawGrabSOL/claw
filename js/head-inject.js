// Inject favicon dynamically (works for all pages)
(function() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = 'claw-logo.png';
  document.head.appendChild(link);

  const link32 = document.createElement('link');
  link32.rel = 'apple-touch-icon';
  link32.href = 'claw-logo.png';
  document.head.appendChild(link32);
})();
