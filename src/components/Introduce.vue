<template>
    <div class="i">
        <div  class="m">
            <h2>{{CN}}</h2>
            <h3>{{msg}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    name:'Introduce',
    props:{
        msg:String
    },
    data(){
        return{
            CN:'vue网页端'
        }
    }
}
</script>
<style lang="less" scoped>
.i{
    text-align: center;
    padding: 100px;
    height: 100%;
    .m{
        margin: 100px 0;
    }
    img{
        width: 20%;
        height: 20%;
    }
}
</style>