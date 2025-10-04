<template>
  <app-header class="main-header">
    <slot></slot>
  </app-header>
</template>

<script setup lang="ts">
import {AppHeader} from "@shared";

defineOptions({
  name: 'MainHeader',
})
</script>

<style scoped lang="scss">
.main-header {
  position: relative;
}
</style>