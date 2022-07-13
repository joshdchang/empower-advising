<template>
  <a :href="'mailto:' + $attrs.email" class="transition-colors">
    {{ $attrs.email }}
  </a>
</template>