<template>
  <app-footer class="main-footer">
    <slot></slot>
  </app-footer>
</template>

<script setup lang="ts">
import { AppFooter } from "@shared";

defineOptions({
  name: 'MainFooter',
})
</script>

<style scoped lang="scss">
.main-footer {
  position: relative;
}
</style>