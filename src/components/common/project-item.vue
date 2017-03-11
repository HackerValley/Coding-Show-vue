<template>
  <div class="thumbnail item" :style="imgBg">
    <router-link :to="'/detail/' + itemdata._id" class='img'><img src="" v-if='!imgsrc'/><span class="blankimg"> </span></router-link>
    <div class="caption">
      <h4><router-link :to="'/detail/' + itemdata._id">{{ itemdata.project_name }}</router-link></h4>
      <div class="intro">
        <p>{{ itemdata.create_time | showTime }} </p>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link :to="'/detail/' + itemdata._id"><span class="glyphicon glyphicon-thumbs-up"></span></router-link>
          <span>{{ itemdata.star_count }}</span>
          <router-link class='pull-right' :to="'/user/profile/' + itemdata.uid"><span class="glyphicon glyphicon-user"></span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'project-item',
  props: ['itemdata'],
  data () {
    return {
      message: ''
    }
  },
  computed: {
    imgsrc () {
      let pics = this.itemdata.imagePath.filter((path,idx)=>{
        return /^(http:\/\/).*(.[jpg|png|gif|pdf])$/.test(path)
      })

      if(pics.length>0){
        return this.itemdata.imagePath[0]
      } else {
        return ''
      }
    },
    imgBg () {
      return {
       'background-image': 'url(' + this.imgsrc + ')',
       'background-repeat': 'no-repeat',
       'background-size': '100% auto'
      }
    }
  },
  filters: {
    showTime: function (value) {
      if (!value) return ''
      return new Date(value).toLocaleString()
    }
  }
}
</script>
<style scoped>
  .item {
    overflow: hidden;
    box-sizing: border-box;
    margin: 10px -6px;
    padding: 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    border-radius: 3px;
  }

  .item img,.item span.blankimg {
    display: block;
    width: 100%;
    margin:0 0;
    min-height: 120px;
    background-color: skyblue;
  }
  .item img[src='']{
    display:none
  }
  .item span.blankimg{display: none}

  .item img[src=''] ~ span.blankimg{
    display: inline-block;
    background: lightskyblue;
  }
  .item .img {
    display:block;
    height:120px;
    overflow:hidden
  }
  .item div.caption{
    background:linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.82),rgb(255, 255, 255),rgb(255, 255, 255));
  }
  .item .intro {
    position: relative;
    font-size: 12px;
    color: #666;
  }

  .item h4 {
    color: #333;
    font-size: 19px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.3em;
    white-space: nowrap;
  }

  .item h4 a {
    text-decoration: none;
    color: #333;
  }

  .item h4 a:hover {
    color: darkcyan;
  }
</style>
