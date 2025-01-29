<template>

  <personal-profile-website/>

  <div class="container">
    <h1>Food</h1>
      <food-item/>
      <food-item2/>
      <food-item/>
  </div>

  <div class="container">
    <h1>Countries</h1>
      <countries/>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

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
  justify-content: center;
}

</style>