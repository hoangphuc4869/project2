const toggleBtn = document.getElementsByClassName("toggle_btn")[0];
const navbarlist = document.getElementsByClassName("navbar_list")[0];

toggleBtn.addEventListener("click", () => {
  navbarlist.classList.toggle("active");
});
