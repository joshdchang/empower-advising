<script setup>
  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const settings = await useSingleton('settings')
  
</script>

<template>
  <div>
    <Head>
      <Title>
        {{ settings.name }}
      </Title>
    </Head>
    
  </div>
</template>