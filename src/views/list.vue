<template>
    <div>
         <div class="box">
             <div class="box1">
                 <img src="../assets/logo.png" alt=""  class="img">
             </div>
             <div class="box2">
                 <div class="icon1">
                      <van-icon name="contact" size="33px"/>
                      <span>我的</span>
                 </div>
                 <div class="icon2">
                      <van-icon name="wap-nav" size="33px"/>
                      <span>导航</span>
                 </div>
             </div>
         </div>
         <!-- 轮播图 -->
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="@/assets/banner.jpg" class="img1" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/banner1.jpg" alt="" class="img1">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/banner2.jpg" alt="" class="img1">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/banner3.jpg" alt="" class="img1">
                </van-swipe-item>
         </van-swipe>
         <!-- 宫格 -->
          <van-grid :column-num="4">
        <van-grid-item v-for="(item,index) in nav" :key="index">
             <span :style="{background:item.color}" class="gong_span"> 
               <i :class="item.icon" id="i"></i>
          </span>
          <span>{{item.name}}</span>
        </van-grid-item>
         
        </van-grid>
        <div class="img_list">
             <div class="shu_list2">
               <div class="shu_list">
                <p>全屋装修 <span>包设计、包主材、包水电、包施工</span></p>
                
            </div>
              
            </div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>1</van-swipe-item>
              <van-swipe-item>2</van-swipe-item>
              <van-swipe-item>3</van-swipe-item>
              <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
export default {
  data() {
    return {
      nav: [
        {
          name: "装修方案",
          icon: " iconfont icon-case",
          color: "#39c894"
        },
        {
          name: "效果图",
          icon: "iconfont icon-case",
          color: "#feb505"
        },
        {
          name: "设计师",
          icon: "iconfont icon-designer",
          color: "#eed215"
        },
        {
          name: "装修工地",
          icon: "iconfont icon-construction-site",
          color: "#00b2b2"
        },
        {
          name: "装修攻略",
          icon: "iconfont icon-case",
          color: "#1b9af7"
        },
        {
          name: "装修贷款",
          icon: "iconfont icon-loans",
          color: "#7b72e9"
        },
        {
          name: "免费预约",
          icon: "iconfont icon-case",
          color: "#ff4351"
        },
        {
          name: "装修方案",
          icon: "iconfont icon-case ",
          color: "#fe8864"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.box {
  display: flex;
  width: 100%;
  height: 80px;
  /* background: red; */
}
.box1 {
  flex: 1;
  width: 200px;
  height: 80px;
  /* background: blue; */
}
.img {
  width: 150px;
  height: 60px;
  margin-left: 18px;
  margin-top: 16px;
  margin-bottom: 18px;
}
.box2 {
  display: flex;
  width: 200px;
  height: 80px;
  /* background: yellow; */
  padding-left: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.icon1 {
  margin-left: 20px;
}
span {
  /* font-size: 22px; */
  color: #999999;
}
.my-swipe .van-swipe-item {
  color: #fff;
  width: 100%;
  height: 200px;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.img1 {
  width: 100%;
  height: 100%;
}
.gong_span {
  /* display: flex; */
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* margin-left: 70px; */
}
#i {
  font-size: 60px;
  /* text-align: center; */
  line-height: 80px;
  color: white;
  margin-left: 10px;
}
.img_list {
  position: relative;
  width: 100%;
  height: 300px;
  /* background: red; */
  margin-top: 18px;
}

.shu_list2 {
  display: flex;
  position: absolute;
  top: 32px;
  left: 25px;
  width: 100%;
  height: 100px;
  /* background:yellow; */
  /* line-height: 100px; */

  padding-top: 32px;
  text-align: center;
}
p {
  font-size: 20px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
