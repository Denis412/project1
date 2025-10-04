<template>
  <app-page-container>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </app-page-container>
</template>

<script setup lang="ts">
import {AppPageContainer} from "@shared";

defineOptions({
  name: 'MainPageContainer',
})
</script>

<style scoped></style>