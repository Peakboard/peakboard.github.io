/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_lighbox_Lightbox__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_menu__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_accordian__ = __webpack_require__(5);




if (document.querySelector(".article-content")) {
  var lightbox = new __WEBPACK_IMPORTED_MODULE_0__js_lighbox_Lightbox__["a" /* default */](document.querySelector(".article-content"));
  lightbox.init();
}

__WEBPACK_IMPORTED_MODULE_1__js_menu__["a" /* default */].init();
__WEBPACK_IMPORTED_MODULE_2__js_accordian__["a" /* default */].init();

window.addEventListener("load", function () {
  document.querySelector("html").classList.remove("no-js");
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structure__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Lightbox = function () {
  function Lightbox(articleEl) {
    _classCallCheck(this, Lightbox);

    var lightbox = document.createElement("div");
    lightbox.classList.add("pk-lightbox");
    lightbox.innerHTML = __WEBPACK_IMPORTED_MODULE_0__structure__["a" /* default */];

    this.article = articleEl;
    this.lightbox = lightbox;
    this.article_images = [].slice.call(document.querySelectorAll(".article-content img"));
    this.gallery_image_ids = [];
    this.current_index = 0;
    this.is_open = false;
  }

  _createClass(Lightbox, [{
    key: "init",
    value: function init() {
      this.wrapArticleImages();
      this.createGalleryImages();
      this.setDataAttributes();
      this.setControlListeners();
      this.setImageListeners();
      this.addPageDots();
      this.article.appendChild(this.lightbox);
    }
  }, {
    key: "wrapArticleImages",
    value: function wrapArticleImages() {
      var _this = this;

      this.article_images.forEach(function (img) {
        return _this.wrapImage(img);
      });
    }
  }, {
    key: "wrapImage",
    value: function wrapImage(img) {
      var parent = img.parentNode;
      var wrapper = document.createElement("div");
      wrapper.innerHTML = "<div class=\"absolute flex items-center opacity-75 p-1 pin-b pin-r bg-grey-darkest text-white\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20px\" viewBox=\"0 0 30 30\">\n    <path d=\"M16,12h-2v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2v2c0,0.552,0.448,1,1,1\n      s1-0.448,1-1v-2h2c0.552,0,1-0.448,1-1S16.552,12,16,12z\"/>\n    <path d=\"M25.139,20.978l-4.052-4.053C21.666,15.737,22,14.408,22,13c0-4.962-4.038-9-9-9s-9,4.038-9,9s4.038,9,9,9\n      c1.408,0,2.737-0.334,3.925-0.914l4.053,4.053c0.574,0.573,1.327,0.859,2.08,0.859c0.754,0,1.507-0.287,2.081-0.86\n      C26.285,23.991,26.285,22.125,25.139,20.978z M6,13c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S6,16.86,6,13z M23.725,23.725\n      c-0.367,0.367-0.964,0.368-1.333,0l-3.734-3.734c0.489-0.397,0.936-0.844,1.333-1.333l3.734,3.735\n      C24.091,22.759,24.091,23.357,23.725,23.725z\"/>\n  </svg></div>\n  ";

      parent.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      wrapper.classList.add("image-wrapper");
    }
  }, {
    key: "createGalleryImages",
    value: function createGalleryImages() {
      var _this2 = this;

      this.article_images.forEach(function (img, index) {
        var gallery_image = new Image();
        gallery_image.src = img.src;
        gallery_image.classList.add("gallery-image");
        gallery_image.classList.add("z-50");
        gallery_image.setAttribute("id", "gallery-img-" + (index + 1));
        _this2.gallery_image_ids.push(index + 1);

        _this2.lightbox.appendChild(gallery_image);
      });
    }
  }, {
    key: "addPageDots",
    value: function addPageDots() {
      var dots_row = this.lightbox.querySelector(".lightbox-dots");
      this.article_images.forEach(function (img) {
        var dot = document.createElement("div");
        dot.className = "lightbox-dot";
        dots_row.appendChild(dot);
      });
    }
  }, {
    key: "setDataAttributes",
    value: function setDataAttributes() {
      this.article_images.forEach(function (img, id) {
        return img.setAttribute("data-img-id", id + 1);
      });
    }
  }, {
    key: "setControlListeners",
    value: function setControlListeners() {
      var _this3 = this;

      var close_btn = this.lightbox.querySelector(".close-lightbox");
      close_btn.addEventListener("click", function () {
        return _this3.closeLightbox();
      });

      var next = this.lightbox.querySelector(".lightbox-arrow.next");
      next.addEventListener("click", function () {
        return _this3.showNextImage();
      });

      var prev = this.lightbox.querySelector(".lightbox-arrow.prev");
      prev.addEventListener("click", function () {
        return _this3.showPrevImage();
      });

      document.body.addEventListener("keyup", function (_ref) {
        var keyCode = _ref.keyCode;
        return _this3.handleKeyPress(keyCode);
      });
    }
  }, {
    key: "setImageListeners",
    value: function setImageListeners() {
      var _this4 = this;

      this.article_images.forEach(function (img) {
        var img_id = img.getAttribute("data-img-id");
        img.addEventListener("click", function () {
          _this4.openLightbox(img_id);
        });
      });
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(pos) {
      this.current_index = this.gallery_image_ids.indexOf(parseInt(pos));
      this.is_open = true;
      this.showSelectedImage();
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.lightbox.classList.remove("open");
      this.is_open = false;
    }
  }, {
    key: "showNextImage",
    value: function showNextImage() {
      if (this.current_index < this.gallery_image_ids.length - 1) {
        this.current_index++;
      } else {
        this.current_index = 0;
      }

      this.showSelectedImage();
    }
  }, {
    key: "showPrevImage",
    value: function showPrevImage() {
      if (this.current_index > 0) {
        this.current_index--;
      } else {
        this.current_index = this.gallery_image_ids.length - 1;
      }

      this.showSelectedImage();
    }
  }, {
    key: "showSelectedImage",
    value: function showSelectedImage() {
      this.clearImageClasses();

      this.currentImage().classList.add("selected");
      this.currentDot().classList.add("current");

      this.lightbox.classList.add("open");
    }
  }, {
    key: "currentImage",
    value: function currentImage() {
      var id = this.gallery_image_ids[this.current_index];
      var selected_image = this.lightbox.querySelector("#gallery-img-" + id);

      return selected_image;
    }
  }, {
    key: "currentDot",
    value: function currentDot() {
      var dots = [].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"));
      return dots[this.current_index];
    }
  }, {
    key: "clearImageClasses",
    value: function clearImageClasses() {
      var gallery_images = [].slice.call(this.lightbox.querySelectorAll(".gallery-image"));
      gallery_images.forEach(function (gall_img) {
        return gall_img.classList.remove("selected");
      });

      var dots = [].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"));
      dots.forEach(function (dot) {
        return dot.classList.remove("current");
      });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(keyCode) {
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
  }]);

  return Lightbox;
}();

/* harmony default export */ __webpack_exports__["a"] = (Lightbox);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("\n        <div class=\"close-lightbox\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" height=\"24px\"><path d=\"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z\"/></svg>\n        </div>\n        <button class=\"lightbox-arrow next text-white hover:text-orange\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"30px\" viewBox=\"0 0 30 30\">\n\t<path d=\"M10,26c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L18.586,15L9.293,5.707\n\t\tc-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10c0.391,0.391,0.391,1.023,0,1.414l-10,10\n\t\tC10.512,25.902,10.256,26,10,26z\"/>\n</svg>\n        </button>\n        <button class=\"lightbox-arrow prev text-white hover:text-orange\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"30px\" viewBox=\"0 0 30 30\">\n\t<path d=\"M20,26c-0.256,0-0.512-0.098-0.707-0.293l-10-10c-0.391-0.391-0.391-1.023,0-1.414l10-10c0.391-0.391,1.023-0.391,1.414,0\n\t\ts0.391,1.023,0,1.414L11.414,15l9.293,9.293c0.391,0.391,0.391,1.023,0,1.414C20.512,25.902,20.256,26,20,26z\"/>\n</svg>\n\n        </button>\n        <div class=\"lightbox-dots\"></div>\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  els: {
    trigger: document.querySelector(".menu-trigger"),
    navbar: document.querySelector(".navbar"),
    categories: [].slice.call(document.querySelectorAll(".nav-top-link")),
    sub_categories: [].slice.call(document.querySelectorAll(".has-submenu")),
    last_menu_item: document.querySelector(".top-menu-link:last-child"),
    html: document.querySelector("html")
  },

  isNavbarOpen: function isNavbarOpen() {
    return this.els.navbar.classList.contains("show");
  },
  openNavbar: function openNavbar() {
    this.els.html.classList.add("stuck");
    this.els.navbar.classList.add("show");
  },
  closeNavbar: function closeNavbar() {
    this.closeAllMenus();
    this.els.navbar.classList.remove("show");
  },
  toggleNavbar: function toggleNavbar() {
    this.isNavbarOpen() ? this.closeNavbar() : this.openNavbar();
  },
  handleCategoryToggle: function handleCategoryToggle(category, ev) {
    this.categoryMenuIsOpen(category) ? this.hideCategoryMenu(category) : this.showCategoryMenu(category);
  },
  categoryMenuIsOpen: function categoryMenuIsOpen(category) {
    return category.classList.contains("exposed");
  },
  showCategoryMenu: function showCategoryMenu(category) {
    this.closeAllMenus();
    this.els.html.classList.add("stuck");
    category.classList.add("exposed");
  },
  hideCategoryMenu: function hideCategoryMenu(category) {
    this.closeAllMenus();
    category.classList.remove("exposed");
  },
  closeAllMenus: function closeAllMenus() {
    this.resetOuterMenu();
    this.closeSubmenus();
    this.els.html.classList.remove("stuck");
  },
  resetOuterMenu: function resetOuterMenu() {
    this.els.categories.forEach(function (cat) {
      return cat.classList.remove("exposed");
    });
  },
  exposeSubmenu: function exposeSubmenu(submenu) {
    submenu.classList.add("exposed");
  },
  closeSubmenus: function closeSubmenus() {
    var open_subs = [].slice.call(document.querySelectorAll(".sub_level_list.exposed"));
    open_subs.forEach(function (sub) {
      return sub.classList.remove("exposed");
    });
  },
  init: function init() {
    var _this = this;

    this.els.trigger.addEventListener("click", function () {
      return _this.toggleNavbar();
    });

    this.els.categories.forEach(function (category) {
      var category_menu = category.querySelector(".dropdown-list");

      if (!category_menu) {
        return;
      }

      var close_button = category_menu.querySelector(".inner-menu-close");
      close_button.addEventListener("click", function (ev) {
        ev.stopPropagation();
        _this.resetOuterMenu();
      });

      category.addEventListener("click", function (ev) {
        if (category.querySelector(".dropdown-list").contains(ev.target)) {
          return;
        }
        _this.handleCategoryToggle(category);
      });
    });

    this.els.sub_categories.forEach(function (sub_cat) {
      sub_cat.addEventListener("click", function (ev) {
        ev.stopPropagation();
        _this.exposeSubmenu(sub_cat.querySelector(".sub_level_list"));
      });
    });

    var close_sub_buttons = [].slice.call(document.querySelectorAll(".sub-level-list-close"));
    close_sub_buttons.forEach(function (btn) {
      return btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        _this.closeSubmenus();
      });
    });

    document.body.addEventListener("click", function (ev) {
      if (!_this.els.navbar.contains(ev.target)) {
        _this.closeAllMenus();
      }
    });
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  els: {
    accordian: document.querySelector(".accordian-nav"),
    accordian_triggers: [].slice.call(document.querySelectorAll(".accordian-trigger"))
  },

  closeCurrentlyOpenSections: function closeCurrentlyOpenSections(new_trigger) {
    this.els.accordian_triggers.forEach(function (trigger) {
      if (new_trigger !== trigger) {
        trigger.checked = false;
      }
    });
  },
  init: function init() {
    var _this = this;

    if (!this.els.accordian) {
      return;
    }
    this.els.accordian_triggers.forEach(function (accordian_trigger) {
      accordian_trigger.addEventListener("change", function (_ref) {
        var target = _ref.target;
        return _this.closeCurrentlyOpenSections(target);
      });
    });
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);