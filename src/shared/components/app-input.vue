<template>
  <app-field class="app-input">
    <template #default>
      <input type="text">
    </template>
  </app-field>
</template>

<script setup lang="ts">
import AppField from "@shared/components/app-field.vue";

defineOptions({
  name: 'AppInput',
});
</script>

<style lang="scss" scoped>
.app-input {
  position: relative;
}
</style>