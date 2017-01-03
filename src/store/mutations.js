import * as types from './mutation-types'

export default {
  [types.INIT_STATE] (state) {
    state.authed = eval(localStorage.getItem('authed'))
    state.identity.username = localStorage.getItem('user') || ''
    state.identity.lastuser = localStorage.getItem('lastuser') || ''
  },
  [types.SET_AUTHED] (state, { authed }) {
    state.authed = authed
    localStorage.setItem('authed', authed)
  },
  [types.SET_USERNAME] (state, { username }) {
    state.identity.username = username
    localStorage.setItem('user', username)
  },
  [types.SET_LASTUSER] (state, { username }) {
    state.identity.username = username
    localStorage.setItem('lastuser', username)
  }
}