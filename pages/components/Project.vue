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
  <div class="section3" id="projects">
    <div class="projects__decorate-text">
      <p>
        <span class="u-wbr">After studying psychology at university and graduating</span>
        <span class="u-wbr"> from a vocational school, he worked at a children's home </span> as a social worker
      </p>
      <p><span class="u-wbr">.Worked as a front-end engineer at a production company</span> since October 2021.</p>
      <p>
        <span class="u-wbr">What I am good at/able to do: Animation/interaction using</span
        ><span class="u-wbr"> JS and CSS, markupHobbies:</span>
        Bouldering, muscle training, sauna, cooking
      </p>
    </div>
    <!-- <div class="projects__decorate-wrapper">
      <p class="projects__decorate-name">Yusuke Namikawa</p>
      <p>
        <span class="u-wbr">Born in 1993 in Kyoto Prefecture. After graduating</span
        ><span class="u-wbr"> from university and gaining experience as a social </span
        ><span class="u-wbr"> worker, I started working as a front-end engineer at </span>a production company from
        October 2021. <span class="u-wbr">Belongs to Acorder Co., Ltd. since November 2023.</span>
      </p>
      <p>Responsible for the implementation of the independent production team "Attcraft".</p>
    </div> -->
    <div class="l-wrapper">
      <div class="projects__wrapper js-section">
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
    <div class="projects__decorate_wrapper">
      <p class="projects__decorate1">animation animation animation animation animation animation animation animation</p>
      <p class="projects__decorate2">interaction interaction interaction interaction interaction interaction</p>
    </div>
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
.projects__decorate-wrapper,
.projects__decorate-wrapper {
  font-family: "Italiana", serif;
  position: absolute;
  z-index: 1;
  display: none;
}
.projects__decorate1 {
  font-size: 40vw;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-green);
  left: calc(80%);
  z-index: -1;
  top: -3500px;
  position: absolute;
}

.projects__decorate2 {
  color: transparent;
  opacity: 0.3;
  -webkit-text-stroke: 1px var(--color-white);
  left: 60px;
}
.projects__decorate-text {
  font-family: "Inter", serif;
  position: absolute;
  font-style: italic;
  z-index: -1;
  left: 174px;
  bottom: 40px;
  min-width: 225px;
  font-weight: 100;
  line-height: 168.75%;

  opacity: 0.5;
  color: var(--yellow, #dfe091);
}
/* .projects__decorate-text p:nth-child(2),
.projects__decorate-text p:nth-child(3) {
  display: none;
} */
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

.projects__decorate2 {
  font-size: 100px;
  left: 16%;
  display: none;
}

.projects__decorate1,
.projects__decorate2 {
  word-break: break-all;
  white-space: nowrap;
  transform: rotate(90deg);
  transform-origin: left;
  font-family: "Italiana";
}
@media screen and (min-width: 768px) {
  .projects__decorate-text {
    right: 100px;
    bottom: auto;
    left: auto;
  }
  .projects__decorate1 {
    font-size: 10vw;
    color: transparent;
    -webkit-text-stroke: 1px var(--color-green);
    left: 11%;
  }
  .projects__decorate1,
  .projects__decorate2 {
    display: block;
    position: absolute;
    right: auto;

    top: -16%;
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
  .projects__decorate2 {
    display: block;
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
