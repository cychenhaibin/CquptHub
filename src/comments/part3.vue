<template>
  <div class="miniGames" id="part3">
    <div class="gamesRegion">
      <div class="gamesTitle">工程模型</div>
      <div class="gamesContent">1. 仿真模型利用计算机技术对传统物理模型进行模拟，学生可以在学习过程中“真实”地感知模型的实际结构。这极大地改善了传统教学中理论与实践差异过大的问题。学生也可以在动手实践的过程中获得参与感和满足感，提升学习兴趣。2. 我团队可以为教材实现简单模型的定制化，同时，在过去的项目中，我们也积累了一些模板类项目，如您有类似需求可以使用模板进行模型的快速实现；此外，我们还可以完成模型的部署任务，即对有源文件的模型提供部署到数字教材的服务。</div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper ganmesImg flex">
        <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/art/piano/" target="_blank">
          <div class="gameName">电子钢琴</div>
          <img class="gameImg" src="../assets/Rectangle 1039@1x (1).webp" alt="">
          <img class="arrow" src="../assets/组件 6@1x.png" alt="">
        </a>
        <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/engineering/ratchet/" target="_blank">
          <div class="gameName">齿轮模型</div>
          <img class="gameImg" src="../assets/jinlun.png" alt="">
          <img class="arrow" src="../assets/组件 6@1x.png" alt="">
        </a>
        <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/game/cube/" target="_blank">
          <div class="gameName">魔方</div>
          <img class="gameImg" src="../assets/cube.png" alt="">
          <img class="arrow" src="../assets/组件 6@1x.png" alt="">
        </a>

      </div>
    </div>
    <div class="program backgroundImg positionRig" style="height: 650px; overflow: hidden;">
      <div class="typeTitle flex align-end">
        <div>电子钢琴</div>
        <div style="color: #033531; font-size: 14px; margin-left: 10px;">你的互联网钢琴替身</div>
      </div>
      <img class="piano" src="../assets/Rectangle 1039@1x (1).webp" alt="">
    </div>
    <div class="swiper-container">
      <div class="modelTitle">齿轮模型</div>
      <div class="swiper-wrapper" style="margin: 30px 200px 0;">
        <div class="modelContent swiper-slide flex align-items">
          <img src="../assets/Rectangle 1048@1x (1).webp" alt="">
          <div class="modelText">完成棘轮的组装后，棘轮开始转动，可以观察棘轮的运作状态</div>
        </div>
        <div class="modelContent swiper-slide flex align-items">
          <img src="../assets/Rectangle 1049@1x (1).webp" alt="">
          <div class="modelText">通过鼠标移动组件到对应位置，学习棘轮的机械结构</div>
        </div>

      </div>
    </div>
    <div class="swiper-container">
      <div class="modelTitle">魔方</div>
      <div class="swiper-wrapper" style="margin: 30px 200px 0;">
        <div class="modelContent swiper-slide flex align-items">
          <img src="../assets/Rectangle 1048@1x (2).webp" alt="">
          <div class="modelText">可以自己修改魔方的阶数</div>
        </div>
        <div class="modelContent swiper-slide flex align-items">
          <img src="../assets/Rectangle 1049@1x (2).webp" alt="">
          <div class="modelText">通过鼠标对魔方进行操作</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "part3"
}
</script>

<style scoped>

</style>
