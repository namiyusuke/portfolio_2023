<script setup lang="ts">
import type { MicroCMSImage } from "microcms-js-sdk";
type aaa = {
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};
const { data } = await useMicroCMSGetList<aaa>({
  endpoint: "works",
  queries: { limit: 4 },
});
console.log(data);
</script>

<template>
  <div class="section3 js-section" id="projects">
    After studying psychology at university and graduating from a vocational school, he worked at a children's home as a
    social worker.Worked as a front-end engineer at a production company since October 2021. What I am good at/able to
    do: Animation/interaction using JS and CSS, markupHobbies: Bouldering, muscle training, sauna, cooking
    <div class="projects__decorate-wrapper">
      <p class="projects__decorate-name">Yusuke Namikawa</p>
      <p>
        <span class="u-wbr">Born in 1993 in Kyoto Prefecture. After graduating</span
        ><span class="u-wbr"> from university and gaining experience as a social </span
        ><span class="u-wbr"> worker, I started working as a front-end engineer at </span>a production company from
        October 2021. <span class="u-wbr">Belongs to Acorder Co., Ltd. since November 2023.</span>
      </p>
      <p>Responsible for the implementation of the independent production team "Attcraft".</p>
    </div>
    <div class="l-wrapper">
      <div class="projects__wrapper">
        <div class="heading__line">
          <h2 class="heading">projects</h2>
        </div>
        <ul class="projects__flex">
          <li v-for="project in data?.contents" :key="project.id" class="projects__item">
            <a :href="project.url" target="_blank">
              <div class="projects__border">
                <figure>
                  <img :src="project.image?.url" alt="" />
                </figure>
              </div>
              <p>
                <span class="projects__title" :href="project.url" target="_blank">{{ project.title }}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.l-wrapper -->
    <p class="projects__decorate1">animationanimation</p>
    <p class="projects__decorate2">interactioninteraction</p>
  </div>
</template>
<style>
/* projects */
/* .projects__item {
} */
.projects__title {
  font-size: calc(20 / 16 * 1rem);
  color: var(--color-white);
  display: block;
  margin-top: calc(10 / 16 * 1rem);
}
.projects__item p {
  font-weight: 200;
}
.projects__item a:hover .projects__title {
  animation: flash 0.001s 0s infinite alternate-reverse;
}
@keyframes flash {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
.projects__item + .projects__item {
  margin-top: calc(54 / 16 * 1rem);
}
.projects__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.projects__decorate1,
.projects__decorate2,
.projects__decorate-wrapper {
  font-family: "Italiana", serif;
  position: absolute;
  z-index: -1;
  display: none;
}
.projects__decorate1 {
  font-size: 10vw;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-green);
  bottom: 45px;
  left: 60px;
  transform: scaleY(-1);
}
.projects__decorate2 {
  color: transparent;
  opacity: 0.3;
  font-size: 6vw;
  -webkit-text-stroke: 1px var(--color-white);
  bottom: 5px;
  left: 60px;
}
.projects__decorate-wrapper {
  font-family: "Italiana", serif;
  position: absolute;
  z-index: 1;
  left: 100px;
  top: 26px;
  opacity: 0.5;
  color: var(--yellow, #dfe091);
}
.projects__decorate-name {
  display: inline-block;
  font-size: calc(24 / 16 * 1rem);
  letter-spacing: 4.8px;
  border: 1px solid #dfe091;
  padding: 36px 97px;
  margin-bottom: 10px;
}
.projects__item .projects__border {
  padding: 10px;
  border: 2px solid var(--color-green);
}
@media screen and (min-width: 768px) {
  .projects__decorate1,
  .projects__decorate2,
  .projects__decorate-wrapper {
    display: block;
  }
  .projects__wrapper {
    padding: 102px 360px 202px 360px;
    position: relative;
    z-index: 4;
  }
  .projects__item + .projects__item {
    margin-top: calc(0 / 16 * 1rem);
  }
  .projects__flex {
    display: flex;
    column-gap: 30px;
  }
  .projects__item figure {
    width: min(calc(var(--vh) * 41.472), 338px);
    height: min(calc(var(--vh) * 58.5276), 477px);
    aspect-ratio: 363/250;
    overflow: hidden;
    position: relative;
  }
  .projects__item figure::before,
  .idea__item figure::after {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    mix-blend-mode: saturation;
    transition: all 0.5s ease;
  }
  .projects__item a:hover figure::before,
  .idea__item a:hover figure::after {
    background: transparent;
  }
}

.projects__item img {
  width: 100%;
}
</style>
