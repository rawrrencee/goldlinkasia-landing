<script setup>
import {computed} from "vue";
import SuitIcon from "@/icons/SuitIcon.vue";
import ShopIcon from "@/icons/ShopIcon.vue";
import {Button} from "@/components/ui/button/index.js";
import {ROUTES} from "@/router/index.js";

const bgUrl = computed(() => import.meta.env.VITE_BACKGROUND_2)
</script>

<template>
  <div class="bg-background pt-24">
    <div class="mx-auto">
      <div class="relative bg-background">
        <div class="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div class="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div class="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <img :src="bgUrl" alt="" class="absolute inset-0 h-full w-full bg-gray-50 object-cover"/>
            </div>
          </div>
          <div class="px-6 lg:contents">
            <div
                class="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p class="text-base font-semibold leading-7">About Us</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Goldlink Asia Distribution</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300">Goldlink Asia Distribution Pte Ltd
                specializes in luxury menswear.</p>
              <div class="mt-10 max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-none">
                <p>For the past 18 years, the company has carried the most luxurious menswear designer labels in the
                  world. Brands under the Goldlink group include Ermenegildo Zegna, Tateossian, Thompson, Lanvin (men’s
                  accessories), Orobianco, Church’s (men’s accessories), TecknoMonster, Andrew’s Ties and A. Azthom.</p>
                <ul class="mt-8 space-y-8 text-gray-600 dark:text-gray-400" role="list">
                  <li class="flex gap-x-3">
                    <SuitIcon aria-hidden="true" class="mt-1 h-5 w-5 flex-none text-gray-600 dark:text-gray-400"/>
                    <span>Since our establishment, we have developed a passionate and pragmatic attitude towards menswear, striving to offer the most luxurious products to our discerning customers without neglecting commercial sensibility. </span>
                  </li>
                  <li class="flex gap-x-3">
                    <ShopIcon aria-hidden="true" class="mt-1 h-5 w-5 flex-none text-gray-600 dark:text-gray-400"/>
                    <span>The company is currently the largest men’s accessories distributor, with point-of-sales in almost all leading department stores.</span>
                  </li>
                  <li class="flex flex-row flex-wrap gap-3">
                    <RouterLink :to="ROUTES.SHOP">
                      <Button variant="secondary">Shop With Us Online&nbsp;<span aria-hidden="true">→</span></Button>
                    </RouterLink>
                    <RouterLink :to="ROUTES.STORES">
                      <Button variant="secondary">Visit Physical Stores&nbsp;<span aria-hidden="true">→</span></Button>
                    </RouterLink>
                  </li>
                </ul>
                <h2 class="mt-16 text-2xl font-bold tracking-tight">Our Team</h2>
                <p class="mt-6">Being the online counterpart to Goldlink Asia, from our point-of-sales in Takashimaya
                  Singapore, we operate our entire country and international business. We are proud to call ourselves a
                  multicultural, multilingual and highly dynamic company with everyone striving towards improvement and
                  to provide our customers with the best. Thanks to an enviable pool of talents, we are fulfilling our
                  goal of becoming the first online stop for luxurious and on-trend men's accessories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
