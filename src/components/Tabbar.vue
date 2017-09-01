<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="live">
      <router-link :to="'Live'">
        <i class="iconfont icon-zhibo1"></i>
        直播</router-link>
    </mt-tab-item>
    <mt-tab-item id="recommend">
      <router-link :to="'Recommend'">
        <i class="iconfont icon-remen"></i>
        推荐</router-link>
    </mt-tab-item>
    <mt-tab-item id="drama">
      <router-link :to="'Drama'">
        <i class="iconfont icon-zhuifanshu"></i>
        追番</router-link>
    </mt-tab-item>
    <mt-tab-item id="part">
      <router-link :to="'Part'">
        <i class="iconfont icon-fenqu"></i>
        分区</router-link>
    </mt-tab-item>
    <mt-tab-item id="event">
      <router-link :to="'Event'">
        <i class="iconfont icon-xiaolvdashitubiao33304"></i>
        动态</router-link>
    </mt-tab-item>
    <mt-tab-item id="find">
      <router-link :to="'Find'">
        <i class="iconfont icon-faxian"></i>
        发现</router-link>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  data() {
    return {
      selected: '1'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: #757575;
}

.router-link-active {
  color: #fb7299;
}
.mint-tabbar i{
  display: block;
  font-size: 20px;
  padding:4px; 
}
</style>
