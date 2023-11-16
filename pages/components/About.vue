<template>
  <div class="section4 js-section" id="about">
    <!-- <div class="about__decorate1">
      <img src="~/assets/typo.png" alt="" />
    </div> -->
    <p class="about__decorate2">
      <span class="about__decorate2_bottom"
        ><span>interaction</span><span>interaction</span><span>interaction</span><span>interaction</span
        ><span>interaction</span><span>interaction</span><span>interaction</span></span
      >
      <span class="about__decorate2_top"
        ><span>animation</span><span>animation</span><span>animation</span><span>animation</span><span>animation</span
        ><span>animation</span><span>animation</span></span
      >
    </p>
    <div class="l-wrapper">
      <div class="about__wrapper">
        <div class="heading__line">
          <h2 class="heading">about</h2>
        </div>
        <div class="about__flex">
          <div class="about__left">
            <h3 class="about__name">
              <span class="about__en">Yusuke Namikawa</span><span class="about__ja">並河祐輔</span>
            </h3>
            <div class="about__text">
              <span class="u-wbr">大学にて心理学を学びのちに専門学校を卒業後、社会福祉士として児童養護施設で働く</span>
              <span class="u-wbr">2021年10月より制作会社でフロントエンドエンジニアとして勤務。</span>
              <span class="u-wbr"
                >得意なこと・できること：jsやcssを用いたアニメーション・インタラクション、マークアップ</span
              >
              <span class="u-wbr">趣味：ボルダリングや筋トレ、サウナ、料理</span>
              <div class="about__snsWrapper">
                <p class="about__snsItem"><a href="https://twitter.com/yusuke_nm" target="_blank">X</a></p>
                <p class="about__snsItem"><a href="https://codepen.io/nami__nami" target="_blank">Codepen</a></p>
              </div>
            </div>
          </div>
          <div class="about__right">
            <div class="circle__container">
              <div class="vertical__line"></div>
              <div class="horizontal__line"></div>
              <div class="circle__container__inner">
                <div class="circle middle__circle"></div>
                <div class="circle circle__one"></div>
                <div class="circle circle__two"></div>
                <div class="circle circle__three"></div>
                <div class="circle circle__four"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* about  */
.about__wrapper {
  overflow: hidden;
  padding: 90px 0px 260px 0px;
}
.about__right {
  width: 180px;
  height: 180px;
  content: "";
  position: relative;
  margin: 0 auto;
  margin-top: 140px;
  /* padding-top: 100px; */
  /* background-color: #e0e9ff; */
}
@media screen and (min-width: 1024px) {
  .about__flex {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 60px;
  }
  .about__wrapper {
    height: 100%;
    padding: 102px 360px 202px 360px;
  }
  .about__left {
    width: calc(572 / 1440 * 100vw);
  }
  .about__right {
    margin-top: 0px;
    width: 380px;
    height: 380px;
    /* content: "";
    position: relative; */
    /* background-color: #e0e9ff; */
  }
  .about__snsWrapper {
    display: flex;
    column-gap: 28px;
  }
}

.about__name {
  color: var(--color-white);
  margin-bottom: 1rem;
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 9px;
  font-weight: 400;
}
.about__en {
  font-size: calc(32 / 16 * 1rem);
}
@media screen and (min-width: 1024px) {
  .about__name {
    row-gap: 0px;
    margin-bottom: 1rem;
    flex-direction: row;
    align-items: center;
  }
  .about__en {
    font-size: calc(36 / 16 * 1rem);
  }
}
.about__ja {
  display: inline-block;
  margin-left: 4px;
  font-size: calc(16 / 16 * 1rem);
}
.about__text {
  color: #fff;
  font-size: calc(14 / 16 * 1rem);
}
.about__text span {
  line-height: 150%;
}
.about__snsItem:first-child {
  margin-top: calc(48 / 16 * 1rem);
}
.about__snsItem {
  margin-top: calc(18 / 16 * 1rem);
}
@media screen and (min-width: 1024px) {
  .about__snsItem:first-child {
    margin-top: calc(32 / 16 * 1rem);
  }
  .about__snsItem {
    margin-top: calc(48 / 16 * 1rem);
  }
}
.about__snsItem a {
  display: flex;
  justify-content: center;
  color: var(--color-white);
  padding: 9px 0;
  margin-inline: auto;
  max-width: 170px;
  border: solid var(--color-white) 1px;
  transition-property: color background-color;
  transition: 0.3s ease;
}
.about__snsItem a:hover {
  color: var(--color-green);
  background-color: var(--color-white);
}
@media screen and (min-width: 1024px) {
  .about__snsItem {
    margin-top: calc(32 / 16 * 1rem);
    min-width: 170px;
    text-align: start;
  }
  .about__snsItem a {
    margin-inline: initial;
  }
}
.circle__container {
  position: relative;
  top: 50px;
  height: 100%;
  width: 100%;
  /* border-bottom: 1px solid black; */
}

/* .vertical__line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background-color: black;
  opacity: 0.4;
} */

/* .horizontal__line {
  position: absolute;
  top: 50%;
  left: 0%;
  width: 100%;
  height: 1px;
  background-color: black;
  opacity: 0.4;
} */
@media screen and (min-width: 1024px) {
}
.circle__container__inner {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 100%;
  max-width: 1200px;
  /* background-color: red; */
}

.circle {
  position: absolute;
  transform-origin: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20vh;
  height: 20vh;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  will-change: transform;
}
@media screen and (min-width: 1024px) {
  .circle {
    width: 32vh;
    height: 32vh;
  }
}
.sticky__section {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.about__decorate1,
.about__decorate2,
.about__decorate3 {
  font-family: Italiana, serif;
  position: absolute;
  z-index: -1;
}
.about__decorate1 {
  width: max(calc(600 / 1440 * 100vw), 600px);
  height: max(calc(520 / 1440 * 100vw), 520px);
  position: absolute;
  right: 5px;
  top: 5px;
  /* -webkit-text-stroke: 1px var(--color-green);
  top: -30px;
  color: transparent;
  font-size: 10vw;
  left: 60px;
  transform: scale(-1); */
}
.about__decorate2 {
  -webkit-text-stroke: 1px var(--color-white);
  bottom: 420px;
  opacity: 0.5;
  color: transparent;
  font-size: 7vw;
  right: 0px;
  overflow: hidden;
  transform: scale(-1);
  display: flex;
  flex-direction: column-reverse;
}
.about__decorate2_top,
.about__decorate2_bottom {
  display: flex;
  line-height: 1;
}

.about__decorate2_top {
  font-size: 90px;
  column-gap: 21px;
  -webkit-text-stroke: 1px var(--color-green);
  position: relative;
  bottom: -14px;
}
.about__decorate2_top span {
  line-height: 1;
}
.about__decorate2_top span:nth-child(2n) {
  transform: scale(-1);
  position: relative;
}
.about__decorate2_bottom span {
  transform: scale(-1);
  position: relative;
}
.about__decorate2_top span:nth-child(2n) {
  top: 16px;
}

.about__decorate2_bottom {
  font-size: 40px;
  column-gap: 10px;
  opacity: 0.5;
  -webkit-text-stroke: 1px var(--color-white);
}
@media screen and (min-width: 1024px) {
  .about__decorate2_bottom span:nth-child(2n + 1) {
    transform: scale(1);
    position: relative;
  }
  .about__decorate2_top {
    font-size: 200px;
    column-gap: 21px;
    bottom: 0;
  }
  .about__decorate2_bottom {
    font-size: 100px;
    column-gap: 32px;
    position: relative;
    top: 50px;
  }
  .about__decorate2 {
    right: -800px;
    bottom: 30px;
  }
  .about__decorate2_top span:nth-child(2n) {
    top: 36px;
  }
  .about__decorate2_bottom span:nth-child(2n + 1) {
    top: -16px;
  }
  .about__decorate2 {
    flex-direction: column;
  }
}
</style>
<script setup>
import { ref, onMounted, onUpdated } from "vue";
if (process.browser) {
  onMounted(() => {
    const circleArea = document.querySelector(".circle__container__inner");
    let circles = [...document.querySelectorAll(".circle")];
    circles.shift();

    let positions = {
      circleOne: { x: 0, y: 0 },
      circleTwo: { x: 0, y: 0 },
      circleThree: { x: 0, y: 0 },
      circleFour: { x: 0, y: 0 },
    };

    let width = document.querySelector(".about__right").clientWidth;
    let height = document.querySelector(".about__right").clientHeight;

    let x = 0;
    let y = 0;

    let maxX = 180;
    let maxY = 180;

    if (window.innerWidth >= 768) {
      maxX = 380;
      maxY = 380;
    }

    let xDirection = 1;
    let yDirection = 1;
    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    circleArea.addEventListener("mousemove", (e) => {
      const rect = e.target.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    });

    function animate() {
      // Update x and y based on direction
      x += 2 * xDirection; // You can adjust the increment value
      y += 2 * yDirection; // You can adjust the increment value

      // Change direction when reaching the boundaries
      if (x >= maxX || x <= 0) {
        xDirection *= -1;
      }
      if (y >= maxY || y <= 0) {
        yDirection *= -1;
      }

      // Animate circles
      positions.circleOne.x = lerp(positions.circleOne.x, (x - width / 2) * 0.6, 0.1);
      positions.circleOne.y = lerp(positions.circleOne.y, (y - height / 2) * 0.6, 0.1);

      positions.circleTwo.x = lerp(positions.circleTwo.x, (-x + width / 2) * 0.6, 0.1);
      positions.circleTwo.y = lerp(positions.circleTwo.y, (y - height / 2) * 0.6, 0.1);

      positions.circleThree.x = lerp(positions.circleThree.x, (x - width / 2) * 0.6, 0.1);
      positions.circleThree.y = lerp(positions.circleThree.y, (-y + height / 2) * 0.6, 0.1);

      positions.circleFour.x = lerp(positions.circleFour.x, (-x + width / 2) * 0.6, 0.1);
      positions.circleFour.y = lerp(positions.circleFour.y, (-y + height / 2) * 0.6, 0.1);

      circles[0].style.transform = `translate(-50%, -50%) translate3d(${positions.circleOne.x}px, ${positions.circleOne.y}px, 0)`;
      circles[1].style.transform = `translate(-50%, -50%) translate3d(${positions.circleTwo.x}px, ${positions.circleTwo.y}px, 0)`;
      circles[2].style.transform = `translate(-50%, -50%) translate3d(${positions.circleThree.x}px, ${positions.circleThree.y}px, 0)`;
      circles[3].style.transform = `translate(-50%, -50%) translate3d(${positions.circleFour.x}px, ${positions.circleFour.y}px, 0)`;

      requestAnimationFrame(animate);
    }

    animate();
  });
}
</script>
