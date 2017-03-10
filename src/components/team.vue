<template>
  <div class='row'>
    <div class="col-xs-10 col-xs-offset-1">
      <div class="row">
        <h2>志愿者名录<span class="fr"><small><a href="#">返回首页</a></small></span></h2>
        <hr>
      </div>
      <div class="row">
        <p>按照“开源站点Coding Show讨论”微信群加入顺序排列，排名不分先后！志愿者名录为微信昵称。感谢所有志愿者！正式因为大家的无私奉献和开源精神，才有此网站.如果有落记、错记，请联系易燃。</p>
      </div>
      <div class="row">
        <div class="col-xs-4 col-sm-3 col-md-2" v-for="member in members">
          <div class="member"><a href="#">{{ member.name }}</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'team',
    data() {
      return {
        members: [{
            name: '易燃',
            site: ''
          },
          {
            name: '我想静静',
            site: ''
          },
          {
            name: '张冬冬',
            site: ''
          },
          {
            name: '思想的宇屋',
            site: ''
          },
          {
            name: '高阳',
            site: ''
          },
          {
            name: 'fcc黄胜森',
            site: ''
          },
          {
            name: '酸菜',
            site: ''
          },
          {
            name: 'EyeSea',
            site: ''
          },
          {
            name: 'Daniel Wei',
            site: ''
          },
          {
            name: '临渊',
            site: ''
          },
          {
            name: '经国先生',
            site: ''
          },
          {
            name: 'Songlairui',
            site: ''
          },
          {
            name: '姚江',
            site: ''
          },
          {
            name: 'Atmosphere',
            site: ''
          },
          {
            name: '周俊宇',
            site: ''
          },
          {
            name: 'aspiration',
            site: ''
          },
          {
            name: '徘徊者',
            site: ''
          },
          {
            name: '罗基',
            site: ''
          },
          {
            name: 'somnus',
            site: ''
          }
        ]
      }
    }
  }
</script>
<style>
  .member{
    height: 4em;
    padding:1em .6em;
  }
</style>
