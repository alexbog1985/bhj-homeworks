const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));

function onClickBtn(e) {
  e.stopPropagation();
  dropdownList.classList.toggle("dropdown__list_active");
}

function onClickLink(e) {
  console.log(e.target);
  e.preventDefault();
  e.stopPropagation();
  dropdownValue.textContent = e.target.textContent;
  dropdownList.classList.remove("dropdown__list_active");
}

dropdownValue.addEventListener("click", onClickBtn);
dropdownLinks.forEach((link) => {
  link.addEventListener("click", onClickLink);
});
