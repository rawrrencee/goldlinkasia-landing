<script setup>
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline/index.js";
import {ref} from "vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import {Button} from "@/components/ui/button/index.js";
import {ROUTES} from "@/router/index.js";
import {openInWindow} from "@/lib/utils.js";

const navigation = [
  {name: "About Us", href: ROUTES.ABOUT},
  {name: "Our Brands", href: ROUTES.BRANDS},
  {name: "Shop Online", href: ROUTES.SHOP},
  {name: "Editorial", href: "https://cufflinks.com.sg/blogs/editorial"},
  {name: "Stores", href: ROUTES.STORES},
  {name: "Careers", href: ROUTES.CAREERS},
];

const mobileMenuOpen = ref(false);
const closeButtonRef = ref(null);
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
            <template v-for="item in navigation">
              <RouterLink
                  v-if="!item.href.includes('http')"
                  :key="item.name"
                  :to="item.href"
                  @click="mobileMenuOpen = !mobileMenuOpen"
              >
                <Button
                    :href="item.href"
                    as="a"
                    variant="ghost"
                >{{ item.name }}
                </Button>
              </RouterLink>
              <Button v-else as="a" variant="ghost" :href="item.href" @click="openInWindow(item.href)" @click.prevent>{{ item.name }}</Button>
            </template>
          </div>
          <div class="flex flex-row items-center">
            <DarkModeToggle class="shrink-0"/>
            <Button
                class="lg:hidden"
                variant="ghost"
                size="icon"
                @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
            </Button>
          </div>
        </nav>
      </div>
    </div>
    <Dialog
        :open="mobileMenuOpen"
        :initialFocus="closeButtonRef"
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
              ref="closeButtonRef"
              @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" class="h-6 w-6"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <template v-for="item in navigation">
                <RouterLink
                    v-if="!item.href.includes('http')"
                    :key="item.name"
                    :to="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-700"
                    @click="mobileMenuOpen = !mobileMenuOpen"
                >{{ item.name }}
                </RouterLink>
                <a v-else :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-700" @click="openInWindow(item.href)" @click.prevent>{{ item.name }}</a>
              </template>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>