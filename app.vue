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

@media screen and (min-width: 1024px) {
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
  font-size: calc(36 / 16 * 1rem);
  margin-bottom: 12px;
  font-family: "Italiana", serif;
  font-weight: 400;
  color: var(--color-white);
  /* transform: translate(0%, 100%);
  opacity: 0; */
  position: relative;
  z-index: 1;
  /* text-stroke: 2px #000; */
}
.heading__line {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .heading {
    font-size: calc(48 / 900 * 100vh);
  }
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
.section {
  background: linear-gradient(108deg, rgba(60, 103, 84, 0.7) 15.65%, rgba(60, 103, 84, 0) 63.54%);
}
.section2 {
  padding: calc(100 / 16 * 1rem) 0 calc(180 / 16 * 1rem) 0;
}
.section2,
.section3,
.section4 {
  overflow: hidden;
  position: relative;
  background: radial-gradient(
    80.16% 84.65% at 7.73% 6.15%,
    rgba(60, 103, 84, 0.7) 0%,
    rgba(60, 103, 84, 0.21) 61.67%,
    rgba(60, 103, 84, 0) 100%
  );
  /* width: 100vw; */
}
.section2.-ideaPage {
  overflow: initial;
}
.l-wrapper {
  width: calc(331 / 375 * 100%);
  max-width: 480px;
  margin-inline: auto;
}
.section3 {
  padding: 100px 0 180px 0;
}

@media screen and (min-width: 1024px) {
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

    flex-shrink: 0;
    padding: 0;
  }
  .section3 {
    padding: 0;
  }
  .l-wrapper {
    width: 100%;
    max-width: initial;
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
/* .bg {
  position: fixed;
  z-index: -4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(103deg, rgba(60, 103, 84, 0.7) 11.5%, rgba(60, 103, 84, 0) 83.71%);
} */
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
<style></style>
