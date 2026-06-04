let currentLang = localStorage.getItem("siteLang") || "ar";

function applyLang() {
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar][data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });

  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
    if (currentLang === "en") {
      if (el.placeholder.includes("مثال")) el.placeholder = "Example: write here...";
      else el.placeholder = "Write here...";
    }
  });
}

function toggleLang() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("siteLang", currentLang);
  applyLang();
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");

  const pages = ["home", "map", "suggestions", "reports"];
  const index = pages.indexOf(pageId);
  const navButtons = document.querySelectorAll(".nav-btn");

  if (index >= 0 && navButtons[index]) navButtons[index].classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function successMessage(messageAr, messageEn = "Submitted successfully") {
  const toast = document.getElementById("toast");
  toast.textContent = currentLang === "ar" ? messageAr : messageEn;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}

function setupForms() {
  const suggestionForm = document.getElementById("suggestionForm");
  const reportForm = document.getElementById("reportForm");

  if (suggestionForm) {
    suggestionForm.addEventListener("submit", function(e) {
      e.preventDefault();
      successMessage("تم رفع الاقتراح بنجاح", "Suggestion submitted successfully");
      suggestionForm.reset();
    });
  }

  if (reportForm) {
    reportForm.addEventListener("submit", function(e) {
      e.preventDefault();
      successMessage("تم رفع البلاغ بنجاح", "Report submitted successfully");
      reportForm.reset();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  applyLang();
  setupForms();

  if (location.hash === "#suggestions") showPage("suggestions");
  if (location.hash === "#reports") showPage("reports");
});


