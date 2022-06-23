const featuresSlides = document.querySelectorAll(".features__slide");
const featuresLinks = document.querySelectorAll(".features__link");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".navbar-collapse");
const navBrandImg = document.querySelector(".navbar-brand-img");
const footerFormInput = document.querySelector(".footer-form-input");
const footerFormBtn = document.querySelector(".footer-form-btn");
const footerForm = document.querySelector(".footer-form");

// Feature link on click
featuresLinks.forEach((link) => {
  link.onclick = function () {
    const slideToShow = document.querySelector(
      `.features__slide[data-slide="${link.dataset.slide}"]`
    );
    if (!slideToShow) return;

    featuresSlides.forEach((slide) => {
      slide.classList.remove("active");
    });

    featuresLinks.forEach((link) => {
      link.classList.remove("active");
    });

    slideToShow.classList.add("active");
    link.classList.add("active");
  };
});

// When nav menu is open
navbarToggler.onclick = function () {
  navbar.classList.toggle("active");
};

// Close mobile nav when navList has detected a click within it.
navList.onclick = () => {
  navbar.classList.remove("active");
  navList.classList.remove("show");
};

// Bootstrap Email Validation
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      form.classList.add("was-validated");

      // If new input comes in, then remove invalid feedback
      form.addEventListener("input", function () {
        form.classList.remove("was-validated");
      });
    },
    false
  );
});
