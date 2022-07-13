import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import Sidebar from 'primevue/sidebar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('Textarea', Textarea);
  nuxtApp.vueApp.component('Message', Message);
  nuxtApp.vueApp.component('Sidebar', Sidebar);
  //other components that you need
});