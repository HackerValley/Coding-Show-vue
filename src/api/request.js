import axios from 'axios'

import querystring from 'querystring'

/*
 * 获取项目列表 - 首页，
 * author: larry
 **/
export function getProjIndex(cb) {
  axios.get('/api/projects/list').then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 获取项目列表 - 我发布的项目，
 * author: larry
 **/
export function getProjRelease(cb, id = '') {
  axios.get('/api/projects/release').then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 获取项目列表 - 我开发的项目，
 * author: larry
 **/
export function getProjDev(cb, id = '') {
  // /api/projects/development Inter Error
  axios.get('/api/projects/list').then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 根据id获取项目详细信息，
 * author: larry
 **/
export function getProjDetail(id = '', cb) {
  if (!id) {
    cb(new Error('需传入项目_id.'))
    return
  }
  console.info('_id: ', id)
  axios.get('/api/projects/' + id).then((rep) => {
    cb(null, rep.data)
  }).catch(err => {
    console.log('api err:', err)
  })
}

/*
 * 根据id获取项目的评论内容，
 * author: larry
 **/
export function getProjComments(id = '', cb) {
  if (!id) {
    cb(new Error('需传入项目_id.'))
    return
  }
  axios.get('/api/comment/' + id).then((rep) => {
    cb(null, rep.data)
  }).catch(err => {
    cb(err)
  })
}

/*
 * 添加评论，
 * author: larry
 **/
export function addComments(comment, cb) {
  if (!comment.comment) {
    cb(new Error('需传入comment.'))
    return
  }
  axios.post('/api/comment', querystring.stringify(comment)).then((rep) => {
    cb(null, rep.data)
  }).catch(err => {
    cb(err)
  })
}
/*
 * 更新项目详细信息
 * author: larry
 **/
export function updateProj({ id, data }, cb) {
  console.log({ id, data })
  if (!id || !data) {
    console.log('无效更新数据')
    cb({ msg: 'error' })
    return null
  }
  axios.put('/api/projects/' + id, querystring.stringify(data)).then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 添加一条新的项目
 **/
export function addProj(cb, { data }) {
  console.log({ data })
  if (!data) {
    console.log('无效数据')
    cb({ msg: 'error' })
    return null
  }
  axios.post('/api/projects/', querystring.stringify(data)).then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 注册新用户
 **/
export function userReg(cb, { regdata }) {
  console.log({ regdata })
  if (!regdata) {
    console.log('无效数据')
    cb({ msg: 'client error' })
    return null
  }
  axios.post('/api/user/register', querystring.stringify(regdata)).then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 获取当前用户信息
 **/
export function loginInfo(cb) {
  console.log(cb)
  axios.get('/api/user/').then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 根据id 获取用户信息
 **/
export function userInfo(id, cb) {
  axios.get('/api/user/' + id).then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 用户登陆
 **/
export function userLogin(cb, { logindata }) {
  console.log({ logindata })
  if (!logindata) {
    console.log('无效数据')
    cb({ msg: 'client error' })
    return null
  }
  axios.post('/api/user/login', querystring.stringify(logindata)).then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err.response.statusText)
  })
}

/*
 * 登出
 **/
export function logOut(cb) {
  console.log('登出')
  axios.get('/api/user/logout').then((rep) => {
    cb(rep.data)
  }).catch(err => {
    // 处理方式等待更新
    console.log(err)
  })
}

/*
 * 上传文件
 **/
export function upload(data, cb) {
  console.log('上传文件 - 单')
  console.log(data)
  axios.post('/api/upload', data)
    .then((rep) => {
      cb(rep.data)
    })
    .catch((err) => {
      console.log('api', err)
    })
}
