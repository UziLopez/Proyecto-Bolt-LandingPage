<script setup lang="ts">
</script>

<template>
  <section
    id="nosotros"
    class="min-h-[100svh] md:min-h-screen flex items-center bg-crema py-24 md:py-0"
  >
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div>
        <p class="text-vino-600 tracking-[0.3em] uppercase text-xs mb-4">Quiénes Somos</p>
        <h2 class="font-display text-4xl md:text-5xl text-vino-800 font-semibold leading-tight">
          Una pequeña empresa<br />hecha a mano
        </h2>
        <p class="mt-6 text-tierra-800 text-base md:text-lg leading-relaxed">
          Faro Imaginario nació del sueño de una mujer emprendedora por llevar las
          manualidades mexicanas a cada hogar. Bordado, crochet y cerámica: tres
          artes que celebran nuestra cultura y nuestras manos.
        </p>
        <p class="mt-4 text-tierra-700 text-base leading-relaxed">
          Cada pieza puede personalizarse a tu gusto, aunque también contamos con
          productos en masa para quienes buscan algo más accesible. Precios
          honestos para piezas hechas con el corazón.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <span class="px-4 py-2 rounded-full bg-tierra-100 text-tierra-800 text-sm border border-tierra-200">
            Hecho a mano
          </span>
          <span class="px-4 py-2 rounded-full bg-tierra-100 text-tierra-800 text-sm border border-tierra-200">
            Personalizable
          </span>
          <span class="px-4 py-2 rounded-full bg-tierra-100 text-tierra-800 text-sm border border-tierra-200">
            Precios accesibles
          </span>
        </div>
      </div>

      <div class="relative">
        <div class="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-tierra-200 to-tierra-300 p-2 shadow-xl">
          <div class="w-full h-full rounded-2xl bg-arena flex items-center justify-center p-8">
            <div class="text-center">
              <div class="font-display text-6xl md:text-7xl text-vino-700">FI</div>
              <div class="mt-3 text-tierra-700 tracking-widest text-sm uppercase">
                Faro Imaginario
              </div>
              <div class="mt-6 grid grid-cols-3 gap-3">
                <div class="bg-crema/70 rounded-xl p-3">
                  <div class="text-vino-600 font-display text-2xl">3</div>
                  <div class="text-tierra-700 text-xs mt-1">Artes</div>
                </div>
                <div class="bg-crema/70 rounded-xl p-3">
                  <div class="text-vino-600 font-display text-2xl">100%</div>
                  <div class="text-tierra-700 text-xs mt-1">Mexicano</div>
                </div>
                <div class="bg-crema/70 rounded-xl p-3">
                  <div class="text-vino-600 font-display text-2xl">∞</div>
                  <div class="text-tierra-700 text-xs mt-1">Diseños</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-vino-200/50 rounded-full blur-2xl" />
      </div>
    </div>
  </section>
</template>
