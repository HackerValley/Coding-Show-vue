import * as types from '../mutation-types'

const state = {
  toasts: []
}

// getters
const getters = {
  allToasts: state => state.toasts
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
    state.toasts.shift()
  },
  [types.TOAST_NEW] (state, { toast }) {
    toast = toast || {
      id: Math.random(),
      type: 'info',
      message: '空信息' + Math.random()
    }
    if (state.toasts.length > 4) {
      state.toasts.shift()
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