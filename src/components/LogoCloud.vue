<script setup>
const logoUrls = [
  import.meta.env.VITE_LOGO_ANDREWS_TIES_URL,
  import.meta.env.VITE_LOGO_STEFANO_CAU_URL,
  import.meta.env.VITE_LOGO_THOMPSON_URL,
  import.meta.env.VITE_LOGO_OROBIANCO_URL,
  import.meta.env.VITE_LOGO_ZEGNA_URL,
  import.meta.env.VITE_LOGO_LANVIN_URL,
  import.meta.env.VITE_LOGO_TECKNOMONSTER_URL,
  import.meta.env.VITE_LOGO_CHURCHS_URL,
  import.meta.env.VITE_LOGO_TATEOSSIAN_URL,
  import.meta.env.VITE_LOGO_LEONARD_URL,
  import.meta.env.VITE_LOGO_AZTHOM_URL,
  import.meta.env.VITE_LOGO_MARZTHOMSON_URL,
]
</script>

<template>
  <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
    <div v-for="(url, i) in logoUrls" :key="i" class="bg-gray-50 dark:bg-gray-300 p-8 sm:p-10 place-content-center">
      <img :src="url" class="w-full mix-blend-multiply"/>
    </div>
  </div>
</template>