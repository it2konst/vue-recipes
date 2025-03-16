<script setup>
import AppMenu from "@/components/AppMenu.vue";
</script>

<template>
  <div class="root">
    <div class="menu-container">
      <AppMenu />
    </div>
    <main class="main">
      <header class="header">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="controls">
          <slot name="controls"></slot>
        </div>
      </header>
      <div class="inner">
        <slot name="inner"></slot>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;

.root {
  display: flex;
}

.main {
  flex: 1;
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.menu-container {
  width: 70px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: $violet;
}

.inner {
  padding-top: 1rem;
}
</style>
