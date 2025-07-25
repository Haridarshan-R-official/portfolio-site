function openModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(`modal-${id}`).style.display = 'none';
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
