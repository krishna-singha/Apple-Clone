const hamLogo = document.querySelector(".hamburger");
const headerElement = document.querySelector("#navbar");

hamLogo.addEventListener("click", () => {
    headerElement.classList.toggle("active");
})