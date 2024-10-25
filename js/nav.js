const iconBurger = document.querySelector(".navigation_burger");
const navigationsBody = document.querySelector(".navigation_wrapper");
const navLinks = document.querySelectorAll(".navigation_link");
const languageSwitcher = document.getElementById('languageSwitcher');
const elements = document.querySelectorAll('[data-lang]');
const sections = document.querySelectorAll("section");

// Логіка для відкриття/закриття бургер-меню
iconBurger.addEventListener("click", function () {
  document.body.classList.toggle("lock");
  iconBurger.classList.toggle("active");
  navigationsBody.classList.toggle("active");
});

// Обробка кліків на навігаційні посилання
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    event.preventDefault();

    // Закриваємо бургер-меню після кліку на посилання
    if (iconBurger.classList.contains("active")) {
      document.body.classList.remove("lock");
      iconBurger.classList.remove("active");
      navigationsBody.classList.remove("active");
    }

    // Показуємо відповідну секцію та ховаємо інші
    const targetId = navLink.getAttribute("href").substring(1);
    sections.forEach((section) => {
      section.style.display = section.id === targetId ? "block" : "none";
    });

    // Підсвічуємо активне посилання
    setActiveLink(navLink);
  });
});

// Зберігання вибраної мови в localStorage
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

// Зміна видимості елементів відповідно до вибраної мови
function changeLanguage(lang) {
  elements.forEach((el) => {
    el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
  });
}

// Підсвічування активного посилання
function setActiveLink(activeLink) {
  navLinks.forEach((link) => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Підсвічуємо активне посилання при завантаженні сторінки (якщо URL містить хеш)
window.addEventListener('load', () => {
  const currentHash = window.location.hash.substring(1); // Забираємо '#' з початку хешу

  if (currentHash) {
    const targetSection = document.getElementById(currentHash);
    if (targetSection) {
      sections.forEach((section) => {
        section.style.display = section.id === currentHash ? "block" : "none";
      });

      const activeLink = Array.from(navLinks).find((link) =>
          link.getAttribute("href").substring(1) === currentHash
      );

      if (activeLink) setActiveLink(activeLink);
    }
  } else {
    // Якщо хешу немає, показуємо першу секцію
    sections.forEach((section, index) => {
      section.style.display = index === 0 ? "block" : "none";
    });
    setActiveLink(navLinks[0]);
  }
});
