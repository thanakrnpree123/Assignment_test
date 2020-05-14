<template>
  <div class="container">
    <div class="row">
      Your Order! {{items }}
<!--
      <tr v-for="item of items" :key="item['.key']">
        <td>efwe</td>
      </tr> -->
    </div>
  </div>
</template>

<script>
import { ref } from '../config/firebaseConfig';
var refOrder = ref.child('orders');

export default {
  data() {
    return {
      items: [],
    };
  },
  firebase: {
      items: refOrder.once('value').then(function(dataSnapshot){
    console.log(dataSnapshot.val());

})


  },
  methods: {



  }
};
</script>

<style></style>
