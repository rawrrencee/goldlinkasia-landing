<script setup>
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline/index.js";
import {ref} from "vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import {Button} from "@/components/ui/button/index.js";
import {ROUTES} from "@/router/index.js";

const navigation = [
  {name: "About Us", href: ROUTES.ABOUT},
  {name: "Our Brands", href: "#"},
  {name: "Shop", href: "#"},
  {name: "Editorial", href: "#"},
  {name: "Our Stores", href: "#"},
  {name: "Careers", href: ROUTES.CAREERS},
];

const mobileMenuOpen = ref(false);
const companyName = import.meta.env.VITE_COMPANY_NAME;
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl">
      <div class="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
        <nav
            aria-label="Global"
            class="flex flex-row items-center justify-between lg:justify-start"
        >
          <RouterLink class="shrink-0" to="/">
            <Button class="p-0" variant="ghost">
              <span class="sr-only">Company Logo</span>
              <img
                  :alt="companyName"
                  class="h-8 w-auto"
                  src="../assets/logo.svg"
              />
            </Button>
          </RouterLink>
          <div class="hidden lg:ml-12 lg:flex">
            <RouterLink v-for="item in navigation" :key="item.name" :to="item.href">
              <Button
                  :href="item.href"
                  as="a"
                  variant="ghost"
              >{{ item.name }}
              </Button>
            </RouterLink>
          </div>
          <div class="flex flex-row items-center">
            <DarkModeToggle class="shrink-0"/>
            <button
                class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white lg:hidden"
                type="button"
                @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
            </button>
          </div>
        </nav>
      </div>
    </div>
    <Dialog
        :open="mobileMenuOpen"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50"/>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink class="shrink-0" to="/" @click="mobileMenuOpen = !mobileMenuOpen">
            <Button class="p-0" variant="ghost">
              <span class="sr-only">Company Logo</span>
              <img
                  :alt="companyName"
                  class="h-8 w-auto"
                  src="../assets/logo.svg"
              />
            </Button>
          </RouterLink>
          <button
              class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              type="button"
              @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" class="h-6 w-6"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  @click="mobileMenuOpen = !mobileMenuOpen"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-700"
              >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>