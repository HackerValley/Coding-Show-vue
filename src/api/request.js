import axios from 'axios'

import querystring from 'querystring'

/* 
 * 获取项目列表 - 首页，
 * author: larry
 **/
export function getProjIndex (cb, id = '') {
  axios.get('/api/projects/' + id).then((rep) => {
    cb(rep.data)
  })
}

/* 
 * 获取项目列表 - 我开发的项目，
 * author: larry
 **/
export function getProjDevelopment (cb, id = '') {
  axios.get('/api/projects/release').then((rep) => {
    cb(rep.data)
  })
}

/* 
 * 根据id获取项目详细信息，
 * author: larry
 **/
export function getProjDetail (cb, id = '') {
  axios.get('/api/projects/' + id).then((rep) => {
    cb(rep.data)
  })
}

/* 
 * 更新项目详细信息
 * author: larry
 **/
export function updateProj (cb, { id, data }) {
  console.log( { id, data } )
  if(!id || !data) {
    console.log('无效更新数据')
    cb({msg: 'error'})
    return null
  }
  axios.put('/api/projects/' + id, querystring.stringify(data)).then((rep) => {
    cb(rep.data)
  })
}

/* 
 * 添加一条新的项目
 **/
export function addProj (cb, { data }) {
  console.log( { data } )
  if( !data) {
    console.log('无效数据')
    cb({msg: 'error'})
    return null
  }
  axios.post('/api/projects/', querystring.stringify(data)).then((rep) => {
    cb(rep.data)
  })
}

/* 
 * 注册新用户
 **/
export function userReg (cb, { regdata }) {
  console.log( { regdata } )
  if( !regdata) {
    console.log('无效数据')
    cb({msg: 'client error'})
    return null
  }
  axios.post('/api/user/register', querystring.stringify(regdata)).then((rep) => {
    cb(rep.data)
  })
}