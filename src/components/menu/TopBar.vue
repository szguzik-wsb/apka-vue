<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div class="wrapper top-bar">
      <nav>
        <RouterLink to="/home" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: blue;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 60px -24px rgba(66, 68, 90, 1);
}
.top-bar {
  display: inherit;
  justify-content: center;
  width: 100%;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.nav-link:hover {
  background-color: white;
  color: blue;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>