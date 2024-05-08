export default {
  els: {
    trigger: document.querySelector(".menu-trigger"),
    navbar: document.querySelector(".navbar"),
    dropdown_lists: [].slice.call(document.querySelector(".dropdown-list")),
    categories: [].slice.call(document.querySelectorAll(".nav-top-link")),
    sub_categories: [].slice.call(document.querySelectorAll(".has-submenu")),
    last_menu_item: document.querySelector(".top-menu-link:last-child"),
    html: document.querySelector("html")
  },

  isNavbarOpen() {
    return this.els.navbar.classList.contains("show");
  },

  openNavbar() {
    // get element by class page-header, set to display none
    document.getElementsByClassName("page-header-hide-on-mobile")[0].style.display = "none";

    this.els.html.classList.add("stuck");
    this.els.navbar.classList.add("show");
  },

  closeNavbar() {
    // get element by class page-header, set display to block
    document.getElementsByClassName("page-header-hide-on-mobile")[0].style.display = "block";

    this.closeAllMenus();
    this.els.navbar.classList.remove("show");
  },

  toggleNavbar() {
    this.isNavbarOpen() ? this.closeNavbar() : this.openNavbar();
  },

  handleCategoryToggle(category, ev) {
    this.categoryMenuIsOpen(category)
      ? this.hideCategoryMenu(category)
      : this.showCategoryMenu(category);
  },

  categoryMenuIsOpen(category) {
    return category.classList.contains("exposed");
  },

  showCategoryMenu(category) {
    this.closeAllMenus();
    this.els.html.classList.add("stuck");
    category.classList.add("exposed");
  },

  hideCategoryMenu(category) {
    this.closeAllMenus();
    category.classList.remove("exposed");
  },

  closeAllMenus() {
    this.resetOuterMenu();
    this.closeSubmenus();
    this.els.html.classList.remove("stuck");
  },

  resetOuterMenu() {
    this.els.categories.forEach(cat => cat.classList.remove("exposed"));
  },

  exposeSubmenu(submenu, grandparent) {
    submenu.classList.add("exposed");

    // add height fix on main dropdown list
    if(grandparent.classList.contains("height-fix")) {
      grandparent.classList.add("submenu-height-fix");
    }
  },

  closeSubmenus() {
    const open_subs = [].slice.call(
      document.querySelectorAll(".sub_level_list.exposed")
    );
    open_subs.forEach(sub => {
      sub.classList.remove("exposed");
      sub.parentElement.parentElement.parentElement.classList.remove("submenu-height-fix");
    });
  },

  init() {
    this.els.trigger.addEventListener("click", () => this.toggleNavbar());

    this.els.categories.forEach(category => {
      const category_menu = category.querySelector(".dropdown-list");

      if (!category_menu) {
        return;
      }

      const close_button = category_menu.querySelector(".inner-menu-close");
      close_button.addEventListener("click", ev => {
        ev.stopPropagation();
        this.resetOuterMenu();
      });

      category.addEventListener("click", ev => {
        if (category.querySelector(".dropdown-list").contains(ev.target)) {
          return;
        }
        this.handleCategoryToggle(category);
      });
    });

    this.els.sub_categories.forEach(sub_cat => {
      sub_cat.addEventListener("click", ev => {
        ev.stopPropagation();
        this.exposeSubmenu(sub_cat.querySelector(".sub_level_list"),sub_cat.parentElement.parentElement);
      });
    });

    const close_sub_buttons = [].slice.call(
      document.querySelectorAll(".sub-level-list-close")
    );
    close_sub_buttons.forEach(btn =>
      btn.addEventListener("click", ev => {
        ev.stopPropagation();
        this.closeSubmenus();
      })
    );

    document.body.addEventListener("click", ev => {
      if (!this.els.navbar.contains(ev.target)) {
        this.closeAllMenus();
      }
    });
  }
};
