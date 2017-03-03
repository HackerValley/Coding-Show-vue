<template>
  <div>
    <div class="row">
      <h2>{{ act }}项目 <span class="fr"><small><router-link to="/">返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <form action="" role="form" class="form-horizontal">
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="projName">项目名称</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input class="form-control" v-model='data.project_name' type="text" name="projName" id='projName' placeholder="项目名称">
              <p class="form-control-static text-muted">尽量用简短有代表性的项目名称</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="description">项目概述</label>
            <div class="col-xs-9">
              <input class="form-control" v-model='data.description' type="text" name="description" id='description' placeholder="项目概要">
              <p class="form-control-static text-muted">用一句话形容您的项目</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="details">项目要求</label>
            <div class="col-xs-9 col-md-8">
              <textarea class="form-control" v-model='data.detail' rows="7" name="details" id='details' placeholder="项目详情"></textarea>
              <p class="form-control-static text-muted">详细描述您项目的所有要点和要求，逐条写清</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label' for="imgUpload">上传图像</label>
            <div class="col-xs-8 col-sm-7 col-md-5">
              <input class="form-control"  type="file" name="imgUpload" id='imgUpload'>
            </div>
            <div class="col-xs-1">
              <button type="button" class="btn btn-default">上传</button>
            </div>
          </div>
          <div class="row imgpool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <img width="140" v-for='img in data.imagePath' :src='img'>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="videolink">视频链接</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input class="form-control" v-model='data.project_link' type="text" name="videolink" id='videolink' placeholder="视频链接">
              <p class="form-control-static text-muted">您项目的视频介绍资料</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label' for="imgUpload">开发文档</label>
            <div class="col-xs-8 col-sm-7 col-md-5">
              <input class="form-control"  type="file" name="docUpload" id='docUpload' placeholder="开发文档">
            </div>
            <div class="col-xs-1">
              <button type="button" class="btn btn-default">上传</button>
            </div>
          </div>
          <div class="row filepool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <img width="64" height="64" alt='假装是一个文件标识' src=''>
            </div>
          </div>
          <div class="from-group form-group-lg text-right">
            <hr>
            <a class="btn btn-lg btn-info" v-on:click='modify'>{{ aim.act }}</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  div[class$='pool'] {padding:0 0 2em 0;overflow: hidden;}
  div[class$='pool'] img{border:none; border-radius:6px; margin:.6em;float: left;}

  .proj{overflow:hidden}
  .proj div{float:left;margin:10px;border:thin solid red ;width:100px ;height:100px;text-align:center}
</style>
<script>
import * as api from '../api/request'

export default{
  beforeMount () {
    // this.request()
    api.getProjDetail(this.$route.params.id, (err, x)=>{
      // console.log('result:',x)
      this.msg = x.msg
      this.status = x.status
      this.data = x.data[0]
    })
  },
  data () {
    return {
      aim: {
        act: '修改',  // 动作
        id: this.$route.params.id,  // 参数
      },
      data: {},
      msg: '',
      status: -1
    }
  },
  computed: {
    act () {
      return this.aim.act
    }
  },
  methods: {
    modify () {
      api.updateProj({ id: this.aim.id, data: this.data}, (x) => {
        this.msg = x.msg
        if(x.msg != 'error'){
          console.log(x)
        } else {
          console.error('update error')
        }
      })
      return null
    }
  }
}
</script>
