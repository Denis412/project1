<template>
  <div class="app-page">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppPage',
});
</script>

<style scoped>
.app-page {
  position: relative;
  max-height: 100%;
}
</style>