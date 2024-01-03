<script setup>
definePageMeta({
  layout: "app",
});
</script>
<template>
  <NuxtLayout>
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
          <Idea />
          <Project />
          <About />
        </main>
      </div>
    </div>
  </NuxtLayout>
</template>
