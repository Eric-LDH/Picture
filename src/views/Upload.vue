<template>
  <div>
    <van-nav-bar title="上传" left-text="返回" left-arrow fixed @click-left="goHome" />
    <van-cell-group :border="false" :style="{marginTop:'50px',marginBottom:'50px'}">
      <van-cell>
        <van-uploader
          :disabled="submitting"
          :before-read="beforeRead"
          :after-read="afterRead"
          v-model="imgList"
          multiple
        />
      </van-cell>
    </van-cell-group>
    <van-submit-bar
      :price="capacityTotal()"
      :disabled="imgList.length == 0"
      button-text="提交"
      currency="∶"
      suffix-label="MB"
      button-type="info"
      label="合计"
      @submit="sumbit"
    />
    <van-skeleton title :row="3" :loading="loading" />
  </div>
</template>
<script>
export default {
  data() {
    return { imgList: [], loading: false };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    beforeRead() {
      this.loading = true;

      return true;
    },
    afterRead(file) {
      console.log(file);
      this.loading = false;
    },
    capacityTotal() {
      if (this.imgList.length == 0) {
        return 0;
      } else {
        let total = 0;
        for (let i = 0; i < this.imgList.length; i++) {
          total += this.imgList[i].file.size;
        }

        return (total / 1024 / 1024) * 100;
      }
    },
    sumbit() {
      this.$toast.success({
        forbidClick: true,
        message: "上传成功",
        onClose: () => {
          this.goHome();
        }
      });
      console.log(this.imgList);
    }
  }
};
</script>
<style scoped>
.van-cell > div {
  overflow: initial;
}
</style>