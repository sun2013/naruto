<template>
  <div id="app">
    <Topbar></Topbar>
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import Header from './components/Header'
export default {
  name: 'app',
  head() {
    title: "dilidili"
  },
  components: {
    Tabbar,
    Topbar: Header
  },
  data() {
    return {
      transitionName: 'slide-right',
      title: "dilidili"
    }
  },
  watch: {
    '$route'(to, from) {
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
      console.log(isBack)
      if (!isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font: 12px/1 Microsoft Yahei, Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fb7299;
}

.Router {
  position: absolute;
  width: 100%;
  transition: all .8s ease;
  top: 40px;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
