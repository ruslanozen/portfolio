<template>
  <div class="home">
    <Header id="header" />
    <Experience id="experience" />
    <Portfolio id="portfolio" />
    <Contact id="contact" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Experience from "@/components/Experience.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Header,
    Experience,
    Portfolio,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
