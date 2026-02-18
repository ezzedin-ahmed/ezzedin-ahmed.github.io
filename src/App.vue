<template>
  <div class="app">
    <Navigation />
    <NetworkBackground />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import NetworkBackground from './components/NetworkBackground.vue'
</script>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
}
</style>

