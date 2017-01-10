import * as types from '../mutation-types'

const state = {
  toasts: []
}

// getters
const getters = {
  allToasts: state => state.toasts,
  toastNum: state => state.toasts.length
}

const actions = {
  clearAll ({ commit }) {
    commit( types.TOAST_CLEAR_ALL )
  },
  spliceTo ({ commit }, size) {
    commit( types.TOAST_SHIFT, { size })
  },
  shiftone ({ commit }) {
    commit( types.TOAST_SHIFT )
  },
  newToast ({ commit } , toast) {
    toast = toast || {
      type: 'info',
      message: '空信息' + Math.random()
    }
    let id  //id 递增
    id = state.toasts.length === 0 ? 0 : state.toasts[state.toasts.length - 1].id
    id++
    Object.assign(toast, { id })
    commit( types.TOAST_NEW, { toast })
  }
}

const mutations = {
  [types.TOAST_CLEAR_ALL] (state) {
    state.toasts.splice(0, state.toasts.length)
  },
  [types.TOAST_SPLICE_TO] (state, { size }) {
    // 当尺寸大于size的时候，可以裁剪
    if (state.toasts.length > size) {
      state.toasts.splice(0, state.toasts.length - size) 
    }
  },
  [types.TOAST_SHIFT] (state) {
    state.toasts.shift()
  },
  [types.TOAST_NEW] (state, { toast }) {
    state.toasts.push(toast)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}