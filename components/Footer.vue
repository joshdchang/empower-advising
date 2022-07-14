<script setup>
  const directusUrl = useUrl()
  const settings = await useSingleton('settings')

</script>
<template>
  <Container class=" bg-slate-800 text-white">
    <div
      class="grid gap-3 sm:grid-cols-2 text-center sm:text-left py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6">
      <div class="md:text-left grid gap-2 sm:gap-3">
        <h2 class="font-medium uppercase text-lg lg:text-xl">
          {{ settings.name }}
        </h2>
        <div class="text-slate-400 grid gap-1">
          <PhoneLink :number="settings.phone" class="hover:text-slate-200" />
          <EmailLink :email="settings.email" class="hover:text-slate-200" />
        </div>
      </div>
      <div class="sm:text-right grid gap-4">
        <div class="grid grid-flow-col gap-4 sm:justify-end justify-center">
          <a v-if="settings.facebook" :href="settings.facebook" target="_blank">
            <Button icon="pi pi-facebook" class="p-button-rounded p-button-lg p-button-info" />
          </a>
          <a v-if="settings.instagram" :href="settings.instagram" target="_blank">
            <Button icon="pi pi-instagram" class="p-button-rounded p-button-lg p-button-help" />
          </a>
        </div>
        <div class="pt-5">
          <a :href="directusUrl" target="_blank" class="text-slate-400 hover:text-slate-200 transition-colors">Admin Login</a>
        </div>
        <small class="text-slate-200 self-end">
          Copyright © {{ new Date().getFullYear() }} {{ settings.name }}
        </small>
      </div>
    </div>
  </Container>
</template>