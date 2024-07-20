<script setup>

import {computed} from "vue";
import {Button} from "@/components/ui/button/index.js";
import ShopIcon from "@/icons/ShopIcon.vue";
import {openInWindow} from "@/lib/utils.js";

const shops = [
  {
    title: 'Cufflinks.com.sg',
    description: 'Being Goldlink Asia distribution’s flagship online store, this e-commerce platform was created with the goal of offering both cufflinks and neckties online, for the convenience of our shoppers. Since the initial launch, the store has grown to offer an even larger product range, and is sure to offer something for everyone.',
    imageUrl: import.meta.env.VITE_SHOP_CUFFLINKS_IMAGE,
    href: 'https://cufflinks.com.sg',
  },
  {
    title: 'TheMannequin.com',
    description: 'TheMannequin.com is created by The Mannequin and its head office is based in Singapore. Later developments include the sale and production of display mannequins supplied to many customers in Asia. As the leading company in the display mannequin business, our customers can order a wide range of contemporary and well-functioning mannequins within categories of men, women and children.',
    imageUrl: import.meta.env.VITE_SHOP_MANNEQUIN_IMAGE,
    href: 'https://themannequin.com'
  },
  {
    title: 'Stampeasy.com',
    description: 'Having been in the stamp customization business for over 10 years, we at Stampeasy.com ensure that you receive quality stamps at great prices. Our designers pay attention to detail and will be more than willing to help you achieve your ideal stamp customizations.',
    imageUrl: import.meta.env.VITE_SHOP_STAMPEASY_IMAGE,
    href: 'https://stampeasy.com'
  },
  {
    title: 'Orobianco.Asia',
    description: 'Orobianco Asia is the premier distributor for Orobianco in Southeast Asia. Based in Singapore, the online store features many exclusive products from Orobianco, and serves as an alternative to their retail store, in Takashimaya.',
    imageUrl: import.meta.env.VITE_SHOP_OROBIANCO_IMAGE,
    href: 'https://orobianco.asia/'
  },
  {
    title: 'MonsterTie',
    description: 'MonsterTie was created as a means to spread a deep appreciation for timeless elegance and a passion for helping men express their personal style outside of Singapore. We recognized the need for a curated collection of high-quality formal accessories that would cater to the modern gentleman seeking to make a distinguished statement for the whole world. With this vision in mind, MonsterTie was established, offering a carefully selected range of accessories designed to enhance your formal wardrobe.',
    imageUrl: import.meta.env.VITE_SHOP_MONSTERTIE_IMAGE,
    href: 'https://monstertie.com/'
  },
]
const cufflinksShopImage = computed(() => import.meta.env.VITE_SHOP_CUFFLINKS_IMAGE);

</script>

<template>

  <div class="overflow-hidden bg-background py-24">
    <h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">Shop Online</h2>

    <div class="mt-12 mx-auto max-w-7xl px-6 lg:px-8 space-y-20">

      <template v-for="(shop, i) in shops" :key="i">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div :class="i % 2 === 0 ? 'lg:ml-auto lg:pl-4 lg:pt-4' : 'lg:pr-8 lg:pt-4'">
            <div class="lg:max-w-lg">
              <Button class="flex flex-row gap-1 items-center" variant="secondary" @click="openInWindow(shop.href)">
                <ShopIcon/>
                Visit
              </Button>
              <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{{ shop.title }}</p>
              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{{ shop.description }}</p>
            </div>
          </div>
          <div :class="i % 2 === 0 ? 'flex items-start justify-end lg:order-first' : ''">
            <img :class="i % 2 === 0 ? '' : 'md:-ml-4 lg:-ml-0'"
                 :src="shop.imageUrl"
                 alt="Shop Imge"
                 class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                 height="1442"
                 width="2432"/>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>