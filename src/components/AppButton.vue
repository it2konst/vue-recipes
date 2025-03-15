<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <el-button type="primary" class="button">
    {{ props.text }}
  </el-button>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as *;

.button {
  padding: 20px 24px;
  font-size: 1rem;
  border-radius: 4px;
  background-color: $violet;
}
</style>
