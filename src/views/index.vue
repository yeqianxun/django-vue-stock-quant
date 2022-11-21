<template>
  <div class="xl-stock-quant-wrapper">
    <div class="xl-top-side">
      <top-menu></top-menu>
    </div>
    <div class="xl-center-side">
      <left-menu></left-menu>
      <center-sidebar></center-sidebar>
      <div class="xl-stock-panel">
        <component :is="activeTab"></component>
      </div>
    </div>
    <div class="xl-bottom-side"></div>
  </div>
</template>

<script>
import TopMenu from "@/components/top-menu.vue";
import CenterSidebar from "@/components/center-sidebar.vue";
import LeftMenu from "@/components/left-menu.vue";
import StockPool from "./stock-pool/index.vue";
import BaseSide from "./base-side/index.vue";
import TechnicalSide from "./technical-side/index.vue";
export default {
  data() {
    return {
      activeTab: "StockPool",
    };
  },
  components: {
    TopMenu,
    CenterSidebar,
    LeftMenu,
    TechnicalSide,
    BaseSide,
    StockPool,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.xl-stock-quant-wrapper {
  width: 100%;
  height: 100%;
  .xl-top-side {
    height: 40px;
    background-color: $TopBarBg;
  }
  .xl-center-side {
    height: calc(100% - 70px);
    @include flexLayout(center, flex-start);
  }
  .xl-stock-panel {
    width: calc(100% - 360px);
    height: 100%;
    background: $PanelBg;
  }
  .xl-bottom-side {
    height: 30px;
    background-color: $TopBarBg;
  }
}
</style>