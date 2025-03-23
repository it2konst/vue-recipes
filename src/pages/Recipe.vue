<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { RecipeService } from "@/services";
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";

const route = useRoute();
const recipeId = route?.params.id;
const recipe = ref(RecipeService.getEmptyRecipe());
const recipeUpdate = ref(RecipeService.getEmptyRecipe());
const isCreatingMode = ref(true);

const fetchRecipe = async () => {
  try {
    const response = await RecipeService.getRecipeById(recipeId);
    recipe.value = response;
    recipeUpdate.value = response;
    isCreatingMode.value = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  if (parseInt(recipeId)) {
    // recipe.value = RecipeService.getRecipeById(recipeId);
    fetchRecipe();
  }
});
</script>

<template>
  <app-layout>
    <template #title>{{
      isCreatingMode ? "Новый рецепт" : recipeUpdate.strMeal
    }}</template>
    <template #controls>
      <app-button text="Сохранить"></app-button>
    </template>
    <template #inner>{{ recipeUpdate }}</template>
  </app-layout>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;
</style>
