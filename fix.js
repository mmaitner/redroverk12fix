// Add styles to stop selection and touch conflicts
const style = document.createElement('style');
style.innerHTML = `
  *, body, button, div, span {
    -webkit-user-select: none !important;
    user-select: none !important;
    -webkit-touch-callout: none !important;
    touch-action: manipulation !important;
    overscroll-behavior: none !important;
  }
`;
document.head.appendChild(style);

// Block context menu popups on long press
document.addEventListener('contextmenu', e => e.preventDefault(), false);

console.log('Kiosk touch & selection fix active!');