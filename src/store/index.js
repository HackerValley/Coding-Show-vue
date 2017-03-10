import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import toasts from './modules/toasts'
import pagination from './modules/pagination'

Vue.use(Vuex)

const state = {
  authed: null,
  identity: {
    _id: '',
    username: '',
    avatar: '',
    nickname: '',
    level: '',
    skill: [],
    last_login_time: '',
    sns_type: null
  },
  lastuser: ''
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    toasts,
    pagination
  }
})
