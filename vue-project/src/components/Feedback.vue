<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const feedback = ref([]);

async function getFeedback() {
  const { data, error } = await supabase.from('feedback').select('id, name, email, comment');
  
  if (error) {
    console.error('Error fetching feedback:', error);
    return;
  }
  
  feedback.value = data;
}

onMounted(() => {
  getFeedback();
});
</script>

<template>
  <div class="container">
    <h1>FEEDBACK</h1>
    <ul v-if="feedback.length > 0">
      <li v-for="item in feedback" :key="item.id">
        <strong>{{ item.name }}</strong> ({{ item.email }}) - "{{ item.comment }}"
      </li>
    </ul>
    <p v-else>No feedback available.</p>
  </div>
</template>

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