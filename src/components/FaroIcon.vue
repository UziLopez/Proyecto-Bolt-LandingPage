<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <svg
    viewBox="0 0 200 320"
    :class="$props.class"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <!-- haz de luz -->
    <defs>
      <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f3e9d9" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#f3e9d9" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f1e7d4" />
        <stop offset="100%" stop-color="#d8b685" />
      </linearGradient>
    </defs>

    <!-- luz giratoria -->
    <polygon points="100,80 260,30 260,130" fill="url(#beam)" opacity="0.5" />
    <polygon points="100,80 -60,30 -60,130" fill="url(#beam)" opacity="0.35" />

    <!-- base rocosa -->
    <path d="M40 300 Q60 285 80 295 T120 290 T160 300 L160 320 L40 320 Z" fill="#744d2a" />

    <!-- torre -->
    <path d="M78 300 L82 110 L118 110 L122 300 Z" fill="url(#body)" stroke="#926334" stroke-width="1.5" />
    <rect x="84" y="150" width="32" height="10" fill="#9d3340" />
    <rect x="84" y="210" width="32" height="10" fill="#9d3340" />
    <rect x="84" y="265" width="32" height="10" fill="#9d3340" />

    <!-- plataforma de luz -->
    <rect x="74" y="100" width="52" height="12" fill="#563a23" />
    <rect x="78" y="70" width="44" height="32" rx="4" fill="#f9e6e6" stroke="#9d3340" stroke-width="2" />
    <circle cx="100" cy="86" r="9" fill="#f3e9d9" />
    <circle cx="100" cy="86" r="5" fill="#cf6b6b" />

    <!-- techo -->
    <path d="M70 70 L100 40 L130 70 Z" fill="#9d3340" stroke="#7e2a36" stroke-width="1.5" />
    <rect x="98" y="28" width="4" height="14" fill="#563a23" />
    <circle cx="100" cy="26" r="3" fill="#7e2a36" />
  </svg>
</template>
