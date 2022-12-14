const header = document.getElementById("header");
const goToContent = document.getElementById("go-to-content");
let navigationLis = document.querySelector(".nav").children;

navLis = [...navigationLis];

document.getElementById("to-top").setAttribute("tabIndex", "-1");

let is_first = true;
window.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    if (is_first) {
      goToContent.removeAttribute("hidden");
      setTimeout(() => {
        goToContent.setAttribute("hidden", "");
      }, 2000);
    } else {
      goToContent.setAttribute("hidden", "");
    }
    is_first = false;
  } else if (e.key === "Enter") {
    goToContent.click();
    goToContent.setAttribute("hidden", "");
  }
});

window.addEventListener("scroll", (e) => {
  if (scrollY > 10) {
    header.style.backgroundColor = "rgba(0, 0, 0, .2)";
    navLis.forEach((ele) => {
      ele.children[0].style.color = "white";
      ele.children[0].style.backgroundColor = "black";
    });
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    navLis.forEach((ele) => {
      ele.children[0].style.color = "black";
      ele.children[0].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });
  }
});

//
//
//
const aside = document.getElementById("aside");

function showAside() {
  aside.removeAttribute("hidden");
}

function closeAside() {
  aside.setAttribute("hidden", "");
}

let slideToRight = document.querySelectorAll(".slide-toRight");
window.addEventListener("scroll", (e) => {
  slideToRight.forEach((ele) => {
    if (isVisible(ele)) {
      ele.style.animationName = "slideIn-toRight";
    }
  });
});

let slideToLeft = document.querySelectorAll(".slide-toLeft");
window.addEventListener("scroll", (e) => {
  slideToLeft.forEach((ele) => {
    if (isVisible(ele)) {
      ele.style.animationName = "slideIn-toLeft";
    }
  });
});

let fadeIn = document.querySelectorAll(".fadeIn");
window.addEventListener("scroll", (e) => {
  fadeIn.forEach((ele) => {
    if (isVisible(ele)) {
      ele.style.animationName = "fadeIn";
    }
  });
});

function isVisible(ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}
