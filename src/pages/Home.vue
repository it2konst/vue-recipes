<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <app-layout>
    <template #title>Рецепты</template>
    <template #controls>
      <app-button text="Добавить рецепт"></app-button>
    </template>
  </app-layout>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;
</style>
