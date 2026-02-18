<template>
  <nav class="nav">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">&lt;EA/&gt;</router-link>
      <button class="nav-toggle" @click="toggleNav">☰</button>
      <div class="nav-links" :class="{ active: isNavOpen }">
        <a href="/#services" class="nav-link" @click="closeNav">Services</a>
        <a href="/#experience" class="nav-link" @click="closeNav">Experience</a>
        <a href="/#projects" class="nav-link" @click="closeNav">Projects</a>
        <a href="/#skills" class="nav-link" @click="closeNav">Skills</a>
        <!-- <a href="/#opensource" class="nav-link" @click="closeNav">Open Source</a> -->
        <!-- <router-link to="/articles" class="nav-link" @click="closeNav">Writing</router-link> -->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isNavOpen = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

const closeNav = () => {
  isNavOpen.value = false
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-default);
  z-index: 100;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width 0.3s;
}

.nav-link:hover {
  color: var(--accent-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: var(--accent-primary);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(13, 17, 23, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-default);
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s;
    pointer-events: none;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    padding: 1rem 2rem;
    width: 100%;
  }

  .nav-link::after {
    display: none;
  }
}
</style>
