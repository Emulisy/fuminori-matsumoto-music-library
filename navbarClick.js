document.addEventListener('DOMContentLoaded', () => {
  // Set up back-to-top button
  const backTop = document.querySelector('#back-to-top');
  if (backTop) {
    backTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  //atri click
  const atriLink = document.getElementById('atri');
  if (!atriLink) return;

  atriLink.addEventListener('click', function (e) {
    e.preventDefault();
    const targetUrl = this.href;
    const circle = document.getElementById('blue-circle');
    if (!circle) return;

    const rect = this.getBoundingClientRect();
    const linkX = rect.left + rect.width / 2;
    const linkY = rect.top + rect.height / 2;

    circle.style.left = `${linkX}px`;
    circle.style.top = `${linkY}px`;
    circle.style.transform = 'scale(0)'; // reset

    // Force reflow to apply scale(0) before scale-up
    circle.offsetWidth;

    const maxSize = Math.max(window.innerWidth, window.innerHeight);
    const scaleFactor = maxSize * 2 / 50; // assuming initial size is 50px
    circle.style.transition = 'transform 1.5s ease-out';
    circle.style.transform = `scale(${scaleFactor})`;

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 1500);
  });
});
