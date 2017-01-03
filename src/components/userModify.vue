<template>
  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
    <div class="row">
      <h2>个人信息设置 <span class="fr"><small><router-link to="/">返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <form action="" role="form" class="form-horizontal">
          <div class="form-group">
            <label for="realName" class="col-xs-3 col-sm-2 control-label ">姓名</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input type="text" name="realName" id="realName" placeholder="您的姓名" class="form-control" v-model='userdata.realname'>
              <p class="form-control-static text-muted">真实姓名</p>
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-xs-3 col-sm-2 control-label ">E-Mail</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input type="text" name="email" id="email" placeholder="邮箱地址" class="form-control" v-model='userdata.email'>
              <p class="form-control-static text-muted">邮箱地址</p>
            </div>
          </div>
          <div class="form-group">
            <label for="userName" class="col-xs-3 col-sm-2 control-label ">用户名</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input type="text" name="userName" id="userName" placeholder="用户名" class="form-control" v-model='userdata.username'>
              <p class="form-control-static text-muted">用户名</p>
            </div>
          </div>
          <div class="form-group">
            <label for="nickName" class="col-xs-3 col-sm-2 control-label ">昵称</label>
            <div class="col-xs-9">
              <input type="text" name="nickName" id="nickName" placeholder="昵称" class="form-control" v-model='userdata.nickname'>
              <p class="form-control-static text-muted">任何您发表的项目，会以昵称署名</p>
            </div>
          </div>
          <div class="form-group">
            <label for="telphone" class="col-xs-3 col-sm-2 control-label ">手机号码</label>
            <div class="col-xs-9 col-md-8">
              <input type="number" name="telphone" id="telphone" placeholder="手机号码" class="form-control" v-model='userdata.telephone'>
              <p class="form-control-static text-muted">用于登入和找回密码等功能，不会透漏给第三方</p>
            </div>
          </div>
          <div class="form-group">
            <label for="pwd" class="col-xs-3 col-sm-2 control-label ">密码</label>
            <div class="col-xs-9 col-md-8">
              <input type="password" name="pwd" id="pwd" placeholder="密码" class="form-control">
              <p class="form-control-static text-muted">请牢记</p>
            </div>
          </div>
          <div class="form-group">
            <label for="pwdconfirm" class="col-xs-3 col-sm-2 control-label ">再次输入</label>
            <div class="col-xs-9 col-md-8">
              <input type="password" name="pwdconfirm" id="pwdconfirm" placeholder="请再次输入密码" class="form-control">
              <p class="form-control-static text-muted">和输入密码一致</p>
            </div>
          </div>
          <div class="form-group">
            <label for="imgUpload" class="col-xs-3 col-sm-2 control-label">上传头像</label>
            <div class="col-xs-8 col-sm-7 col-md-5">
              <input type="text" placeholder='测试 v-model' class='form-control' v-model='userdata.avatar'>
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
                    <input type="checkbox" id="skill" value="fe" v-model='userdata.skill'> 前端
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="java" v-model='userdata.skill'> java
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="php" v-model='userdata.skill'> php
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="nodejs" v-model='userdata.skill'> nodejs
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="js" v-model='userdata.skill'> js
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="python" v-model='userdata.skill'> python
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="ruby" v-model='userdata.skill'> Ruby
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="c" v-model='userdata.skill'> C
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="c2" v-model='userdata.skill'> C++
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="c3" v-model='userdata.skill'> C#
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="android" v-model='userdata.skill'> Android
                  </label>
                </div>
                <div class="checkbox col-xs-4">
                  <label>
                    <input type="checkbox" id="skill" value="ios" v-model='userdata.skill'> ios
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
          <div class="from-group form-group-lg text-right">
            <hr>
            <a class="btn btn-lg btn-info" @click='getUserInfo'>获取用户信息</a>
            <a class="btn btn-lg btn-info">保存</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '../api/request'

  export default {
    created () {
      // 渲染页面之前，获取登录信息，如果获取不到，说明不是合法的登陆状态，进行登出操作
      this.getUserInfo()
    },
    data () {
      return {
        userdata:{
          _id: '',
          realname: '',
          username: '',
          nickname: '',
          skill: [],
          last_login_time: '',
          create_time: '',
          avatar: '',
          sns_id: '',
          sns_type: 0,
          telephone: '',
          level: 0,
          email: '',
        }
      }
    },
    methods: {
      getUserInfo () {
        api.userInfo((x)=>{
          console.log(x)
          if(x[0] === '<') {
            console.log('没有登陆')
            this.$store.dispatch('setAuthed', false)
            this.$router.replace({ path: '/user/login' })
            return
          }
          if (x.status === 0) {
            this.userdata = x.data
          }
        })
      }
    }
  }
</script>