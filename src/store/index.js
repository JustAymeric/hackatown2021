import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emailUser: ""
  },
  mutations: {
    change(state, emailUser) {
      state.emailUser = emailUser;
    }
  },
  getters: {
    emailUser: state => state.emailUser
  },
  actions: {
    change(store, payload) {
      store.commit("change", payload);
    }
  },
  modules: {}
});
