'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Add click event to all modal items
testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    });
});

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// **Fix: Show all project items by default**
document.querySelectorAll('.project-item').forEach(item => {
    item.style.display = "block";  // Ensure all projects are visible
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links for page switching
navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
        const pageName = this.innerHTML.toLowerCase().trim();

        pages.forEach(page => {
            if (page.dataset.page === pageName) {
                page.classList.add("active");
                link.classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
                navigationLinks.forEach(nav => nav.classList.remove("active"));
            }
        });

        this.classList.add("active"); // Keep the active tab highlighted
    });
});



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Select navigation links and pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Function to switch active page
const switchPage = function (selectedPage) {
  pages.forEach(page => {
    if (page.dataset.page === selectedPage) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  navigationLinks.forEach(link => {
    if (link.innerText.toLowerCase() === selectedPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  window.scrollTo(0, 0);
};

// Add event listener to each navigation link
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const selectedPage = this.innerText.toLowerCase();
    switchPage(selectedPage);
  });
});

// Ensure the default "About" page is active on page load
document.addEventListener("DOMContentLoaded", function () {
  switchPage("about");
});