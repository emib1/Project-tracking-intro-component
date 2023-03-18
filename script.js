const closeBtn = document.querySelector(".close"),
openBtn = document.querySelector(".open"),
mobileNav = document.querySelector(".mobile-nav");

closeBtn.classList.add("hide");
mobileNav.classList.add("hide");

openBtn.addEventListener("click", () =>{
    openBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
    mobileNav.classList.remove("hide");
});

closeBtn.addEventListener("click", () =>{
    openBtn.classList.remove("hide");
    closeBtn.classList.add("hide");
    mobileNav.classList.add("hide");
});