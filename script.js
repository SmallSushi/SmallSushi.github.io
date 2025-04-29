// ===== Portfolio Sidebar Navigation =====
// Toggle content sections based on sidebar clicks.
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#sidebarNav .nav-link');
    const sections = document.querySelectorAll('.content-section');
  
    // Helper: show selected section, hide others
    function showSection(id) {
      sections.forEach(sec => {
        if (sec.id === id) {
          sec.classList.remove('d-none');
        } else {
          sec.classList.add('d-none');
        }
      });
    }
  
    // Bind click events
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        // Update active state
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Show corresponding section
        showSection(link.dataset.target);
        // If on mobile, scroll to top for better UX
        if (window.innerWidth < 768) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  
    // Show default section on load
    showSection('bio');
  });
  