<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import type { MicroCMSImage } from "microcms-js-sdk";
type Idea = {
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};

const { data } = await useMicroCMSGetList<Idea>({
  endpoint: "idea",
  queries: { limit: 8 },
});
// if (process.browser) {
//   const targets = document.querySelectorAll(".js-parallax");
//   console.log(targets);
//   // onMounted(() => {
//   targets.forEach((target) => {
//     console.log(target);
//     gsap.fromTo(
//       target,
//       {
//         x: 0,
//       },
//       {
//         x: 600, // y方向-に60px移動させる
//         ease: "none", // イージングなし
//         scrollTrigger: {
//           trigger: ".idea__inner", // ScrollTriggerの開始位置を計算するために使用される要素
//           start: "top bottom", // 1つ目の値がtriggerで指定した要素の開始位置　2つ目の値が画面の開始位置
//           end: "bottom top", // 1つ目の値がtriggerで指定した要素の終了位置　2つ目の値が画面の終了位置
//           scrub: true, // 要素を1秒遅れで追従させる
//           // markers: true, // 開始位置、終了位置を調整確認する際に使用します
//         },
//       }
//     );
//   });
//   // });
// }

// });
</script>

<template>
  <div class="section2 js-section js-bg" id="idea">
    <div class="l-wrapper">
      <div class="idea__inner">
        <div class="heading__line">
          <h2 class="heading -idea">idea</h2>
        </div>
        <div class="idea__body">
          <ul class="idea__list">
            <li v-for="idea in data?.contents" :key="idea.id" class="idea__item js-parallax">
              <a :href="idea.url" target="_blank">
                <div class="idea__thumbnail">
                  <figure>
                    <img :src="idea.image?.url" alt="" />
                  </figure>
                </div>
              </a>
            </li>
          </ul>
          <div>
            <div class="idea__button">
              <p><NuxtLink to="/idea">view more</NuxtLink></p>
            </div>
          </div>
        </div>
      </div>
      <!-- idea__inner -->
    </div>
    <!-- <div class="idea__decorate_backtext">
      <div class="idea__decorate_backTop">
        <span class="idea__decorate_left">frontend</span>
        <span class="idea__decorate_right">frontend</span>
      </div>
      <span class="idea__decorate_backBottom">developer</span>
    </div> -->
    <!-- <div class="idea__decorate_text">
      <p>
        <span class="u-wbr">After studying psychology at university and graduating from a vocational</span>
        <span class="u-wbr">school, he worked at a children's home as a social worker.</span>
        <span class="u-wbr">Worked as a front-end engineer at a production company since October 2021.</span>
        <span class="u-wbr">What I am good at/able</span>
        <span class="u-wbr">to do: Animation/interaction using JS and CSS, markup</span>
        <span class="u-wbr">Hobbies: Bouldering, muscle training, sauna, cooking</span>
      </p>

      <p>
        <span class="u-wbr">After studying psychology at university and graduating from a vocational</span>
        <span class="u-wbr">school, he worked at a children's home as a social worker.</span>
        <span class="u-wbr">Worked as a front-end engineer at a production company since October 2021.</span>
        <span class="u-wbr">What I am good at/able</span>
        <span class="u-wbr">to do: Animation/interaction using JS and CSS, markup</span>
        <span class="u-wbr">Hobbies: Bouldering, muscle training, sauna, cooking</span>
      </p>
    </div> -->
  </div>
</template>
