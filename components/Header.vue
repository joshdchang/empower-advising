<script setup>

  const settings = await useSingleton('settings')
  const navItems = await useItems('navbar_links')

  const navOpen = ref(false)
</script>

<template>

  <!-- header -->
  <Container class="border-b-[1px] bg-white">
    <div
      class="grid gap-8 items-center grid-flow-col md:grid-flow-row">
      <div class="grid grid-flow-col justify-between items-center">
        <NuxtLink to="/" class="grid md:grid-flow-col justify-start gap-1 md:gap-4 lg:gap-5 xl:gap-6 items-center">
          <h2 class="font-medium uppercase text-xl text-slate-800 lg:text-2xl">{{ settings.name }}</h2>
          <p class="text-slate-400 uppercase text-sm lg:text-base xl:text-lg">{{ settings.subtitle }}</p>
        </NuxtLink>
        <PhoneLink :number="settings.phone" class="text-lg xl:text-xl text-blue-600 hover:text-blue-400 transition-colors hidden sm:block" />
      </div>
      <nav class="hidden md:grid grid-flow-col gap-4 lg:gap-6 xl:gap-7 items-center justify-start font-thin text-slate-500">
        <template v-for="item of navItems">
          <NuxtLink v-if="item.type === 'built_in'" :to="item.built_in_page" class="pr-4 lg:pr-6 xl:pr-7 last:pr-0 text-lg lg:text-xl hover:text-slate-800 transition-colors border-r-[1px] last:border-r-0" activeClass="text-slate-800 font-medium">
            {{ item.title }}
          </NuxtLink>
          <NuxtLink v-if="item.type === 'custom'" :to="'/page/' + item.custom_page" class="pr-4 lg:pr-6 xl:pr-7 last:pr-0 text-lg lg:text-xl hover:text-slate-800 transition-colors border-r-[1px] last:border-r-0" activeClass="text-slate-800 font-medium">
            {{ item.title }}
          </NuxtLink>
          <a v-if="item.type === 'external'" :href="item.external_link" class="pr-4 lg:pr-6 xl:pr-7 last:pr-0 text-lg lg:text-xl hover:text-slate-800 transition-colors border-r-[1px] last:border-r-0">
            {{ item.title }}
          </a>
        </template>
      </nav>
      <div class="md:hidden grid items-center justify-end">
        <button @click="navOpen = true">
          <i class="pi pi-bars text-slate-800 hover:text-slate-500 transition-colors" style="font-size: 2rem"></i>
        </button>
      </div>
      <Sidebar v-model:visible="navOpen" position="full">
        <div class="grid gap-6 justify-center text-center">
          <template v-for="item of navItems">
            <NuxtLink v-if="item.type === 'built_in'" :to="item.built_in_page" @click="navOpen = false" class="sans-serif font-semibold text-slate-400 text-2xl hover:text-slate-800 transition-colors" activeClass="text-slate-900">
              {{ item.title }}
            </NuxtLink>
            <NuxtLink v-if="item.type === 'custom'" :to="'/page/' + item.custom_page" @click="navOpen = false" class="sans-serif font-semibold text-slate-400 text-2xl hover:text-slate-800 transition-colors" activeClass="text-slate-900">
              {{ item.title }}
            </NuxtLink>
            <a v-if="item.type === 'external'" :href="item.external_link"  class="sans-serif font-semibold text-slate-400 text-2xl hover:text-slate-800 transition-colors">
              {{ item.title }}
            </a>
          </template>
        </div>
      </Sidebar>
    </div>
  </Container>

</template>