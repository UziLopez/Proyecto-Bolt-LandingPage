<script setup lang="ts">
</script>

<template>
  <section
    id="ubicacion"
    class="min-h-[100svh] md:min-h-screen flex items-center bg-crema py-24 md:py-0"
  >
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="text-center mb-10 md:mb-14">
        <p class="text-vino-600 tracking-[0.3em] uppercase text-xs mb-4">Dónde estamos</p>
        <h2 class="font-display text-4xl md:text-5xl text-vino-800 font-semibold">
          Nuestra ubicación
        </h2>
        <p class="mt-4 text-tierra-700 max-w-xl mx-auto">
          Ven a visitarnos y conoce las piezas en persona. Te esperamos con gusto.
        </p>
      </div>

      <div class="grid md:grid-cols-5 gap-6 items-stretch">
        <div class="md:col-span-2 bg-arena rounded-2xl p-8 border border-tierra-200 flex flex-col justify-center">
          <div class="flex items-start gap-4">
            <div class="w-11 h-11 rounded-xl bg-vino-100 text-vino-600 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <circle cx="12" cy="11" r="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <h3 class="font-display text-xl text-vino-700 font-semibold">Dirección</h3>
              <p class="mt-1 text-tierra-800 text-sm leading-relaxed">
                Calle de las Manualidades #24<br />
                Centro, Col. Artesanías<br />
                Guanajuato, México
              </p>
            </div>
          </div>

          <div class="mt-6 flex items-start gap-4">
            <div class="w-11 h-11 rounded-xl bg-vino-100 text-vino-600 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-display text-xl text-vino-700 font-semibold">Horario</h3>
              <p class="mt-1 text-tierra-800 text-sm leading-relaxed">
                Lunes a Viernes: 10:00 – 19:00<br />
                Sábados: 10:00 – 14:00
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Guanajuato+Mexico"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-vino-600 text-crema font-medium hover:bg-vino-700 transition-colors"
          >
            Cómo llegar
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7-7 7M5 12h16" />
            </svg>
          </a>
        </div>

        <div class="md:col-span-3 rounded-2xl overflow-hidden border border-tierra-200 min-h-[280px] md:min-h-full">
          <iframe
            title="Ubicación de Faro Imaginario"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-101.27%2C20.96%2C-101.23%2C20.99&layer=mapnik&marker=20.975,-101.25"
            class="w-full h-full min-h-[280px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
