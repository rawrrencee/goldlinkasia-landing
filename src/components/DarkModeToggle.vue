<script setup>
import {useColorMode} from '@vueuse/core'
import RadixIconsMoon from '@/icons/RadixIconsMoon.vue'
import RadixIconsSun from '@/icons/RadixIconsSun.vue'
import {Button} from "@/components/ui/button/index.js";

defineProps({
  variant: {type: String, default: 'ghost'}
})

const mode = useColorMode()
</script>

<template>
  <Button :variant=variant @click="mode = mode === 'light'? 'dark' : 'light'"
          class="min-w-14">
    <transition enter-active-class="transition ease-in duration-300"
                enter-from-class="opacity-0 rotate-90"
                enter-to-class="opacity-100 rotate-0"
                leave-active-class="transition ease-in duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
    >
      <RadixIconsMoon v-show="mode === 'dark'"
                      class="absolute h-5 w-5"/>
    </transition>
    <transition enter-active-class="transition ease-in duration-300"
                enter-from-class="opacity-0 -rotate-90"
                enter-to-class="opacity-100 rotate-0"
                leave-active-class="transition ease-in duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
      <RadixIconsSun v-show="mode === 'light'"
                     class="absolute h-5 w-5"/>
    </transition>
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
