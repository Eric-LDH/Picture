<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <span>{{this.$store.state.a.count}}</span>
    <van-button plain type="primary" to="/about">朴素按钮</van-button>
    <van-goods-action-icon to="/about" icon="chat-o">客服</van-goods-action-icon>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  created() {
    this.$store.dispatch("increment");
  },
  methods: {
    GoToAbout() {
      this.$router.push("/about");
    }
  }
};
</script>
