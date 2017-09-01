<template>
  <div>
    <Swiper :banner='bannerList'></Swiper>
  </div>
</template>

<script>
import api from "../api/api.js"
import Swiper from "../components/Swiper"
export default {
  name: 'hello',
  data() {
    return {
      bannerList: [],
    }
  },
  components: {
    Swiper
  },
  created() {
    this.$http.get(api.live).then(response => {
      const res = response.data.data;
      console.log(res)
      this.bannerList = res.banner;
    }, response => {
      
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  color: #42b983;
}
</style>
