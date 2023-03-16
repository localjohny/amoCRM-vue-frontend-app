<template>
  <a-table
    :columns="columns.inRow"
    :data-source="props.items"
    :locale="{ emptyText: 'Нет данных' }"
    :showHeader="false"
    :bordered="true"
    :pagination="false"
    rowClassName="expandRow-paint"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <span class="name-block">
          <idcard-filled class="name-img" />
          {{ record.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'PHONE'">
        <a class="other-img" :href="'tel:' + record.PHONE">
          <phone-two-tone />
        </a>
      </template>
      <template v-else-if="column.key === 'EMAIL'">
        <a class="other-img" :href="'mailto:' + record.EMAIL">
          <mail-two-tone />
        </a>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { PhoneTwoTone, MailTwoTone, IdcardFilled } from "@ant-design/icons-vue";

import columns from "./columns";

const props = defineProps({
  items: Array,
});
</script>

<style scoped>
.name-block {
  display: flex;
  align-items: center;
}

.name-img {
  font-size: 25px;
  margin-right: 5px;
  color: rgba(70, 87, 33, 0.568);
}

.other-img {
  font-size: 15px;
}
</style>
