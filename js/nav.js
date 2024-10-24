const iconBurger = document.querySelector(".navigation_burger");
const navigationsBody = document.querySelector(".navigation_wrapper");
const navLinks = document.querySelectorAll(".navigation_link");

iconBurger.addEventListener("click", function () {
  document.body.classList.toggle("lock");
  iconBurger.classList.toggle("active");
  navigationsBody.classList.toggle("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    event.preventDefault();

    if (iconBurger.classList.contains("active")) {
      document.body.classList.remove("lock");
      iconBurger.classList.remove("active");
      navigationsBody.classList.remove("active");
    }

    const targetId = navLink.getAttribute("href").substring(1);
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});

const languageSwitcher = document.getElementById('languageSwitcher');
const elements = document.querySelectorAll('[data-lang]');

window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  languageSwitcher.value = savedLang;
  changeLanguage(savedLang);
});

languageSwitcher.addEventListener('change', (event) => {
  const selectedLang = event.target.value;
  localStorage.setItem('language', selectedLang);
  changeLanguage(selectedLang);
});

function changeLanguage(lang) {
  elements.forEach(el => {
    el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
  });
}
