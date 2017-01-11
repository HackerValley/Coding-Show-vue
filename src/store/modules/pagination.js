import * as types from '../mutation-types'

const state = {
  page_num: -1,
  page_size: -1,
  page_total: -1,
  project_total: -1
}

// 当前可使用的页码，前一页，后一页是否可用，通过getters计算

const getters = {
  pagination: state => {
    // 计算pages
    let prev, next, available = []
    for (let i = 0; i <5; i++) {
      // 计算前后共5页
      available[i] = state.page_num - 2 + i
    }
    available = available.filter( v => v > 0 && v <= state.page_total )
    prev = state.page_num <= 1
    next = state.page_num >= state.page_total
    return { prev, next, available }
  } 
}

const actions = {
  getPage ({ commit }, pagedata) {
    commit( types.GET_PAGE_DATA, pagedata )
  }
}

const mutations = {
  [types.GET_PAGE_DATA] (state, { page_num, page_size, page_total,project_total }) {
    state.page_num = page_num
    state.page_size = page_size
    state.page_total = page_total
    state.project_total = project_total
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}