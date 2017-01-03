import * as types from './mutation-types'

export const initState = ({ commit }) => {
  commit(types.INIT_STATE)
}

export const setAuthed = ({ commit }, authed) => {
  commit(types.SET_AUTHED, { authed })
  if(authed){
    console.log('已有授权')
  }else{
    commit(types.SET_USERNAME, { username: '' })
  }
}

export const setUser = ({ commit }, username) => {
  commit(types.SET_USERNAME, { username })
}