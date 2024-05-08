<template>
  <div class="miniGames" id="part1">
    <div class="gamesRegion">
      <div class="gamesTitle">小游戏类</div>
      <div class="gamesContent">
        <p>教育小游戏定制服务是一项创新的数字教育解决方案，将传统教材内容与互动式游戏设计相结合，根据客户的教材内容和教学需求定制开发，确保游戏与课程紧密相关；通过互动和娱乐的方式提高学生的学习动力和效果，增加学习的互动性和参与感；为学生提供一种全新的学习体验。同时，我们会针对多种设备适配，包括电脑、平板和智能手机等，方便学生随时随地进行学习。</p>目前我平台技术团队总计研发了3种不同类型的游戏，包含编程类、益智类、答题闯关类，其中具有代表性的游戏有通过编写代码进行板块移动的编程类游戏”浮动布局：、益智类拼图游戏“电路拼图”、答题闯关类游戏“挑战理财师、数学知识类“黄金分割比”等。</div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper ganmesImg flex">
        <!--浮动布局-->
        <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/web/flex-box/" target="_blank">
          <div class="gameName">浮动布局</div>
          <img class="gameImg" src="../assets/games1.webp" alt="">
          <img class="arrow" src="../assets/组件 6@1x.png" alt="">
        </a>
        <!--电路拼图-->
        <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/engineering/circuit-jigsaw/" target="_blank">
          <div class="gameName">电路拼图</div>
          <img class="gameImg" src="../assets/games2.webp" alt="">
          <img class="arrow" src="../assets/组件 6@1x.png" alt="">
        </a>
        <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/finance/financial-planner/
" target="_blank">
          <div class="gameName">答题闯关</div>
          <img class="gameImg" src="../assets/games3.webp" alt="">
          <img class="arrow" src="../assets/组件 6@1x.png" alt="">
        </a>
        <!--黄金分割比-->
        <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/art/golden-ratio/" target="_blank">
          <div class="gameName">黄金分割比</div>
          <img class="gameImg" src="../assets/games4.webp" alt="">
          <img class="arrow" src="../assets/组件 6@1x.png" alt="">
        </a>
      </div>
    </div>
    <div class="program backgroundImg positionRig" style="height: 650px; overflow: hidden;">
      <div class="typeTitle">编程类</div>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide flex">
            <div class="leftAnnotation">
              <div class="annotTop">
                <div>关于设置</div>
                <div class="line"></div>
              </div>
              <div class="annotBot">
                <div>玩家输入代码, 控制小球进入篮筐</div>
                <div class="line"></div>
              </div>
            </div>
            <img class="contentImg" src="../assets/type1.webp" alt="">
            <div class="rightAnnotation">
              <div class="annotCenter">
                <div style="text-align: right;">玩家可实时查看小球移动情况</div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
        <!--<div class="swiper-pagination" style="top: 400px; left: -200px;"></div>-->
      </div>
    </div>
    <div class="program backgroundImg positionLeft">
      <div class="typeTitle">益智类</div>
      <div class="typeContent flex align-items justify-center">
        <img src="../assets/type2.webp" alt="">
        <div class="typeTips">
          <div class="programTitle">电路拼图</div>
          <div class="main">游戏介绍：玩家通过点击空板块相邻的图片板块与其的交换位置，完成拼图。拼图期间，用户可点击空白板块，查看原图。闯关成功后，观察图中电路的连接方式，体会物理的奥秘。</div>
        </div>
      </div>
    </div>
    <div class="program">
      <div class="typeContent flex align-items justify-center">
        <div class="typeTips">
          <div class="programTitle">黄金分割比</div>
          <div class="main">游戏介绍：玩家需要仔细观察黄金分割构图，将带有白色模糊背景的小图标拖动至分割比例的位置，观察1:0.618带来的审美体验。挑战成功后可点击蒙层查看原图。</div>
        </div>
        <img src="../assets/type3.webp" alt="">
      </div>
    </div>
    <div class="program backgroundImg positionBot">
      <div class="typeContent flex align-items justify-center">
        <img src="../assets/type4.webp" alt="">
        <div class="typeTips">
          <div class="programTitle">挑战理财师</div>
          <div class="main">游戏介绍：玩家在游戏开始之前，为自己取一个昵称，即可开始答题，所有题目都答正确之后，即可获得证书，进入下一关。游戏过程中，玩家回答错误会有重新选择答案的机会，回答正确后也可查看解析。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "part1"
}
</script>

<style scoped>

</style>
