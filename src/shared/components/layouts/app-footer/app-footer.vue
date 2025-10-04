<template>
  <div class="app-footer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppFooter',
});
</script>

<style scoped lang="scss">
.app-footer {
  position: relative;
}
</style>