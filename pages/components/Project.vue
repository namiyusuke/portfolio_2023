<script setup lang="ts">
import type { MicroCMSImage } from "microcms-js-sdk";
type aaa = {
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};
const { data } = await useMicroCMSGetList<aaa>({
  endpoint: "works",
  queries: { limit: 3 },
});
console.log(data);
</script>

<template>
  <div class="section3" id="projects">
    <div class="l-wrapper">
      <div class="projects__wrapper">
        <h2 class="heading">projects</h2>
        <ul class="projects__flex">
          <li v-for="project in data?.contents" :key="project.id" class="projects__item">
            <figure>
              <img :src="project.image?.url" alt="" />
            </figure>
            <p>
              <a class="projects__title" href="#">{{ project.title }}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.l-wrapper -->
  </div>
</template>
<style>
/* projects */
.projects__title {
  font-size: calc(20 / 16 * 1rem);
  color: var(--color-white);
  display: block;
  margin-top: calc(10 / 16 * 1rem);
}
.projects__item + .projects__item {
  margin-top: calc(54 / 16 * 1rem);
}
.projects__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (min-width: 768px) {
  .projects__wrapper {
    padding: 102px 360px 202px 360px;
  }
  .projects__item + .projects__item {
    margin-top: calc(0 / 16 * 1rem);
  }
  .projects__flex {
    display: flex;
    column-gap: 30px;
  }
  .projects__item figure {
    width: calc(var(--vh) * 41.472);
    height: calc(var(--vh) * 58.5276);
    aspect-ratio: 363/250;
    overflow: hidden;
  }
}

.projects__item img {
  width: 100%;
}
</style>
