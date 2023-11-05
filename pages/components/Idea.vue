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
  <div class="section2" id="idea">
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
          <div class="">
            <div class="idea__button">
              <p><NuxtLink to="/idea">view more</NuxtLink></p>
            </div>
          </div>
        </div>
      </div>
      <!-- idea__inner -->
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
.idea__item figure {
  position: relative;
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
@media screen and (min-width: 768px) {
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
    opacity: 0;
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
.js-parallax {
  /* width: 363px; */
  /* overflow: hidden; */
}
/* .idea__item img {
  transform: translateX(calc(var(--scroll-progress) * -100px));
} */
</style>
