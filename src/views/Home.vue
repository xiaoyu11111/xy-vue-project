<template>
  <div class="home">
    <Introduce msg="This is a vue-web template."/>
    <div class="itblock item" v-for="(item, i) in arr" :key="i">
      <div class='item-box' :style="{background: item.data.indexOf('小') >= 0 ? 'skyblue' : 'red'}" 
         v-for="(a, index) in (+item.data.split('*')[1])" :key="index"
        >{{index + 1 === (+item.data.split('*')[1]) ? (+item.data.split('*')[1]) : ''}}</div>
        <div>{{item.qishu}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduce from '@/components/Introduce.vue'
// import * as dd from 'dingtalk-jsapi'; // 此方式为整体加载，也可按需进行加载
import socketClient from 'socket.io-client'
import {arr20201225} from './json/2020-12-25'
export default {
  name: 'Home',
  data() {
    return {
      arr: [],
      obj: {}
    }
  },
  components: {
    Introduce
  },
  mounted() {
    // dd.ready(function () {
    //   dd.runtime.permission.requestAuthCode({
    //     corpId: 'ding67c60870733a1b8eacaaa37764f94726',
    //     onSuccess: function (result) {
    //       console.log(result, 'r======')
    //     }
    //   })
    // })
    let arr = this.$util.getMaxAndMin(arr20201225)
    let obj = this.$util.getMaxAndMinNum(arr)
    this.arr = arr
    this.obj = obj
    console.log(arr, obj)
  }
}
</script>

<style scoped lang="less">
.home{
  overflow: scroll;
  .item{
    width: 20px;
    margin: 6px;
    text-align: center;
  }
  .item-box{
    height: 20px;
  }
}
</style>
