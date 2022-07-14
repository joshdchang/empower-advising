<script setup>

  const page = await useItem('pages', useRoute().params.id)
  const settings = await useSingleton('settings')

  onMounted(() => {
    window.scrollTo(0, 0)
  })
</script>

<template>
  <div>

    <Head>
      <Title>
        {{ page.title }} – {{ settings.name }}
      </Title>
      <Meta v-if="page.meta_description" name="description" :content="page.meta_description" />
    </Head>

    <Single>
      <Prose v-html="page.content"></Prose>
    </Single>
  </div>
</template>