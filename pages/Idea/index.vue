<script setup lang="ts">
// Lenis
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ref, onMounted } from "vue";
definePageMeta({
  layout: "other",
});
useHead({
  title: "portfolio-nami2024",
  meta: [{ name: "description", content: "これは並河祐輔のポートフォリオサイトです" }],
});
import type { MicroCMSImage } from "microcms-js-sdk";
type Idea = {
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};
const { data } = await useMicroCMSGetList<Idea>({
  endpoint: "idea",
  queries: { limit: 20 },
});

// =============================

gsap.registerPlugin(ScrollTrigger);
/**
 * イベントリスナー
 */
// リスナー登録
if (process.browser) {
  onMounted(async () => {
    await nextTick();
    const listener = (event: any) => {
      // リサイズ時に行う処理
      if (event.matches) {
        let lenis = new Lenis({
          orientation: "horizontal",
          syncTouch: true,
          smoothTouch: true,
          gestureOrientation: ScrollTrigger.isTouch ? "horizontal" : "vertical",
        });
        document.querySelectorAll("[data-scroll-link]").forEach((anchor) => {
          const id = anchor.getAttribute("data-scroll-link");
          let element = document.querySelector(`#${id}`);
          // クリック時に目的の箇所までスクロールする
          anchor?.addEventListener("click", (e) => {
            // urlを変更しないようにする

            e.preventDefault();
            // スクロール
            lenis.scrollTo(element);
          });
        });

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });
      } else {
      }
    };

    const mediaQueryList = window.matchMedia("(min-width: 1024px)");
    mediaQueryList.addEventListener("change", listener);
    // 初期化処理
    listener(mediaQueryList);

    gsap.ticker.lagSmoothing(0);
  });
}
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
<template>
  <div>
    <!-- <NuxtLayout> -->
    <div class="bg"></div>
    <div class="idea__bg">
      <div class="section2 -ideaPage js-section">
        <div class="idea__all">
          <div class="idea__allInner">
            <div class="">
              <h2 class="heading">archive</h2>
            </div>
            <div>
              <div class="idea__body">
                <ul class="idea__sectionList">
                  <li v-for="idea in data?.contents" :key="idea.id" class="idea__item">
                    <a :href="idea.url" target="_blank">
                      <div class="idea__thumbnail">
                        <figure>
                          <NuxtPicture provider="imgix" legacy-format="jpeg" fit="crop" :src="idea.image?.url" alt="" />
                        </figure>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- idea__inner -->
          </div>
        </div>
      </div>
    </div>
    <!-- </NuxtLayout> -->
  </div>
</template>

<style>
.idea__all {
  width: calc(330 / 375 * 100%);
  max-width: 480px;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 370px;
}
.bg {
  position: fixed;
  z-index: -2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  background-image: url("~/assets/green_filter02-sp.png");
  background-size: cover;
  /* background: linear-gradient(103deg, rgba(60, 103, 84, 0.7) 11.5%, rgba(60, 103, 84, 0) 83.71%); */
  transition: background-image 2s ease;
}
@media screen and (min-width: 1024px) {
  .idea__all {
    max-width: initial;
    display: flex;
    width: fit-content;
    height: 100vh;
    padding: 102px 306px 166px 306px;
  }
  .bg {
    position: fixed;
    z-index: -2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    background-image: url("~/assets/green_filter02.png");
    background-size: cover;
    /* background: linear-gradient(103deg, rgba(60, 103, 84, 0.7) 11.5%, rgba(60, 103, 84, 0) 83.71%); */
    transition: background-image 2s ease;
  }
}
.idea__allInner {
  flex-shrink: 0;
}
</style>
