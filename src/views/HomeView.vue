<script setup>

import {Button} from "@/components/ui/button/index.js";
import {computed} from "vue";
import FooterView from "@/components/FooterView.vue";
import LogoCloud from "@/components/LogoCloud.vue";
import CallToActionSection from "@/components/CallToActionSection.vue";
import {ROUTES} from "@/router/index.js";

const bgUrl = computed(() => import.meta.env.VITE_BACKGROUND_1)
</script>

<template>
  <main>
    <div class="bg-background">
      <div class="relative">
        <CallToActionSection />
        <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
              :src="bgUrl"
              alt=""
              class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          />
        </div>
      </div>
      <div class="bg-background py-12 sm:py-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto w-full max-w-xl mb-20 text-center">
            <h2 class="text-3xl font-bold tracking-tight">Our Brands</h2>
            <p class="mt-6 leading-8 text-gray-500 dark:text-gray-400">Brands under the Goldlink group include
              Ermenegildo Zegna, Tateossian, Thompson, Lanvin (men’s accessories), Orobianco, Church’s (men’s
              accessories), TecknoMonster, Andrew’s Ties and A. Azthom.</p>
            <RouterLink :to="ROUTES.BRANDS">
              <Button class="mt-6" variant="link">More Info&nbsp;<span aria-hidden="true">→</span></Button>
            </RouterLink>
          </div>
          <LogoCloud/>
        </div>
      </div>

      <FooterView/>
    </div>
  </main>
</template>
