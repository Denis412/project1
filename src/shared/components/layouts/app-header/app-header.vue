<template>
  <div class="app-header">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppHeader',
});
</script>

<style scoped>
.app-header {
  position: relative;
}
</style>