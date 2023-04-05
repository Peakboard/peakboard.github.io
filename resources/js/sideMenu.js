export default {
    elements: {
        products: document.querySelectorAll(".side-menu-product"),
        categories: document.querySelectorAll(".side-menu-category"),
        subCategories: document.querySelectorAll(".side-menu-subcategory")
    },

    init() {
        for(let product of this.elements.products) {
            product.addEventListener("click", () => this.toggleNavbarProduct(product));
        }

        for(let category of this.elements.categories) {
            category.addEventListener("click", () => this.toggleNavbarCategory(category));
        }

        for(let subCategory of this.elements.subCategories) {
            subCategory.addEventListener("click", () => this.toggleNavbarSubCategory(subCategory));
        }

        // open up initial product side menu
        const currentProduct = document.querySelectorAll(".side-menu-product-current")[0];

        if(currentProduct) {
            currentProduct.classList.add("show");
            currentProduct.nextElementSibling.classList.remove("hidden");
        }
    },

    toggleNavbarProduct(el) {

        // close all other products
        this.elements.products.forEach(product => {
            if(product !== el) {
                product.classList.remove("show");
                if(product.nextElementSibling) {
                    product.nextElementSibling.classList.add("hidden");
                }
            }
        });

        // check if product isn't already visible. If it is, do nothing
        if(el.classList.contains("show")) return;

        // add show and open up menu by removing hidden from next element sibling
        el.classList.add("show");
        if(el.nextElementSibling) {
            el.nextElementSibling.classList.remove("hidden");
        }
    },

    toggleNavbarCategory(el) {
        el.classList.toggle("show");
        if(el.nextElementSibling) {
            el.nextElementSibling.classList.toggle("hidden");
        }
        if(el.querySelector('.side-menu-icon')) el.querySelector('.side-menu-icon').classList.toggle("text-orange");
        if(el.querySelector('.side-menu-title')) el.querySelector('.side-menu-title').classList.toggle("text-orange");
    },

    toggleNavbarSubCategory(el) {
        el.classList.toggle("show");

        if(el.querySelector('svg')) {
            el.querySelector('svg').classList.toggle("text-gray-600");
            el.querySelector('svg').classList.toggle("text-orange");
            el.querySelector('svg').classList.toggle("rotate-180");
            el.querySelector('svg').classList.toggle("-rotate-90");
        }

        if(el.nextElementSibling) {
            el.nextElementSibling.classList.toggle("hidden");
        }
    }
}