<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, key, index) in banner" :key="item.id"><img :src="item.img" alt=""></mt-swipe-item>
    </mt-swipe>
</template>
<style lang="scss">
.mint-swipe-items-wrap{
    height: 2.34633rem;
    img{
        width: 100%;
    }
}
.mint-swipe-indicators{
     .is-active{
        background: #fb7299!important;
        opacity: 1;
    }
}
</style>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data() {
        return {
        }
    },
    props:{
        banner:{
            type:Array
        }
    },
    components: {
        Swipe, SwipeItem
    }
}
</script>

