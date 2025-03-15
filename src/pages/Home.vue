<script setup>
import { ref, onMounted } from "vue";
import { RecipeService } from "@/services";
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
// import { tr } from "element-plus/es/locale";

const recipes = ref([]);

const getRecipes = async () => {
  try {
    recipes.value = await RecipeService.getRecipesByLetter();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getRecipes();
});
</script>

<template>
  <app-layout>
    <template #title>Рецепты</template>
    <template #controls>
      <app-button text="Добавить рецепт"></app-button>
    </template>
    <template #inner>
      {{ recipes }}
    </template>
  </app-layout>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;
</style>
