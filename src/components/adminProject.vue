<style>

.fr {
    float: right
}

.search-box {
    margin: 20px auto 40px;
}

</style>

<template>
  <div>
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
            <div class="row">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>联系电话</th>
                            <th>微信</th>
                            <th>项目名称</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='item in data.applicants'>
                            <td>{{ item.name }}</td>
                            <td>{{ item.telephone }}</td>
                            <td>{{ item.wechat }}</td>
                            <td>{{ item.project_name }}</td>
                            <td>
                                <button class="btn btn-default btn-xs" type="button" name="button">通过</button>
                                <button class="btn btn-default btn-xs" type="button" name="button">拒绝</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
  },
    data() {
        return {
            data: {
                applicants: [{
                    'name': '关毅然',
                    'telephone': '18610199913',
                    'wechat': 'yiranguan',
                    'project_name': '旅行app',
                    'operation': ''
                }, {
                    'name': '关毅然',
                    'telephone': '18610199913',
                    'wechat': 'yiranguan',
                    'project_name': '旅行app',
                    'operation': ''
                }, {
                    'name': '关毅然',
                    'telephone': '18610199913',
                    'wechat': 'yiranguan',
                    'project_name': '旅行app',
                    'operation': ''
                }, {
                    'name': '关毅然',
                    'telephone': '18610199913',
                    'wechat': 'yiranguan',
                    'project_name': '旅行app',
                    'operation': ''
                }]
            }

        }
    }


}

</script>
