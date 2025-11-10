const floatingBubbles = document.querySelectorAll('.hero-bubble');
const heroSection = document.querySelector('.hero');

const phrases = ['nap time??', 'snack raid!', 'pew pew!', 'uwu gains', 'where boba?'];
let idx = 0;

setInterval(() => {
  idx = (idx + 1) % phrases.length;
  floatingBubbles.forEach((bubble, bubbleIndex) => {
    if (bubble.classList.contains('mini')) {
      bubble.textContent = phrases[(idx + bubbleIndex) % phrases.length];
    }
  });
}, 2800);

heroSection?.addEventListener('mousemove', (event) => {
  const rect = heroSection.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;

  floatingBubbles.forEach((bubble, bubbleIndex) => {
    const offset = bubbleIndex === 0 ? 1 : -1;
    bubble.style.transform = `translate(${x * offset}px, ${y}px)`;
  });
});

const detailsElements = document.querySelectorAll('details');
detailsElements.forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      detailsElements.forEach((other) => {
        if (other !== detail) {
          other.open = false;
        }
      });
    }
  });
});
