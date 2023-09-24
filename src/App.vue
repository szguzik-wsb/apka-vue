<script setup>
import { RouterLink, RouterView } from 'vue-router'
const navItems = [
        { text: 'Strona główna', link: '#' },
        { text: 'O nas', link: '#' },
        { text: 'Kontakt', link: '#' },
        // Dodaj więcej elementów nawigacji według potrzeb
      ]
</script>

<template>
  <header>
    <div class="wrapper top-bar">
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.top-bar {
  background-color: blue;
  padding: 10px;
  display: flex;
  justify-content: space-between;
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
