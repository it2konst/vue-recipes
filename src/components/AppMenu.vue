<script setup>
import { useRouter, useRoute } from "vue-router";
import { ROUTES_PATHS } from "../constants";
import { onMounted } from "vue";

const router = useRouter();
const route = useRoute();

const isPathActive = (path) => {
  return route.path === path;
};

onMounted(() => {
  isPathActive();
});
</script>

<template>
  <div class="menu">
    <div class="logo">Logo</div>

    <el-menu :router="true" class="nav el-menu-vertical-demo">
      <el-menu-item
        :index="ROUTES_PATHS.HOME"
        :class="{ 'is-active': isPathActive(ROUTES_PATHS.HOME) }"
      >
        <el-icon :size="24"><Food /></el-icon>
      </el-menu-item>
      <el-menu-item
        :index="ROUTES_PATHS.CATEGORIES"
        :class="{ 'is-active': isPathActive(ROUTES_PATHS.CATEGORIES) }"
      >
        <el-icon :size="24"><Dish /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;

.menu {
  height: 100vh;
  border-right: 1px solid $border;
  padding: 20px 5px 0;
}

.logo {
  display: grid;
  place-items: center;
  padding: 0 15px 15px;
  border-bottom: 1px solid $border;
}

.nav {
  border: none;
}
</style>
