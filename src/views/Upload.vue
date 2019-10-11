<template>
  <div>
    <van-nav-bar title="上传" left-text="返回" left-arrow @click-left="goHome" />

    <van-cell-group :border="false">
      <van-cell>
        <van-uploader :after-read="afterRead" v-model="imgList" multiple />
      </van-cell>
      <van-cell>
        <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large">提交</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return { imgList: [] };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    afterRead(file) {
      console.log(file);
    }
  }
};
</script>