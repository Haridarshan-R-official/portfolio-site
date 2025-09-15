function createEntry(name, label, type) {
  const id = `${type}_${name}`;
  const display = document.createElement('div');
  display.className = type === 'project' ? 'project' : 'experience';
  display.textContent = label;
  display.onclick = () => openModal(id);
  document.getElementById(`${type}-section`).appendChild(display);

  const modalContent = document.createElement('div');
  modalContent.id = id;
}

async function openModal(fileId) {
  const container = document.getElementById('modal-content');
  container.innerHTML = '<span class="close" onclick="closeModal()">&times;</span>';
  try {
    const res = await fetch(fileId + '.html');
    const html = await res.text();
    container.innerHTML += html;
  } catch (e) {
    container.innerHTML += '<p style="color:red;">Failed to load content.</p>';
  }
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) modal.style.display = 'none';
}

// Auto-discover entries
const files = [
  'project_pam4',
  // 'project_Fault-Detection',
  // 'project_RISC-V',
  // 'project_Image-Compression-Using-DCT',
  // 'project_CNN-Accelerator',
  'project_text-transmission',
  'internship_texas'
];
files.forEach(file => {
  const [type, ...rest] = file.split('_');
  const name = rest.join('_');
  const label = name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  createEntry(name, label, type);
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
