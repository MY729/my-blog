<template>
  <div>
    <el-button>111</el-button>
    <div>aaaaaaaa</div>
    <button v-on:click="getInfo()">点击获取数据</button>
    {{infoList}}
  </div>
</template>
<script>
import { getInfoData } from '@/services/ceshi.service'
export default {
  data() {
    return {
      infoList: []
    }
  },
  methods: {
    async getInfo() {
      const result = await getInfoData()
      this.infoList = result
    }
  }
}
</script>
