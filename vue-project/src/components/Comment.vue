<template>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
    </ul>
  </template>
  
  <script></script>
  
  <style>
    #app > div {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: lightyellow;
    }
  </style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

onMounted(() => {
  getComments()
})

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #1A4FAF;
}

ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

li {
  background: #fff;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

p {
  color: #666;
}
</style>