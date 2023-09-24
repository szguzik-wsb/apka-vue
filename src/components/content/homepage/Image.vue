<script setup>
defineProps({
  imgLink: {
    type: String,
    default: () => ''
  },
  title: {
    type: String,
    default: () => ''
  },
  price: {
    type: String,
    default: () => ''
  },
})

</script>

<template>
  <span>{{ title }}</span>
  <div class="homepage-img">
    <img :src="imgLink"/>
  </div>
  <p>Cena: {{ price }}</p>
</template>

<style scoped>
.homepage-img {
 width: 100%;
}

img {
  width: 100%;
}

span {
  color:red;
}
</style>