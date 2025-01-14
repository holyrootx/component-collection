let navMenuBtn = document.querySelector(".nav-menu");
navMenuBtn.addEventListener("click",(e) => {
  let navItemContainers = document.querySelectorAll(".nav-item-container");
  navItemContainers.forEach((navItemContainer,index) => {
    
    console.log(navItemContainer);
    navItemContainer.classList.toggle("active");
  })
  
});