<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-bind:route="true">
      <van-tabbar-item to="/" icon="home-o">照片墙</van-tabbar-item>
      <van-tabbar-item to="/about" icon="photo-o">故事</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
