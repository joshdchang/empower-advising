<script setup>

  onMounted(() => {
    window.scrollTo(0, 0)
  })


  const route = useRoute()
  const item = await useItem('items', route.params.id)
  const items = await useItems('items')

  item.content = item.content.replaceAll('width="560" height="315"', 'class="w-full aspect-video"')

</script>

<template>
  <div class="sans-serif pt-6 grid gap-6 sm:gap-8 xl:gap-10 justify-center">
    <Prose>
      <h2 class="mt-1 sm:mt-2 md:mt-3 lg:mt-5 xl:mt-8">{{ item.title }}</h2>
    </Prose>
    <Prose v-html="item.content" class="w-full max-w-4xl prose-img:m-0 prose-img:sm:m-0 prose-img:md:m-0 prose-img:lg:m-0 prose-img:xl:m-0 prose-img:w-full" />
    <div
      class="border-t-2 pb-4 pt-14 sm:pt-16 md:pt-16 lg:pt-20 xl:pt-24 mt-4 sm:mt-6 md:mt-8 lg:mt-10 grid gap-3 lg:inline justify-items-center text-center">
      <NuxtLink v-for="one of items" :to="`/items/${one.id}`" class="text-gray-400 text-xl hover:text-gray-800 transition-colors mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-6"
        activeClass="text-gray-900">
        {{ one.title }}
      </NuxtLink>
    </div>

  </div>
</template>