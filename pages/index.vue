<script setup>
  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const settings = await useSingleton('settings')
  const items = await useItems('items')
  
</script>

<template>
  <div>
    <Head>
      <Title>
        {{ settings.name }}
      </Title>
      <Meta name="description" :content="settings.description" />
      <!-- <Link rel="icon" type="image/x-icon" :href="imageUrl(settings.icon)" /> -->
    </Head>

    <!-- main content -->
    <div class="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-5 lg:gap-6 xl:gap-7 sans-serif">
      <NuxtLink :to="'/items/' + item.id" v-for="item of items" class="grid gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-4">
        <div class="relative">
          <DirectusImage :uuid="item.thumbnail" transformKey="thumbnail" class="w-full shadow-[#00000010_0px_0px_6px_1px]" />
          <div class="absolute top-0 bottom-0 left-0 right-0 hover:bg-[#00000030] transition-colors"></div>
        </div>
        <h2 class="font-thin text-gray-600 sm:text-lg md:text-base lg:text-xl xl:text-2xl hover:text-gray-400 transition-colors">
          {{ item.title }}
        </h2>
      </NuxtLink>
    </div>

  </div>
</template>