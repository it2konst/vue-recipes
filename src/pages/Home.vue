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
      <div class="wrapper">
        <el-table :data="recipes" style="width: 100%">
          <el-table-column prop="idMeal" label="Id" />
          <el-table-column label="Image">
            <template #default="scope">
              <img :src="scope?.row?.strMealThumb" alt="img" class="image" />
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
                  >{{ tag }}</el-tag
                >
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
  width: 70px;
  height: auto;

  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  border: 1px solid $violet;
}

.tag {
  margin-right: 2px;
}
</style>
