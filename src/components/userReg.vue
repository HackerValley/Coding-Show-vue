<template>
  <div>
    <div class="row">
      <h2>注册 <span class="fr"><small><router-link to="/login">已有账户登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/'>返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <form action="" role="form" class="form-horizontal">
          <div class="form-group">
            <label for="userName" class="col-xs-3 col-sm-2 control-label ">用户名</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input type="text" v-model='formdata.username' name="userName" id="userName" placeholder="您的姓名" class="form-control">
              <p class="form-control-static text-muted">用户名</p>
              <p class="form-control-static alert alert-danger" v-if='displayalerts && alerts.data.username !== true'>{{ alerts.data.username }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-xs-3 col-sm-2 control-label ">E-Mail</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input type="text" name="email" id="email" placeholder="邮箱地址" class="form-control" v-model='formdata.email'>
              <p class="form-control-static text-muted">邮箱地址</p>
              <p class="form-control-static alert alert-danger" v-if='displayalerts && alerts.data.email !== true'>{{ alerts.data.email }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="nickName" class="col-xs-3 col-sm-2 control-label ">昵称</label>
            <div class="col-xs-9">
              <input type="text" v-model='formdata.nickname' name="nickName" id="nickName" placeholder="昵称" class="form-control">
              <p class="form-control-static text-muted">任何您发表的项目，会以昵称署名</p>
            </div>
          </div>
          <div class="form-group">
            <label for="telphone" class="col-xs-3 col-sm-2 control-label ">手机号码</label>
            <div class="col-xs-9 col-md-8">
              <input type="number" v-model='formdata.phone' name="phone" id="phone" placeholder="手机号码" class="form-control">
              <p class="form-control-static text-muted">用于登入和找回密码等功能，不会透漏给第三方</p>
            </div>
          </div>
          <div class="form-group">
            <label for="pwd" class="col-xs-3 col-sm-2 control-label ">密码</label>
            <div class="col-xs-9 col-md-8">
              <input type="password" v-model='formdata.pwd' name="pwd" id="pwd" placeholder="密码" class="form-control">
              <p class="form-control-static text-muted">请牢记</p>
              <p class="form-control-static alert alert-danger" v-if='displayalerts && alerts.data.pwd !== true'>{{ alerts.data.pwd }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="pwdconfirm" class="col-xs-3 col-sm-2 control-label ">再次输入</label>
            <div class="col-xs-9 col-md-8">
              <input type="password" v-model='formdata.pwdconfirm' name="pwdconfirm" id="pwdconfirm" placeholder="请再次输入密码" class="form-control">
              <p class="form-control-static text-muted">和输入密码一致</p>
              <p class="form-control-static alert alert-danger" v-if="alerts.data.pwd === '两次输入不一致'">{{ alerts.data.pwd }}</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label' for="imgUpload">上传图像</label>
            <div class="col-xs-5 col-sm-5 col-md-4">
              <input class="form-control" :type="retype" name="imgUpload" id='imgUpload' file-type='img' @change='onFileChange'>
            </div>
            <div class="col-xs-4">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default" @click="upload" :disabled="uploading">上传</button>
                <button type="button" class="btn btn-default" @click="discard" :disabled="null">清除</button>
              </div>
            </div>
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <p class="form-control-static text-muted">选择您心仪的小头像，会增加您的魅力哦</p>
              <img style="max-width: 128px;border-radius:2px" :src="formdata.avatar" alt="Figure" v-if='formdata.avatar'>
            </div>
          </div>
          <div class="form-group">
            <label for="imgUpload" class="col-xs-3 col-sm-2 control-label">您擅长编写</label>
            <div class="col-xs-9 col-md-8">
              <div class="has-success">
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="fe">前端</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="java">
                    java</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="php">
                    php</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="nodejs">
                    nodejs</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="js">
                    js</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="python">
                    python</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="ruby">
                    Ruby</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="c">
                    C</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="c2">
                    C++</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="c3">
                    C#</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="android">
                    Android</label>
                </div>
                <div class="checkbox col-xs-4">
                  <label><input v-model='formdata.skills' type="checkbox" id="skills" value="ios">
                    ios</label>
                </div>
              </div>
              <br>
              <p class="form-control-static text-muted">您可以参与勾选项目的开发，但为了保证和您同水平开发，我们会对您的专业水平进行评审</p>
            </div>
          </div>
          <div class="form-group" v-if='false'>
            <label for="accoutBind" class="col-xs-3 col-sm-2 control-label">账号绑定</label>
            <div class="col-xs-8 col-sm-7 col-md-5" id="accoutBind">
              <div class="checkbox col-xs-3">
                <a href="#">
                  <img src="" alt="图片">
                </a>
              </div>
              <div class="checkbox col-xs-3">
                <a href="#">
                  <img src="" alt="图片">
                </a>
              </div>
              <div class="checkbox col-xs-3">
                <a href="#">
                  <img src="" alt="图片">
                </a>
              </div>
              <div class="checkbox col-xs-3">
                <a href="#">
                  <img src="" alt="图片">
                </a>
              </div>
            </div>
          </div>
          <div class="row imgpool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2"></div>
          </div>
          <div class="from-group form-group-lg text-right">
            <hr>
            <a class="btn btn-lg btn-info" @click.prevent='register()'>提交</a>
          </div>
        </form>
      </div>
    </div>
    <div class="row tip">

    </div>
  </div>
</template>
<script>
  import * as api from '../api/request'
  import {
    mapActions
  } from 'vuex'
  export default {
    components: {},
    created() {
      if (this.$store.state.authed) {
        this.$router.replace({
          path: '/user/release'
        })
      }
    },
    data() {
      return {
        timers: {},
        msg: 'init msg',
        displayalerts: false, // 是否实时显示错误？
        formdata: {
          skills: [],
          username: '',
          email: '',
          nickname: '',
          pwd: '',
          pwdconfirm: '',
          phone: '',
          avatar: '',
        },
        nextNum2: 1,
        tips: [],
        retype: 'file',
        prepare2upload: '',
        uploading: null
      }
    },
    computed: {
      alerts() {
        // 表单校验
        // 是否首次输入
        var username, pwd, email
        username = (this.formdata.username === '') ? '用户名为空' : true
        email = (this.formdata.email === '') ? '邮箱为空' : true
        pwd = (this.formdata.pwd === '') ? '密码为空' : (this.formdata.pwd !== this.formdata.pwdconfirm) ? '两次输入不一致' : true

        let data = {
          username,
          pwd,
          email
        }
        let ok = Object.values(data).filter(v => v !== true).length === 0
        return {
          ok,
          data
        }
      },
      regdata() {
        // 发起注册请求的data主体, 从this.formdata计算的来
        var password = null
        if (this.alerts.data.pwd === true) {
          password = this.formdata.pwd
        }
        return {
          username: this.formdata.username,
          password,
          email: this.formdata.email,
          nickname: this.formdata.nickname,
          skills: this.formdata.skills,
          phone: this.formdata.phone,
          avatar: this.formdata.avatar,
        }
      }
    },
    methods: {
      ...mapActions([
        'newToast'
      ]),
      register() {
        this.displayalerts = true
        if (this.alerts.ok === false) {
          console.log('表单数据格式有误')
          this.newToast({
            type: 'danger',
            message: '表单数据格式有误'
          })
          return
        }
        console.group('注册')
        api.userReg({
          regdata: this.regdata
        }, (err, x) => {
          if (err) {
            console.error(err)
            return
          } else {
            let toastMsg = {
              type: 'info',
              message: '处理返回结果'
            }
            if (x.status === 0) {
              toastMsg.type = 'success'
              toastMsg.message = '注册成功, 跳转登陆'
              // 登陆 然后跳转
              api.userLogin({
                logindata: {
                  username: this.regdata.username,
                  password: this.regdata.password
                }
              }, (err, x) => {
                // console.log(x)
                if (err) {
                  console.log(err)
                  this.newToast({
                    type: 'danger',
                    message: err
                  })
                  return
                }
                if (x.status === 0) {
                  console.log('登陆成功')
                  this.newToast({
                    type: 'success',
                    message: x.data.username + ' 登陆成功'
                  })
                  // 跳转到首页
                  this.$store.dispatch('setAuthed', true)
                  var identity = {
                    _id: x.data._id,
                    avatar: x.data.avatar,
                    nickname: x.data.nickname,
                    level: x.data.level,
                    skill: x.data.skill,
                    last_login_time: x.data.last_login_time,
                    sns_type: x.data.sns_type
                  }
                  this.$store.dispatch('setIdentity', identity)
                  this.$store.dispatch('setUser', x.data.username)
                  this.$router.replace({
                    path: '/user/release'
                  })
                } else {
                  this.newToast({
                    type: 'danger',
                    message: x.msg
                  })
                }
              })
            } else {
              toastMsg.type = 'danger'
              toastMsg.message = x.msg
            }
            // console.log(toastMsg)
            this.newToast(toastMsg)
          }
        })
        console.groupEnd()
      },
      onFileChange(e) {
        let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png']
        var file = e.target.files[0] || e.dataTransfer.files[0]

        if (file && supportedTypes.indexOf(file.type) >= 0) {
          if (file.size > 5 * 1024 * 1024) {
            this.newToast({
              type: 'danger',
              message: `文件 ${file.name} 太大，重新选择。${Math.floor(file.size/8192)/128}M`
            })
            this.discard()
            return false
          }
          if (file.size > 768 * 1024) {
            this.newToast({
              type: 'warning',
              message: `文件 ${file.name} 较大，上传会慢。${Math.floor(file.size/8192)/128}M`
            })
          } else {
            this.newToast({
              type: 'info',
              message: `文件 ${file.name} , ${Math.floor(file.size/256)/4}K`
            })
          }
        } else {
          this.newToast({
            type: 'warning',
            message: `文件格式不支持上传。${file.type}`
          })
          this.discard()
          return false
        }

        this.prepare2upload = file
      },
      discard() {
        // 舍弃上传框的东西
        this.retype = ''
        setTimeout(() => {
          this.retype = 'file'
        }, 0)
        this.prepare2upload = ''
        this.formdata.avatar = ''
      },
      upload() {
        this.uploading = 1
        let data = new FormData()
        data.append('attachment', this.prepare2upload);
        api.upload(data, (err, x) => {
          if (err) {
            console.log('Server 500')
            this.newToast({
              type: 'warning',
              message: `服务器内部错误`
            })
          } else {
            // console.log(x)
            this.formdata.avatar = x.data.pic_src
          }
          this.uploading = null
        }, (toast) => {
          this.newToast({
            type: 'info',
            message: `当前文件已上传${toast}%`
          })
        })
      }
    }
  }

</script>
