class ShoppingCart {
    constructor(containerId, totalCostId) {
      this.shoppingCart = document.getElementById(containerId);
      this.items = this.shoppingCart.getElementsByClassName("box");
      this.totalPriceElement = document.getElementById(totalCostId);
      this.total = 0;
      this.init();
    }
  
    init() {
      for (let i = 0; i < this.items.length; i++) {
        this.setupItem(this.items[i]);
      }
  
      $(".heart.fa").click(function () {
        $(this).toggleClass("fa-heart fa-heart-o");
      });
    }
  
    setupItem(item) {
      const minus = item.getElementsByClassName("minus")[0];
      const plus = item.getElementsByClassName("plus")[0];
      const quantityInput = item.getElementsByTagName("input")[0];
      const deleteBtn = item.getElementsByClassName("delete-btn")[0];
      const price = parseInt(item.getElementsByClassName("price")[0].innerText.substring(1));
  
      minus.addEventListener("click", () => this.decreaseQuantity(quantityInput, price));
      plus.addEventListener("click", () => this.increaseQuantity(quantityInput, price));
      deleteBtn.addEventListener("click", () => this.deleteItem(item, quantityInput, price));
    }
  
    decreaseQuantity(quantityInput, price) {
      if (quantityInput.value > 1) {
        quantityInput.value--;
        this.total -= price;
        this.updateTotalPrice();
      }
    }
  
    increaseQuantity(quantityInput, price) {
      quantityInput.value++;
      this.total += price;
      this.updateTotalPrice();
    }
  
    deleteItem(item, quantityInput, price) {
      item.remove();
      this.total -= price * quantityInput.value;
      this.updateTotalPrice();
    }
  
    updateTotalPrice() {
      this.totalPriceElement.innerText = `Total Price: $${this.total}`;
    }
  }
  
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const shoppingCart = new ShoppingCart("container", "total-cost");
  });
  