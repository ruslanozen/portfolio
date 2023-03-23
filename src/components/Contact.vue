<template>
  <section class="contact">
    <h2 ref="header">Drop me a <span> letter</span></h2>
    <div class="wrapper">
      <div class="left">
        <form
          ref="form"
          accept-charset="UTF-8"
          action="https://www.formbackend.com/f/749e795427299acf"
          method="POST"
        >
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>

          <button class="btn" type="submit">Submit</button>
        </form>
      </div>
      <div class="right">
        <img ref="mailImage" src="@/assets/mail.png" alt="" />
      </div>
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
  name: "contact-section",
  setup() {
    const header = ref("");
    const form = ref("");
    const mailImage = ref("");

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
            trigger: header.value,
            start: "top bottom",
          },
        }
      );
      gsap.fromTo(
        form.value,
        {
          x: "-100px",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: header.value,
            start: "bottom bottom",
          },
        }
      );
      gsap.fromTo(
        mailImage.value,
        {
          x: "100px",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: header.value,
            start: "bottom bottom",
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
      header,
      form,
      mailImage,
      triggers,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 95vw;
  border-radius: 18px;
  margin: auto;
  background-image: linear-gradient(to bottom left, #22223b, #28283d, #383856);
  box-shadow: 0 0 30px 1px #00000050;
  h2 {
    padding-top: 2rem;
    span {
      color: #42b983;
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4rem;
    max-width: 1200px;
    margin-inline: auto;
    .left {
      width: 40%;
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 1rem;
        label {
          margin: 1rem 0 0.3rem 0;
        }
        input {
          width: calc(100% - 1rem);
          border-radius: 8px;
          height: 30px;
          border: none;
          color: #fff;
          background-color: #4a4e69;
          outline: none;
          padding-left: 1rem;
        }
        textarea {
          resize: none;
          width: calc(100% - 1rem);
          border-radius: 8px;
          border: none;
          color: #fff;
          background-color: #4a4e69;
          outline: none;
          padding: 0.3rem 0 0 1rem;
        }
        .btn {
          cursor: pointer;
          align-self: flex-end;
          margin-top: 1rem;
          padding: 0.4rem 1.2rem;
          border-radius: 18px;
          border: none;
          color: #fff;
          background-color: #4a4e69;
          font-weight: bold;
          letter-spacing: 2px;
          &:hover {
            box-shadow: 0 0 10px 1px #ffffff67;
            transition: 0.5s;
          }
        }
      }
    }
    .right {
      width: 40%;
      img {
        width: 100%;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .contact {
    .wrapper {
      flex-direction: column-reverse;
      gap: 1rem;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
    }
  }
}
</style>
