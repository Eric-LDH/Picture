<template>
  <div>
    <van-tabbar v-bind:route="true">
      <van-tabbar-item to="/" icon="home-o">照片墙</van-tabbar-item>
      <van-tabbar-item to="/about" icon="photo-o">故事</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>