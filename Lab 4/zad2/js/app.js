const products = [
  {
    id: 1,
    title: "LenovoThinkpad x280",
    price: 1000.0,
    qty: 1,
    image: "./img/ThinkPad_x280.png",
  },
  {
    id: 2,
    title: "Apple Macbook Pro",
    price: 2500.0,
    qty: 1,
    image: "./img/MacBook-Pro.png",
  },
  {
    id: 3,
    title: "Amazon Kindle Ebook",
    price: 150.0,
    qty: 1,
    image: "./img/Amazon_Kindle.png",
  },
  {
    id: 4,
    title: "USB-C to HDMI cable",
    price: 10,
    qty: 1,
    image: "./img/usbC_to_hdmi.jpg",
  },
];

// Your Code goes here

const store = Vuex.createStore({
  state() {
    return {
      items: products,
      cartItems: [],
    };
  },
  mutations: {
    addToCard(state, item) {
      const flag = state.cartItems.some((cartItem) => cartItem.id === item.id);
      if (flag) {
        state.cartItems.forEach((cartItem) => {
          if (cartItem.id === item.id) {
            cartItem.qty += item.qty;
          }
        });
      } else {
        state.cartItems.push(JSON.parse(JSON.stringify(item)));
      }

      state.items.forEach((itemSearch) => {
        if (itemSearch.id === item.id) {
          itemSearch.qty = 1;
        }
      });
    },
    removeItemFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
  },
});

const app = Vue.createApp({
  data() {
    return {
      store: store,
    };
  },
  methods: {
    addToCard(item) {
      this.store.commit("addToCard", item);
    },
    formatCurrency(value) {
      return "$" + value.toFixed(2);
    },
  },
});

app.component("shopping-cart", {
  props: ["items"],
  data() {
    return {
      store: store,
    };
  },
  template: `<div>
  <table class="table table-cart">
                        <tr v-for="(item, index) in items">
                           <td>{{item.title}}</td>
                           <td style="width:120px">QTY:
                              <input v-model="item.qty" class="form-control input-qty" type="number">
                           </td>
                           <td class="text-right">{{formatCurrency(item.price) }}</td>
                           <td>
                              <button @click="removeItem(index)"><span> Remove </span></button>
                           </td>
                        </tr>
                        <tr v-show="items.length === 0">
                           <td colspan="4" class="text-center">Cart is empty</td>
                        </tr>
                        <tr v-show="items.length > 0">
                           <td></td>
                           <td class="text-right">Cart Total</td>
                           <td class="text-right">{{ formatCurrency(Total)}}</td>
                           <td></td>
                        </tr>
                     </table>
					 </div>`,
  methods: {
    removeItem(index) {
      this.store.commit("removeItemFromCart", index);
    },
    formatCurrency(value) {
      return "$" + value.toFixed(2);
    },
  },
  computed: {
    Total() {
      let sum = 0;
      this.items.forEach((item) => {
        sum += item.price * item.qty;
      });
      return sum;
    },
  },
});

app.use(store);
app.mount("#app");
