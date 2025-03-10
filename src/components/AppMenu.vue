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
