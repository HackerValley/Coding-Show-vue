<template>
  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
    <admin-title></admin-title>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
        <div class="row search-box">
          <div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
            <div class="input-group">
              <input type="text" class="form-control" name="" value="" placeholder="请在此搜索姓名">
              <span class="input-group-btn">
                  <input type="button" name="" value="搜索" class="btn btn-default" >
                </span>
            </div>
          </div>
        </div>
        <div class="list-group skills">
          <div class="list-group-item">
            <span class="fr">
              <a href="#" class="btn btn-xs btn-warning">通过</a>
              <a href="#" class="btn btn-xs btn-warning">拒绝</a>
            </span>
            <span class="name">xxxxx</span>
            <span class="wechat">xxxxx</span>
            <span class="skill">前端</span>
          </div>
          <div class="list-group-item">
            <span class="fr">
              <a href="#" class="btn btn-xs btn-warning">通过</a>
              <a href="#" class="btn btn-xs btn-warning">拒绝</a>
            </span>
            <span class="name">xxxxx</span>
            <span class="wechat">xxxxx</span>
            <span class="skill">前端</span>
          </div>
          <div class="list-group-item">
            <span class="fr">
              <a href="#" class="btn btn-xs btn-warning">通过</a>
              <a href="#" class="btn btn-xs btn-warning">拒绝</a>
            </span>
            <span class="name">xxxxx</span>
            <span class="wechat">xxxxx</span>
            <span class="skill">前端</span>
          </div>
          <div class="list-group-item">
            <span class="fr">
              <a href="#" class="btn btn-xs btn-warning">通过</a>
              <a href="#" class="btn btn-xs btn-warning">拒绝</a>
            </span>
            <span class="name">xxxxx</span>
            <span class="wechat">xxxxx</span>
            <span class="skill">前端</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminTitle from './adminTitle.vue'

export default {
  components: {
    AdminTitle
  }
}
</script>
<style type="text/css">
.fr {
  float: right
}

.button-top {
  margin-bottom: 1px;
}

.search-box {
  margin: 20px auto 40px;
}

.skills span {
  display: inline-block;
}

.skills span.name,
.skills span.wechat,
.skills span.skill {
  padding-right: 2em;
}

.skills span.name::before {
  content: 'name: '
}

.skills span.wechat::before {
  content: '微信: '
}

.skills span.skill::before {
  content: ' '
}
</style>