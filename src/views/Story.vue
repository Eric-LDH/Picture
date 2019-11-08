<template>
  <div class="about">
    <Title title="我的故事" />

    <div style="margin-bottom:50px;">
      <van-cell
        title="9月"
        :border="false"
        :title-style="{ textAlign: 'left' }"
        value-class="detail"
      >
        <a class="detail" href="###">
          更多
          <van-icon name="arrow" />
        </a>
      </van-cell>
      <van-row type="flex" justify="space-around">
        <van-col span="11">
          <van-image
            width="100%"
            height="100px"
            fit="cover"
            :src="'https://www.bootcss.com/p/layoutit/img/2.jpg'"
            radius="5"
          />
          <div style="position: relative;top:-60px;color:#fff;">今天的我</div>
        </van-col>
        <van-col span="11">
          <van-image
            width="100%"
            height="100px"
            fit="cover"
            :src="'https://www.bootcss.com/p/layoutit/img/2.jpg'"
            radius="5"
          />
          <div style="position: relative;top:-60px;color:#fff;">最好的我们</div>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around" style="margin-bottom:-15px;">
        <van-col span="23">
          <van-image
            width="100%"
            height="100px"
            fit="cover"
            :src="'https://www.bootcss.com/p/layoutit/img/2.jpg'"
            radius="5"
          />
          <div style="position: relative;top:-60px;color:#fff;">端午节</div>
        </van-col>
      </van-row>
    </div>

    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/footer.vue";
import Title from "@/components/Title.vue";

export default {
  components: {
    Footer,
    Title
  }
};
</script>

<style scoped>
.detail {
  line-height: inherit;
  color: #1989fa;
}
.van-row {
  margin: 10px;
  margin-bottom: -15px;
}
</style>