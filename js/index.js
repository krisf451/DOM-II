// Your code goes here

// change color of heading on click
// const topHeader = document.querySelector(".logo-heading");
// topHeader.addEventListener("click", () => {
//   topHeader.style.color = "green";
// });

//1)flip the intro img upside down on mouseenter
const flipBus = document.querySelector(".intro img");
flipBus.addEventListener("mouseenter", e => {
  flipBus.style.transform = "scaleX(-1)";
  e.stopPropagation();
});
//2)flip back
const flipBack = document.querySelector(".intro img");
flipBack.addEventListener("mouseleave", e => {
  flipBus.style.transform = "scaleX(1)";
  e.stopPropagation();
});
//3)change the funbus img on double click
const changeImg = document.querySelector(".intro img");
changeImg.addEventListener("dblclick", e => {
  changeImg.src =
    "https://images.unsplash.com/photo-1457264635001-828d0cbd483e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  e.stopPropagation();
});

//4)Shrink img by 50% on mouseover
const midImgShrink = document.querySelector(".img-content img");
midImgShrink.addEventListener("mouseover", e => {
  midImgShrink.style.transform = "scale(0.5)";
  midImgShrink.style.transition = "all 0.3s";
  e.stopPropagation();
});
//5)Resize on mouse leave
const midImgGrow = document.querySelector(".img-content img");
midImgGrow.addEventListener("mouseleave", e => {
  midImgGrow.style.transform = "scale(.9)";
  midImgGrow.style.transition = "all 0.3s";
  e.stopPropagation();
});
