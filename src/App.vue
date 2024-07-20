<script setup>
import {RouterView, useRoute} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import {computed} from "vue";

const route = useRoute()
const currentRoute = computed(() => route.name)
</script>

<template>
  <NavBar v-if="currentRoute !== 'not-found'" />
  <RouterView/>
</template>
