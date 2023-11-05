<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero.vue";
import Idea from "./components/Idea.vue";
import Project from "./components/Project.vue";
import About from "./components/About.vue";
import { ref, onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

// =============================
// Lenis
let progress = ref(0);
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
      document.querySelectorAll("a[data-scroll-link]").forEach((anchor) => {
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
    }
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
      progress.value = lenis.progress;
      lenis.raf(time * 1000);
    });
  }
};

// リスナー登録
if (process.browser) {
  // アンカーリンクを取得

  const mediaQueryList = window.matchMedia("(min-width: 1024px)");
  mediaQueryList.addEventListener("change", listener);
  // 初期化処理
  listener(mediaQueryList);
}

gsap.ticker.lagSmoothing(0);
// definePageMeta({
//   pageTransition: {
//     name: "custom-flip",
//     mode: "in-out",
//     onLeave: (el) => {
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
//         },
//         {
//           x: "-100vw", //左にに100px移動して元の位置に戻る
//         }
//       );
//     },
//     onAfterEnter: (el) => {},
//   },
// });
// if (process.browser) {
//   function createTextAnimations() {
//     // sections.forEach((section) => {
//     const sections = document.querySelector(".section2");
//     const items = document.querySelectorAll(".idea__item");
//     items.forEach((item) => {
//       gsap.to(item, {
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.out",
//         // stagger: 0.03,
//         scrollTrigger: {
//           trigger: sections,
//           start: "left center",
//           horizontal: true,
//           onUpdate: (self) => {
//             console.log(item);
//           },
//         },
//       });
//     });
//   }
//   createTextAnimations();
//   // });
// }
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
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div class="pageCover"></div>
      <div class="flex">
        <main :style="{ '--scroll-progress': progress }">
          <div class="scrollBar scrolling" id="ScrollBar">
            <div class="scrollBar_track"><div class="scrollBar_progress"></div></div>
            <!-- <div class="scrollBar_arrow"><div class="arrow">→</div></div> -->
          </div>
          <Hero />
          <Idea />
          <Project />
          <About />
        </main>
      </div>
    </NuxtLayout>
  </div>
</template>
<style>
:root {
  --vw: 100vw;
  --first-view-height: 100vh;
  --max-content-width: 168rem;
  --color-base: #222222;
  --color-bg: var(--color-yellow);
  --color-primary: #ff0211;
  --color-pink: #ff5a5a;
  --color-blue: #4dc9ff;
  --color-sky: #e0e9ff;
  --color-green: #3c6754;
  --color-yellow: #dfe091;
  --color-orange: #feb417;
  --color-cream: #fcf0be;
  --color-purple: #c098dd;
  --color-white: #f2f2f2;
  --color-black: #202020;
  --color-gray: #d9d9d9;
  --color-twitter: #1da1f2;
  --color-line: #06c755;
  --color-facebook: #0668e1;
  --color-copy: #c098de;
  --color-present-base: #000091;
  --breakpoints-xs: 320px;
  --breakpoints-sm: 768px;
  --breakpoints-md: 1024px;
  --breakpoints-lg: 1440px;
  --breakpoints-xl: 1680px;
  --breakpoints-full: 9999px;
  --design-view-width-pc: 1440px;
  --design-view-width-sp: 750px;
  --zindex-back: 0;
  --zindex-middle: 10;
  --zindex-front: 100;
  --zindex-modal: 1000;
  --zindex-magic: 10000;
  --zindex-always: 20000;
  --font-weight-thin: 100;
  --font-weight-extraLight: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semiBold: 600;
  --font-weight-bold: 700;
  --font-weight-extraBold: 800;
  --font-weight-black: 900;
  --font-family-base: "Noto Sans JP", sans-serif;
  --leading-none: 1;
  --leading-tight: 1.2;
  --leading-snug: 1.4;
  --leading-base: 1.6;
  --leading-loose: 2;
  --tracking-none: 0;
  --tracking-tight: 0.01em;
  --tracking-base: 0.06em;
  --tracking-loose: 0.1em;
  --ease-linear: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  --ease-in-sine: cubic-bezier(0.47, 0, 0.745, 0.715);
  --ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1);
  --ease-inout-sine: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-inout-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-inout-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-inout-quart: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-inout-quint: cubic-bezier(0.86, 0, 0.07, 1);
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-inout-expo: cubic-bezier(1, 0, 0, 1);
  --ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);
  --ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
  --ease-inout-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  --ease-in-back: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  --ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-inout-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-unleash: cubic-bezier(0.16, 0.05, 0, 1);
  --ease-in-unleash: cubic-bezier(0.56, 0.09, 0.7, 0.21);
  --ease-out-unleash: cubic-bezier(0.11, 0.92, 0.3, 1);
  --ease-inout-unleash: cubic-bezier(0.53, 0.2, 0.29, 1);
  --ease-pop: cubic-bezier(0.19, 0.04, 0.28, 1.39);
  --ease-in-pop: cubic-bezier(0.52, -0.28, 0.85, 0.14);
  --ease-out-pop: cubic-bezier(0.23, 1, 0.46, 1.4);
}

/*! Oreset.css v2.0.0 | MIT License | https://github.com/hirosiva/Oreset.css */
/*
  # Global
---------------------------------------------- */
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*
  # Document & Sections
---------------------------------------------- */
:where(html) {
  block-size: 100%;
  /* scroll-behavior: smooth; */
  -webkit-text-size-adjust: none;
}

:where(body) {
  min-block-size: 100%;
  text-rendering: optimizeLegibility;
  line-height: 1.5;
  font-family: system-ui, sans-serif;
  font-feature-settings: "pkna";
  -webkit-font-smoothing: antialiased;
}

/*
  # Grouping content
---------------------------------------------- */
:where(p, h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word;
}

:where(hr) {
  border: none;
  border-block-start: 1px solid;
  color: inherit;
  block-size: 0;
  overflow: visible;
}

:where(ul, ol) {
  list-style: none;
}

/*
  # Text-level semantics
---------------------------------------------- */
:where(a:not([class])) {
  -webkit-text-decoration-skip: ink;
  text-decoration-skip-ink: auto;
}

/*
  # Embedded content
---------------------------------------------- */
:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}

:where(img, picture, svg) {
  max-inline-size: 100%;
  block-size: auto;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

/*
  # Tabular data
---------------------------------------------- */
:where(table) {
  border-collapse: collapse;
}

/*
  # Forms
---------------------------------------------- */
:where(input, button, textarea, select, optgroup) {
  font: inherit;
  color: inherit;
}

:where(textarea) {
  resize: vertical;
  resize: block;
}

:where(button, label, select, summary, [role="button"], [role="option"]) {
  cursor: pointer;
}

:where(input[type="file"])::-webkit-file-upload-button,
:where(input[type="file"])::file-selector-button {
  cursor: pointer;
}

:where(:disabled) {
  cursor: not-allowed;
}

:where(label:has(> input:disabled), label:has(+ input:disabled)) {
  cursor: not-allowed;
}

:where(button) {
  border-style: solid;
}

/*
  # Interactive & Misc
---------------------------------------------- */
:where(template, [hidden]:not([hidden="until-found"])) {
  display: none;
}

/*
  # Accessibility
---------------------------------------------- */
:where([disabled], [aria-disabled="true"]) {
  cursor: not-allowed;
}

:where([aria-busy="true"]) {
  cursor: progress;
}

:where([aria-controls]) {
  cursor: pointer;
}

:where([aria-hidden="false"][hidden]) {
  display: initial;
}

:where([aria-hidden="false"][hidden]):not(:focus) {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

:where(:focus:not(:focus-visible), ::before:focus:not(:focus-visible), ::after:focus:not(:focus-visible)) {
  outline: none;
}

/**
 * Prettier ignore
 */
@media (prefers-reduced-motion: reduce) {
  *,
  *:before,
  *:after {
    transition: none !important;
    animation: none !important;
    scroll-behavior: auto !important;
  }
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  /* margin: 0;
  display: flex;
  place-items: center; */
  background: linear-gradient(109deg, rgba(60, 103, 84, 0.7) 11.82%, rgba(60, 103, 84, 0) 82.68%);
  font-family: "Inter", sans-serif;
  font-weight: 400;
  /* background-color: #0f0f0f; */
}
body:before {
  position: fixed;
  left: 0;
  top: 0;
  background: #202020;
  transform: translateZ(0);
  content: "";
  width: 100%;
  height: 100%;
  z-index: -2;
}
body::after {
  position: fixed;
  left: 0;
  top: 0;
  background-image: url("~/assets/nose.png");
  pointer-events: none !important;
  /* background: #202020; */
  background-size: 250px 250px;
  will-change: background-position;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  content: "";
  width: 100%;
  height: calc(100% + 100px);
  z-index: -1;
  animation: noiseTextureAnim 0.55s steps(1) infinite;
}
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
@keyframes noiseTextureAnim {
  0% {
    background-position: 0 0;
  }
  10% {
    background-position: 10px 10px;
  }
  20% {
    background-position: 150px 20px;
  }
  30% {
    background-position: 125px 125px;
  }
  40% {
    background-position: 40px 170px;
  }
  50% {
    background-position: 125px 125px;
  }
  60% {
    background-position: 90px 10px;
  }
  70% {
    background-position: 60px 100px;
  }
  80% {
    background-position: 20px 70px;
  }
  90% {
    background-position: 120px 80px;
  }
  100% {
    background-position: 0 250px;
  }
}
/* button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
} */

.heading {
  color: var(--color-white);
  font-size: calc(48 / 16 * 1rem);
  margin-bottom: 12px;
  font-family: "Italiana", serif;
  font-weight: 400;
  color: var(--color-white);
  transform: translate(0%, 100%);
  opacity: 0;

  /* text-stroke: 2px #000; */
}
.heading__line {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .scrollBar {
    position: fixed;
    z-index: 5;
    pointer-events: none;
    display: flex;
    right: 48px;
    top: 55px;
  }
  .scrollBar_track {
    width: 200px;
    height: 4px;
    border-radius: 3px;
    background-color: var(--color-green);
  }
  .scrollBar_progress {
    transform-origin: left center;
    width: 100%;
    height: 100%;
    background-color: var(--color-yellow);
    transform: scaleX(var(--scroll-progress));
  }
}
body::-webkit-scrollbar,
.section::-webkit-scrollbar,
.section2::-webkit-scrollbar {
  width: 5px;
  height: 0px;
}

.section2 {
  padding: calc(100 / 16 * 1rem) 0 calc(180 / 16 * 1rem) 0;
}
.section3,
.section4 {
  position: relative;
  background: radial-gradient(
    62.49% 42.49% at 7.01% 12.22%,
    rgba(60, 103, 84, 0.7) 0%,
    rgba(60, 103, 84, 0.21) 65.63%,
    rgba(60, 103, 84, 0) 100%
  );
  /* width: 100vw; */
}
.l-wrapper {
  width: calc(331 / 375 * 100%);
  margin-inline: auto;
}
.section3 {
  padding: 100px 0 180px 0;
}
@media screen and (min-width: 768px) {
  main {
    display: flex;
    width: fit-content;
  }
  .flex {
    display: flex;
    width: fit-content;
  }

  .section {
    flex-shrink: 0;
    width: 100vw;
    /* height: 100vh; */
    display: grid;
    place-items: center;
    background: linear-gradient(103deg, rgba(60, 103, 84, 0.7) 11.5%, rgba(60, 103, 84, 0) 83.71%);
  }
  .section2 {
    background: radial-gradient(
      62.49% 42.49% at 7.01% 12.22%,
      rgba(60, 103, 84, 0.7) 0%,
      rgba(60, 103, 84, 0.21) 65.63%,
      rgba(60, 103, 84, 0) 100%
    );
    /* width: 100vw; */
    overflow: hidden;
    /* margin-bottom: ; */
    flex-shrink: 0;
    padding: 0;
  }
  .section3 {
    padding: 0;
  }
  .l-wrapper {
    width: 100%;
  }
}
.u-wbr {
  display: block;
}
.pageCover {
  position: absolute;
  left: -10%;
  top: 0;
  width: 120%;
  height: 100%;
  background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 10%, #fff 90%, hsla(0, 0%, 100%, 0));
  background-size: 100%;
  background-repeat: no-repeat;
  transform: translate3d(-100%, 0, 0);
  pointer-events: none;
}
</style>
