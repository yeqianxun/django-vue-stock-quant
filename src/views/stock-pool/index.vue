<template>
  <div class="xl-stock-pool">
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300 }">
      <a slot="action" slot-scope="text" href="javascript:;">action</a>
    </a-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 40,
          address: "London Park",
        },
      ],
      columns: [
        {
          title: "Full Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        { title: "Column 1", dataIndex: "address", key: "1" },
        { title: "Column 2", dataIndex: "address", key: "2" },
        { title: "Column 3", dataIndex: "address", key: "3" },
        { title: "Column 4", dataIndex: "address", key: "4" },
        { title: "Column 5", dataIndex: "address", key: "5" },
        { title: "Column 6", dataIndex: "address", key: "6" },
        { title: "Column 7", dataIndex: "address", key: "7" },
        { title: "Column 8", dataIndex: "address", key: "8" },
        {
          title: "Action",
          key: "operation",
          fixed: "right",
          width: 100,
          scopedSlots: { customRender: "action" },
        },
      ],
    };
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
.xl-stock-pool {
  height: 100%;
}
</style>
<style lang="scss">
.xl-stock-pool {
  .ant-table-wrapper,
  .ant-spin-nested-loading,
  .ant-spin-container {
    height: 100%;
  }
  .ant-table {
    height: calc(100% - 64px);
  }
  table,
  tr > th,
  tr > td {
    background: transparent;
    color: white;
    padding: 4px 0;
  }
}
</style>