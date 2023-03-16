<template>
  <lead-list />
</template>

<script setup lang="ts">
import LeadList from "./Components/LeadList.vue";
</script>

<style>
.expandRow-paint {
  background: rgba(0, 0, 0, 0.04);
}
.ant-card-body {
  padding: 0px;
}
.ant-table-tbody > tr.ant-table-row:hover > td,
.ant-table-tbody > tr > td.ant-table-cell-row-hover {
  background: rgb(126 193 255 / 15%);
}
</style>
