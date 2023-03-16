<template>
  <a-layout class="layout">
    <a-layout-content class="layout__content">
      <a-card title="Список сделок" :bordered="true">
        <template #extra>
          <lead-search
            :loading="state.loading"
            v-on:update:query="state.query = $event"
          />
        </template>

        <lead-table
          :query="state.query"
          :loading="state.loading"
          v-on:update:loading="toggleLoading($event)"
        />
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import LeadSearch from "./LeadSearch.vue";
import LeadTable from "./LeadTable.vue";

const state = reactive({
  query: "",
  loading: true as boolean,
});

function toggleLoading(toggle: boolean) {
  state.loading = toggle;
}
</script>

<style scoped>
.layout {
  background: rgba(126, 14, 255, 0.02);
}
.layout__content {
  padding: 150px;
  padding-bottom: 50%;
}
</style>
