const sections = document.querySelectorAll(".hidden-section");

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
