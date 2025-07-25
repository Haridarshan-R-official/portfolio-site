function openModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'none';
}

function triggerFill(el, modalId) {
  const bar = el.querySelector('.fill-strip');
  bar.style.width = '100%';
  setTimeout(() => {
    openModal(modalId);
  }, 1000);
}

const faders = document.querySelectorAll('.fade-section');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);
faders.forEach(fader => observer.observe(fader));
