<template>
  <div>
    <h1>Example Page</h1>
    <p>Example page added by module</p>
    <p>
      Go to
      <nuxt-link to="/">Home Page</nuxt-link>
    </p>
    <a-input v-model:value="text" />
  </div>
</template>

<script setup>
const text = ref()
</script>