// Imports modules
import Vue from 'vue';
import Vuex from 'vuex';

// Import my modules
import { WeatherStore as weather } from "./modules/weather";
import { AlertStore as alert } from "./modules/alerts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weather,
    alert
  }
});
