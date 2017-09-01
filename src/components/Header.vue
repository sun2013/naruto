<template>
    <div class="header">
       <img class="logo" src="../assets/logo.png" alt="">
       <div class="user">
           <i class="iconfont icon-yz-search"></i>
            <img src="../assets/noface.gif" alt="">
       </div>
    </div>
</template>
<style lang="scss">
.header{
    padding: .13833rem 15px;
    box-sizing: border-box;
    width: 100%;
    height: 0.95rem;
    background-color: #fff;
}
.logo{
    width: 1.32233rem;
    float: left;
}
.user{
    float: right;
    padding: 0.13rem 0;
    i{
        font-size: 0.512rem;
        float: left;
        color: #aaa;
    }
    img{
        margin-left: 0.2rem;
        display: block;
        float: left;
        width: 0.512rem;
        height: 0.512rem;
        border-radius: 50%;
    }
}
</style>
<script>
export default {
    data() {
        return {
        }
    },
}
</script>

