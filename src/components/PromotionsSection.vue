<script setup lang="ts">
interface Promo {
  descuento: string
  titulo: string
  descripcion: string
  precioAntes: string
  precioAhora: string
  destacado: boolean
}

const promos: Promo[] = [
  {
    descuento: '20%',
    titulo: 'Bordados personalizados',
    descripcion: 'Lleva tu diseño propio y recibe un descuento al bordar piezas a tu medida.',
    precioAntes: '$250 MXN',
    precioAhora: '$200 MXN',
    destacado: false,
  },
  {
    descuento: '30%',
    titulo: 'Combo Amigurumi',
    descripcion: 'Dos amigurumis de crochet al precio de uno. Ideal para regalar.',
    precioAntes: '$400 MXN',
    precioAhora: '$280 MXN',
    destacado: true,
  },
  {
    descuento: '15%',
    titulo: 'Cerámica de masa',
    descripcion: 'Descuento en nuestra línea de piezas comunes de cerámica para el hogar.',
    precioAntes: '$300 MXN',
    precioAhora: '$255 MXN',
    destacado: false,
  },
]
</script>

<template>
  <section
    id="promociones"
    class="min-h-[100svh] md:min-h-screen flex items-center bg-gradient-to-b from-tierra-200 via-arena to-tierra-100 py-24 md:py-0"
  >
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="text-center mb-10 md:mb-14">
        <p class="text-vino-600 tracking-[0.3em] uppercase text-xs mb-4">Ofertas del mes</p>
        <h2 class="font-display text-4xl md:text-5xl text-vino-800 font-semibold">
          Promociones
        </h2>
        <p class="mt-4 text-tierra-700 max-w-xl mx-auto">
          Aprovecha nuestros descuentos y combos especiales en manualidades seleccionadas.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <article
          v-for="promo in promos"
          :key="promo.titulo"
          class="relative bg-crema rounded-2xl p-7 border border-tierra-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          :class="promo.destacado ? 'ring-2 ring-vino-400' : ''"
        >
          <div
            v-if="promo.destacado"
            class="absolute top-4 right-4 px-3 py-1 rounded-full bg-vino-600 text-crema text-xs font-medium"
          >
            Destacado
          </div>
          <div class="font-display text-4xl text-vino-700 font-semibold">{{ promo.descuento }}</div>
          <p class="mt-1 text-tierra-600 text-sm">de descuento</p>
          <h3 class="mt-4 font-display text-xl text-vino-800 font-semibold">{{ promo.titulo }}</h3>
          <p class="mt-2 text-tierra-700 text-sm leading-relaxed">{{ promo.descripcion }}</p>
          <div class="mt-5 flex items-baseline gap-2">
            <span class="text-tierra-500 line-through text-sm">{{ promo.precioAntes }}</span>
            <span class="text-vino-700 font-semibold">{{ promo.precioAhora }}</span>
          </div>
        </article>
      </div>

      <p class="text-center text-tierra-600 text-xs mt-10">
        Promociones válidas durante el mes en curso, sujetas a disponibilidad.
      </p>
    </div>
  </section>
</template>
