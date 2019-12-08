<template>
  <div>
    <van-nav-bar title="上传" left-text="返回" left-arrow fixed @click-left="goHome" />
    <van-cell-group :border="false" :style="{marginTop:'50px',marginBottom:'50px'}">
      <van-cell>
        <van-uploader :before-read="beforeRead" :after-read="afterRead" v-model="imgList" multiple />
        <van-skeleton title :row="3" :loading="loading" :style="{marginTop:'10px'}" />
      </van-cell>
    </van-cell-group>
    <van-submit-bar
      :price="capacityTotal()"
      :disabled="imgList.length == 0"
      button-text="上传"
      currency="∶"
      suffix-label="MB"
      button-type="info"
      label="大小"
      @submit="sumbit"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [],
      loading: false
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    beforeRead(file) {
      this.loading = true;

      let files = [file];
      if (file.length) {
        files = file;
      }
      files.forEach(cur => {
        if (("/" + cur.type).indexOf("/image/") == -1) {
          this.$toast.fail("请上传图片格式的文件");
          this.loading = false;
        }
      });

      return this.loading;
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