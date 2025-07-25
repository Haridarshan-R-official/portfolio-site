let currentlyOpenModal = null;

function openProjectModal(modalId) {
  // Close any open modal first
  if (currentlyOpenModal && currentlyOpenModal !== modalId) {
    document.getElementById(currentlyOpenModal).style.display = 'none';
    // Reset hover on previous project
    const prevProjectId = currentlyOpenModal === 'modal1' ? 'project1' : 'project2';
    document.getElementById(prevProjectId).classList.remove('hover');
  }
  // Open new modal
  document.getElementById(modalId).style.display = 'flex';
  // Add hover state to project
  const projectId = modalId === 'modal1' ? 'project1' : 'project2';
  document.getElementById(projectId).classList.add('hover');
  currentlyOpenModal = modalId;
}

function closeProjectModal(modalId, projectId) {
  document.getElementById(modalId).style.display = 'none';
  document.getElementById(projectId).classList.remove('hover');
  currentlyOpenModal = null;
}

// Close modal if user clicks outside modal-content
window.onclick = function(event) {
  if (currentlyOpenModal) {
    const modal = document.getElementById(currentlyOpenModal);
    if (event.target === modal) {
      const projectId = currentlyOpenModal === 'modal1' ? 'project1' : 'project2';
      closeProjectModal(currentlyOpenModal, projectId);
    }
  }
};
