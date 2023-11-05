<template>
  <div class="js-mouse-stalker">
    <div class="js-mouse-stalker__cursor" :style="{ top: mouseY - 300 + 'px', left: mouseX - 300 + 'px' }"></div>
    <div class="js-mouse-stalker__follower"></div>
  </div>
  <NuxtPage @mousemove="mouseStalker" />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@media screen and (min-width: 768px) {
  .js-mouse-stalker .js-mouse-stalker__cursor,
  .js-mouse-stalker .js-mouse-stalker__follower {
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: none;
    pointer-events: none;
  }

  .js-mouse-stalker .js-mouse-stalker__cursor {
    width: 600px;
    height: 600px;
    /* left: -300px;
  top: -300px; */
    background: radial-gradient(circle, var(--color-green) 15%, #000000 70%);
    opacity: 0.4;
    border-radius: 50%;
    z-index: 2;
    transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
    /* easeOutCubic */
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    /* easeOutCubic */
    mix-blend-mode: color-dodge;
  }

  .js-mouse-stalker .js-mouse-stalker__follower {
    width: 0px;
    height: 0px;
    left: -10px;
    top: -10px;
    transform: translate(-50%, -50%);
    background-color: #777777;
    opacity: 0.4;
    z-index: 1;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    /* easeOutExpo */
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    /* easeOutExpo */
  }

  .js-mouse-stalker.is-hover .js-mouse-stalker__cursor {
    width: 120px;
    height: 120px;
    left: -46px;
    top: -46px;
    opacity: 0.4;
  }

  .js-mouse-stalker.is-hover .js-mouse-stalker__follower {
    width: 0px;
    height: 0px;
    left: -36px;
    top: -36px;
    z-index: 3;
    opacity: 0.4;
    background-color: transparent;
    filter: blur(0);
  }

  .js-mouse-stalker.is-drag .js-mouse-stalker__cursor {
    width: 120px;
    height: 120px;
    left: -56px;
    top: -56px;
    opacity: 0.4;
  }

  .js-mouse-stalker.is-drag .js-mouse-stalker__follower {
    width: 80px;
    height: 80px;
    left: -36px;
    top: -36px;
    z-index: 3;
    opacity: 0.6;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2215.956%22%20viewBox%3D%220%200%2040%2015.956%22%3E%20%3Cpath%20id%3D%22%E5%90%88%E4%BD%93_2%22%20data-name%3D%22%E5%90%88%E4%BD%93%202%22%20d%3D%22M20032.125%2C13.846a.405.405%2C0%2C0%2C1-.016-.568l6.936-7.323-6.936-7.278a.405.405%2C0%2C0%2C1%2C.016-.568.4.4%2C0%2C0%2C1%2C.563.015l7.2%2C7.554A.6.6%2C0%2C0%2C1%2C20040%2C6a.487.487%2C0%2C0%2C1-.111.277l-7.2%2C7.554a.4.4%2C0%2C0%2C1-.562.015Zm-24.814-.015-7.2-7.554A.487.487%2C0%2C0%2C1%2C20000%2C6a.6.6%2C0%2C0%2C1%2C.111-.322l7.2-7.554a.4.4%2C0%2C0%2C1%2C.568-.015.4.4%2C0%2C0%2C1%2C.01.568l-6.936%2C7.278%2C6.936%2C7.323a.4.4%2C0%2C1%2C1-.578.553Z%22%20transform%3D%22translate(-20000.002%202)%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .js-mouse-stalker.is-drag .js-mouse-stalker__follower::before {
    content: "";
    position: absolute;
    text-align: center;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -10px;
    font-size: 1.2rem;
    font-weight: 900;
  }
}
</style>
<script setup lang="ts">
useHead({
  title: "portfolio-nami",
  meta: [{ name: "description", content: "My amazing site." }],
});
// definePageMeta({
//   pageTransition: {
//     name: "custom-flip",
//     mode: "out-in",
//     onBeforeEnter: (el) => {
//       console.log("Before enter...");
//     },
//     onEnter: (el, done) => {},
//     onAfterEnter: (el) => {},
//   },
// });
import { ref, onMounted } from "vue";
const mouseX = ref(0);
const mouseY = ref(0);
const posX = ref(0);
const posY = ref(0);
const mouseStalker = (e: any) => {
  mouseX.value = e.pageX;
  mouseY.value = e.pageY;
};
</script>
