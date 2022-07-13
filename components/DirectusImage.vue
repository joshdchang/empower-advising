<script setup>
  const imageUrl = useImage()
</script>
<template>
  <img :src="imageUrl($attrs.uuid, $attrs.transformKey)">
</template>