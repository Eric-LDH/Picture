<template>
  <div class="bgcolor">
    <div class="userbg">
      <div class="userimg"></div>
      <div style="margin:0 auto;color:#fff;margin-top:10px;">非凡哥</div>
    </div>
    <van-row style="padding:10px;background-color: #fff;">
      <van-col span="8">
        <span class="van-grid-item__text">
          500M
          <br />空间容量
        </span>
      </van-col>
      <van-col span="8" style="border-left:1px solid #ebedf0;border-right:1px solid #ebedf0;">
        <span class="van-grid-item__text">
          1%
          <br />空间使用
        </span>
      </van-col>
      <van-col span="8">
        <span class="van-grid-item__text">
          4
          <br />照片数
        </span>
      </van-col>
    </van-row>
    <van-cell-group style="margin-top:10px;">
      <van-cell icon="setting-o" title="设置" size="large" style="text-align:left" is-link />
      <van-cell icon="delete" title="回收站" size="large" style="text-align:left" is-link />
    </van-cell-group>
    <div style="margin:20px 10px">
      <van-button type="info" size="large" @click="logout()">退出登录</van-button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  methods: {
    logout() {
      this.$toast.loading();
      this.$toast.loading({
        forbidClick: true,
        onClose: () => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("name");
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
<style scoped>
.bgcolor {
  height: 100%;
  background-color: #f7f8fa;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.userbg {
  height: 170px;
  background-image: url("../assets/me-bg.jpg");
  background-position: center center;
  background-size: cover;
  padding-top: 30px;
}
.userimg {
  background-image: url("../assets/mebg.jpg");
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  border: 3px solid #fff;
}
</style>