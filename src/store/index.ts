// src/store/index.ts
import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      // @ts-ignore
      commit('increment');
    }
  },
  getters: {
    count: (state) => state.count
  }
});
