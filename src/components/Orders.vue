<template>
<div>
      <h2>
        รายการคำสั่งซื้อของคุณ
      </h2>
      <table class="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">สิ้นค้า</th>
      <th scope="col">ข้อมูลสิ้นค้า</th>
      <th scope="col">ราคา</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(ord, $index) in orderss" :key="ord.key"  action>
      <th scope="row">{{$index+1}}</th>
      <td>{{ord[0].title}}</td>
      <td>{{ord[0].description}}</td>
      <td>{{ord[0].price}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import {ref} from '../config/firebaseConfig';
export default {
    data(){
        return{
            orderss:[],
            db:ref.child('orders/')
        }
    },
    created () {
    this.db.on('value', (snapshot) => {
      this.orderss = [];
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        console.log(item);
        this.orderss.push(item)
      });
    });
  }

};
</script>

<style></style>
