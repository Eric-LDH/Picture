<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a href="/about/home">go home</a>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/footer.vue";
export default {
  components:{
    Footer
  }
};
</script>