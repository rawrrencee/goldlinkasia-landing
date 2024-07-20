<script setup>
import FacebookIcon from "@/icons/FacebookIcon.vue";
import InstagramIcon from "@/icons/InstagramIcon.vue";
import LocationIcon from "@/icons/LocationIcon.vue";
import ContactIcon from "@/icons/ContactIcon.vue";

const footer = {
  companyName: import.meta.env.VITE_COMPANY_NAME,
  content: [
    {
      title: 'Visit Us',
      icon: LocationIcon,
      body: [{value: '201 Henderson Road'}, {value: '#03-24 Apex@Henderson'}, {value: 'Singapore 159545'}],
    },
    {
      title: 'Contact Us',
      icon: ContactIcon,
      body: [{value: 'sales@goldlink.com.sg', type: 'email'}, {value: '+65 6732 5778', type: 'tel'}],
    }
  ],
  social: [
    {
      name: 'Facebook',
      href: import.meta.env.VITE_FACEBOOK_URL,
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      href: import.meta.env.VITE_INSTAGRAM_URL,
      icon: InstagramIcon,
    },
  ],
}

const openInWindow = (url) => {
  window.open(url)
}
</script>

<template>
  <footer class="bg-background">
    <div class="mx-auto max-w-xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
      <div class="flex flex-row flex-wrap gap-8 justify-between">
        <template v-for="(item, i) in footer.content" :key="i">
          <div class="flex flex-col gap-6">
            <div class="flex flex-row gap-1 items-center">
              <component :is="item.icon" v-if="item.icon" class="h-5 w-auto"/>
              <span class="font-semibold text-xl">{{ item.title }}</span>
            </div>
            <div class="flex flex-col">
              <template v-for="(info, j) in item.body" :key="j">
                <a v-if="info.type === 'email'" :href="`mailto:${info.value}`">{{ info.value }}</a>
                <a v-else-if="info.type === 'tel'" :href="`tel:${info.value}`">{{ info.value }}</a>
                <span v-else>{{ info.value }}</span>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div class="mt-10 flex justify-center space-x-10">
        <a v-for="item in footer.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500"
           @click="openInWindow(item.href)" @click.prevent>
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" aria-hidden="true" class="h-6 w-6"/>
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; {{ new Date().getFullYear() }}
        {{ footer.companyName }}</p>
    </div>
  </footer>
</template>