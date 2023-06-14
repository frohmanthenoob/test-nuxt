<script setup>
// import { definePageMeta } from 'nuxt/dist/pages/runtime';
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <div>
    <h1>Admin Page</h1>
    <p>Admin page added by module</p>
    <p>
      Go to
      <nuxt-link to="/">Home Page</nuxt-link>
      <a-button>asdf</a-button>
    </p>
  </div>
</template>
