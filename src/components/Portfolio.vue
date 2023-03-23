<template>
  <section class="portfolio">
    <h2 ref="portfolioHeader">Portfolio</h2>
    <div ref="wrapper" class="wrapper">
      <a class="card">Soon will be published</a>
      <a class="card">Soon will be published</a>
      <a class="card">Soon will be published</a>
      <a class="card">Soon will be published</a>
      <a class="card">Soon will be published</a>
      <a class="card">Soon will be published</a>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "poasd-asd",
  setup() {
    const portfolioHeader = ref("");
    const wrapper = ref("");

    const triggers = ScrollTrigger.getAll();
    ScrollTrigger.normalizeScroll();

    function gsapSet() {
      gsap.fromTo(
        portfolioHeader.value,
        {
          y: "100px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: portfolioHeader.value,
            start: "top bottom",
          },
        }
      );
      gsap.fromTo(
        wrapper.value,
        {
          y: "100px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: wrapper.value,
          },
        }
      );
    }

    onMounted(() => {
      ScrollTrigger.refresh();
      gsapSet();
    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {
      portfolioHeader,
      wrapper,
      triggers,
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  min-height: 50vh;
  max-width: 1200px;
  margin-inline: auto;
  padding-top: 5rem;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: italic;
      font-size: large;
      font-weight: 500;
      height: 250px;
      width: 350px;
      border-radius: 18px;
      box-shadow: 0 0 20px 1px #00000050;
      img {
      }
    }
  }
}
</style>
