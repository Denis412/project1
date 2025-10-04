<template>
  <app-page>
    Index Page 1

    <theme-switcher />
  </app-page>
</template>

<script setup lang="ts">
import { AppPage } from "@shared";
import {ThemeSwitcher} from "@widgets/theme-switcher";

defineOptions({
  name: 'IndexPage',
})
</script>

<style scoped></style>