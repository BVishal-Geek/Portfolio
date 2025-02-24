'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");





// Select dropdown and filter items
const filterSelect = document.querySelector(".filter-select");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Function to filter projects
const filterProjects = (selectedCategory) => {
    filterItems.forEach(item => {
        const category = item.dataset.category.toLowerCase();

        if (selectedCategory === "all" || category === selectedCategory) {
            item.style.display = "block";  // Show matching projects
        } else {
            item.style.display = "none";  // Hide non-matching projects
        }
    });
};

// Handle dropdown selection
document.querySelectorAll("[data-select-item]").forEach(button => {
    button.addEventListener("click", function () {
        const selectedCategory = this.innerText.toLowerCase().trim();

        // Update dropdown text
        filterSelect.querySelector(".select-value").innerText = this.innerText;

        // Close dropdown
        filterSelect.classList.remove("active");

        // Apply filtering
        filterProjects(selectedCategory);
    });
});







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

// **Ensure all project items are visible by default**
document.querySelectorAll('.project-item').forEach(item => {
    item.style.display = "block";  // Make sure all projects show up
});

// Page navigation variables
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
        if (link.innerText.toLowerCase().trim() === selectedPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    window.scrollTo(0, 0);
};


document.querySelector(".filter-select").addEventListener("click", function () {
  this.classList.toggle("active"); // Toggles the dropdown visibility
});

document.querySelectorAll("[data-select-item]").forEach(item => {
  item.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents closing dropdown immediately
      document.querySelector(".filter-select").classList.remove("active");
  });
});

// Add event listener to each navigation link
navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
        const selectedPage = this.innerText.toLowerCase().trim();
        switchPage(selectedPage);
    });
});

// Ensure the default "About" page is active on page load
document.addEventListener("DOMContentLoaded", function () {
    switchPage("about");
});

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
    input.addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
});