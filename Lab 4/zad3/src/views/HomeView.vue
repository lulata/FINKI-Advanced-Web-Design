<template>
  <div class="text-right">
    <button
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#cartModal"
    >
      Cart ({{ store.cartItems.length }})
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="cartModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="myModalLabel">Cart</h4>
        </div>
        <div class="modal-body">
          <ShoppingCart />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div
        class="col-xs-3 text-center"
        v-for="item in store.items"
        :key="item.id"
      >
        <img class="img-responsive" :src="item.image" />
        <h5>{{ item.title }}</h5>
        <h6>{{ store.formatCurrency(item.price) }}</h6>
        <p class="text-center">
          <input
            v-model="item.qty"
            type="number"
            class="form-control"
            placeholder="Qty"
            min="1"
          />
        </p>

        <button class="btn btn-sm btn-primary" @click="store.addToCard(item)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ShoppingCart from "@/components/ShoppingCart.vue";
import { generalStore } from "@/store/generalStore";

const store = generalStore();
</script>

<style>
.container {
  padding: 20px;
  max-width: 600px;
}

.input-qty {
  width: 60px;
  float: right;
}

.table-cart > tr > td {
  vertical-align: middle !important;
}
</style>
