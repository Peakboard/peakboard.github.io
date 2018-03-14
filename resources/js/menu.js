export default {
  els: {
    trigger: document.querySelector(".menu-trigger"),
    navbar: document.querySelector(".navbar"),
    categories: [].slice.call(document.querySelectorAll(".nav-top-link")),
    sub_categories: [].slice.call(document.querySelectorAll(".has-submenu")),
    last_menu_item: document.querySelector(".top-menu-link:last-child"),
    html: document.querySelector("html")
  },

  isNavbarOpen() {
    return this.els.navbar.classList.contains("show");
  },

  openNavbar() {
    this.els.html.classList.add("stuck");
    this.els.navbar.classList.add("show");
  },

  closeNavbar() {
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

  exposeSubmenu(submenu) {
    submenu.classList.add("exposed");
  },

  closeSubmenus() {
    const open_subs = [].slice.call(
      document.querySelectorAll(".sub_level_list.exposed")
    );
    open_subs.forEach(sub => sub.classList.remove("exposed"));
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
        this.exposeSubmenu(sub_cat.querySelector(".sub_level_list"));
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
