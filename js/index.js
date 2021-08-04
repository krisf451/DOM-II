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

//6)display none on the bottom img on click
const botImgNone = document.querySelector(".content-destination img");
botImgNone.addEventListener("click", e => {
  botImgNone.style.display = "none";
  e.stopPropagation();
});

//7)change color of heading on click
const topHeader = document.querySelector(".logo-heading");
topHeader.addEventListener("click", () => {
  topHeader.style.color = "green";
});
//8) change to black on dbl click
topHeader.addEventListener("dblclick", e => (topHeader.style.color = "black"));

//9) Change the first paragraph to 2rem on a window scroll
const growingParagraph = document.querySelector("p:nth-of-type(1)");
console.log(growingParagraph);
window.addEventListener(
  "scroll",
  e => (growingParagraph.style.fontSize = "2rem")
);

//10) event to add a message to the console on successful page load
window.addEventListener("load", e => {
  console.log("page successfully loaded");
});

// 11) mouse enter event to change the pictures in the body
const mouseImg = document.querySelector(".intro img");
mouseImg.addEventListener("mouseenter", () => {
  mouseImg.src =
    "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80";
});
const bodyImg = document.querySelector(".img-fluid");
bodyImg.addEventListener("mouseenter", () => {
  bodyImg.src =
    "https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";
});

// 12) scale the buttons on mouse over
const btnScale = document.querySelectorAll(".btn");
btnScale.forEach(btn => {
  btn.addEventListener("mouseover", e => {
    btn.style.transform = "scale(0.5)";
    btn.style.transition = "all 0.3s";
    e.stopPropagation();
  });
});
btnScale.forEach(btn => {
  btn.addEventListener("mouseleave", e => {
    btn.style.transform = "scale(1)";
    e.stopPropagation();
  });
});

// 13) change the width of a div on wheel scroll
const scaleDiv = document.querySelector(".text-content");
scaleDiv.addEventListener("wheel", e => {
  scaleDiv.style.width = "100px";
});
