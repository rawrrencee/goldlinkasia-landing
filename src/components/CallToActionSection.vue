<script setup>
import {Button} from "@/components/ui/button/index.js";
import {computed} from "vue";
import {ROUTES} from "@/router/index.js";

const ctaLabel1 = computed(() => import.meta.env.VITE_CTA_LABEL_1)
const ctaLabel2 = computed(() => import.meta.env.VITE_CTA_LABEL_2)
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
      <svg
          aria-hidden="true"
          class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-background lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
      >
        <polygon points="0,0 90,0 50,100 0,100"/>
      </svg>

      <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <div class="mb-10 flex">
            <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-600"
            >
              Join us at Goldlink Asia today.
              <RouterLink :to="ROUTES.CAREERS">
                <Button class="pl-2 pr-0 whitespace-nowrap font-semibold" variant="link">Careers&nbsp;<span
                    aria-hidden="true">&rarr;</span></Button>
              </RouterLink>
            </div>
          </div>
          <h1
              class="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Singapore's Largest Purveyor of Luxury Men's Accessories
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            With a simple mission to bring affordable yet luxurious men’s fashion for any and everyone that wants
            to dress up.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <Button>{{ ctaLabel1 }}</Button>
            <Button variant="link">{{ ctaLabel2 }}&nbsp;<span aria-hidden="true">→</span></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>