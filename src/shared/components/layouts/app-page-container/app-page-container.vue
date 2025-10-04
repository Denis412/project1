<template>
  <div class="app-page-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppPageContainer',
});
</script>

<style scoped>
.app-page-container {
  position: relative;
  flex: 1;
}
</style>