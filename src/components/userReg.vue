<template>
  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
      <div class="row">
          <h2>注册 <span class="fr"><small><router-link to="/login">已有账户登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/'>返回首页</router-link></small></span></h2>
          <hr>
      </div>
      <div class="row">
          <div class="col-xs-10 col-xs-offset-1">
              <form action="" role="form" class="form-horizontal">
                  <div class="form-group">
                      <label for="userName" class="col-xs-3 col-sm-2 control-label ">姓名</label>
                      <div class="col-xs-9 col-sm-8 col-md-6">
                          <input type="text" v-model='formdata.username' name="userName" id="userName" placeholder="您的姓名" class="form-control">
                          <p class="form-control-static text-muted">真实姓名</p>
                      </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="col-xs-3 col-sm-2 control-label ">E-Mail</label>
                    <div class="col-xs-9 col-sm-8 col-md-6">
                      <input type="text" name="email" id="email" placeholder="邮箱地址" class="form-control" v-model='formdata.email'>
                      <p class="form-control-static text-muted">邮箱地址</p>
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
                          <input type="number" v-model='formdata.telephone' name="telephone" id="telephone" placeholder="手机号码" class="form-control">
                          <p class="form-control-static text-muted">用于登入和找回密码等功能，不会透漏给第三方</p>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="pwd" class="col-xs-3 col-sm-2 control-label ">密码</label>
                      <div class="col-xs-9 col-md-8">
                          <input type="password" v-model='formdata.pwd' name="pwd" id="pwd" placeholder="密码" class="form-control">
                          <p class="form-control-static text-muted">请牢记</p>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="pwdconfirm" class="col-xs-3 col-sm-2 control-label ">再次输入</label>
                      <div class="col-xs-9 col-md-8">
                          <input type="password" v-model='formdata.pwdconfirm' name="pwdconfirm" id="pwdconfirm" placeholder="请再次输入密码" class="form-control">
                          <p class="form-control-static text-muted">和输入密码一致</p>
                          <p class="form-control-static alert alert-warning" v-if='!init & alerts.pwd != 1'>{{ alerts.pwd }}</p>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="imgUpload" class="col-xs-3 col-sm-2 control-label">上传头像</label>
                      <div class="col-xs-8 col-sm-7 col-md-5">
                          <input type="file" name="imgUpload" id="imgUpload" class="form-control">
                          <p class="form-control-static text-muted">选择您心仪的小头像，会增加您的魅力哦</p>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="imgUpload" class="col-xs-3 col-sm-2 control-label">您擅长编写</label>
                      <div class="col-xs-9 col-md-8">
                          <div class="has-success">
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="fe">
                                      前端
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="java">
                                      java
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="php">
                                      php
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="nodejs">
                                      nodejs
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="js">
                                      js
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="python">
                                      python
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="ruby">
                                      Ruby
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="c">
                                      C
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="c2">
                                      C++
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="c3">
                                      C#
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="android">
                                      Android
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input v-model='formdata.skills' type="checkbox" id="skills" value="ios">
                                      ios
                                  </label>
                              </div>
                          </div>
                          <br>
                          <p class="form-control-static text-muted">您可以参与勾选项目的开发，但为了保证和您同水平开发，我们会对您的专业水平进行评审</p>
                      </div>
                  </div>

                  <div class="form-group">
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
                  <div class="alert alert-danger" role="alert" v-if='submited'>{{ alerts.form }}</div>
                  <div class="from-group form-group-lg text-right">

                      <hr>
                      <a class="btn btn-lg btn-info" @click.prevent='register()'>提交</a>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>
<script>
  import * as api from '../api/request'

  export default {
    data () {
      return {
        msg: 'init msg',
        init: false,
        submited: false,
        avatar: '',
        formdata: {
          skills:[],
          username: '',
          email:'',
          nickname: '',
          pwd: '',
          pwdconfirm: '',
          telephone: '',
          imgUpload: '',
        },
      }
    },
    computed: {
      alerts () {
        // 表单校验
        // 是否首次输入
        var pwd = null
        var ok = true
        var form = 'init form alert'
        pwd = (this.formdata.pwd !== this.formdata.pwdconfirm)?'两次输入不一致':'1'

        return {
          form,
          ok,
          pwd
        }
      },
      regdata () {
        // 发起注册请求的data主体, 从this.formdata计算的来
        var password = null
        if(this.alerts.pwd === '1'){
          password = this.formdata.pwd
        }
        return {
          username: this.formdata.username,
          password,
          email: this.formdata.email,
          nickname: this.formdata.nickname,
          skills: this.formdata.skills,
          telephone: this.formdata.telephone,
          avatar: this.avatar,
        }
      }
    },
    methods: {
      register () {
        this.init = false
        this.submited = true
        if(this.alerts.ok === false){
          console.log('表单数据格式有误')
          this.alerts.form = '表单数据格式有误'
          return
        }
        console.group('注册')
        api.userReg((x)=>{
          if (x.status === 0 ) {
            this.msg = '注册成功'
          }else{
            this.msg = x.msg
          }
          console.log(x)
        },{regdata:this.regdata})
        console.groupEnd()
      }
    }
  }
</script>