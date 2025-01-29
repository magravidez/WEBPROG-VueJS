<template>

  <personal-profile-web-page/>

  <div class="container">
    <h1>Food</h1> <br>
      <food-item/> <br>
      <food-item2/> <br>
      <food-item/>
  </div>

  <div class="container">
    <ul>
        <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<style>

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>