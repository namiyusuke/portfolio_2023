<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ref, onMounted } from "vue";
definePageMeta({
  layout: "app",
});
import type { MicroCMSImage } from "microcms-js-sdk";
type Idea = {
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};
// onMounted(() => {});
const { data } = await useMicroCMSGetList<Idea>({
  endpoint: "idea",
  queries: { limit: 8 },
});

let progress = ref(0);
onMounted(async () => {
  await nextTick();
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

      if (process.browser) {
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
          progress.value = lenis.progress;
          lenis.raf(time * 1000);
        });
      }
    }
  };
  const mediaQueryList = window.matchMedia("(min-width: 1024px)");
  mediaQueryList.addEventListener("change", listener);
  // 初期化処理
  listener(mediaQueryList);
  gsap.ticker.lagSmoothing(0);
});
</script>
<template>
  <div class="">
    <!-- <NuxtLayout> -->
    <div :style="{ '--scroll-progress': progress }">
      <div class="pageCover"></div>
      <div class="flex">
        <main>
          <div class="scrollBar scrolling" id="ScrollBar">
            <div class="bg"></div>
            <div class="scrollBar_track"><div class="scrollBar_progress"></div></div>
            <!-- <div class="scrollBar_arrow"><div class="arrow">→</div></div> -->
          </div>
          <Hero />
          <!-- <Idea /> -->

          <Project />
          <About />
        </main>
      </div>
    </div>
    <!-- </NuxtLayout> -->
  </div>
</template>
<style>
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  button {
    background-color: #f9f9f9;
  }
}
.header__nav {
  position: fixed;
  top: 62px;
  right: 22px;
  z-index: 10;
}

.ol-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-text-decoration: none;
  display: inline-block;
  appearance: none;
  border: 0;
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.hamburger__label {
  display: inline-block;
  color: #fff;
  padding: 5px 16px;
  border: 1px solid #fff;
  border-radius: calc(20 / 16 * 1rem);
}
.drawer {
  border: 1px solid var(--color-gray);
  padding: calc(10 / 16 * 1rem);
  border-radius: calc(20 / 16 * 1rem);
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0ms 2000ms, clip-path 500ms ease;
  margin-top: calc(16 / 16 * 1rem);
}
.is-drawerActive .drawer {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  pointer-events: auto;
  visibility: visible;
  transition: visibility 0ms 0ms, clip-path 1000ms var(--ease-out-expo);
}
.drawer__inner {
  background-color: var(--color-white);
  color: var(--color-green);
  padding: 25px 34px 25px 49px;
  border-radius: calc(20 / 16 * 1rem);
}
.header__inner {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* row-gap: 1rem; */
}
@media screen and (min-width: 1024px) {
  .header__nav {
    right: auto;
    position: fixed;
    top: 62px;
    left: 42px;
    z-index: 100;
  }
  .drawer {
    border: none;
    padding: 0;
    border-radius: 0;
    clip-path: none;
    margin-left: calc(24 / 16 * 1rem);
  }
  .drawer__inner {
    flex-direction: row;
    row-gap: 0;
    padding: 0;
    background-color: transparent;
    color: var(--color-white);
  }
  .header__inner {
    display: flex;
    align-items: flex-start;
    /* column-gap: 24px; */
    flex-direction: row;
  }
  .hamburger__label {
    padding: 20px 5px;
    display: inline-block;
    color: #fff;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    border: 1px solid #fff;
    border-radius: calc(20 / 16 * 1rem);
  }
}
.globalNav__item a {
  color: inherit;
  font-size: calc(20 / 16 * 1rem);
  background-repeat: no-repeat;
  background-size: 220% 100%;
  color: var(--color-green);
  display: block;
  transition-property: all;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
@media screen and (min-width: 1024px) {
  .globalNav__item a {
    color: var(--color-white);
  }
}

/* @keyframes animeFilter {
  0% {
    filter: brightness(1);
  }
  10% {
    filter: brightness(5.5);
  }
  100% {
    filter: brightness(1.4);
  }
} */
.globalNav__item + .globalNav__item {
  margin-top: calc(18 / 16 * 1rem);
}
.visuallyHidden {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  white-space: nowrap;
  clip-path: inset(50%);
}
.globalNav__item {
  transition-property: opacity transform;
  transition-duration: 0.4s;
  transition-delay: 0s;
  transition-timing-function: var(--ease-out-cubic);
  opacity: 0;
  transform: translateX(-20px);
}
.is-drawerActive .globalNav__item {
  opacity: 1;
  transform: translateX(0px);
}
.is-drawerActive .globalNav__item:nth-child(1) {
  transition-delay: 0.1s;
}
.is-drawerActive .globalNav__item:nth-child(2) {
  transition-delay: 0.15s;
}
.is-drawerActive .globalNav__item:nth-child(3) {
  transition-delay: 0.2s;
}
.is-drawerActive .globalNav__item:nth-child(4) {
  transition-delay: 0.25s;
}
.globalNav__item {
  transition-delay: 0s;
}
.footer__copy {
  color: var(--color-white);
  text-align: center;
  padding-bottom: 14px;
  font-weight: 200;
  font-size: 14px;
}
@media screen and (min-width: 1024px) {
  .footer {
    display: none;
  }
}
.text__sub {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}
.text__sub span {
  transform: translateY(70%);
  opacity: 0;
}
a:hover .text__main span {
  opacity: 0;
  transform: translateY(-70%);
}
a:hover .text__sub span {
  opacity: 1;
  transform: translateY(0%);
}
.js-split span {
  transition-duration: 0.8s;
  transition-delay: calc(var(--index) * 0.02s);
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
a:hover .js-split span {
  position: relative;
  pointer-events: none;
  display: inline-block;
}
</style>
