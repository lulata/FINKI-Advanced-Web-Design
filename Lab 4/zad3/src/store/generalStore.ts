import { defineStore } from "pinia";

type Item = {
  id: number;
  title: string;
  price: number;
  qty: number;
  image: string;
};

export const generalStore = defineStore("generalStore", {
  state: () => {
    return {
      items: <Item[]>[
        {
          id: 1,
          title: "LenovoThinkpad x280",
          price: 1000.0,
          qty: 1,
          image: "/img/ThinkPad_x280.png",
        },
        {
          id: 2,
          title: "Apple Macbook Pro",
          price: 2500.0,
          qty: 1,
          image: "/img/MacBook-Pro.png",
        },
        {
          id: 3,
          title: "Amazon Kindle Ebook",
          price: 150.0,
          qty: 1,
          image: "/img/Amazon_Kindle.png",
        },
        {
          id: 4,
          title: "USB-C to HDMI cable",
          price: 10,
          qty: 1,
          image: "/img/usbC_to_hdmi.jpg",
        },
      ],
      cartItems: <Item[]>[],
    };
  },
  getters: {},
  actions: {
    addToCard(item: Item) {
      const flag = this.cartItems.some((cartItem) => cartItem.id === item.id);
      if (flag) {
        this.cartItems.forEach((cartItem) => {
          if (cartItem.id === item.id) {
            cartItem.qty += item.qty;
          }
        });
      } else {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }

      this.items.forEach((itemSearch) => {
        if (itemSearch.id === item.id) {
          itemSearch.qty = 1;
        }
      });
    },
    removeItemFromCart(index: number) {
      this.cartItems.splice(index, 1);
    },
    formatCurrency(value: number) {
      return "$" + value.toFixed(2);
    },
  },
});
