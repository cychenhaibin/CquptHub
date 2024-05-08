
<template>
  <div class="container">

    <el-affix :offset="0">
      <div class="title flex align-items space-between">
        <div class="logoRegion flex align-items">
          <img class="logo" src="../assets/组件 4@1x.png" alt="">
          <div class="name">CQUPT HUB</div>


        </div>
        <el-anchor
            direction="horizontal"
            type="default"
            class="menu flex align-items"
            :offset="30"
        >
          <div class="menuLi" @click="point('part1')" href="" title="小游戏">
            <el-anchor-link style=" pointer-events: none;" class="menuLi" @click="point('part1')" href="#part1"
                            title="小游戏"/>

          </div>
          <div class="menuLi" @click="point('part2')" href="" title="可交互图像">
            <el-anchor-link style=" pointer-events: none;" class="menuLi" @click="point('part2')" href="#part2"
                            title="可交互图像"/>
          </div>
          <div class="menuLi" @click="point('part3')" href="" title="工程模型">
            <el-anchor-link style=" pointer-events: none;" class="menuLi" @click="point('part3')" href="#part3"
                            title="工程模型"/>
          </div>
          <div class="menuLi" @click="point('part4')" href="" title="网页托管">
            <el-anchor-link style=" pointer-events: none;" class="menuLi" @click="point('part4')" href="#part4"
                            title="网页托管"/>
          </div>

        </el-anchor>


      </div>
    </el-affix>
    <!-- 首屏 -->
    <div class="index">
      <img class="ball" src="../assets/Ellipse 63@1x.png" alt="">
      <div class="mainTop">
        <div class="description">
          <div>可更换风格</div>

          <div>快速定制</div>
        </div>
        <div class="topImg">
          <img class="indexImg" src="../assets/index1.webp" alt="">
          <img class="indexImg" src="../assets/index2.webp" alt="">
          <img class="indexImg" src="../assets/index3.webp" alt="">
        </div>
      </div>
      <div class="mainBot box-2">
        <div class="botImg">
          <img class="indexImg" src="../assets/index4.webp" alt="">
          <img class="indexImg" src="../assets/index5.webp" alt="">
          <img class="indexImg" src="../assets/index6.webp" alt="">
        </div>
        <div class="description box-2-title">
          <div>个性化设计满足</div>
          <div>你的需求</div>
        </div>
      </div>
    </div>

    <!-- 返回顶部 -->
    <!--    <div class="backTop" @click="backTop"><img src="../assets/backtop.png"/></div>-->
    <!-- 小游戏 -->
    <partOwn/>

    <!-- 可交互图像 -->
    <partTow/>

    <!-- 工作模型 -->
    <partThree/>

    <!-- 网页托管 -->
    <partFour/>
    <el-backtop :right="70" :bottom="200" style="width: 50px;height: 50px"/>

    <div class="left-display">
      <div class="left-slider">
        <div class="left-slider-btn" :style="{'height':needScrollHeight+'px'}"></div>
      </div>

      <ul class="left-display-list">
        <li class="left-display-list-item">
          <h3>编程类</h3>
        </li>
        <li class="left-display-list-item">
          <h3>益智类</h3>
          <p>电路拼图</p>
          <p>黄金分割比</p>
        </li>
        <li class="left-display-list-item">
          <h3>闯关理财类</h3>
          <p>挑战理财师</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts" setup>

import {onMounted, ref, onBeforeUnmount, watch} from "vue"
import 'swiper/swiper-bundle.css';
import partOwn from "/src/comments/part1.vue"
import partTow from "../comments/part2.vue"
import partThree from "../comments/part3.vue"
import partFour from "../comments/part4.vue"
import Swiper from "swiper";

const point = (point: any) => {
  console.log(point)

  const pointEl: any = document.querySelector(
      "#" + point)
  //需要定位的点=
  console.log(pointEl)
  if (pointEl) {

    // pointEl.scrollIntoView()
    pointEl.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});  // 开启平滑滚动动画
  }

}

const initSwiper = () => {
  new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true
  });
}

const isOpenMenuStatus = ref(false)

const openMenu = () => {
  isOpenMenuStatus.value = !isOpenMenuStatus.value
}

const backTop = () => {
  const TopEl = document.querySelector('body')
  TopEl.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});  // 开启平滑滚动动画
}

// const verticalSwiper = () => {
//   new Swiper('.mySwiper', {
//     direction: "vertical",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// }

const isAddHeaderStyleStatus = ref(false)

const scrollDistance = ref(0); // 创建响应式数据

const needScrollHeight = ref(0)

// 监听页面滚动
const handleScroll = () => {
  scrollDistance.value = window.scrollY;
};



onBeforeUnmount(() => {
  // 在组件销毁之前移除滚动事件监听器，以防止内存泄漏
  window.removeEventListener('scroll', handleScroll);
});

// 监听scrollDistance的变化
watch(scrollDistance, (newValue) => {
  if (newValue >= 779 && newValue <= 1136) {
    // 编程类
    needScrollHeight.value = 50; // 这是一个示例值

  }else if (newValue < 779){
    needScrollHeight.value = 0;
  }
  else if (newValue > 1432 && newValue <= 2004) {
    // 益智类
    needScrollHeight.value = 100; // 这是另一个示例值
  } else if (newValue > 2112 && newValue <= 2784) {
    // 电路拼图
    needScrollHeight.value = 150; // 这是示例值
  } else if (newValue > 2894 && newValue <= 3670) {
    // 黄金分割比
    needScrollHeight.value = 200; // 这是示例值
  } else if (newValue > 3670) {
    // 超出范围的默认值
    needScrollHeight.value = 200; // 默认值
  }
});
onMounted(() => {
  // 添加滚动事件监听器
  window.addEventListener('scroll', handleScroll);
  initSwiper()
  // verticalSwiper()

})
</script>

<style scoped lang="scss">
.backTop {
  cursor: pointer;
  position: fixed;
  right: 5%;
  width: 50px;
  height: 50px;
  z-index: 99;
  border-radius: 100%;
  border: 3px solid #278499;

  img {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 40px;
    height: 40px;
  }
}


.left-display {
  position: fixed;
  top: 50%;
  left: 2%;
  width: 10%;
  height: auto;
  z-index: 9999;

  .left-slider {
    position: absolute;
    top: 12%;
    width: 5px;
    height: 200px;
    background-color: #eeeeee;
    border-radius: 25px;

    .left-slider-btn {
      width: 100%;
      height: 30px;
      transition: .3s;
      background-color: #0DC3B6;
      border-radius: 25px;
    }
  }

  .left-display-list {
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    .left-display-list-item {
      margin-top: 30px;

      p {
        color: #dae0df;
      }
    }
  }
}
</style>


