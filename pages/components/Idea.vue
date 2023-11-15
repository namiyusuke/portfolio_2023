<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import type { MicroCMSImage } from "microcms-js-sdk";
type Idea = {
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};
const { data } = await useMicroCMSGetList<Idea>({
  endpoint: "idea",
  queries: { limit: 8 },
});
// if (process.browser) {
//   const targets = document.querySelectorAll(".js-parallax");
//   console.log(targets);
//   // onMounted(() => {
//   targets.forEach((target) => {
//     console.log(target);
//     gsap.fromTo(
//       target,
//       {
//         x: 0,
//       },
//       {
//         x: 600, // y方向-に60px移動させる
//         ease: "none", // イージングなし
//         scrollTrigger: {
//           trigger: ".idea__inner", // ScrollTriggerの開始位置を計算するために使用される要素
//           start: "top bottom", // 1つ目の値がtriggerで指定した要素の開始位置　2つ目の値が画面の開始位置
//           end: "bottom top", // 1つ目の値がtriggerで指定した要素の終了位置　2つ目の値が画面の終了位置
//           scrub: true, // 要素を1秒遅れで追従させる
//           // markers: true, // 開始位置、終了位置を調整確認する際に使用します
//         },
//       }
//     );
//   });
//   // });
// }

// });
</script>

<template>
  <div class="section2 js-section" id="idea">
    <div class="l-wrapper">
      <div class="idea__inner">
        <div class="heading__line">
          <h2 class="heading">idea</h2>
        </div>
        <div class="idea__body">
          <ul class="idea__list">
            <li v-for="idea in data?.contents" :key="idea.id" class="idea__item js-parallax">
              <a :href="idea.url" target="_blank">
                <div class="idea__thumbnail">
                  <figure>
                    <img :src="idea.image?.url" alt="" />
                  </figure>
                </div>
              </a>
            </li>
            <!-- idea__item -->
          </ul>
          <!-- idea__list -->
          <div>
            <div class="idea__button">
              <p><NuxtLink to="/idea">view more</NuxtLink></p>
            </div>
          </div>
        </div>
      </div>
      <!-- idea__inner -->
    </div>
    <div class="idea__decorate_backtext">
      <div class="idea__decorate_backTop">
        <span class="idea__decorate_left">frontend</span>
        <span class="idea__decorate_right">frontend</span>
      </div>
      <span class="idea__decorate_backBottom">developer</span>
    </div>
    <div class="idea__decorate_text">
      <p>
        <span class="u-wbr">After studying psychology at university and graduating from a vocational</span>
        <span class="u-wbr">school, he worked at a children's home as a social worker.</span>
        <span class="u-wbr">Worked as a front-end engineer at a production company since October 2021.</span>
        <span class="u-wbr">What I am good at/able</span>
        <span class="u-wbr">to do: Animation/interaction using JS and CSS, markup</span>
        <span class="u-wbr">Hobbies: Bouldering, muscle training, sauna, cooking</span>
      </p>

      <p>
        <span class="u-wbr">After studying psychology at university and graduating from a vocational</span>
        <span class="u-wbr">school, he worked at a children's home as a social worker.</span>
        <span class="u-wbr">Worked as a front-end engineer at a production company since October 2021.</span>
        <span class="u-wbr">What I am good at/able</span>
        <span class="u-wbr">to do: Animation/interaction using JS and CSS, markup</span>
        <span class="u-wbr">Hobbies: Bouldering, muscle training, sauna, cooking</span>
      </p>
    </div>
  </div>
</template>
<style>
.idea__item + .idea__item {
  margin-top: calc(20 / 16 * 1rem);
}
.idea__item img {
  width: 110%;
  height: 110%;
  object-fit: cover;
}
.idea__item a:hover {
  animation: hoverPicCard 1s ease-out running;
}
.idea__button a {
  position: relative;
  z-index: 4;
  font-family: "Italiana", serif;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(125deg, #fff 40%, var(--color-green) 50%, #fff 60%);
  /* background-image: linear-gradient(
    125deg,
    var(--color-green) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    var(--color-green) 60%
  ); */
  background-position: 100% 0;
  background-size: 300% 100%;
  background-clip: text;
  color: transparent;
  transition: 1s cubic-bezier(0.4, 0.4, 0, 1);
  transition-property: all;
}
.idea__button a:hover {
  color: transparent;
  background-position: 0 0;
}
@keyframes hoverPicCard {
  0% {
    filter: brightness(1);
  }
  30% {
    filter: brightness(1.3);
  }
  100% {
    filter: brightness(1);
  }
}
.idea__button a {
  /* color: #fff; */
  font-size: calc(24 / 16 * 1rem);
}
.idea__button {
  text-align: end;
  margin-top: 8px;
}
@media screen and (min-width: 1024px) {
  .idea__button {
    text-align: left;
    margin-top: 0px;
  }
}
.idea__item figure {
  position: relative;
}
.idea__item figure {
  /* width: 330px;
  height: 227px; */
  width: 100%;
  aspect-ratio: 330/227;
  overflow: hidden;
}
/* .idea__item figure::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--color-green);
  mix-blend-mode: hue;
} */
@media screen and (min-width: 1024px) {
  .idea__item {
    border: 2px solid var(--color-green);
    padding: 10px;
  }
  .idea__inner {
    padding-left: 241px;
    flex-shrink: 0;
    padding: 102px 360px 166px 360px;
  }
  .idea__list {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 28px;
    grid-auto-flow: column;
    /* opacity: 0; */
  }
  .idea__sectionList {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 28px;
    grid-auto-flow: column;
  }
  .idea__item + .idea__item {
    margin-top: 0;
  }
  .idea__item figure {
    width: min(calc(var(--vh) * 59.21 - 160px), 363px);
    height: min(calc(var(--vh) * 40.78 - 116px), 250px);
    aspect-ratio: 363/250;
    overflow: hidden;
  }
  .idea__body {
    display: flex;
    align-items: flex-end;
    column-gap: 24px;
  }
}
.idea__decorate_text {
  position: absolute;
  z-index: -1;
  top: 41px;
  left: 133px;
}
@media screen and (min-width: 1024px) {
  .idea__decorate_text {
    position: absolute;
    z-index: -1;
    top: auto;
    bottom: 47px;
    left: 133px;
  }
}
.idea__decorate_text p {
  font-style: italic;
  font-weight: 100;
  font-family: "Inter", sans-serif;
  color: var(--color-yellow);
  opacity: 0.5;
}
.idea__decorate_text p + p {
  margin-top: 7px;
}
.idea__decorate_right {
  transform: rotate(180deg) scaleX(-1);
}
.idea__decorate_backtext {
  opacity: 0.3;
  line-height: 0.7;
  position: absolute;
  z-index: -1;
  font-family: "Italiana", serif;
  font-weight: 400;
  right: 1px;
  bottom: 67px;
}
@media screen and (min-width: 1024px) {
  .idea__decorate_backtext {
    opacity: 0.3;
    line-height: 0.7;
    z-index: -1;
    right: 125px;
    top: 67px;
    bottom: auto;
  }
}
.idea__decorate_backTop {
  letter-spacing: 0.2rem;
  display: flex;
  letter-spacing: 1;
  column-gap: 24px;
  font-size: calc(42 / 16 * 1rem);
  color: transparent;
  -webkit-text-stroke: 1px var(--color-white);
}
.idea__decorate_backBottom {
  color: transparent;
  -webkit-text-stroke: 1px var(--color-yellow);
  font-size: calc(80 / 16 * 1rem);
  margin-top: 10px;
  display: inline-block;
}
@media screen and (min-width: 1024px) {
  .idea__decorate_backTop {
    font-size: calc(64 / 16 * 1rem);
  }
  .idea__decorate_backBottom {
    font-size: calc(128 / 16 * 1rem);
  }
}
</style>
