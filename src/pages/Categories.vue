<script setup>
import { ref, onMounted } from "vue";
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <app-layout>
    <template #title>Категории</template>
    <template #controls>
      <app-button text="Добавить категорию"></app-button>
    </template>
    <template #inner> </template>
  </app-layout>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;
</style>
