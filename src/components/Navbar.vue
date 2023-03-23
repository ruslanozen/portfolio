<template>
  <nav ref="navbar" class="navbar">
    <div ref="wrapper" class="wrapper">
      <ul>
        <li><a href="#header">Home</a></li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ref, onMounted, onUnmounted } from "vue";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "navbar-comp",

  setup() {
    const navbar = ref("");
    const wrapper = ref("");

    const triggers = ScrollTrigger.getAll();
    ScrollTrigger.normalizeScroll();

    function gsapSet() {
      gsap.to(wrapper.value, {
        backgroundColor: "#383856",
        scrollTrigger: {
          trigger: navbar.value,
          start: "bottom top",
          scrub: 2,
        },
      });
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
      navbar,
      wrapper,
      triggers,
    };
  },

  methods: {
    scrollToExperience() {
      this.$refs["experience"].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 100;
  .wrapper {
    max-width: 80%;
    margin: 1rem auto;
    height: 80%;
    border-radius: 20px;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 0;
      margin: 0;
      height: 100%;
      list-style: none;
      li {
        a {
          text-decoration: none;
          color: #fff;
          &.router-link-exact-active {
            color: #42b983;
          }
          &:hover {
          }
        }
      }
    }
  }
}
</style>
