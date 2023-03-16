<template>
  <div class="table-box">
    <a-spin v-if="props.loading" class="spin-loading" />
    <a-table
      v-else
      :columns="columns.main"
      :data-source="state.items"
      :locale="{ emptyText: 'Нет данных' }"
      :pagination="false"
    >
      <template #bodyCell="{ column, record: mainRow }">
        <template v-if="column.key === 'tags'">
          <a-tag
            v-for="status in mainRow.status_id"
            :key="status.title"
            :color="status.color"
            style="
              padding: 3px 6px;
              border-radius: 3px;
              font-size: 13px;
              color: rgba(0, 0, 0, 0.5);
              border-color: #00000014;
            "
          >
            {{ status.title }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'responsible_user_id'">
          <span class="fullname-block">
            <idcard-filled class="fullname-img" />
            {{ mainRow.responsible_user_id }}
          </span>
        </template>
      </template>

      <template #expandedRowRender="{ record: inRow }">
        <LeadTableExpand :items="inRow.contacts" />
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from "vue";
import { IdcardFilled } from "@ant-design/icons-vue";

import columns from "./columns";

import LeadTableExpand from "./LeadTableExpand.vue";

const emits = defineEmits(["update:loading"]);
const props = defineProps({
  query: String,
  loading: Boolean,
});

const state = reactive({
  items: [],
});

async function fetchData(): Promise<void> {
  if (!props.loading) emits("update:loading", true);

  try {
    const url = `/api/leads?query=${props.query}`;
    const request = await fetch(url);
    const json = await request.json();
    state.items = json;
  } catch (error) {
    console.log(error);
  } finally {
    emits("update:loading", false);
  }
}
fetchData();

watch(() => props.query, fetchData);
</script>

<style scoped>
.spin-loading {
  display: flex;
  justify-content: center;
  padding: 100px;
}

.fullname-block {
  display: flex;
  align-items: center;
}

.fullname-img {
  font-size: 25px;
  margin-right: 5px;
}
</style>
