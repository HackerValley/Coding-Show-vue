<template>
  <div class="col-xs-10 col-xs-offset-1">
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
                <input type="text" name="username" id="userName" placeholder="您的用户名" class="form-control">
                <p class="form-control-static text-muted">用户名或邮箱</p>
              </div>
            </div>
            <div class="form-group">
              <label for="userName" class="col-xs-3 col-sm-2 control-label ">密码</label>
              <div class="col-xs-9 col-sm-8 col-md-6">
                <input type="text" name="passwd" id="passwd" placeholder="请输入密码" class="form-control">
                <p class="form-control-static text-muted">请输入密码</p>
              </div>
            </div>
            <div class="checkbox">
              <label for="userName" class="col-xs-1 col-sm-2 control-label "></label>
              <label class="input-lg">
                <input type="checkbox" name="rememberPasswd">记住密码
              </label>
            </div>
            <div class="from-group form-group-lg ">
              <hr>
              <label for="userName" class="col-xs-3 col-sm-2 control-label "></label>
              <a class="btn btn-lg btn-info">登录</a>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>
<script>
import api from '../api/request.js'
export default {

}
</script>