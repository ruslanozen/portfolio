<template>
  <header class="header">
    <div class="left">
      <h2 ref="greeting">Hello, it's me</h2>
      <h1 ref="name">Ruslan Ozen</h1>
      <h3 ref="introduction">
        And I'm a
        <typewriter
          :replace="replace"
          :type-interval="100"
          :replace-interval="1000"
        >
          <div class="typewriter">Front-end Developer</div>
        </typewriter>
      </h3>
      <div ref="socials" class="socials">
        <a href="https://linkedin.com/in/ruslanozen" target="_blank">
          <img src="@/assets/icons/linkedin.svg" alt="" />
        </a>
        <a href="https://github.com/ruslanozen" target="_blank">
          <img src="@/assets/icons/github.svg" alt="" />
        </a>
        <a href="https://instagram.com/ruslanozen" target="_blank">
          <img src="@/assets/icons/instagram.svg" alt="" />
        </a>
      </div>
      <a
        ref="download_btn"
        class="resume-download"
        href="./Ruslan_Ozen_Resume_2023.pdf"
        download=""
      >
        Download Resume
        <img src="@/assets/icons/file.svg" alt="" />
      </a>
    </div>
    <div class="right">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <img ref="face" src="@/assets/ai.png" alt="" />
      </transition>
    </div>
  </header>
</template>

<script>
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { CSSPlugin } from "gsap/CSSPlugin";
import Typewriter from "typewriter-vue";

gsap.registerPlugin(CSSPlugin);

export default {
  name: "HomeView",
  data: () => ({
    replace: [
      { from: "Front-end Developer", to: "Web Developer" },
      { from: "Web Developer", to: "Just nice person." },
    ],
  }),
  setup() {
    const greeting = ref("");
    const name = ref("");
    const introduction = ref("");
    const socials = ref("");
    const download_btn = ref("");
    const face = ref("");

    function gsapSet() {
      gsap.fromTo(
        greeting.value,
        {
          x: "-400px",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power3.inOut",
          duration: 0.8,
        }
      );
      gsap.fromTo(
        name.value,
        {
          x: 500,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power3.inOut",
          duration: 1,
        }
      );
      gsap.fromTo(
        introduction.value,
        {
          x: "-100px",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: "0.5",
        }
      );
      gsap.fromTo(
        socials.value,
        { opacity: 0 },
        { opacity: 1, transition: 0.7 }
      );
      gsap.fromTo(
        download_btn.value,
        { opacity: 0 },
        { opacity: 1, transition: 0.7 }
      );
      gsap.to(face.value, {
        x: "random(0, 10)",
        y: "random(0, 10)",
        duration: 4,
        repeat: -1,
        repeatRefresh: true,
        ease: "power.out",
      });
    }

    onMounted(() => {
      gsapSet();
    });

    return {
      greeting,
      name,
      introduction,
      socials,
      download_btn,
      face,
    };
  },
  components: {
    Typewriter,
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(-100px)";
    },
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 95vw;
  border-radius: 18px;
  margin: 90px auto;
  background-image: linear-gradient(to bottom left, #22223b, #28283d, #383856);
  box-shadow: 0 0 30px 1px #00000050;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 50%;
    height: 100%;
    h1,
    h2,
    h3,
    .socials,
    .resume-download {
      margin: 0 0 0.3rem 3rem;
    }
    h1 {
      font-size: 4vw;
    }
    h2,
    h3 {
      font-size: 3vw;
    }
    .typewriter {
      color: #42b983;
    }
    .socials {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      a {
        img {
          width: 35px;
        }
        &:hover {
          border-bottom: 1px solid #fff;
          transform: scale(1.1);
          transition: 0.5s ease-in-out;
        }
      }
    }
    .resume-download {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: #4a4e69;
      color: #fff;
      padding: 0.5rem 1.4rem;
      border-radius: 45px;
      text-decoration: none;
      width: fit-content;
      img {
        width: 30px;
      }
      &:hover {
        box-shadow: 0 0 10px 1px #fff;
        transition: 1s;
      }
    }
  }
  .right {
    width: 50%;
    img {
      width: 100%;
      will-change: transform;
    }
  }
}
@media only screen and (max-width: 600px) {
  .header {
    flex-direction: column-reverse;
    height: unset;
    .left {
      align-self: flex-start;
      height: 50%;
      width: 100%;
      .socials,
      .resume-download {
        margin-left: 0;
        align-self: center;
      }
    }
    .right {
      height: 50%;
      width: 100%;
    }
  }
}
</style>
