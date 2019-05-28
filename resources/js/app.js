import Lightbox from "../js/lighbox/Lightbox";
import Menu from "../js/menu";
import Accordian from "../js/accordian";

if (document.querySelector(".article-content")) {
  let lightbox = new Lightbox(document.querySelector(".article-content"));
  lightbox.init();
}

if(document.querySelector(".cta")) {
  document.querySelector("footer").classList.remove("mt-16");
}

Menu.init();
Accordian.init();

window.addEventListener("load", () => {
  document.querySelector("html").classList.remove("no-js");
});

document.getElementById("top-menu-search-button").onclick = function(e) {
  if(this.type !== 'submit') {
    this.setAttribute("type", "submit");
    document.getElementById('top-menu-search-input').classList.toggle('show');
    document.getElementById('top-menu-search-input-field').focus();
    e.preventDefault();
  }
};