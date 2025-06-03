const map = new WeakMap();

const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const animation = map.get(entry.target);
      if (animation) {
        animation.play();
        ob.unobserve(entry.target);
      }
    }
  }
});

function observeElement(el) {
  const animation = el.animate(
    [
      { transform: 'translateY(30px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    ],
    {
      duration: 1500,
      easing: 'ease-in-out',
      fill: 'forwards',
    }
  );

  animation.pause();
  map.set(el, animation);
  ob.observe(el);
}

function unobserveElement(el) {
  ob.unobserve(el);
}

window.addEventListener('DOMContentLoaded', () => {
  // Select specific elements to animate
  const elementsToAnimate = document.querySelectorAll('#content-container p, #content-container h1, #content-container h2, #content-container img, #content-container iframe');
  elementsToAnimate.forEach(observeElement);
});
