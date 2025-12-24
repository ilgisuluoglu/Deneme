(() => {
  // Year
  const y = document.getElementById("yil");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("[data-nav]");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Demo form (if exists)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.getElementById("formNote");
      if (note) note.textContent = "Mesaj alınmıştır (demo). Gerçek gönderim için form entegrasyonu yapılmalıdır.";
    });
  }
})();
