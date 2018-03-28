export default {
  els: {
    accordian: document.querySelector(".accordian-nav"),
    accordian_triggers: [].slice.call(
      document.querySelectorAll(".accordian-trigger")
    )
  },

  closeCurrentlyOpenSections(new_trigger) {
    this.els.accordian_triggers.forEach(trigger => {
      if (new_trigger !== trigger) {
        trigger.checked = false;
      }
    });
  },

  init() {
    if (!this.els.accordian) {
      return;
    }
    this.els.accordian_triggers.forEach(accordian_trigger => {
      accordian_trigger.addEventListener("change", ({ target }) =>
        this.closeCurrentlyOpenSections(target)
      );
    });
  }
};
