<template>
  <div class="input-box">
    <div v-if="validQuery()" class="alert-query">
      <a-tooltip title="Поиск работает от 3 символов">
        <warning-two-tone two-tone-color="#ff0000" />
      </a-tooltip>
    </div>
    <a-input-search
      :visibilityToggle="false"
      :value="state.query"
      placeholder="Поиск сделок"
      :loading="props.loading"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from "vue";
import { WarningTwoTone } from "@ant-design/icons-vue";

const emits = defineEmits(["update:query"]);
const props = defineProps({
  loading: Boolean,
});

const state = reactive({
  query: "",
});

function validQuery(): boolean {
  return state.query.length > 0 && state.query.length < 3;
}

function onInput(event: Event): void {
  state.query = (event.target as HTMLInputElement).value;
  if (validQuery()) return;
  emits("update:query", state.query);
}
</script>

<style scoped>
.input-box {
  display: flex;
  align-items: center;
}

.alert-query {
  padding-right: 10px;
  font-size: 15px;
}
</style>
