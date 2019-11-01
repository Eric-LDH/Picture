<template>
  <div>
    <van-sticky :z-index="100" @scroll="titleScroll">
      <van-cell
        ref="PageTitle"
        :title="title"
        :style="{marginBottom:'5px'}"
        :title-style="{ fontSize: '20px',textAlign: 'left' }"
      />
    </van-sticky>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    titleScroll: function(obj) {
      if (obj.isFixed) {
        this.$refs.PageTitle.style = "box-shadow:0px 0px 3px #333333";
      } else {
        this.$refs.PageTitle.style = "box-shadow:none";
      }
    }
  }
};
</script>