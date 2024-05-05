// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    navLists.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear Form before unload
window.onbeforeunload = () => {
  for (const Form of document.getElementsByTagName("form")) {
    Form.reset();
  }
};
