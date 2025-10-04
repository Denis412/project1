<template>
  <app-layout class="main-layout">
    <slot name="header">
      <main-header>
        Header
      </main-header>
    </slot>

    <slot name="default">
      <main-page-container />
    </slot>

    <slot name="footer">
      <main-footer>
        Footer
      </main-footer>
    </slot>
  </app-layout>
</template>

<script setup lang="ts">
import {AppLayout} from "@shared";
import {MainHeader, MainPageContainer, MainFooter} from "@widgets/layouts";

defineOptions({
  name: "MainLayout",
});
</script>

<style scoped lang="scss">
.main-layout {
  position: relative;

  color: var(--color-text);
  background: var(--color-bg);
}
</style>