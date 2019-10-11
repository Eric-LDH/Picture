<template>
  <div>
    <van-row type="flex">
      <van-col span="16">
        <van-grid clickable :border="false" :square="true" :column-num="3">
          <van-grid-item icon="photograph" text="上传" to="/upload" :style="{color:'#66CD00'}" />
          <van-grid-item icon="star" text="收藏" :style="{color:'#CDCD00'}" />
          <van-grid-item icon="warning" text="清理" />
        </van-grid>
      </van-col>
    </van-row>
    <van-sticky>
      <van-cell title="9月24日 星期二" :title-style="{ color: '#1989fa',textAlign: 'left' }" />
    </van-sticky>
    <van-grid :column-num="3" :center="true" :border="false" square>
      <van-grid-item v-for="value in 10" :key="value">
        <van-image
          fit="cover"
          height="100%"
          :src="'https://img.yzcdn.cn/vant/apple-'+value+'.jpg'"
        />
      </van-grid-item>
    </van-grid>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Footer
  },
  created() {
    this.$store.dispatch("increment");
  }
};
</script>