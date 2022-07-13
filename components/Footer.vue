<script setup>
  const directusUrl = useUrl()
  const settings = await useSingleton('settings')

</script>
<template>
  <div
    class="border-t-2 pb-4 pt-8 sm:pt-10 md:pt-11 lg:pt-12 xl:pt-14 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 grid justify-items-center sans-serif">
    <div class="w-full grid">
      <div
        class="grid gap-5 sm:grid-cols-2 text-center sm:text-left">
        <div class="md:text-left grid gap-2 sm:gap-3">
          <h2 class="font-medium uppercase text-lg text-gray-800 lg:text-xl">
            {{ settings.name }}
          </h2>
          <div class="text-gray-500 grid gap-1">
            <PhoneLink :number="settings.phone_number" class="hover:text-gray-400" />
            <EmailLink :email="settings.email" class="hover:text-gray-400" />
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
            <a :href="directusUrl" target="_blank" class="text-blue-600 hover:text-blue-400 transition-colors">Admin Login</a>
          </div>
          <small class="text-gray-500 self-end">
            Copyright © {{ new Date().getFullYear() }} {{ settings.name }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>