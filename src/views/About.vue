<template>
  <div class="about">
    
    <van-sticky>
      <van-cell title="我的故事" :title-style="{ fontSize: '20px',textAlign: 'left' }" />
    </van-sticky>
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