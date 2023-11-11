<template>
  <div>
    <NuxtLayout name="other">
      <div class="idea__bg">
        <div class="section2 js-section">
          <div class="idea__all">
            <div class="idea__allInner">
              <div class="">
                <h2 class="heading">Idea</h2>
              </div>
              <div>
                <div class="idea__body">
                  <ul class="idea__sectionList">
                    <li v-for="idea in data?.contents" :key="idea.id" class="idea__item">
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
                </div>
              </div>
              <!-- idea__inner -->
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "idea App",
  meta: [{ name: "description", content: "My amazing site." }],
});
import type { MicroCMSImage } from "microcms-js-sdk";
type Idea = {
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};
const { data } = await useMicroCMSGetList<Idea>({
  endpoint: "idea",
});

// =============================
// Lenis
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);
/**
 * イベントリスナー
 */
const listener = (event: any) => {
  // リサイズ時に行う処理
  if (event.matches) {
    let lenis = new Lenis({
      orientation: "horizontal",
      syncTouch: true,
      smoothTouch: true,
      gestureOrientation: ScrollTrigger.isTouch ? "horizontal" : "vertical",
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });
  }
};

// リスナー登録
if (process.browser) {
  const mediaQueryList = window.matchMedia("(min-width: 1024px)");
  mediaQueryList.addEventListener("change", listener);
  // 初期化処理
  listener(mediaQueryList);
}

gsap.ticker.lagSmoothing(0);
onMounted(() => {
  if (process.browser) {
    const updateViewportVariables = () => {
      const e = 0.01 * document.documentElement.clientWidth;
      const i = 0.01 * document.documentElement.clientHeight;
      document.documentElement.style.setProperty("--vw", `${e}px`);
      document.documentElement.style.setProperty("--vh", `${i}px`);
      document.documentElement.style.setProperty("--vmax", `${Math.max(e, i)}px`);
      document.documentElement.style.setProperty("--vmin", `${Math.min(e, i)}px`);
    };

    window.addEventListener("resize", updateViewportVariables);
    updateViewportVariables();
  }

  const texts = document.querySelectorAll(".text");
  gsap.set(texts, { y: "80%", clipPath: "inset(0 0 100% 0)" });
  const sections = document.querySelectorAll(".section");
  sections.forEach((elem) => {
    const texq = elem.querySelectorAll(".text");

    gsap.to(texq, {
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: elem,
        start: "left center",
        horizontal: true,
      },
    });
  });
});
// definePageMeta({
//   pageTransition: {
//     name: "custom-flip",
//     mode: "in-out",
//     onBeforeLeave: (el) => {
//       gsap.fromTo(
//         ".pageCover",
//         {
//           x: "-100vw", //右から100px
//         },
//         {
//           x: "0%", //左にに100px移動して元の位置に戻る
//         }
//       );
//     },
//     onEnter: (el, done) => {
//       gsap.fromTo(
//         ".pageCover",
//         {
//           x: "0%", //右から100px
//           opacity: 1,
//         },
//         {
//           x: "-100vw", //左にに100px移動して元の位置に戻る
//           opacity: 0,
//         }
//       );
//     },
//     onAfterEnter: (el) => {},
//   },
// });
</script>
<style scoped>
.idea__all {
  width: calc(330 / 375 * 100%);
  margin: 0 auto;
  padding-top: 134px;
  padding-bottom: 370px;
}
@media screen and (min-width: 768px) {
  .idea__all {
    display: flex;
    width: fit-content;
    height: 100vh;
    padding: 102px 306px 166px 306px;
  }
}
.idea__allInner {
  flex-shrink: 0;
}
</style>
