<template>
  <div :class="styles.container">
    <h1 :class="styles.title">Hello Vue 3 + TypeScript + CSS Module!</h1>
  </div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

const styles = useCssModule();  // 获取 CSS Module 对象
const message: string = 'Vue 3 作业';
console.log(message);
</script>

<style module>
.title {
  color: blue;
  font-size: 24px;
}

.container {
  padding: 20px;
}
</style>
