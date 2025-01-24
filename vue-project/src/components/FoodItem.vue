<template>
  <div class="appleple">
    <div class="apple">
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Apples',
            message: 'I like apples'
        }
    }
};
</script>

<style scoped>
.appleple {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.apple {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>