import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    experiences: [
      {
        id: 1,
        title: "Web Developer",
        company: "Ozteks",
        location: "Istanbul, Turkey",
        startDate: "February 2022",
        endDate: "January 2023",
        tasks: [
          {
            id: 1,
            text: "Work on startups like digital restaurant menu, e-commerce websites, CRM system, and workflow management web app.",
          },
          {
            id: 2,
            text: "Development and support of new modules like authentication, navigation bars, sidebars.",
          },
          {
            id: 3,
            text: "Write reusable code and libraries.",
          },
          {
            id: 4,
            text: "Credit card interface on payment page.",
          },

          {
            id: 5,
            text: "Interactive web pages using GSAP, Three.js to increase user interest.",
          },
          {
            id: 6,
            text: "Remake existing web pages based on web designer visualizations.",
          },
          {
            id: 7,
            text: "Work with backend developers on coding, troubleshooting.",
          },
          {
            id: 8,
            text: "Build new responsive components like navigation bar, search menu, product card, headers.",
          },
          {
            id: 9,
            text: "Migrate existing WordPress websites to Vue.js to optimize speed and refresh the look of the web site.",
          },
        ],
        programming_languages: ["JavaScript", "HTML", "CSS"],
        technologies: [
          "REST API",
          "JavaScript",
          "HTML",
          "CSS",
          "Sass",
          "Vue.js",
          "Vuex",
          "vue-router",
          "Axios",
          "Bootstrap",
          "TailwindCSS",
          "Vue-Bootstrap",
          "Vuetify",
          " Material UI",
          "Three.js",
          "GSAP",
          "MySQL",
          "MongoDB",
          "NodeJS",
          " npm",
          "JSON",
          "WordPress",
        ],
      },
      {
        id: 2,
        title: "Web Developer",
        company: "Freelance",
        location: "Istanbul, Turkey",
        startDate: "2021",
        endDate: "2022",
        tasks: [
          {
            id: 1,
            text: "Development of websites using Vue.js most of them made with pure CSS or Scss and some of them made with Bootstrap or Vuetify.",
          },
          {
            id: 2,
            text: "Develop web-based admin interface for botanical company by using Vue and Vuetify.",
          },
          {
            id: 3,
            text: "Develop parsing and automation bots by using Python, Selenium and BS4.",
          },
          {
            id: 4,
            text: "Develop multilanguage website using Vue.js and i18n.",
          },

          {
            id: 5,
            text: "Develop new components and new features to clients’ existing sites.",
          },
        ],
        programming_languages: ["Python", "JavaScript", "HTML", "CSS"],
        technologies: [
          "Selenium",
          "BeautifulSoup",
          "Python",
          " HMTL",
          " CSS",
          " Scss",
          "Vue",
          " Vuetify",
          "TailwindCSS",
          " Bootstrap",
          "vue-router",
          "axios",
          "i18n",
          "npm",
          "JSON",
        ],
      },
      {
        id: 3,
        title: "Front-end Developer",
        company: "Win-med",
        location: "Kyiv, Ukrainer",
        startDate: "2020",
        endDate: "2021",
        tasks: [
          {
            id: 1,
            text: "Develop 3 sites for company.",
          },
          {
            id: 2,
            text: "Develop new features for existing web sites.",
          },
          {
            id: 3,
            text: "Make performance improvements by reduce size of images, minimized JavaScript and CSS files, and reduced number of plugins on WordPress websites.",
          },
        ],
        programming_languages: ["JavaScript", "HTML", "CSS"],
        technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
      },
    ],
    languages: [
      {
        title: "English",
        level: "Advanced",
      },
      {
        title: "Ukrainian",
        level: "Native",
      },
      {
        title: "Russian",
        level: "Native",
      },
      {
        title: "Turkish",
        level: "Native",
      },
    ],
  },
  getters: {
    experiences(state) {
      return state.experiences;
    },
    languages(state) {
      return state.languages;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
