<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import LocationSection from './components/LocationSection.vue'
import PromotionsSection from './components/PromotionsSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <LocationSection />
    <PromotionsSection />
  </main>
  <TheFooter />
</template>
