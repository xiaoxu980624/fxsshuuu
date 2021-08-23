<!--
 * @Author: your name
 * @Date: 2021-05-31 15:17:19
 * @LastEditTime: 2021-08-18 14:46:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\项目\vue\src\views\Home.vue
-->
<template>
  <div class="home">
       <div class="box">
         <h1>Vue购物车</h1>
          <h3>商品信息</h3>
          <table border="1px solid">
            <tr>
              <td>id</td>
              <td>名称</td>
              <td>价格</td>
              <td>数量</td>
              <td>Actions</td>
            </tr>
            <tr v-for="(item,index) in list.productsData" :key="index">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.price}}</td>
              <td>{{item.count}}</td>
              <td>
                <button @click="add(item)" class="btn" v-show="isshow">+</button>
                 <button v-show="carshow" @click="add(item)">加入购物车</button>
                <button class="btn1" v-show="issshow" @click="del(index)">-</button>
              </td>
            </tr>
          </table>
       </div>
       <div class="box">
         
          <h3>购物车信息</h3>
          <table border="1px solid">
            <tr>
              <td>id</td>
              <td>名称</td>
              <td>价格</td>
              <td>数量</td>
              <td>总价</td>
              <td>
                  Actions
              </td>
            </tr>
            <tr v-for="(item,index) in $store.state.list" :key="index">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.price}}</td>
              <td>{{item.num}}</td>
              <td>{{item.count}}</td>
              <td>
                 <button class="btn" @click="nums(item)">+</button>
                 <button class="btn1">-</button>
                 <button @click="del(index)" class="btn2">x</button>
              </td>
            </tr>
          </table>
          <button @click="clear">清空购物车</button>
       </div>
  </div>
</template>

<script>
import  list from '@/assets/data.json'
console.log(list)
    export default {
        data() {
            return {
                list,
                index:0,
                carshow:false,
                isshow:true,
                issshow:true,
                num:0
            };
        },
        mounted() {
              this.$axios.get('../assets/data.json').then(res=>{
                     console.log(res)
              })
        },
        methods: {
              add(item){
                // this.index=item 
                console.log(item)
                this.carshow=true
                this.$store.commit('add',item)
                this.isshow=false
                this.issshow=false
                //  console.log(this.$store.commit('add',item))
              },
              del(index){
                this.$store.commit('del',index)
              },
              clear(){
                 this.$store.commit.list==""
              }
              
        },
    };
    
    
</script>
<style>
.box{
   width: 800px;
   height: 600px;
   margin: 0 auto;
   /* background: red; */
}
table{
   width: 100%;
   text-align: center;
}
h1{
  text-align: center;
}
h3{
  text-align: center;
}
.btn{
   width: 30px;
   height: 30px;
   border-radius: 5px;
   background: skyblue;
   color: white;
}
.btn1{
   width: 30px;
   height: 30px;
   border-radius: 5px;
   background:orange;
   color: white;
}
.btn2{
   width: 30px;
   height: 30px;
   border-radius: 5px;
   background:red;
   color: white;
}
</style>

