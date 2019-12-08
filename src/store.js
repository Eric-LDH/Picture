import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulea = {
  state: {
    user: {
      token: "",
      name: "",
    }
  },
  getters: {

  },
  mutations: {
    increment(state, user) {
      console.log(user);
      state.user = user;
    }
  },
  actions: {
  }
}

export default new Vuex.Store({
  modules: {
    a: modulea
  }
})
