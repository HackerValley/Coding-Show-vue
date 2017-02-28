<template>
  <div class="thumbnail item">
    <router-link :to="'/detail/' + itemdata._id"><img src=""/><span class="blankimg"> </span></router-link>
    <div class="caption">
      <h4><router-link :to="'/detail/' + itemdata._id">{{ itemdata.project_name }}</router-link></h4>
      <div class="intro">
        <p><em>{{ itemdata.uid }}</em> <br> {{ itemdata.create_time | showTime }} </p>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <a href="#"><span class="glyphicon glyphicon-thumbs-up"></span></a>
          <span>{{ itemdata.star_count }}</span>
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
  filters: {
    showTime: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.substr(0,16).replace('T',' ')
    }
  }
}
</script>
<style>
  .item {
    overflow: hidden;
    box-sizing: border-box;
    background: rgba(0, 0, 0, .01);
    margin: 10px -6px;
    padding: 0;
    box-shadow: 0 1px 0px 0 rgba(0, 0, 0, .3);
    border-radius: 4px;
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
  span.blankimg{display: none}
  .item img[src=''] + span.blankimg{
    display: inline-block;
    background: lightskyblue;
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
    /* line-height: 1em; */
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
