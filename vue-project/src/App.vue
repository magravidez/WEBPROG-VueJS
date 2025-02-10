<template>

  <personal-profile-web-page/>

  <div class="mwehehe">
    <h1>FOOD</h1> <br>
      <food-item/> <br>
      <food-item2/> <br>
      <food-item/>
  </div>

  <div class="mwehehe">
    <country/>
  </div>

  <div class="mwehehe">
    <comment-form/>
    <comment/>
  </div>

  <div class="mwehehe">
    <rest-api/>
  </div>

</template>

<style>
.mwehehe {
    padding: 20px;
    background-color: rgba(176, 196, 222, 0.9);
    max-width: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
}
</style>