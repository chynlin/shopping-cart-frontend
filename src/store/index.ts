// src/store/index.ts
import { createStore } from 'vuex';
import api from './api/product'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    ...api,
  },
  getters: {
  }
});
