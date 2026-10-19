<script setup lang="ts">
import { ref } from 'vue'
import FaroIcon from './FaroIcon.vue'

const open = ref(false)
const close = () => (open.value = false)
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-crema/80 border-b border-tierra-200/60"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#inicio" class="flex items-center gap-3" @click="close">
        <FaroIcon class="h-10 w-7" />
        <span class="font-display text-xl text-vino-700 font-semibold tracking-wide">
          Faro Imaginario
        </span>
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li>
          <a
            href="#nosotros"
            class="text-tierra-800 hover:text-vino-600 transition-colors font-medium relative group"
          >
            Nosotros
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-vino-500 group-hover:w-full transition-all duration-300" />
          </a>
        </li>
      </ul>

      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="open = !open"
        aria-label="Menú"
      >
        <span
          class="w-6 h-0.5 bg-tierra-800 transition-transform duration-300"
          :class="open ? 'rotate-45 translate-y-2' : ''"
        />
        <span class="w-6 h-0.5 bg-tierra-800 transition-opacity" :class="open ? 'opacity-0' : ''" />
        <span
          class="w-6 h-0.5 bg-tierra-800 transition-transform duration-300"
          :class="open ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </nav>

    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
        v-if="open"
        class="md:hidden flex flex-col gap-2 px-6 pb-4 bg-crema/95 border-t border-tierra-200/60"
      >
        <li><a href="#nosotros" @click="close" class="block py-2 text-tierra-800 hover:text-vino-600">Nosotros</a></li>
      </ul>
    </transition>
  </header>
</template>
