import * as types from '../mutation-types'

const state = {
  toasts: []
}

// getters
const getters = {
  allTips: state => state.toasts
}

const actions = {
  clearAll ({ commit }) {
    commit( types.TOAST_CLEAR_ALL )
  },
  shiftone ({ commit }) {
    commit( types.TOAST_SHIFT )
  },
  newToast ({ commit } , { toast = null }) {
    commit( types.TOAST_NEW, { toast })
  }
}

const mutations = {
  [types.TOAST_CLEAR_ALL] (state) {
    state.toasts.splice(0, state.toasts.length)
  },
  [types.TOAST_SHIFT] (state) {
    state.toasts.shift(0)
  },
  [types.TOAST_NEW] (state, { toast }) {
    toast = toast || {
      id: 0,
      type: 'info',
      message: '空信息'
    }
    state.toasts.push(toast)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}