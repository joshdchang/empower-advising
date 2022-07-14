<script setup>
  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const settings = await useSingleton('settings')
  const services = await useItems('services')
</script>
<template>

  <div>

    <Head>
      <Title>
        Services – {{ settings.name }}
      </Title>
    </Head>
    <Single>
      <Prose>
        <h2>Services</h2>
      </Prose>
      <div v-for="service of services" class="bg-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
        <span class="grid grid-flow-col justify-between items-center text-slate-800">
          <Prose>
            <h4>{{ service.title }}</h4>
          </Prose>
          <Prose>
            <h3>{{ service.price }}</h3>
          </Prose>
        </span>
        <Prose v-html="service.description"></Prose>
      </div>
    </Single>
  </div>
</template>