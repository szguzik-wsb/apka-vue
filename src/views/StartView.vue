<script setup>
import {ref} from "vue";
import Wrapper from "@/components/content/wrapper/Wrapper.vue";
import Image from "@/components/content/homepage/Image.vue";

const data = ref([])

data.value = [
  {
    id: 1,
    title: "Meduza",
    price: "250zł/doba",
    img: 'https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg',
  },
  {
    id: 2,
    title: "Hilton",
    price: "25000/doba",
    img: 'https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg',
  }
]
</script>

<template>
  <wrapper>
    <Image v-for="(item, index) in data" :img-link="item.img" :title="item.title" :price="item.price" :key="index"/>
  </wrapper>
</template>

<style scoped>

</style>