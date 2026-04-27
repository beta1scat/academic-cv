const toggles = Array.from(document.querySelectorAll(".lang-toggle"));
const body = document.body;
const storageKey = "beta1scat-github-io-lang";
const previewTriggers = Array.from(document.querySelectorAll(".publication-figure"));
const lightbox = document.querySelector(".image-lightbox");
const lightboxBackdrop = document.querySelector(".lightbox-backdrop");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxImage = document.querySelector(".lightbox-image");

function setLanguage(lang) {
  body.dataset.lang = lang;
  toggles.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.setLang === lang);
  });
  localStorage.setItem(storageKey, lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
}

const initialLang = localStorage.getItem(storageKey) || "en";
setLanguage(initialLang);

toggles.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
});

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  body.style.overflow = "";
}

function openLightbox(trigger) {
  if (!lightbox || !lightboxImage) {
    return;
  }
  lightboxImage.src = trigger.dataset.previewImage;
  lightboxImage.alt = trigger.dataset.previewAlt || trigger.querySelector("img")?.alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
  lightboxClose?.focus();
}

previewTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openLightbox(trigger);
  });
});

lightboxBackdrop?.addEventListener("click", closeLightbox);
lightboxClose?.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
});
