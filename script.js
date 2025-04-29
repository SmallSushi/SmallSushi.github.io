/* Sidebar-as-tabs: show one section at a time, keep the URL hash in sync */
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = [...document.querySelectorAll("#sidebar .nav-link")];
    const sections = [...document.querySelectorAll("main section")];
  
    function showSection(id) {
      sections.forEach(sec => {
        sec.style.display = sec.id === id ? "block" : "none";
      });
    }
  
    function setActive(link) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  
    /* click → swap “tab” */
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const id = link.getAttribute("href").slice(1);
        setActive(link);
        showSection(id);
        history.replaceState(null, "", "#" + id);      // keep address bar tidy
      });
    });
  
    /* initial state: respect any hash or default to first section */
    const startID =
      location.hash && document.querySelector(location.hash)
        ? location.hash.slice(1)
        : sections[0].id;
    const startLink = navLinks.find(
      l => l.getAttribute("href").slice(1) === startID
    );
    setActive(startLink);
    showSection(startID);
  
    /* update footer year */
    document.getElementById("year").textContent = new Date().getFullYear();
  });
  