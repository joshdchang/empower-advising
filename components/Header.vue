<script setup>

  const settings = await useSingleton('settings')

  const navItems = [
    {
      name: 'Portfolio',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]

  const navOpen = ref(false)
</script>

<template>

  <!-- header -->
  <div class="sans-serif bg-white grid grid-flow-col justify-between gap-8 items-center">
    <NuxtLink to="/" class="grid md:grid-flow-col gap-1 md:gap-4 lg:gap-5 xl:gap-6 items-center">
      <h2 class="font-medium uppercase text-xl text-gray-800 lg:text-2xl">{{ settings.name }}</h2>
      <p class="text-gray-400 uppercase md:justify-self-end text-sm lg:text-base xl:text-lg">{{ settings.title }}</p>
    </NuxtLink>
    <nav class="hidden md:grid grid-flow-col gap-4 lg:gap-6 xl:gap-8 items-center">
      <NuxtLink v-for="item of navItems" :to="item.path"
        class="text-gray-400 text-lg lg:text-xl xl:text-2xl hover:text-gray-800 transition-colors" activeClass="text-gray-900">
        {{ item.name }}
      </NuxtLink>
    </nav>
    <div class="md:hidden grid items-center">
      <button @click="navOpen = true">
        <i class="pi pi-bars text-gray-800 hover:text-gray-500 transition-colors" style="font-size: 2rem"></i>
      </button>
    </div>
    <Sidebar v-model:visible="navOpen" position="full">
      <div class="grid gap-6 justify-center text-center">
        <NuxtLink v-for="item of navItems" :to="item.path"
          class="sans-serif font-semibold text-gray-400 text-2xl hover:text-gray-800 transition-colors" activeClass="text-gray-900"
          @click="navOpen = false">
          {{ item.name }}
        </NuxtLink>
      </div>
    </Sidebar>
  </div>

</template>