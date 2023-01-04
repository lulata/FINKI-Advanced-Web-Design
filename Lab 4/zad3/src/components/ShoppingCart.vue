<template>
  <div>
    <table class="table table-cart">
      <tr v-for="(item, index) in store.cartItems" :key="item.id">
        <td>{{ item.title }}</td>
        <td style="width: 120px">
          QTY:
          <input
            v-model="item.qty"
            class="form-control input-qty"
            type="number"
          />
        </td>
        <td class="text-right">{{ store.formatCurrency(item.price) }}</td>
        <td>
          <button @click="store.removeItemFromCart(index)">
            <span> Remove </span>
          </button>
        </td>
      </tr>
      <tr v-show="store.cartItems.length === 0">
        <td colspan="4" class="text-center">Cart is empty</td>
      </tr>
      <tr v-show="store.cartItems.length > 0">
        <td></td>
        <td class="text-right">Cart Total</td>
        <td class="text-right">{{ store.formatCurrency(Total) }}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { generalStore } from "@/store/generalStore";
import { computed } from "vue";

const store = generalStore();

const Total = computed(() => {
  return store.cartItems.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);
});
</script>
