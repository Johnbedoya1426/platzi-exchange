import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import Chartkick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

App.use(VueSpinners);
App.use(Chartkick.use(Chart));

createApp(App).use(router).mount("#app");
