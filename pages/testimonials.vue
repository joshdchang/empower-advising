<script setup>
  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const settings = await useSingleton('settings')
  const testimonials = await useItems('testimonials')
</script>
<template>

  <div>

    <Head>
      <Title>
        Testimonials – {{ settings.name }}
      </Title>
    </Head>
    <Article>
      <Prose>
        <h2>Testimonials</h2>
      </Prose>
      <div class="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">

        <div v-for="testimonial of testimonials"
          class="bg-white p-5 sm:p-7 md:p-10 lg:p-8 xl:p-10 rounded grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
          <Prose>
            <p>{{ testimonial.content }}</p>
            <h4>{{ testimonial.name }}</h4>
            <p>
              <span class="text-blue-600">{{ testimonial.high_school }}</span>
              <br>
              <span class="text-blue-600">{{ testimonial.college }}</span>
            </p>
          </Prose>
        </div>
      </div>
    </Article>
  </div>
</template>