<template>
  <div class="container table-responsive">
    <table id="cart" class="table table-hover table-sm">
      <thead>
        <tr>
          <th style="width:50%">สินค้า</th>
          <th style="width:10%">ราคา</th>
          <th style="width:8%">จำนวน</th>
          <th style="width:22%" class="text-center">ราคา/หน่วย</th>
          <th style="width:10%"></th>
        </tr>
      </thead>
      <tbody v-if="cartItemList == 0">
          <tr>
              <td colspan="100%" class="text-center text-danger"> <h4 >ยังไม่ได้เลือกสินค้า</h4> </td>
          </tr>
      </tbody>

      <transition-group name="list-shopping-cart" tag="tbody" v-else>
        <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>
      </transition-group>

      <tfoot>
        <tr class="d-table-row d-sm-none">
          <td class="text-center"></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2" class="d-none d-sm-table-cell"></td>
          <td class="d-none d-sm-table-cell text-center">
            <input v-model="discount" type="text" class="form-control text-center" />
          </td>
          <td class="px-0">
            <button class="btn btn-success" v-on:click="useCode">
              <span class="text-nowrap">ใช้โค้ด <i class="fa fa-angle-right d-inline"></i></span>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-warning" @click="saveShoppingCartLocal"><i class="fa fa-angle-left"></i> กลับไปหน้ารายการสินค้า</button>
          </td>
          <td colspan="2" class="d-none d-sm-table-cell"></td>
          <td class="d-none d-sm-table-cell text-center">
            <strong >ทั้งสิ้น {{ cartValue.toFixed(2) }} บาท</strong>
<br>
           <strong v-if="total !=0" >ส่วนลด {{ (cartValue*discountValue).toFixed(2) }} บาท

               <br>
               <br>
              <u>รวมทั้งหมด {{total}} บาท</u>
           </strong>


          </td>
          <td class="px-0">
            <button class="btn btn-info" @click="checkout">
              <span class="text-nowrap">ดำเนินการต่อ <i class="fa fa-angle-right d-inline"></i></span>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItem from './cart/CartItem.vue';
export default {
  computed: {
    ...mapGetters(['cartItemList', 'products', 'cartValue'])
  },
  components: {
    appCartItem: CartItem
  },
  data: function() {
    return {
      total: 0,
      discountValue:0.2
    };
  },
  methods: {
    useCode: function() {
      if ('ARTISAN20' == this.discount) {
        this.total = this.cartValue * 0.8;
      } else {
        this.total = this.cartValue;
      }
    },
    ...mapActions(['saveShoppingCart', 'saveToOrder', 'clearCart']),

    saveShoppingCartLocal() {
      this.$router.push('/');
    },

    checkout() {
      if (!this.cartItemList || this.cartItemList.length == 0) {
        return;
      }
      this.saveToOrder({
        cartItemList: this.cartItemList,
      }).then(() => {
        this.saveShoppingCart({
          cartItemList: [],
        });
        this.clearCart();
        this.$router.push('/');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-shopping-cart-leave-active {
  transition: all 0.4s;
}

.list-shopping-cart-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.table-sm {
  font-size: 0.875rem;
  ::v-deep h4 {
    font-size: 1.25rem;
  }
}
</style>

