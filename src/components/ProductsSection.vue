<script setup lang="ts">
import { ref } from 'vue'

interface Producto {
  id: string
  nombre: string
  descripcion: string
  imagen: string
  precio: string
  detalles: string[]
}

const productos: Producto[] = [
  {
    id: 'bordado',
    nombre: 'Bordado',
    descripcion:
      'Textiles bordados a mano con hilos de colores vibrantes, inspirados en la tradición mexicana.',
    imagen:
      'https://images.pexels.com/photos/8638082/pexels-photo-8638082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    precio: 'Desde $150 MXN',
    detalles: [
      'Piezas personalizadas con tu diseño',
      'Manteles, servilletas y prendas',
      'Hilos 100% algodón',
    ],
  },
  {
    id: 'crochet',
    nombre: 'Crochet',
    descripcion:
      'Tejido al crochet hecho puntada a puntada. Sueteres, bolsas, amigurumis y más.',
    imagen:
      'https://images.pexels.com/photos/3693232/pexels-photo-3693232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    precio: 'Desde $200 MXN',
    detalles: [
      'Diseños personalizados y de masa',
      'Bolsas, sueteres y amigurumis',
      'Lanas de alta calidad',
    ],
  },
  {
    id: 'ceramica',
    nombre: 'Cerámica',
    descripcion:
      'Piezas de barro moldeadas y decoradas a mano. Cada una única e irrepetible.',
    imagen:
      'https://images.pexels.com/photos/34004100/pexels-photo-34004100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    precio: 'Desde $180 MXN',
    detalles: [
      'Vasijas, tazas y macetas',
      'Acabados personalizados',
      'Piezas de masa y únicas',
    ],
  },
]

const seleccionado = ref<Producto | null>(null)
</script>

<template>
  <section
    id="productos"
    class="min-h-[100svh] md:min-h-screen flex items-center bg-gradient-to-b from-arena to-tierra-100 py-24 md:py-0"
  >
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="text-center mb-12 md:mb-16">
        <p class="text-vino-600 tracking-[0.3em] uppercase text-xs mb-4">Lo que hacemos</p>
        <h2 class="font-display text-4xl md:text-5xl text-vino-800 font-semibold">
          Nuestras manualidades
        </h2>
        <p class="mt-4 text-tierra-700 max-w-xl mx-auto">
          Tres artes mexicanas que puedes personalizar o elegir de nuestra colección.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <article
          v-for="p in productos"
          :key="p.id"
          class="group bg-crema rounded-2xl overflow-hidden border border-tierra-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="p.imagen"
              :alt="p.nombre"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-vino-900/40 to-transparent" />
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-crema/90 text-vino-700 text-xs font-medium">
              {{ p.precio }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="font-display text-2xl text-vino-700 font-semibold">{{ p.nombre }}</h3>
            <p class="mt-2 text-tierra-700 text-sm leading-relaxed">{{ p.descripcion }}</p>
            <button
              class="mt-4 inline-flex items-center gap-2 text-vino-600 font-medium hover:gap-3 transition-all"
              @click="seleccionado = p"
            >
              Ver más
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- Modal ver más -->
    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-150"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="seleccionado"
        class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-tierra-900/60 backdrop-blur-sm"
        @click.self="seleccionado = null"
      >
        <div class="bg-crema rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-tierra-200">
          <div class="relative aspect-[16/9]">
            <img :src="seleccionado.imagen" :alt="seleccionado.nombre" class="w-full h-full object-cover" />
            <button
              class="absolute top-3 right-3 w-9 h-9 rounded-full bg-crema/90 text-tierra-800 flex items-center justify-center hover:bg-crema"
              @click="seleccionado = null"
              aria-label="Cerrar"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="p-6">
            <h3 class="font-display text-2xl text-vino-700 font-semibold">{{ seleccionado.nombre }}</h3>
            <p class="mt-2 text-tierra-700 text-sm leading-relaxed">{{ seleccionado.descripcion }}</p>
            <ul class="mt-4 space-y-2">
              <li v-for="d in seleccionado.detalles" :key="d" class="flex items-start gap-2 text-tierra-800 text-sm">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-vino-500 shrink-0" />
                {{ d }}
              </li>
            </ul>
            <p class="mt-5 text-vino-700 font-semibold">{{ seleccionado.precio }}</p>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
