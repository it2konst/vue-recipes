<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { RecipeService } from "@/services";
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";

const route = useRoute();
// const recipeId = ref(route.params.id);
const recipeId = route?.params.id;
const recipe = ref(null);

const fetchRecipe = async () => {
  try {
    recipe.value = await RecipeService.getRecipeById(recipeId);
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
