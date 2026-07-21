// Prevent context menu and text selection triggers
document.addEventListener('selectstart', e => e.preventDefault(), true);
document.addEventListener('contextmenu', e => e.preventDefault(), true);

let activeTarget = null;

// Intercept touchstart non-passively to block ChromeOS 'Copy | Select all' popups
window.addEventListener('touchstart', e => {
  let target = e.target.closest('button, div, span, input') || e.target;
  if (target) {
    e.preventDefault();
    activeTarget = target;
  }
}, { capture: true, passive: false });

// Force button click on release
window.addEventListener('touchend', e => {
  if (activeTarget) {
    e.preventDefault();
    activeTarget.click();
    activeTarget = null;
  }
}, { capture: true, passive: false });
