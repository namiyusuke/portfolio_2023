<script setup>
const drawerTaget = ref(false);

const toggle = () => {
  drawerTaget.value = !drawerTaget.value;
};
</script>

<template>
  <div>
    <header>
      <nav class="header__nav">
        <h2 class="visuallyHidden">サイト内メニュー</h2>
        <a href="#main" class="visuallyHidden">本文にスキップ</a>
        <div :class="{ 'is-drawerActive': drawerTaget }">
          <div class="header__inner">
            <button
              type="button"
              @click="toggle"
              class="ol-button hamburger js-drawer"
              :aria-expanded="drawerTaget"
              aria-controls="drawer"
            >
              <span class="hamburger__label">Menu</span>
            </button>
            <div id="drawer" class="drawer">
              <div class="drawer__inner">
                <ul id="globalNav" class="globalNav">
                  <li class="globalNav__item">
                    <NuxtLink to="/#idea" class="globalNav__link">idea</NuxtLink>
                  </li>
                  <li class="globalNav__item">
                    <NuxtLink to="/#projects" class="globalNav__link">projects</NuxtLink>
                  </li>
                  <li class="globalNav__item">
                    <NuxtLink to="/#about" class="globalNav__link">about</NuxtLink>
                  </li>
                  <li class="globalNav__item">
                    <NuxtLink to="/#contact" class="globalNav__link">contact</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <slot />
</template>
<script setup></script>
<style>
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
.header__nav {
  position: fixed;
  top: 62px;
  right: 22px;
  z-index: 1000;
}
@media screen and (min-width: 768px) {
  .header__nav {
    top: 62px;
    right: 22px;
  }
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
  transition: visibility 0ms 2000ms, clip-path 1000ms var(--ease-out-expo);
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
  row-gap: 1rem;
}
.is-drawerActive .globalNav__item {
  opacity: 1;
  transform: translateX(0px);
}
/* .is-drawerActive .globalNav__item:nth-child(1) {
  transition-delay: 0.2s;
}
.is-drawerActive .globalNav__item:nth-child(2) {
  transition-delay: 0.25s;
}
.is-drawerActive .globalNav__item:nth-child(3) {
  transition-delay: 0.3s;
}
.is-drawerActive .globalNav__item:nth-child(4) {
  transition-delay: 0.35s;
} */
.globalNav__item {
  transition-delay: 0s;
}
@media screen and (min-width: 768px) {
  .header__nav {
    right: auto;
    position: fixed;
    top: 62px;
    left: 42px;
    z-index: 2;
  }
  .drawer {
    border: none;
    padding: 0;
    border-radius: 0;
  }
  .drawer__inner {
    flex-direction: row;
    row-gap: 0;
    background-color: transparent;
    color: var(--color-white);
  }
  .header__inner {
    display: flex;
    align-items: flex-start;
    column-gap: 24px;
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
  .globalNav__item {
    transition-delay: 0 !important;
  }
}
.globalNav__item a {
  color: inherit;
  font-size: calc(20 / 16 * 1rem);
}
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
  transition-timing-function: var(--ease-inout-quad);
  opacity: 0;
  transform: translateX(-20px);
}
</style>
