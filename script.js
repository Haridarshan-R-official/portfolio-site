function openModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'none';
}

function triggerFill(el) {
  const bar = el.querySelector('.fill-bar');
  bar.style.width = '100%';
  setTimeout(() => {
    openModal(bar.closest('.project-card').onclick.name);
  }, 1000);
}
