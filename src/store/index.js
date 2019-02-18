import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reqLoading: false
  },
  mutations: {
    setReqLoading(state, data) {
      state.reqLoading = data;
    }
  },
  actions: {
    SetLoading({commit}, flag) {
      commit('setReqLoading', flag)
    }
  }
})
