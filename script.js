"use strict";

const servicesdropdown = document.querySelector(".servicesdropdown");
const toolsdropdown = document.querySelector(".toolsdropdown");
const dp1 = document.querySelector(".dp1");
const dp2 = document.querySelector(".dp2");
const body = document.querySelector("body");
const scrollToTop = document.querySelector(".scrollTop");
const features = document.querySelectorAll(".feature");
const projectheading = document.querySelector(".projectheading");
const projectdescription = document.querySelector(".projectdescription");
const projects = document.querySelectorAll(".projects");
const ourclients = document.querySelector(".ourclients");
const review = document.querySelectorAll(".review");
const recentblogheading = document.querySelector(".recentblogheading");
const recentblogdescription = document.querySelector(".recentblogdescription");
const blogs = document.querySelectorAll(".blog");
const getstartedheading = document.querySelector(".getstartedheading");
const getstarteddes = document.querySelector(".getstarteddes");
const getintouch = document.querySelector(".getintouch");
// console.log(dp1, dp2);

dp1.addEventListener("mouseenter", function () {
  servicesdropdown.classList.remove("none");
});

dp1.addEventListener("mouseleave", function () {
  servicesdropdown.classList.add("none");
});

dp2.addEventListener("mouseenter", function () {
  toolsdropdown.classList.remove("none");
});

dp2.addEventListener("mouseleave", function () {
  toolsdropdown.classList.add("none");
});
