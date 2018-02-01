import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  loading: false
}

const mutations = {
  userInfo (state, user) {
    state.loading = true
    state.user = user
  }
}

const getters = state => {
  // state.user存在并且userName存在
  return state.user && state.user.userName
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
