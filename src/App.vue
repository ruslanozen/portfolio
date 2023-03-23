<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
section {
  margin: 2rem auto;
}
#app {
  background-color: #4a4e69;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #4a4e69 !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #22223b;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #28283d;
}
</style>
