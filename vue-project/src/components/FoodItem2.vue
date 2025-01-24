<template>
  <div class="mangogo">
    <div class="mango">
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Mangoes',
            message: 'I like mangoes'
        }
    }
};
</script>

<style scoped>
.mangogo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mango {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: rgba(176, 196, 222, 0.9);
}
</style>