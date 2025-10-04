<template>
  <div class="app-layout">
    <slot name="header"></slot>

    <slot></slot>

    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppLayout',
});
</script>

<style scoped lang="scss">
.app-layout {
  position: relative;
  height: 100%;
  min-height: inherit;

  display: flex;
  flex-direction: column;
}
</style>