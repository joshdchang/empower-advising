<script setup>
  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const settings = await useSingleton('settings')
  const home = await useSingleton('home')
  const blocks = await useItems('home_blocks')
  const links = await useItems('navbar_links')

  console.log(links)
</script>

<template>
  <div>

    <Head>
      <Title>
        {{ settings.name }}
      </Title>
    </Head>
    <Single>
      <Prose v-html="home.title"></Prose>
      <div v-for="block of blocks" class="bg-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
        <Prose>
          <h3>{{ block.title }}</h3>
        </Prose>
        <Prose v-html="block.content"></Prose>
        <Prose>
          <NuxtLink v-if="links.find(e => e.id === block.link).type === 'built_in'" :to="links.find(e => e.id === block.link).built_in_page"
            class="pr-4 lg:pr-6 xl:pr-7 last:pr-0 text-lg lg:text-xl hover:text-slate-800 transition-colors border-r-[1px] last:border-r-0"
            activeClass="text-slate-800 font-medium">
            {{ links.find(e => e.id === block.link).title }}
          </NuxtLink>
          <NuxtLink v-if="links.find(e => e.id === block.link).type === 'custom'" :to="'/page/' + links.find(e => e.id === block.link).custom_page"
            class="pr-4 lg:pr-6 xl:pr-7 last:pr-0 text-lg lg:text-xl hover:text-slate-800 transition-colors border-r-[1px] last:border-r-0"
            activeClass="text-slate-800 font-medium">
            {{ links.find(e => e.id === block.link).title }}
          </NuxtLink>
          <a v-if="links.find(e => e.id === block.link).type === 'external'" :href="links.find(e => e.id === block.link).external_link"
            class="pr-4 lg:pr-6 xl:pr-7 last:pr-0 text-lg lg:text-xl hover:text-slate-800 transition-colors border-r-[1px] last:border-r-0">
            {{ links.find(e => e.id === block.link).title }}
          </a>
        </Prose>
      </div>
    </Single>
  </div>
</template>