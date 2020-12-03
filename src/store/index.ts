import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import State from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: new State(),
  mutations: mutations,
  actions: {
  },
  modules: {
  }
})
