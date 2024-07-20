<script setup>
const stores = [
  {
    title: 'Singapore',
    content: [
      {title: 'Our Hours', descriptions: ['Daily, 10am - 930pm']},
      {
        title: 'Our Location',
        descriptions: ['Takashimaya Shopping Centre', '391 Orchard Rd', 'Singapore 238872', '(3rd Floor Men\'s Department, Accessories Section)']
      }
    ],
    imageUrl: import.meta.env.VITE_STORES_SINGAPORE_1_IMAGE,
  },
  {
    title: 'Malaysia',
    content: [
      {title: 'Our Hours', descriptions: ['Daily, 10am - 930pm']},
      {
        title: 'Our Location',
        descriptions: ['Seibu TRX Kuala Lumpur', '(1st Floor Men\'s Department, Cufflinks and Neckties Section)']
      }
    ],
    imageUrl: import.meta.env.VITE_STORES_MALAYSIA_1_IMAGE,
  }
]
</script>

<template>
  <div class="overflow-hidden bg-background pt-24">
    <h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Stores</h2>

    <div class="bg-background w-full pt-24">
      <template v-for="(store, i) in stores" :key="i">
        <div class="bg-gray-200 dark:bg-gray-900 pb-20 sm:pb-24">
          <div
              class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img :src="store.imageUrl"
                     alt=""
                     class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"/>
              </div>
            </div>
            <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure class="relative isolate pt-6 sm:pt-12">
                <svg aria-hidden="true" class="absolute left-0 top-0 -z-10 h-[1200px] text-gray-100 dark:text-gray-800" fill="none"
                     viewBox="0 0 162 128">
                  <g fill="currentColor">
                    <path d="M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z" fill="none" stroke="currentColor" stroke-dasharray="48"
                          stroke-dashoffset="48" stroke-linecap="round"
                          stroke-width="2">
                      <animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="48;0"/>
                    </path>
                    <circle cx="12" cy="9" fill-opacity="0" r="2.5">
                      <animate attributeName="fill-opacity" begin="0.7s" dur="0.4s" fill="freeze" values="0;1"/>
                    </circle>
                  </g>
                </svg>
                <blockquote class="text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                  <p>{{ store.title }}</p>
                </blockquote>
                <template v-for="content in store.content" :key="content.title">
                  <figcaption class="mt-8 text-base">
                    <div class="font-semibold">{{ content.title }}</div>
                    <div v-for="description in content.descriptions" class="mt-1 text-gray-600 dark:text-gray-400">{{ description }}</div>
                  </figcaption>
                </template>
              </figure>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>