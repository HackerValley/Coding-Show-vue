<template>
  <div>
    <div class="row">
      <h2>
        后台管理
         <small class="fr button-top">
           <a href="#"><button type="button" name="expert" class="btn btn-primary">专家审核</button></a>
           <a href="#"><button type="button" name="skill" class="btn btn-primary">技能审核</button></a>
           <a href="#"><button type="button" name="project" class="btn btn-primary">项目审核</button></a>
           <a href="#"><button type="button" name="index" class="btn btn-primary">返回首页</button></a>
         </small>
      </h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-1"></div>
      <div class="col-xs-10">
        <form class="text-center" action="/search-name" method="post">
          <input type="text" name="" value="" placeholder="请在此搜索姓名">
          <input type="button" name="" value="搜索" class="btn btn-sm btn-primary" >
        </form>
        <ul>
          <li>
            <p>
              name&nbsp;&nbsp;&nbsp;18600000000&nbsp;&nbsp;&nbsp;微信：xxxxxxxxxxxx&nbsp;&nbsp;&nbsp;前端
              <span class="fr">
                <button type="button" name="pass" class="btn btn-xs btn-warning">通过</button>
                <button type="button" name="reject" class="btn btn-xs btn-warning">拒绝</button>
              </span>
            </p>
            <hr>
          </li>
          <li>
            <p>
              name&nbsp;&nbsp;&nbsp;18600000000&nbsp;&nbsp;&nbsp;微信：xxxxxxxxxxxx&nbsp;&nbsp;&nbsp;前端
              <span class="fr">
                <button type="button" name="pass" class="btn btn-xs btn-warning">通过</button>
                <button type="button" name="reject" class="btn btn-xs btn-warning">拒绝</button>
              </span>
            </p>
            <hr>
          </li>
          <li>
            <p>
              name&nbsp;&nbsp;&nbsp;18600000000&nbsp;&nbsp;&nbsp;微信：xxxxxxxxxxxx&nbsp;&nbsp;&nbsp;前端
              <span class="fr">
                <button type="button" name="pass" class="btn btn-xs btn-warning">通过</button>
                <button type="button" name="reject" class="btn btn-xs btn-warning">拒绝</button>
              </span>
            </p>
            <hr>
          </li>
          <li>
            <p>
              name&nbsp;&nbsp;&nbsp;18600000000&nbsp;&nbsp;&nbsp;微信：xxxxxxxxxxxx&nbsp;&nbsp;&nbsp;前端
              <span class="fr">
                <button type="button" name="pass" class="btn btn-xs btn-warning">通过</button>
                <button type="button" name="reject" class="btn btn-xs btn-warning">拒绝</button>
              </span>
            </p>
            <hr>
          </li>
        </ul>
      </div>
      <div class="col-xs-1"></div>
    </div>
  </div>
</template>
