<script setup>
import { ref, onMounted } from "vue";
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <app-layout>
    <template #title>Рецепт</template>
    <template #controls>
      <app-button text="Сохранить"></app-button>
    </template>
    <template #inner> </template>
  </app-layout>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;
</style>
