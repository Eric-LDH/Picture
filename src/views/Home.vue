<template>
  <div>
    <van-divider
      content-position="left"
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >9月24日 星期二</van-divider>
    <van-grid :column-num="3" :border="false" :gutter="10">
      <van-grid-item v-for="value in 6" :key="value">
        <van-image v-bind:src="'https://img.yzcdn.cn/vant/apple-'+value+'.jpg'" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  created() {
    this.$store.dispatch("increment");
  }
};
</script>
