<script setup>
import {computed} from "vue";
import {Button} from '@/components/ui/button'
import JobSearchIcon from "@/icons/JobSearchIcon.vue";

const bgUrl = computed(() => import.meta.env.VITE_BACKGROUND_2)
const posts = [
  {
    title: 'Retail Management Trainee',
    href: `mailto:${import.meta.env.VITE_HR_EMAIL}?subject=Retail Management Trainee`,
    description:
        'Retail Management Trainees will undergo an intensive job training at the boutiques on product knowledge, customer relations, management and store operations. They will be assessed on their performance and streamed to the department that they are best suited for, which includes merchandising, logistics, marketing and boutique management.',
    category: {title: 'Click to apply'},
    responsibilities: ['Assist the boutique supervisors/managers in store operations and lead the sale team to meet sales targets', 'Suggest and implement new marketing strategies and be able to commit to ad-hoc projects.'],
    requirements: ['Minimum Diploma/Degree in local polytechnics/universities preferably in Retail/ Fashion Management', 'Good leadership skills with ability to lead and motivate a team of staff to achieve sales target in line with business objective', 'Possess drive, initiative and embrace opportunities to learn', 'Strong passion for the Fashion Industry', 'Excellent communication and interpersonal skills', 'Only Singapore Citizens/ Singapore PR may apply']
  },
  {
    title: 'Luxury Fashion Advisor (Full-Time)',
    href: `mailto:${import.meta.env.VITE_HR_EMAIL}?subject=Luxury Fashion Advisor (Full-Time)`,
    description:
        'We are seeking dynamic, outgoing and well-groomed individuals with a passion for fashion to join our team.',
    category: {title: 'Click to apply'},
    responsibilities: ['Assist the boutique supervisors/managers in store operations', 'Meet their own monthly target', 'Suggest and implement new marketing strategies and be able to commit to ad-hoc projects.'],
    requirements: ['GCE ‘N’/ ‘O’/ ‘A’ level, SPM or Diploma', 'Pleasant personality with good communication skills', 'Passionate about customer service and has a flair for fashion', 'Willing to work retail hours and on weekends and public holidays', 'Able to commit min. 6 months', 'Only Singapore Citizens/ Singapore PR may apply']
  },

]
</script>

<template>
  <div class="relative bg-background py-24">
    <div class="mx-auto">
      <div class="relative isolate overflow-hidden bg-gray-700 py-24 sm:py-32">
        <img
            :src="bgUrl"
            alt=""
            class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center mix-blend-multiply"/>
        <div aria-hidden="true"
             class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
               style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
        </div>
        <div
            aria-hidden="true"
            class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
               style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Careers</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Attractive remuneration and good career development
              opportunities await you if you have what we are looking for.</p>
          </div>
        </div>
      </div>

      <div class="px-20 pt-12 flex flex-row gap-16 flex-wrap items-center justify-center">
        <div v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start">
          <div class="grow-0 flex items-center gap-x-4 text-xs">
            <Button size="sm" :href="post.href" as="a">
              <div class="flex flex-row gap-1 items-center">
                <JobSearchIcon/>
                {{ post.category.title }}
              </div>
            </Button>
          </div>
          <div class="grow-0 pt-2">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              {{ post.title }}
            </h3>
            <p class="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">{{ post.description }}</p>

            <h4 class="mt-5 mb-2 font-semibold leading-6 text-gray-600 dark:text-gray-300">Responsibilities</h4>
            <li v-for="(r, i) in post.responsibilities" :key="i" class="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">{{
                r
              }}
            </li>

            <h4 class="mt-5 mb-2 font-semibold leading-6 text-gray-600 dark:text-gray-300">Requirements</h4>
            <li v-for="(r, i) in post.requirements" :key="i" class="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">{{ r }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>