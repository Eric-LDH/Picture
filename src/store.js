import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulea = {
  state: {
    count: 0
  },
  getters: {

  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: modulea
  }
})
