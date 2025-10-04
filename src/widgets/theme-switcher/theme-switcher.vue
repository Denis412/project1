<template>
  <button @click="toggleTheme">
    {{ theme === 'light' ? 'Dark' : 'Light' }}
  </button>
</template>

<script setup lang="ts">

import {useTheme} from "@app/composables/use-theme.ts";

const { theme, setTheme } = useTheme();

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'light' : 'dark');
}
</script>

<style scoped lang="scss"></style>