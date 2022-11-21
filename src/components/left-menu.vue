<template>
  <div class="xl-left-menu">
    <custom-icon
      :class="[item.prop == activeTab ? 'active' : '', 'xl-left-icon']"
      v-for="item in leftIcons"
      :title="item.title"
      :key="item.prop"
      :type="`icon-${item.prop}`"
      @click.native="changeActiveTab(item.prop)"
    ></custom-icon>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      leftIcons: [
        {
          prop: "search",
          title: "我的自选",
        },
        {
          prop: "oeeanalysis",
          title: "基本面选股",
        },
        {
          prop: "MPIS-StatisticalAnalysis",
          title: "技术面选股",
        },
        {
          prop: "stock-line",
          title: "",
        },
        {
          prop: "userinformation_defalut",
          title: "用户中心",
        },
        {
          prop: "Account",
          title: "自定义策略",
        },
      ],
      activeTab: "search",
    };
  },

  methods: {
    changeActiveTab(prop) {
      this.activeTab = prop;
    },
  },
};
</script>
  <style lang='scss' scoped>
.xl-left-menu {
  width: 60px;
  height: 100%;
  background: $LeftMenuBg;
}
</style>
<style lang="scss">
.xl-left-menu {
  @include flexLayout(center, flex-start);
  flex-direction: column;
  .xl-left-icon {
    font-size: 30px;
    height: 60px;
    width: 60px;
    line-height: 60px;
    color: $LeftIconColor;
    position: relative;
    cursor: pointer;
    padding-top: 6px;
    box-sizing: border-box;
    &.active {
      color: white;
      &::after {
        content: " ";
        height: 60px;
        width: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>