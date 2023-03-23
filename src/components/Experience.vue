<template>
  <section class="experience">
    <h2 ref="header">My Experience:</h2>
    <div class="wrapper">
      <a
        ref="expCards"
        v-for="experience in experiences"
        :key="experience.id"
        @click="setOverlay(experience)"
        class="card"
      >
        <p>Position: {{ experience.title }}</p>
        <p>Location: {{ experience.location }}</p>
        <p>Company: {{ experience.company }}</p>
        <div class="card-overlay"></div>
      </a>
      <transition appear>
        <div id="overlay" v-show="showOverlay">
          <button @click="showOverlay = false" class="btn">
            <img src="@/assets/icons/close.svg" alt="close button" />
          </button>
          <div class="wrapper">
            <p>
              <strong>Position:</strong> <span>{{ overlayData.title }}</span>
            </p>
            <p>
              <strong>Company:</strong> <span>{{ overlayData.company }}</span>
            </p>
            <p>
              <strong>Location:</strong> <span>{{ overlayData.location }}</span>
            </p>
            <p>
              <strong>Start date: </strong>
              <span>{{ overlayData.startDate }}</span>
            </p>
            <hr />
            <strong>Tasks:</strong>
            <ul class="tasks">
              <li v-for="item in overlayData.tasks" :key="item.id">
                {{ item.text }}
              </li>
            </ul>
            <hr />
            <strong>Programming languages: </strong>
            <ul class="tech">
              <li
                style="margin-bottom: 0"
                v-for="language in overlayData.programming_languages"
                :key="language"
              >
                {{ language }}
              </li>
            </ul>
            <hr />
            <strong>Technologies:</strong>
            <ul class="tech">
              <li
                v-for="technology in overlayData.technologies"
                :key="technology"
              >
                {{ technology }}
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { ref, onMounted, onUnmounted } from "vue";

import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "experience-comp",
  computed: {
    ...mapGetters(["experiences"]),
  },
  data() {
    return {
      showOverlay: false,
      overlayData: {},
    };
  },
  setup() {
    const experience = ref("");
    const expCards = ref("");
    const header = ref("");

    const triggers = ScrollTrigger.getAll();
    ScrollTrigger.normalizeScroll();

    function gsapSet() {
      gsap.fromTo(
        header.value,
        {
          y: "100px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: experience.value,
            start: "top bottom",
          },
        }
      );
      gsap.fromTo(
        expCards.value,
        {
          y: "100px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: expCards.value,
            start: "75% bottom",
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
      experience,
      header,
      expCards,
      triggers,
    };
  },
  methods: {
    setOverlay(val) {
      this.showOverlay = true;
      this.overlayData = val;
    },
  },
};
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.experience {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  min-height: 50vh;
  margin: 2rem auto;
  .wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 250px;
      height: 350px;
      background-image: linear-gradient(
        to bottom left,
        #22223b,
        #28283d,
        #383856
      );
      border-radius: 18px;
      box-shadow: 0 0 20px 1px #00000050;
      p {
        margin-left: 2rem;
      }
      .card-overlay {
        position: fixed; /* Sit on top of the page content */
        display: none; /* Hidden by default */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(
          to top right,
          #22223b,
          #28283d,
          #383856
        );
        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
        cursor: pointer; /* Add a pointer on hover */
        border-radius: 18px;
      }
      &:hover {
        cursor: pointer;
        background-image: none;
        #overlay {
          display: block;
        }
      }
    }
  }
  #overlay {
    overflow-y: scroll;
    overflow-x: hidden;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-image: linear-gradient(
      to bottom left,
      #22223b,
      #28283d,
      #383856
    );
    box-shadow: 0 0 30px 1px #00000050;
    min-width: 70vw;
    min-height: 50vh;
    max-height: 90vh;
    border-radius: 18px;
    .btn {
      cursor: pointer;
      align-self: flex-start;
      margin: 1rem 1rem 1rem auto;
      background-color: transparent;
      border: none;
      img {
        width: 20px;
        height: 20px;
      }
    }
    hr {
      width: 95%;
      border-radius: 50%;
    }
    .wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      padding: 3rem;
      p {
        margin: auto 0 0 2rem;
        span {
          color: #42b983;
        }
      }
      ul {
        margin: 0;
        text-align: left;
        li {
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
      }
      .tasks {
        max-width: 90%;
      }
      strong {
        align-self: center;
      }
      .tech {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        li {
          margin-bottom: 0 !important;
          line-height: 5px;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .card {
    width: 100% !important;
  }
  #overlay {
    width: 90% !important;
  }
}
</style>
