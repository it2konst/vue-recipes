<script setup></script>

<template>
  <div class="menu">
    <div class="logo">Logo</div>

    <el-menu class="nav el-menu-vertical-demo">
      <el-menu-item index="1">
        <el-icon :size="24"><Food /></el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon :size="24"><Dish /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;

.menu {
  height: 100vh;
  background-color: $violet;
}
</style>
