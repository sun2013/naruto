<template>
  <mt-tabbar v-model="selected" v-on:click.native="sendIndex(selected)">
    <mt-tab-item id="1">
      <router-link :to="{ name:'Live', params: {index: 1} }">
        <i class="iconfont icon-zhibo1"></i>
        直播</router-link>
    </mt-tab-item>
    <mt-tab-item id="2">
      <router-link :to="{ name:'Recommend', params: {index: 2} }">
        <i class="iconfont icon-remen"></i>
        推荐</router-link>
    </mt-tab-item>
    <mt-tab-item id="3">
      <router-link :to="{ name:'Drama', params: {index: 3} }">
        <i class="iconfont icon-zhuifanshu"></i>
        追番</router-link>
    </mt-tab-item>
    <mt-tab-item id="4">
      <router-link :to="{ name:'Part', params: {index: 4} }">
        <i class="iconfont icon-fenqu"></i>
        分区</router-link>
    </mt-tab-item>
    <mt-tab-item id="5">
      <router-link :to="{ name:'Event', params: {index: 5} }">
        <i class="iconfont icon-xiaolvdashitubiao33304"></i>
        动态</router-link>
    </mt-tab-item>
    <mt-tab-item id="6">
      <router-link :to="{ name:'Find', params: {index: 6} }">
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
  watch: {
    selected(val, index) {
    }
  },
  methods: {
    sendIndex(index) {
      this.$emit('getIndex', index)
    }
  }

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

.router-link-active,
.is-selected a,
.is-selected i {
  color: #fb7299!important;
}

.mint-tabbar i {
  display: block;
  font-size: 20px;
  padding: 4px;
}
</style>
