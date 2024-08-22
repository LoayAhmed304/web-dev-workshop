const sections = document.querySelectorAll(".hidden-section");
const topBar = document.querySelector(".top-bar");

const options = {
  threshold: 0.1,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown-section");
    } else {
      entry.target.classList.remove("shown-section");
      entry.target.classList.add("hidden-section");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

let lastScrollTop;
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down -> hide it
    topBar.classList.add("hidden-top-bar");
  } else {
    // Scrolling up -> display it
    topBar.classList.remove("hidden-top-bar");
  }
  lastScrollTop = scrollTop;
});
