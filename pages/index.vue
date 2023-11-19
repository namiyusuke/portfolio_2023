<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
// import Hero from "./components/Hero.vue";
// import Idea from "./components/Idea.vue";
// import Project from "./components/Project.vue";
// import About from "./components/About.vue";
import { ref, onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

// =============================
// Lenis
let progress = ref(0);
onMounted(() => {
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
            console.log(element);
            // スクロール
            lenis.scrollTo(`#idea`);
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
  const mediaQueryList = window.matchMedia("(min-width: 1024px)");
  mediaQueryList.addEventListener("change", listener);
  // 初期化処理
  listener(mediaQueryList);
  gsap.ticker.lagSmoothing(0);
});
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
// // リスナー登録
// if (process.browser) {
//   // アンカーリンクを取得
//   const sections = document.querySelectorAll(".js-section");
//   onMounted(() => {
//     sections.forEach((section) => {
//       const headings = section.querySelectorAll(".heading");
//       gsap.to(".idea__list", {
//         opacity: 1,
//         duration: 2,
//         delay: 1.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "center",
//           horizontal: true,
//         },
//         onComplete: () => {
//           console.log(section);
//         },
//       });
//       headings.forEach((heading) => {
//         gsap.to(heading, {
//           y: "0%",
//           opacity: 1,
//           duration: 2,
//           ease: "expo.inOut",
//           scrollTrigger: {
//             trigger: section,
//             start: "center",
//             horizontal: true,
//           },
//         });
//       });
//     });
//   });
// }

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

// if (process.browser) {
//   const section2 = document.querySelector(".section2");
//   const items = document.querySelectorAll(".idea__item");
//   gsap.to(".bg", {
//     duration: 4,
//     // zIndex: 0,
//     background:
//       "radial-gradient(62.49% 42.49% at 7.01% 12.22%,rgba(60, 103, 84, 0.7) 0%,rgba(60, 103, 84, 0.21) 65.63%,rgba(60, 103, 84, 0) 100%)",
//     // ease: "ease",
//     scrollTrigger: {
//       trigger: section2,
//       start: "left center",
//       horizontal: true,
//       toggleActions: "play none none reverse",
//     },
//   });
// }
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div class="pageCover"></div>
      <div class="flex">
        <main :style="{ '--scroll-progress': progress }">
          <div class="scrollBar scrolling" id="ScrollBar">
            <div class="bg"></div>
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
