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
          <el-anchor-link class="menuLi" href="#part1" title="小游戏" />
          <el-anchor-link class="menuLi" href="#part2" title="可交互图像" />
          <el-anchor-link class="menuLi" href="#part3" title="工程模型" />
          <el-anchor-link class="menuLi" href="#part4" title="网页托管" />
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
      <div class="mainBot">
        <div class="botImg">
          <img class="indexImg" src="../assets/index4.webp" alt="">
          <img class="indexImg" src="../assets/index5.webp" alt="">
          <img class="indexImg" src="../assets/index6.webp" alt="">
        </div>
        <div class="description">
          <div>个性化设计满足</div>
          <div>你的需求</div>
        </div>
      </div>
    </div>

    <!-- 小游戏 -->
    <div class="miniGames" id="part1">
      <div class="gamesRegion">
        <div class="gamesTitle">小游戏类</div>
        <div class="gamesContent">
          <p>教育小游戏定制服务是一项创新的数字教育解决方案，将传统教材内容与互动式游戏设计相结合，根据客户的教材内容和教学需求定制开发，确保游戏与课程紧密相关；通过互动和娱乐的方式提高学生的学习动力和效果，增加学习的互动性和参与感；为学生提供一种全新的学习体验。同时，我们会针对多种设备适配，包括电脑、平板和智能手机等，方便学生随时随地进行学习。</p>目前我平台技术团队总计研发了3种不同类型的游戏，包含编程类、益智类、答题闯关类，其中具有代表性的游戏有通过编写代码进行板块移动的编程类游戏”浮动布局：、益智类拼图游戏“电路拼图”、答题闯关类游戏“挑战理财师、数学知识类“黄金分割比”等。</div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper ganmesImg flex">
          <!--浮动布局-->
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/web/flex-box/">
            <div class="gameName">浮动布局</div>
            <img class="gameImg" src="../assets/games1.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <!--电路拼图-->
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/engineering/circuit-jigsaw/">
            <div class="gameName">电路拼图</div>
            <img class="gameImg" src="../assets/games2.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/finance/financial-planner/
">
            <div class="gameName">答题闯关</div>
            <img class="gameImg" src="../assets/games3.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <!--黄金分割比-->
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/art/golden-ratio/">
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
          <div class="swiper-pagination" style="top: 400px; left: -200px;"></div>
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

    <!-- 可交互图像 -->
    <div class="miniGames interactiveImg" id="part2">
      <div class="gamesRegion">
        <div class="gamesTitle">可交互图像</div>
        <div class="gamesContent">
          <p>智能图表交互可视化服务是一项专业的数字教育增强服务，利用最新的可视化技术和交互设计，将传统纸质教材中的图表、数据、函数公式等抽象、复杂的信息转化为生动、直观的交互式图表。我们的服务通过增强信息的可视化效果和互动性，帮助学生更好地理解和分析教材内容，提升学习效率和兴趣。</p> 目前我平台技术团队已完成众多可交互图像的 研发，如函数可视化、数据图表可视化、思维导图、流程图等，可运用在教学演示、数字教材、办公制图等领域，给教学、办公、阅读带来便捷性更高、交互性更强的用户体验。</div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper ganmesImg flex">
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/finance/financial-planner/
">
            <div class="gameName">答题闯关类</div>
            <img class="gameImg" src="../assets/games3.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/math/csfc/
">
            <div class="gameName">函数可视化</div>
            <img class="gameImg" src="../assets/games6.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/math/calculator/#/?graph=H4sIAAAAAAAAA9VXS3uqSBD9QbPhIea6mEUQadvYeBUEune8wsPGMB8qj19%2FqzGJmkzmc3bJSpoU3V3nVJ1TSbrFkXoyx8VLroXjozZOThrN0cNDF4yXY03TPKLRv07j5dTQKk%2FStH9mbzE4b%2FLAW%2BerHPdUWTfMmalWJ%2FOVse6WzoYzY31YGaQnuZxT57EnhbsjTqSycp0vp4s%2BRqbEbDxOuoXC%2FEUfeJMj3KMldpNHpXlkaHLYKi5nUzzGxayD7zTqEYkZZsEck8POGpwlEYcXVv%2FYUGWzYw7txL2YusgilOarfZ3HJeexqp%2Bi%2FXpYJ0iuwhyPlw4%2BrpytCvs0K4M2pCAyMR5VuJsWelzc5UDskWz1tCXGVrKKaLRyaE%2F6tYgZhZ45gphuWew0yEuBu4xI%2F6gQh7aWEdV4zw%2FUhzsUMzhnp0JMC2dJAybOViN7eQL78GSud8y3hvyjbsCjDnxLwkUVwrOU%2BPrAT4zcUTzFNS75TqzhHIGjxPxMEuu1kp1C1eIYmcfE1svY04oY8VOYLybLOeAw543AG5fuKJoveKRaVaiMxB7VGWMsnotQaU8R4INzohDgkp7Pqam%2F4YmIK1nko5az%2FfolMdsoKvk%2BmK%2Br324bhcgt42naLv0sIfzyN99sRZ7v3y0hlu0XGVXr9tmvu%2BcP8YLDEJk581on8Kshf2JD7ns9g9o4MH%2FTBZ41CxU5C7zRwOsrZzkZMJKz5Fw3%2BTPUEyt5Hc4mDfWsKp7vRM02y2Kow91de%2FhS%2Fd9cpDdcbPJs9GTrVdTpUoC2aeBpEvPijnpNGio0ZbleRuXkgNEsjdGvNJney9HsA0dWSZ2YE2d3y9Hua47EXXzFTBJ0iYndSwybb897eQsemlaVlFuBVys4iZDZCb2I54uKSpsT9MDQS4DNYcAQcB24O%2FcGcLYQNV4GXls7qp5RhUuJyK94PFoDfvft8Wy3D3i%2F0SIk7vKK80V%2FuoGvPeQ%2BF%2BsFekK4woj3eL55YbbeDxqHzLd1FUKs0Ihwqp8EFxixLlSklNq6FHZ6jve3fMN5TVS6faSIfrrm%2FfG%2Bnrnig%2F6gOv86b%2FIx735lZIVlfMibX%2BqNlj%2B23m40%2BqruZPFMlUkdqlisC1bOVPBB7ZVXqNNUfJ%2F9tqV2WRDFEtyWWcXQhos7QF4ys39mDZzxtE4hmnRiDVNAYxmLzBpi2kxopHhPCwnOj6SfmPsnnT975LvOb5UsY6DvgM9%2BqI15%2FAKzDGgNP8K3%2B2GOmQ4%2B0IA3V%2BDHCrNH%2BZ311X%2BsL9oDjsa6ua0v3IC%2F1qBr2utvOfx6THqaZ5EPvcOUTHp682fwg0R%2B8%2BosA6%2F%2BHDPN8pv3TiPOAC7iF%2FH9s33mmJZuvVX4ePCsszc11Add9VwJ%2BrvYwAxHB6yrB8B56DvoRRF3no1En4PWwkxRhaj9Df1eBP5GO3MzGjSe3bWHfOufr15wNdsMe73yCbpkvVBvwzF4LBvqWlcD5HY33lCu08AnaQjcgp5Vcbk93u8Ln2apjhlRQwty1yx1w6fzNjdtgI%2FDxUdsefTOyZRf3ufX73e%2FyPu%2B4nvpu2vtJ28f9OTi7VaoMqi7FrjTT8JbzjOWKWHQFej%2F4zWH5%2FlXz0PVPbI5%2BR%2F83Tln8as%2BApzx1UxF3Rs%2B3%2Fj47vh%2FpUXKnV53VZ9t5E919K5FyLzRmZ8%2BA1ndff53yR%2FXvtmk7FIz%2BU3%2FvmHz3bX1y%2F9N0vtm4av8h56Z%2Ffts%2FK17xpUnUCd%2F%2FwEYc%2BhZQBEAAA%3D%3D
">
            <div class="gameName">数据图可视化</div>
            <img class="gameImg" src="../assets/games7.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/common/draw-tool/#/mind/embed?id=8">
            <div class="gameName">思维导图</div>
            <img class="gameImg" src="../assets/games8.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/common/draw-tool/#/flow/embed?id=6">
            <div class="gameName">流程图</div>
            <img class="gameImg" src="../assets/games9.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
        </div>
      </div>
      <div class="program backgroundImg positionRig" style="height: 650px; overflow: hidden;">
        <div class="typeTitle flex space-between">
          <div>函数可视化</div>
          <div style="width: 140px; height: 40px; line-height: 40px; border-radius: 45px; color: white; background-color: #0DC3B6; text-align: center; font-size: 14px; cursor: pointer;">去试玩</div>
        </div>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide flex">
              <div class="leftAnnotation">
                <div class="annotTop">
                  <div>显示方程</div>
                  <div class="line"></div>
                </div>
                <div class="annotBot">
                  <div>显示函数图像</div>
                  <div class="line"></div>
                </div>
              </div>
              <img class="contentImg" src="../assets/Rectangle 1039@1x.webp" alt="">
              <div class="rightAnnotation">
                <div class="annotCenter">
                  <div style="text-align: right;">调整参数</div>
                  <div class="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="program swiper-container">
        <div class="typeTitle flex align-end">
          <div>数据图标可视化</div>
          <div style="color: #033531; font-size: 14px; margin-left: 10px;">根据教材信息，设计数据图表可视化</div>
        </div>
        <div class="swiper-wrapper mySwiper flex">
          <img class="triangle swiper-slide" src="../assets/Rectangle 1111@1x.webp" alt="" style="height: 507px;">
          <div class="triangle swiper-slide">
            <img src="../assets/Rectangle 1052@1x.webp" alt="">
            <div class="flex">
              <img src="../assets/Rectangle 1054@1x.webp" alt="">
              <img src="../assets/Rectangle 1053@1x.webp" alt="">
            </div>
          </div>
          <div class="banner swiper-slide">
            <img class="bgc" src="../assets/333.png" alt="">
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper mySwiper ganmesImg flex">
          <div class="mindMap swiper-slide">
            <div class="mindTitle">思维导图</div>
            <div class="mindTips">自定义思维导图，将思维可视化呈现</div>
            <img src="../assets/Rectangle 1048@1x.webp" alt="">
          </div>
          <div class="mindMap swiper-slide">
            <div class="mindTitle">流程图</div>
            <div class="mindTips">轻松绘制流程图，开发流程更清晰</div>
            <img src="../assets/Rectangle 1049@1x.webp" alt="">
          </div>
          <div class="mindMap swiper-slide">
            <div class="mindTitle">思维导图</div>
            <div class="mindTips">自定义思维导图，将思维可视化呈现</div>
            <img src="../assets/Rectangle 1050@1x.webp" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- 工作模型 -->
    <div class="miniGames" id="part3">
      <div class="gamesRegion">
        <div class="gamesTitle">工程模型</div>
        <div class="gamesContent">1. 仿真模型利用计算机技术对传统物理模型进行模拟，学生可以在学习过程中“真实”地感知模型的实际结构。这极大地改善了传统教学中理论与实践差异过大的问题。学生也可以在动手实践的过程中获得参与感和满足感，提升学习兴趣。2. 我团队可以为教材实现简单模型的定制化，同时，在过去的项目中，我们也积累了一些模板类项目，如您有类似需求可以使用模板进行模型的快速实现；此外，我们还可以完成模型的部署任务，即对有源文件的模型提供部署到数字教材的服务。</div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper ganmesImg flex">
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/art/piano/">
            <div class="gameName">电子钢琴</div>
            <img class="gameImg" src="../assets/Rectangle 1039@1x (1).webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/engineering/ratchet/">
            <div class="gameName">齿轮模型</div>
            <img class="gameImg" src="../assets/jinlun.png" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide" href="https://cqupthub.codeghub.com/project/game/cube/">
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
          <div class="modelContent swiper-slide flex align-items">
            <img src="../assets/Rectangle 1048@1x (1).webp" alt="">
            <div class="modelText">完成棘轮的组装后，棘轮开始转动，可以观察棘轮的运作状态</div>
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

    <!-- 网页托管 -->
    <div class="miniGames" id="part4">
      <div class="gamesRegion">
        <div class="gamesTitle">网页托管</div>
        <div class="gamesContent">如果您有一套电子教学方案，但与教材不在同一平台下，我们提供“网页托管”服务。让教学与实践不再分家</div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper ganmesImg flex">
          <a class="gameHref swiper-slide hostWidth" href="https://cqupthub.codeghub.com/project/art/env-design/unit-8/task-8/
https://cqupthub.codeghub.com/project/art/env-design/unit-4/task-4/
">
            <div class="gameName">园艺技术</div>
            <img class="gameImg hostWidth" src="../assets/Rectangle 1043@1x (1).webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
          <a class="gameHref swiper-slide hostWidth" href="https://cqupthub.codeghub.com/project/traditional/MiaEmbroidery/">
            <div class="gameName">苗绣技艺</div>
            <img class="gameImg hostWidth" src="../assets/Rectangle 1044@1x.webp" alt="">
            <img class="arrow" src="../assets/组件 6@1x.png" alt="">
          </a>
        </div>
      </div>
      <div class="swiper-container">
        <div class="modelTitle">园艺技术</div>
        <div class="swiper-wrapper" style="margin: 30px 200px 0;">
          <div class="modelContent swiper-slide flex align-items">
            <img src="../assets/Rectangle 1048@1x (3).webp" alt="">
            <div class="modelText">通过鼠标对进行操作</div>
          </div>
          <div class="modelContent swiper-slide flex align-items">
            <img src="../assets/Rectangle 1049@1x (3).webp" alt="">
            <div class="modelText">多个模型可以随意选择和操作</div>
          </div>
        </div>
      </div>
      <div class="program backgroundImg positionRig" style="height: 650px; overflow: hidden; margin-bottom: 100px;">
        <div class="typeTitle flex align-end">
          <div>苗绣记忆</div>
          <div style="color: #033531; font-size: 14px; margin-left: 10px;">一起来感受非遗文化的魅力</div>
        </div>
        <img class="piano" src="../assets/Rectangle 1039@1x (2).webp" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Index",
};
</script>

<script lang="ts" setup>
import { onMounted } from "vue"
import 'swiper/swiper-bundle.css';
import Swiper from "swiper";
const initSwiper = () => {
  new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true
  });
}

const verticalSwiper = () => {
  new Swiper('.mySwiper', {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

onMounted(() => {
  initSwiper()
  verticalSwiper()
})
</script>

<style scoped lang="scss">
.flex{
  display: flex;
}
.align-items{
  align-items: center;
}
.align-end{
  align-items: end;
}
.space-between{
  justify-content: space-between;
}
.justify-center{
  justify-content: center;
}
:deep(.el-anchor__link.is-active){
  color: #09968C;
}
:deep(.el-anchor__link){
  font-size: 20px;
}
:deep(.el-anchor__marker){
  background-color: #09968C;
}
.swiper-container{
  width: 100%;
}

.container{
  .title{
    padding: 24px 92px;
    height: 30px;
    background-color: white;
    .logoRegion{
      .name{
        color: #34CAC0;
        font-weight: bold;
        font-size: 22px;
        margin-left: 24px;
      }
    }
    .menu{
      color: #0F201E;
      font-size: 20px;
      .menuLi{
        margin-left: 57px;
      }
    }
  }
  .index{
    width: 100%;
    height: calc(100vh - 78px);
    position: relative;
    overflow: hidden;
    .indexImg{
      width: 178px;
      height: 178px;
      margin-right: 12px;
      cursor: pointer;
    }
    .ball{
      position: absolute;
      width: 90vw;
      right: -40%;
    }
    .mainTop{
      position: absolute;
      left: 100px;
      top: 195px;
      color: #033531;
      font-size: 64px;
      font-weight: 400;
      .topImg{
        margin-top: 44px;
        z-index: 99;
      }
    }
    .mainBot{
      position: absolute;
      bottom: 134px;
      right: 97px;
      color: #033531;
      font-size: 64px;
      font-weight: 400;
      text-align: right;
      .botImg{
        margin-bottom: 53px;
      }
    }
  }
  .miniGames{
    padding-top: 104px;
    overflow: hidden;
    .gamesRegion{
      padding: 0 200px;
      .gamesTitle{
        color: #033531;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
      }
      .gamesContent{
        font-size: 16px;
        font-weight: 250;
        color: #033531;
        line-height: 30px;
      }
    }
    .ganmesImg{
      margin-top: 100px;
      margin-left: 100px;
      .hostWidth{
        width: 557px !important;
        height: 452px !important;
      }
      .gameHref{
        position: relative;
        width: 366px;
        height: 452px;
        margin-right: 20px;
        text-decoration: none;
        transition: transform 0.3s; /* 添加过渡效果 */
        &:hover {
          transform: scale(1.1); /* 悬浮时变大 */
          position: relative;
          z-index: 999;

          .arrow {
            /* Ellipse 64 */

            position: absolute;
            left: 33px;
            bottom: 54px;
            width: 73px;
            height: 73px;
            opacity: 1;

            background: rgba(255, 255, 255, 0.2);

            box-sizing: border-box;
            //border: 2px solid #FFFFFF;
            border-radius: 50%;
            z-index: 9999;
          }
        }
        .gameImg{
          width: 366px;
          height: 452px;

          }


        .gameName{
          position: absolute;
          top: 34px;
          left: 33px;
          font-size: 20px;
          font-weight: 400;
          color: white;
          text-decoration: none;
          z-index: 9999;
        }
        .arrow{
          position: absolute;
          left: 33px;
          bottom: 54px;
          z-index: 9999;
        }
        &:last-child{
          margin-right: 200px;
        }
      }
      .mindMap{
        width: 700px;
        color: #033531;
        margin-right: 170px;
        .mindTitle{
          font-size: 18px;
          font-weight: bold;
        }
        .mindTips{
          font-size: 16px;
          font-weight: 400;
          margin: 10px 0
        }
      }
    }
    .backgroundImg{
      background-image: url('../assets/Ellipse 63@1x.webp');
      background-repeat: no-repeat;
    }
    .positionLeft{
      background-position: -800px 20px;
    }
    .positionRig{
      background-position: 1200px -300px;
    }
    .positionBot{
      background-position: -800px 540px;
    }
    .program{
      position: relative;
      padding: 183px 200px 0;
      color: #033531;
      .typeTitle{
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 69px;
      }
      .triangle{
        width: 700px;
        text-align: center;
        margin-right: 84px;
      }
      .banner{
        margin-right: 200px;
        position: relative;
        .bgc{
          height: 507px;
          position: relative;
          z-index: 98;
        }
        .bannerLeft{
          font-size: 12px;
          position: absolute;
          .bar{
            position: absolute;
            z-index: 99;
            img{
              width: 120px;
              height: 120px;
            }
            div{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .bannerImg{
            position: absolute;
            top: -255px;
            left: 46px;
            width: 438px;
            height: 310px;
          }
        }
      }
      .typeContent{
        .typeTips{
          width: 300px;
          margin: 0 41px 0 38px;
          .programTitle{
            font-size: 18px;
            margin-bottom: 20px;
          }
        }
      }
      .swiper{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #033531;
        font-weight: 250;
        .annotTop, .annotCenter, .annotBot{
          width: 191px;
        }
        .annotTop{
          margin-top: 150px;
        }
        .annotBot{
          margin-top: 200px;
        }
        .annotCenter{
          margin-top: 180px;
        }
        .line{
          width: 191px;
          height: 4px;
          margin-top: 10px;
          background-color: #09968C;
        }
        .leftAnnotation, .rightAnnotation{
          height: 465px;
        }
        .contentImg{
          width: 658px;
          height: 465px;
        }
      }
      .piano{
        width: 1077px;
        height: 731px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .modelTitle{
      font-size: 24px;
      font-weight: 400;
      margin: 183px 200px 0;
    }
    .modelContent{
      width: 900px;
      margin-right: 80px;
      img{
        width: 658px;
        height: 465px;
      }
      .modelText{
        width: 197px;
        margin-left: 35px;
        color: #033531
      }
      &:last-child{
        margin-right: 200px;
      }
    }
  }
}
</style>