/* Highlight the active sidebar icon as the user scrolls */
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#sidebar .nav-link");
    const sections = [...document.querySelectorAll("main section")];
  
    function setActive() {
      const pos = window.scrollY + window.innerHeight / 3;
      sections.forEach((sec) => {
        const top = sec.offsetTop,
          bottom = top + sec.offsetHeight;
        const link = document.querySelector(`#sidebar a[href="#${sec.id}"]`);
        if (pos >= top && pos < bottom) {
          navLinks.forEach((l) => l.classList.remove("active"));
          link?.classList.add("active");
        }
      });
    }
  
    setActive();
    window.addEventListener("scroll", setActive);
  
    /* auto-update copyright */
    document.getElementById("year").textContent = new Date().getFullYear();
  });
  