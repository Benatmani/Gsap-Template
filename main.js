gsap.registerPlugin(ScrollTrigger);
// GSAP Work
let count = document.querySelectorAll(
  ".services .service-counter .box .counter h2"
);

let navBar = gsap.timeline({ delay: 0.3 });
navBar.from(".logo", { x: -100, duration: 1 });
navBar.from("header nav ul li a", {
  scale: 0.1,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
});
navBar.from("header .content", { y: "-200%", duration: 2, ease: "back" });
// typeWritter H1
let dis = document.querySelector(".typeWritter");
let disWidth = dis.offsetWidth;
dis.style.width = "0px";
gsap.to(".typeWritter", { duration: 3, width: `${disWidth}`, delay: 4 });

gsap.from(".about .imagebox img", {
  duration: 2,
  x: -100,
  scrollTrigger: {
    trigger: ".about .imagebox img",
    start: "top 75%",
  },
});
gsap.from("#about .content", {
  duration: 1,
  y: 100,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
  },
});

gsap.from(".services .box-services .box", {
  scrollTrigger: {
    trigger: ".services .box-services .box",
    start: "top 75%",
  },
  y: 100,
  stagger: 0.2,
  duration: 0.5,
});

gsap.from(".services .service-counter .box", {
  scrollTrigger: {
    trigger: ".services .service-counter .box",
    start: "top 75%",
  },
  duration: 0.8,
  scale: 0.1,
  stagger: 0.1,
  onStart: () => {
    count.forEach((item) => startCount(item));
  },
});
gsap.to(".portofolio .box-work .box", {
  scrollTrigger: {
    trigger: ".portofolio .box-work .box",
    start: "top 75%",
  },
  stagger: 0.2,
  duration: 1,
  rotationY: 0,
});

gsap.from(".blog .box", {
  scrollTrigger: {
    trigger: ".blog .box",
    start: "top center",
  },
  stagger: 0.2,
  x: -100,
  duration: 1,
});
gsap.from(".pricing .box", {
  y: 100,
  duration: 2,
  ease: "back",
  scrollTrigger: {
    trigger: ".pricing .box",
    start: "top 75%",
  },
});
// End typeWritter

// JavaScript Work
let nav = document.querySelector("nav");
document.addEventListener("scroll", () => {
  if (scrollY >= nav.offsetHeight) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

let tabs = document.querySelectorAll(".about .content .tabs li");
let tabContent = document.querySelectorAll(
  ".about .content .content-tabs >div"
);

var dataS;
function removeAllActiveClassses(ele) {
  tabs.forEach((item) => {
    item.classList.remove("active");
    ele.currentTarget.classList.add("active");
  });
  dataS = ele.currentTarget.dataset.tabs;
}

function showContent(e) {
  tabContent.forEach((item) => {
    item.classList.remove("active-tab");
  });
  document.querySelector(dataS).classList.add("active-tab");
}
tabs.forEach((item) => {
  item.addEventListener("click", removeAllActiveClassses);
  item.addEventListener("click", showContent);
});

// menu Display
let bars = document.querySelector(".bars");
let menu = document.querySelector("header nav ul");
bars.onclick = () => {
  menu.classList.toggle("active");
};

let card = document.querySelectorAll(".testimonial .container .box");
card.forEach((item, index) => {
  item.style.left = `${400 * index + 10}px`;
});
let position = 0;

let widthBox = card[1].offsetWidth;

// Increment count

function startCount(count) {
  let dataCount = count.dataset.count;
  let second = 2000 / dataCount;
  let increment = setInterval(() => {
    count.textContent++;
    if (count.textContent === dataCount) {
      clearInterval(increment);
    }
  }, second);
}
