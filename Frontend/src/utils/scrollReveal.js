const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

export const initScrollReveal = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach(el => {
    observer.observe(el);
  });
};
