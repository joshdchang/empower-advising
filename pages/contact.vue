<script setup>

  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const state = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const rules = {
    name: { required },
    subject: { required },
    email: { required, email },
    message: { required }
  }

  const v$ = useVuelidate(rules, state)

  const submitted = ref(false)
  const sent = ref(false)
  const success = ref(false)

  const formUrl = 'https://script.google.com/macros/s/AKfycbxBiHylY0Sj708-Dclz6b3XP8-pGGBXQcCTk1M0hgzUlfB6LvlaK_GVTkeaCkgPOvUY_A/exec'

  const handleSubmit = async (isFormValid) => {
    submitted.value = true
    if (!isFormValid) {
      return
    }

    sent.value = true
    let res = await fetch(`${formUrl}?name=${state.name}&subject=${state.subject}&replyto=${state.email}&message=${state.message}`)
    let text = await res.text()
    if (text === 'success') {
      success.value = true
    } else {
      submitted.value = false
      sent.value = false
      alert('Server error. Please email us directly at ' + settings.email + '.')
    }
  }

  const settings = await useSingleton('settings')
  const contact = await useSingleton('contact')
</script>
<template>
  <div>

    <Head>
      <Title>
        Contact – {{ settings.name }}
      </Title>
    </Head>
    <Single>
      <Prose v-html="contact.content" />
      <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
        <div class="grid gap-3 sm:gap-4 md:gap-5">
          <span>
            <span class="p-input-icon-left w-full">
              <i class="pi pi-user" />
              <InputText type="text" placeholder="Name" class="w-full" :class="{'p-invalid':v$.name.$invalid && submitted}"
                v-model="state.name" />
            </span>
            <small v-if="submitted && v$.name.$silentErrors.length" class="p-error">
              {{ v$.name.$silentErrors[0].$message }}
            </small>
          </span>
          <span>
            <span class="p-input-icon-left w-full">
              <i class="pi pi-envelope" />
              <InputText type="text" placeholder="Email" class="w-full" :class="{'p-invalid':v$.email.$invalid && submitted}"
                v-model="state.email" />
            </span>
            <small v-if="submitted && v$.email.$silentErrors.length" class="p-error">
              {{ v$.email.$silentErrors[0].$message }}
            </small>
          </span>
          <span>
            <span class="p-input-icon-left w-full">
              <i class="pi pi-file" />
              <InputText type="text" placeholder="Subject" class="w-full" :class="{'p-invalid':v$.subject.$invalid && submitted}"
                v-model="state.subject" />
            </span>
            <small v-if="submitted && v$.subject.$silentErrors.length" class="p-error">
              {{ v$.subject.$silentErrors[0].$message }}
            </small>
          </span>
          <span>
            <Textarea :autoResize="true" class="w-full" rows="5" cols="30" placeholder="Message"
              :class="{'p-invalid':v$.message.$invalid && submitted}"
              v-model="state.message" />
            <small v-if="submitted && v$.message.$silentErrors.length" class="p-error">
              {{ v$.message.$silentErrors[0].$message }}
            </small>
          </span>
          <Button v-if="!sent" label="Submit" type="submit" @click="handleSubmit(!v$.$invalid)" />
          <Button v-else-if="!success" label="Sending" icon="pi pi-spin pi-spinner" />
          <Button v-else label="Sent" icon="pi pi-check-circle" disabled="disabled" />
        </div>
      </div>
      <Prose class="text-center">
        <h4>Or give us a call at
          <PhoneLink :number="settings.phone" />
        </h4>
      </Prose>
    </Single>
  </div>
</template>