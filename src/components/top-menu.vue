<template>
  <div class="xl-top-sidebar">
    <div class="xl-logo">
      <!-- <img src="../assets/images/weixin.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.xl-top-sidebar {
  color: $TopMenuColor;
  @include flexLayout(center, flex-start);
  .xl-logo {
    height: 40px;
    width: 60px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    // background: url("../assets/images/weixin.jpg") no-repeat center center;
    // background-size: 100% 100%;
  }
}
</style>
