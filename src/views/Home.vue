<template>
  <div class="home">
    <Input v-model="value5" type="textarea" placeholder="Enter something..." />
    <Button type="primary" icon="ios-search" @click="btn">Search</Button>
    <div>
      <div class="itblock item-obj" v-for="(item, key) in obj" :key="key">
        {{key}}: {{item}}
      </div>
    </div>
    <div class="itblock item" v-for="(item, i) in arr" :key="i">
      <div class='item-box' :style="{background: item.data.indexOf('小') >= 0 ? '#FFB269' : '#64D9A8'}" 
         v-for="(a, index) in (+item.data.split('*')[1])" :key="index"
        >{{index + 1 === (+item.data.split('*')[1]) ? (+item.data.split('*')[1]) : ''}}</div>
        <div :class="{fontBig: +item.data.split('*')[1] >=7 }" :title="item.time.split(' ')[1]">{{item.data.split('*')[0]}}{{item.qishu}}</div>
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
      obj: {},
      value5: ''
    }
  },
  components: {
    Introduce
  },
  methods: {
    btn () {
    console.log(this.value5, 'value5====')
    }
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
    try {
       this.$get('/all/home_Index_dateData?code=jsssc&p=1&limit=10000').then((res) => {
        let arr = this.$util.getMaxAndMin(res.data)
        let obj = this.$util.getMaxAndMinNum(arr)
        this.arr = arr
        this.obj = obj
        console.log(obj,'==')
      })
//       fetch("/app/all/home_Index_getResultTrend", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "zh-CN,zh;q=0.9",
//     "cache-control": "no-cache",
//     "content-type": "application/json;charset=UTF-8",
//     "form-token": "",
//     "pragma": "no-cache",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://www.vip2-tm30.com/new_mobile/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{page:1,code:'jsssc'}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// }).then((res) => {
//   console.log(res, '======')
// })
    } catch (error) {
        let arr = this.$util.getMaxAndMin(arr20201225)
        let obj = this.$util.getMaxAndMinNum(arr)
        this.arr = arr
        this.obj = obj
    }
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
  .item-obj{
    margin: 6px;
    text-align: center;
  }
  .item-box{
    height: 20px;
  }
  .fontBig {
    background: rgb(211, 60, 60);
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
