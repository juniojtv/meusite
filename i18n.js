const translations = {
  "pt-br": {
    pageTitle: "Junior Vidal",
    welcomeHeading: "Bem-vindo ao meu site!",
    aboutHeading: "Sobre mim",
    aboutText: "Apaixonado por quebra-cabeças.",
    mediaHeading: "Minhas mídias",
    bannerAlt: "Imagem de paisagem",
    photoAlt: "Minha Foto"
  },
  "en": {
    pageTitle: "Junior Vidal",
    welcomeHeading: "Welcome to my site!",
    aboutHeading: "About me",
    aboutText: "Passionate about puzzles.",
    mediaHeading: "My media",
    bannerAlt: "Landscape image",
    photoAlt: "My Photo"
  }
};

function applyTranslations(lang) {
  if (!translations[lang]) lang = "pt-br";

  document.documentElement.lang = lang;
  document.title = translations[lang].pageTitle;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    let key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    let key = el.dataset.i18nAlt;
    if (translations[lang][key] !== undefined) {
      el.alt = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("preferred-lang", lang);
}

function detectLanguage() {
  let saved = localStorage.getItem("preferred-lang");
  if (saved && translations[saved]) return saved;
  let browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
  if (browserLang.startsWith("en")) return "en";
  return "pt-br";
}

document.addEventListener("DOMContentLoaded", function () {
  applyTranslations(detectLanguage());

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      applyTranslations(btn.dataset.lang);
    });
  });
});
