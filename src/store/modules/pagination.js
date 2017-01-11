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
    return {
      prev: false,
      next: false,
      available: []
    }
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

