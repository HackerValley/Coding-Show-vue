<template>
  <div>
    <div class="row">
      <h2>{{ act }}项目 <span class="fr"><small><a href="/">返回首页</a></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <div class="well" v-if='msg'>
          <pre>{{ msg }}</pre>
        </div>
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
            <label class='col-xs-3 col-sm-2 control-label ' for="detail">项目要求</label>
            <div class="col-xs-9 col-md-8">
              <textarea class="form-control" v-model='data.detail' rows="7" name="detail" id='detail' placeholder="项目详情"></textarea>
              <p class="form-control-static text-muted">详细描述您项目的所有要点和要求，逐条写清</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label' for="imgUpload">上传图像</label>
            <div class="col-xs-8 col-sm-7 col-md-5">
              <input class="form-control" :type="retype" name="imgUpload" id='imgUpload' multiple="multiple" @change='onFileChange'>
            </div>
            <div class="col-xs-1">
              <button type="button" class="btn btn-default" @click='uploadMulti'>上传</button>
              <a @click='switchItype' class="btn btn-danger">切换input type</a>
            </div>
          </div>
          <div class="row imgpool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <img v-for='(img,idx) in data.imagePath' :src='img' :alt='idx' v-if='img' @click='removeImg(idx)'>
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
              <input class="form-control" type="file" name="docUpload" id='docUpload' placeholder="开发文档">
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
            <a class="btn btn-lg btn-info" v-on:click='addproj'>{{ aim.act }}</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  .fr {
    float: right
  }

  div[class$='pool'] {
    padding: 0 0 2em 0;
    overflow: hidden;
  }

  div[class$='pool'] img {
    border: none;
    border-radius: 6px;
    margin: .6em;
    float: left;
  }

  .proj {
    overflow: hidden
  }

  .proj div {
    float: left;
    margin: 10px;
    border: thin solid red;
    width: 100px;
    height: 100px;
    text-align: center
  }
</style>
<script>
  import * as api from '../api/request'
  import { mapActions } from 'vuex'

  export default {
    beforeMount() {
      // this.request()
      // this.data.details = 'aa'
    },
    data() {
      return {
        aim: {
          act: '添加',  // 动作
        },
        data: {
          'description': '',
          'detail': '',
          'dev_projects': {},
          'developer_count': -1,
          'imagePath': [],
          'project_link': '',
          'project_name': ''
        },
        previewimg:'',
        uploading: false,
        prepare2upload: [],
        abortuploads: [],   // 舍弃的文件，等待删除
        msg: '',
        status: -1,
        retype:'file'
      }
    },
    computed: {
      act() {
        return this.aim.act
      }
    },
    methods: {
    ...mapActions([
          'newToast'
        ]),
      addproj() {
        api.addProj((x) => {
          this.msg = x.msg
          if (x.msg != 'error') {
            console.log(x)
          } else {
            console.error('update error')
          }
        }, { data: this.data })
        return null
      },
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        if (files.length > 5) {
          files = files.slice(0, 5)
          this.newToast({
            type: 'warning',
            message: '限制5张图片'
          })
        }
        this.prepare2upload.push(...files)
        this.createImage(files[0])
      },
      createImage(file) {
        console.log(file)
          let image = new Image()
          let reader = new FileReader()
          var vm = this

          reader.onload = (e) => {
            vm.previewimg = e.target.result
          }
          reader.readAsDataURL(file)

      },
      upload () {
        // 只管上传不管删除，单文件
        console.log('尝试上传文件')
        let data = new FormData()
        data.append('attachment', this.prepare2upload[0]);
        api.upload(data, (x) => {
          console.log(x)
          this.data.imagePath.push(x.data.pic_src)
        })
      },
      uploadMulti () {
        // 顺序上传
        let files = this.prepare2upload
        if(files.length === 0) {
          console.log('无文件')
          return
        }
        this.uploading = true
        let p = Promise.resolve()
        let vm = this
        let tasks = new Array(files.length).fill(
          (x) => new Promise((resolve,reject) => {
            x = x || 0
            let data = new FormData()
            data.append('attachment', files[x])
            // console.log(x)
            // console.log(files[x])

            api.upload(data, (res) => {
              // console.log(x.data)
              vm.data.imagePath.push(res.data.pic_src)
              x++
              resolve(x)
            })
          }).catch((e)=>{console.log('tasks',e)})
        )

        console.log(tasks)
        return tasks.reduce((promise, task) => {
          return promise.then(task)
        }, Promise.resolve()).then((x)=>{
          console.log('一共',x,"个文件")
          // 取消按钮的禁用状态
          vm.uploading = false
          // 清空准备上传的文件列表
          vm.prepare2upload = []
          // 重置fileupload框状态
          vm.retype=''
          setTimeout(()=>{
            vm.retype='file'
          },0)

        }).catch((e)=>{console.log(e)})
      },
      removeImg (idx) {
        console.log(idx)
        this.data.imagePath.splice(idx,1)
        // 创建一个待删除列表。
      },
      switchItype () {
        this.retype = (this.retype === 'file')? '':'file'
      }
    }
  }

</script>
