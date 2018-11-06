import Lightbox from "../js/lighbox/Lightbox";
import Menu from "../js/menu";
import Accordian from "../js/accordian";

if (document.querySelector(".article-content")) {
  let lightbox = new Lightbox(document.querySelector(".article-content"));
  lightbox.init();
}

Menu.init();
Accordian.init();

window.addEventListener("load", () => {
  document.querySelector("html").classList.remove("no-js");
});