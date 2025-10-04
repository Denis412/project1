<template>
  <label class="app-field">
    <div class="app-field__inner">
      <div class="app-field__control">
        <div v-if="$slots.prepend" class="app-field__prepend">
          <slot name="prepend"></slot>
        </div>

        <div class="app-field__control-container">
          <slot></slot>
        </div>

        <div v-if="$slots.append" class="app-field__append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppField',
});
</script>

<style lang="scss" scoped>
.app-field {
  position: relative;

  &__inner {}

  &__contol {

    &-container {}
  }

  &__prepend {}

  &__append {}
}
</style>