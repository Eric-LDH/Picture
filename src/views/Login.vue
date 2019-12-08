<template>
  <div class="bg">
    <div style="position: absolute;top: 23%;bottom: 10px;left: 10px;right: 10px;">
      <h2>用户登录</h2>
      <van-field
        :right-icon="from.userName.rightIcon"
        v-model="from.userName.value"
        :placeholder="from.userName.title"
        @click-right-icon="displayUN()"
      />
      <van-field
        :right-icon="from.password.rightIcon"
        v-model="from.password.value"
        :placeholder="from.password.title"
        :type="from.password.type"
        @click-right-icon="displayPW()"
      />
      <br />
      <van-button
        style="opacity:0.5; background-color: rgba(0,0,0,0.5);color:white"
        size="large"
        @click="login()"
      >登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      from: {
        userName: { title: "用户名", value: "", rightIcon: "contact" },
        password: {
          title: "密码",
          value: "",
          type: "password",
          rightIcon: "closed-eye"
        }
      },
      emptyErr: " 不能为空"
    };
  },
  methods: {
    displayUN() {
      this.from.userName.rightIcon =
        this.from.userName.rightIcon == "phone-o" ? "contact" : "phone-o";
      this.from.userName.title =
        this.from.userName.rightIcon == "phone-o" ? "手机号码" : "用户名";
    },
    displayPW() {
      this.from.password.type =
        this.from.password.type == "password" ? "text" : "password";
      this.from.password.rightIcon =
        this.from.password.type == "password" ? "closed-eye" : "eye-o";
    },
    login() {
      if (this.from.userName.value == "") {
        this.$toast.fail({
          forbidClick: true,
          message: this.from.userName.title + this.emptyErr
        });
        return false;
      }
      if (this.from.password.value == "") {
        this.$toast.fail(this.from.password.title + this.emptyErr);
        return false;
      }

      this.$store.commit("increment", {
        token: "12312313",
        name: "朗朗"
      });
      
      this.$router.push("/")
    }
  }
};
</script>
<style scoped>
.bg {
  height: 100%;
  background-image: url("../assets/loginbg.jpg");
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
h2 {
  color: white;
  text-align: left;
  margin: auto auto 30px 30px;
}
</style>