<script setup>
  const settings = await useSingleton('settings')
  const about = await useSingleton('about')

  onMounted(() => {
    window.scrollTo(0, 0)
  })
</script>

<template>
  <div>

    <Head>
      <Title>
        About – {{ settings.name }}
      </Title>
      <Meta name="description" :content="settings.description" />
    </Head>

    <div class="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-8 lg:gap-10 xl:gap-12 sans-serif pt-6">
      <DirectusImage :uuid="about.image" class="w-full shadow-[#00000010_0px_0px_6px_1px]" />
      <Prose v-html="about.content"></Prose>
    </div>
  </div>
</template>