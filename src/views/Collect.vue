<template>
  <div>
    <van-nav-bar
      title="收藏"
      left-text="返回"
      :right-text="rightText"
      left-arrow
      fixed
      @click-left="goHome"
      @click-right="onSelected"
    />
    <div style="margin:50px 0;">
      <van-grid
        id="ImageList"
        :style="{marginBottom:'50px'}"
        :column-num="3"
        :center="true"
        :border="false"
        square
      >
        <van-grid-item v-for="(attr,value) in imgList" :key="value" @click="imgSelected(value)">
          <van-checkbox
            v-show="isSelected"
            ref="checkboxes"
            v-model="attr.checked"
            style="position: absolute;z-index:55;left:5px;bottom:5px;"
          ></van-checkbox>
          <van-image fit="cover" height="100%" :src="attr.src" />
        </van-grid-item>
      </van-grid>
    </div>
    <van-tabbar style="padding:0 15px;" v-show="isSelected">
      <van-checkbox v-model="isSelectedAll" @change="onSelectedAll()">全选</van-checkbox>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelected: false,
      isSelectedAll: false,
      rightText: "选择",
      imgList: [
        {
          src: "https://img.yzcdn.cn/vant/apple-1.jpg",
          checked: false
        },
        {
          src: "https://img.yzcdn.cn/vant/apple-2.jpg",
          checked: false
        },
        {
          src: "https://img.yzcdn.cn/vant/apple-3.jpg",
          checked: false
        }
      ]
    };
  },
  methods: {
    onSelected() {
      this.isSelected = !this.isSelected;
      this.rightText = (this.isSelected ? "取消" : "") + "选择";
    },
    onSelectedAll() {
      this.imgList.forEach(item => {
        item.checked = this.isSelectedAll;
      });
    },
    imgSelected(index) {
      this.$refs.checkboxes[index].toggle();
    },
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style scoped>
</style>