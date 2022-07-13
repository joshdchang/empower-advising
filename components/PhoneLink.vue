<template>
  <a :href="'tel:+1' + $attrs.number.replace(/\D/g, '')" class="transition-colors">
    {{ $attrs.number }}
  </a>
</template>