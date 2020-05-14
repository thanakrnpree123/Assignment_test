<template>
<div class="container" >
  <div class="row" >
    <app-product-item v-for="prod in products" :item="prod" :key="prod.id" ></app-product-item>
  </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './product/ProductItem.vue';

export default {
  computed: {
    ...mapGetters(['products']),
  },
  components: {
    appProductItem: ProductItem,
  }
}
</script>

<style>
</style>
