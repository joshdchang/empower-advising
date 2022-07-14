<script setup>
  const settings = await useSingleton('settings')
</script>
<template>
  <Html class="bg-slate-100">
    <Head>
      <Title>
        {{ settings.name }}
      </Title>
      <!-- <Link rel="icon" type="image/x-icon" :href="imageUrl(settings.icon)" /> -->
      <Meta name="description" :content="settings.meta_description" />
    </Head>
    <Body class="sans-serif">
      <Header></Header>
      <Container>
        <NuxtPage></NuxtPage>
      </Container>
      <Footer></Footer>
    </Body>
  </Html>
</template>