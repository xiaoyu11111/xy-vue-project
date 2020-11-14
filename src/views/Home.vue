<template>
  <div class="home">
    <Introduce msg="This is a vue-web template."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduce from '@/components/Introduce.vue'
import * as dd from 'dingtalk-jsapi'; // 此方式为整体加载，也可按需进行加载

export default {
  name: 'Home',
  components: {
    Introduce
  },
  mounted() {
    console.log()
    dd.ready(function () {
      dd.runtime.permission.requestAuthCode({
        corpId: 'ding67c60870733a1b8eacaaa37764f94726',
        onSuccess: function (result) {
          console.log(result, 'r======')
        }
      })
    })

  }
}
</script>
