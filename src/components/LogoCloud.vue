<script setup>
import {logoUrls} from '@/lib/constants.js';
</script>

<template>
  <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
    <div v-for="(url, i) in logoUrls" :key="i" class="bg-gray-50 dark:bg-gray-300 p-8 sm:p-10 place-content-center">
      <img :src="url" class="w-full mix-blend-multiply"/>
    </div>
  </div>
</template>