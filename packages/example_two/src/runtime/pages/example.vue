<template>
  <div>
    <h1>Example Page</h1>
    <p>Example page added by module</p>
    <p>
      Go to
      <nuxt-link to="/">Home Page</nuxt-link>
    </p>
    <a-select
      ref="select"
      v-model:value="selected"
      style="width: 120px"
    >
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
  </div>
</template>

<script setup>
const selected = ref()
</script>
