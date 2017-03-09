<template>
  <div>
    <div class="row">
      <h2>{{ aim.act }}项目 <span class="fr"><small><a href="/">返回首页</a></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-12 col-xs-offset-0">
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
            <div class="col-xs-5 col-sm-5 col-md-4">
              <input class="form-control" :type="retype" name="imgUpload" id='imgUpload' multiple="multiple" file-type='img' @change='onFileChange'>
            </div>
            <div class="col-xs-4">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default" @click="uploadMulti('img')" :disabled="'imgupload' | checkdisable(disables)">上传</button>
                <button type="button" class="btn btn-default" @click="discard('img')" :disabled="null">清除</button>
              </div>
            </div>
          </div>
          <div class="row imgpool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <p class='text-muted' v-if='data.imagePath.length'><small>点击以舍弃图片</small></p>
              <span class="imgwrapper" v-for='(img,idx) in data.imagePath' @click='removeImg(idx)'><img :src='img' :alt='idx' v-if='img'></span>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="videolink">视频链接</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input class="form-control" v-model='data.project_link' type="text" name="videolink" id='videolink' placeholder="视频链接">
              <p class="form-control-static text-muted">您项目的视频介绍资料</p>
            </div>
          </div>
          <!--
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label' for="imgUpload">开发文档</label>
            <div class="col-xs-5 col-sm-5 col-md-4">
              <input class="form-control" :type="redoc" file-type='doc' name="docUpload" id='docUpload' placeholder="开发文档">
            </div>
            <div class="col-xs-4">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default" @click="uploadMulti('doc')" :disabled="'docupload' | checkdisable(disables)">上传</button>
                <button type="button" class="btn btn-default" @click='discard(doc)' :disabled="''">清除</button>
              </div>
            </div>
          </div>
          <div class="row filepool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <span class="fileitem" v-for='file in '></span>
            </div>
          </div>
          -->
          <div class="from-group form-group-lg text-right">
            <hr>
            <a v-if='aim.act == "添加"' class="btn btn-lg btn-info" v-on:click='addproj'>{{ aim.act }}</a>
            <a v-if='aim.act == "修改"' class="btn btn-lg btn-info" v-on:click='modify'>{{ aim.act }}</a>
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
  div[class$='pool'] span.imgwrapper{
    display: block;
    float:left;
    position: relative;
  }
  div[class$='pool'] img {
    max-width: 160px;
    box-shadow: 0px 2px 2px 0 rgba(0,0,0,.3);
    border: none;
    border-radius: 6px;
    margin: .6em;
    float: left;
    transition: all .6s;
    cursor: pointer;
    position: relative;
  }
  div[class$='pool'] img:hover{
    max-width: 240px;
  }

  div[class$='pool'] span.imgwrapper:hover::before{
    display: block;
    width: 24px;height: 24px;
    content:'x';
    color:red;
    position: absolute;
    right:5px;top:5px;
    text-align: center;
    line-height: 24px;
    z-index: 9;
    font-size: 24px;
    text-shadow: 0 0 1px black
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
  import {
    mapActions
  } from 'vuex'

  export default {
    beforeRouteEnter(to, from, next) {
      if (to.params.id) {
        api.getProjDetail(to.params.id, (err, x) => {
          if (err) {
            // display some global error message
            next(false)
          } else {
            if (x.data.length < 1) {
              next(false)
              return
            }
            next(vm => {
              // 按照_id获取，只获取第一个。
              vm.aim.act = '修改'
              vm.aim.id = to.params.id
              vm.msg = x.msg
              vm.status = x.status
              vm.data = x.data[0]
              if (vm.msg !== '') {
                vm.newToast({
                  type: 'info',
                  message: vm.msg
                })
              }
            })
          }
        })
      } else {
        next(vm => {
          vm.aim.act = '添加'
          vm.aim.id = ''
          vm.msg = ''
          vm.status = -1
          vm.data = {
            'description': '',
            'detail': '',
            'dev_projects': {},
            'developer_count': -1,
            'imagePath': [],
            'project_link': '',
            'project_name': ''
          }
          vm.discard()
        })
      }
    },
    data() {
      return {
        aim: {
          id: '',
          act: '添加', // 动作
        },
        disables: [],
        data: {
          'description': '',
          'detail': '',
          'dev_projects': {},
          'developer_count': -1,
          'imagePath': [],
          'project_link': '',
          'project_name': ''
        },
        previewimg: '',
        uploading: false,
        prepare2uploadimg: [], // 准备上传的图片
        prepare2uploaddoc: [], // 准备上传的文档
        abortuploads: [], // 舍弃的文件，等待删除
        msg: '',
        status: -1,
        retype: 'file',
        redoc: 'file',
      }
    },
    computed: {},
    filters: {
      checkdisable(target, pool) {
        if (pool.indexOf(target))
          return null
        else
          return 1
      }
    },
    methods: {
      ...mapActions([
        'newToast'
      ]),
      addproj() {
        if (this.prepare2uploaddoc.length + this.prepare2uploadimg.length > 0) {
          this.newToast({
            type: 'warning',
            message: '有等待上传的文件'
          })
          return
        }
        api.addProj({
          data: this.data
        }, (err, x) => {
          if (err) {
            console.error(err)
            return
          }
          this.msg = x.msg
          console.log(x)
          if (x.status === 0) {
            // console.log(x)
            this.newToast({
              type: 'success',
              message: '添加成功'
            })
            setTimeout(() => {
              this.$router.push({
                path: '/home'
              })
            }, 0)
          } else {
            this.newToast({
              type: 'warning',
              message: x.msg
            })
          }
        })
        return null
      },
      modify() {
        api.updateProj({
          id: this.aim.id,
          data: this.data
        }, (err, x) => {
          // this.msg = x.msg
          if (err) {
            console.error(err)
            this.newToast({
              type: 'danger',
              message: err
            })
            return
          }
          console.log(x)
          if (x.msg != 'error' && x.status === 0) {
            this.newToast({
              type: 'success',
              message: '更新成功'
            })
            setTimeout(() => {
              this.$router.push({
                path: '/detail/' + this.aim.id
              })
            }, 0)
          } else {
            console.error(x.msg)
            this.newToast({
              type: 'danger',
              message: x.msg
            })
          }
        })
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
        console.log(files)
        let targettype = e.target.getAttribute('file-type')
        console.log(targettype)
        targettype = targettype || 'img'
        if (targettype === 'img') {
          this.prepare2uploadimg = []
          this.prepare2uploadimg.push(...files)
        } else {
          // 目前只有两种上传场景
          this.prepare2uploaddoc = []
          this.prepare2uploaddoc.push(...files)
        }
      },
      upload() {
        // 只管上传不管删除，单文件
        console.log('尝试上传文件')
        let data = new FormData()
        data.append('attachment', this.prepare2uploadimg[0]);
        api.upload(data, (x) => {
          console.log(x)
          this.data.imagePath.push(x.data.pic_src)
        })
      },
      uploadMulti(type) {
        // 顺序上传
        let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']
        let files
        if (type !== 'img') {
          files = this.prepare2uploaddoc
        } else {
          files = this.prepare2uploadimg
        }
        // 不符合的格式文件不上传
        files = files.filter((file, idx) => {
          if (file && supportedTypes.indexOf(file.type) >= 0) {
            if(file.size > 10 * 1024 * 1024) {
              this.newToast({
                type: 'danger',
                message: `文件 ${file.name} 太大，过滤掉。${Math.floor(file.size/8192)/128}M`
              })
              return false
            }
            if(file.size > 1024 * 1024) {
              this.newToast({
                type: 'warning',
                message: `文件 ${file.name} 较大，上传会慢。${Math.floor(file.size/8192)/128}M`
              })
            } else {
              this.newToast({
                type: 'info',
                message: `文件 ${file.name} , ${Math.floor(file.size/8192)/128}M`
              })
            }
            return true
          } else {
            this.newToast({
              type: 'warning',
              message: `第${idx}个文件格式不支持上传。${file.type}`
            })
            return false
          }

        })

        if (files.length === 0) {
          console.log('无文件')
          this.newToast({
            type: 'warning',
            message: `无文件`
          })
          return
        }
        // 限制上传文件数量
        if (files.length > 8) {
          files = files.slice(0, 8)
        }
        // 上传按钮变禁用状态
        this.disables.push('imgupload')
        let p = Promise.resolve()
        let vm = this
        let tasks = new Array(files.length).fill(
          (x) => new Promise((resolve, reject) => {
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
            },(toast)=>{
              this.newToast({
                type: 'info',
                message: `当前文件已上传${toast}%`
              })
            })
          }).catch((e) => {
            console.log('tasks', e)
          })
        )

        console.log(tasks)
        return tasks.reduce((promise, task) => {
          return promise.then(task)
        }, Promise.resolve()).then((x) => {
          console.log('一共', x, "个文件")
          // 取消按钮的禁用状态
          vm.disables.splice(vm.disables.indexOf('imgupload'), 1)
          // 清空准备上传的文件列表
          if (type !== 'img') {
            vm.prepare2uploaddoc = []
          } else {
            vm.prepare2uploadimg = []
          }
          // 重置fileupload框状态
          vm.retype = ''
          setTimeout(() => {
            vm.retype = 'file'
          }, 0)

        }).catch((e) => {
          console.log(e)
        })
      },
      removeImg(idx) {
        console.log(idx)
        this.data.imagePath.splice(idx, 1)
        // 创建一个待删除列表。
      },
      switchItype() {
        this.retype = (this.retype === 'file') ? '' : 'file'
      },
      discard(target) {
        // 舍弃上传框的东西
        if(target === 'img'){
          this.retype = ''
          setTimeout(() => {
            this.retype = 'file'
          }, 0)
          this.prepare2uploadimg = []
        } else if (target === 'doc') {
          this.redoc = ''
          setTimeout(() => {
            this.redoc = 'file'
          }, 0)
          this.prepare2uploaddoc = []
        }

      }
    }
  }

</script>
