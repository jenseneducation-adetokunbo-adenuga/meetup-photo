import Vue from "vue";
import Vuex from "vuex";
import { getEvents } from "../data/eventslist";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: "",
  },
  mutations: {
    eventState(state) {
      const jsonData = localStorage.getItem("viewlist-events");
      let parcedData = JSON.parse(jsonData);

      state.events = parcedData.events;
      console.log(state.events);
    },
  },
  actions: {
    getData({ commit }) {
      getEvents();
      commit("eventState");
      console.log(localStorage.getItem("viewlist-events"));
    },
  },
  modules: {},
});
