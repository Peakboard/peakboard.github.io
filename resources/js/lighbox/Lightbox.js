import structure from "./structure";

export default class Lightbox {
  constructor(articleEl) {
    let lightbox = document.createElement("div");
    lightbox.classList.add("pk-lightbox");
    lightbox.innerHTML = structure;

    this.article = articleEl;
    this.lightbox = lightbox;
    this.article_images = [].slice.call(
      document.querySelectorAll(".article-content img:not(.lightbox-ignore)")
    );
    this.gallery_image_ids = [];
    this.current_index = 0;
    this.is_open = false;
  }

  init() {
    this.wrapArticleImages();
    this.createGalleryImages();
    this.setDataAttributes();
    this.setControlListeners();
    this.setImageListeners();
    this.addPageDots();
    this.article.appendChild(this.lightbox);
  }

  wrapArticleImages() {
    this.article_images.forEach(img => this.wrapImage(img));
  }

  wrapImage(img) {
    const parent = img.parentNode;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="absolute flex items-center opacity-75 p-1 bottom-0 right-0 bg-grey-darkest text-white"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 30 30">
    <path d="M16,12h-2v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2v2c0,0.552,0.448,1,1,1
      s1-0.448,1-1v-2h2c0.552,0,1-0.448,1-1S16.552,12,16,12z"/>
    <path d="M25.139,20.978l-4.052-4.053C21.666,15.737,22,14.408,22,13c0-4.962-4.038-9-9-9s-9,4.038-9,9s4.038,9,9,9
      c1.408,0,2.737-0.334,3.925-0.914l4.053,4.053c0.574,0.573,1.327,0.859,2.08,0.859c0.754,0,1.507-0.287,2.081-0.86
      C26.285,23.991,26.285,22.125,25.139,20.978z M6,13c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S6,16.86,6,13z M23.725,23.725
      c-0.367,0.367-0.964,0.368-1.333,0l-3.734-3.734c0.489-0.397,0.936-0.844,1.333-1.333l3.734,3.735
      C24.091,22.759,24.091,23.357,23.725,23.725z"/>
  </svg></div>
  `;

    parent.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.classList.add("image-wrapper");
  }

  createGalleryImages() {
    this.article_images.forEach((img, index) => {
      const gallery_image = new Image();
      gallery_image.src = img.src;
      gallery_image.classList.add("gallery-image");
      gallery_image.classList.add("z-50");
      gallery_image.setAttribute("id", `gallery-img-${index + 1}`);
      this.gallery_image_ids.push(index + 1);

      this.lightbox.appendChild(gallery_image);
    });
  }

  addPageDots() {
    const dots_row = this.lightbox.querySelector(".lightbox-dots");
    this.article_images.forEach(img => {
      const dot = document.createElement("div");
      dot.className = "lightbox-dot";
      dots_row.appendChild(dot);
    });
  }

  setDataAttributes() {
    this.article_images.forEach((img, id) =>
      img.setAttribute("data-img-id", id + 1)
    );
  }

  setControlListeners() {
    const close_btn = this.lightbox.querySelector(".close-lightbox");
    close_btn.addEventListener("click", () => this.closeLightbox());

    const next = this.lightbox.querySelector(".lightbox-arrow.next");
    next.addEventListener("click", () => this.showNextImage());

    const prev = this.lightbox.querySelector(".lightbox-arrow.prev");
    prev.addEventListener("click", () => this.showPrevImage());

    document.body.addEventListener("keyup", ({ keyCode }) =>
      this.handleKeyPress(keyCode)
    );
  }

  setImageListeners() {
    this.article_images.forEach(img => {
      const img_id = img.getAttribute("data-img-id");
      img.addEventListener("click", () => {
        this.openLightbox(img_id);
      });
    });
  }

  openLightbox(pos) {
    this.current_index = this.gallery_image_ids.indexOf(parseInt(pos));
    this.is_open = true;
    this.showSelectedImage();
  }

  closeLightbox() {
    this.lightbox.classList.remove("open");
    this.is_open = false;
  }

  showNextImage() {
    if (this.current_index < this.gallery_image_ids.length - 1) {
      this.current_index++;
    } else {
      this.current_index = 0;
    }

    this.showSelectedImage();
  }

  showPrevImage() {
    if (this.current_index > 0) {
      this.current_index--;
    } else {
      this.current_index = this.gallery_image_ids.length - 1;
    }

    this.showSelectedImage();
  }

  showSelectedImage() {
    this.clearImageClasses();

    this.currentImage().classList.add("selected");
    this.currentDot().classList.add("current");

    this.lightbox.classList.add("open");
  }

  currentImage() {
    const id = this.gallery_image_ids[this.current_index];
    const selected_image = this.lightbox.querySelector(`#gallery-img-${id}`);

    return selected_image;
  }

  currentDot() {
    const dots = [].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"));
    return dots[this.current_index];
  }

  clearImageClasses() {
    const gallery_images = [].slice.call(
      this.lightbox.querySelectorAll(".gallery-image")
    );
    gallery_images.forEach(gall_img => gall_img.classList.remove("selected"));

    const dots = [].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"));
    dots.forEach(dot => dot.classList.remove("current"));
  }

  handleKeyPress(keyCode) {
    if (!this.is_open) {
      return;
    }
    switch (keyCode) {
      case 27:
        this.closeLightbox();
        break;
      case 37:
        this.showPrevImage();
        break;
      case 39:
        this.showNextImage();
        break;

      default:
        break;
    }
  }
}
