<script setup>
import { ref, onMounted } from "vue";
import { RecipeService } from "@/services";
import { ROUTES_PATHS } from "@/constants";
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";

const recipes = ref([]);

const getRecipes = async () => {
  try {
    recipes.value = await RecipeService.getRecipesByLetter();
  } catch (error) {
    console.log(error);
  }
};

const getRecipePath = (id) => {
  return `${ROUTES_PATHS.RECIPE.split(":")[0]}${id}`;
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
      <div class="wrapper">
        <el-table :data="recipes" style="width: 100%">
          <el-table-column prop="idMeal" label="Id" width="70" />
          <el-table-column label="Image" width="100">
            <template #default="scope">
              <router-link :to="getRecipePath(scope?.row?.idMeal)">
                <img :src="scope?.row?.strMealThumb" alt="img" class="image" />
              </router-link>
            </template>
          </el-table-column>

          <el-table-column prop="strMeal" label="Name" />
          <el-table-column prop="strArea" label="Aria" />
          <el-table-column prop="strCategory" label="Category" />
          <el-table-column label="Tags">
            <template #default="scope">
              <template v-if="scope?.row?.strTags">
                <el-tag
                  v-for="(tag, key) in scope.row.strTags.split(',')"
                  :key="key"
                  type="primary"
                  class="tag"
                  >{{ tag }}
                </el-tag>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </app-layout>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;

.image {
  display: block;
  max-width: 70px;
  width: 100%;
  height: auto;

  object-fit: cover;
  object-position: center;

  border-radius: 1rem;
}

.tag {
  margin-right: 3px;
}
</style>
