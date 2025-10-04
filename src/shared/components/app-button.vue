<template>
  <button class="app-button">
    <span class="app-button__content">
      <span v-if="$slots.default || label">
        <slot>{{ label }}</slot>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import type {AppButtonEmits, AppButtonProps} from "@shared/components/types/components";

defineOptions({
  name: 'AppButton',
});

withDefaults(defineProps<AppButtonProps>(), {
  variant: 'primary',
});
defineEmits<AppButtonEmits>();
</script>

<style scoped lang="scss">
.app-button {
  cursor: pointer;
}
</style>