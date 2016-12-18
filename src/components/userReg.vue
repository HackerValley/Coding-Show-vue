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
                      <label for="userName" class="col-xs-3 col-sm-2 control-label ">姓名</label>
                      <div class="col-xs-9 col-sm-8 col-md-6">
                          <input type="text" name="userName" id="userName" placeholder="您的姓名" class="form-control">
                          <p class="form-control-static text-muted">真实姓名</p>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="nickName" class="col-xs-3 col-sm-2 control-label ">昵称</label>
                      <div class="col-xs-9">
                          <input type="text" name="nickName" id="nickName" placeholder="昵称" class="form-control">
                          <p class="form-control-static text-muted">任何您发表的项目，会以昵称署名</p>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="telphone" class="col-xs-3 col-sm-2 control-label ">手机号码</label>
                      <div class="col-xs-9 col-md-8">
                          <input type="number" name="telphone" id="telphone" placeholder="手机号码" class="form-control">
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
                                      <input type="checkbox" id="fe" value="option1">
                                      前端
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="java" value="option1">
                                      java
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="php" value="option1">
                                      php
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="nodejs" value="option1">
                                      nodejs
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="js" value="option1">
                                      js
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="python" value="option1">
                                      python
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="ruby" value="option1">
                                      Ruby
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="c" value="option1">
                                      C
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="c2" value="option1">
                                      C++
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="c3" value="option1">
                                      C#
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="android" value="option1">
                                      Android
                                  </label>
                              </div>
                              <div class="checkbox col-xs-4">
                                  <label>
                                      <input type="checkbox" id="ios" value="option1">
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
                  <div class="from-group form-group-lg text-right">
                      <hr>
                      <a class="btn btn-lg btn-info">提交</a>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>