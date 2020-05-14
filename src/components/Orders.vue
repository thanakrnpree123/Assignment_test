<template>
<div>
      <h2 class="mt-4 text-center">
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
      <tr v-if="orderss ==0">
          <td colspan="100%" class="text-center text-danger"> <h4 >ไม่มี สินค้า นะ</h4> </td>
      </tr>
    <tr v-else v-for="(ord, $index) in orderss" :key="ord.title"  action>
      <th scope="row">{{$index+1}}</th>
      <td>{{ord.title}}</td>
      <td>{{ord.description}}</td>
      <td>{{ord.price}}</td>
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
        item.forEach((r)=>{
        this.orderss.push(r);
        });

      });
    });
  }

};
</script>

<style></style>
