<script setup>
import AppMenu from "@/components/AppMenu.vue";
</script>

<template>
  <div class="root">
    <div class="menu-container">
      <AppMenu />
    </div>
    <main></main>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index";

.menu-container {
  width: 70px;
}
</style>
