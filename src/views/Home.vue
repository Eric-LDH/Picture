<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <span>{{this.$store.state.a.count}}</span>
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
