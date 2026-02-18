<template>
  <section class="section scroll-reveal" id="services">
    <div class="section-header">
      <span class="section-number">[01]</span>
      <h2 class="section-title">LET'S WORK TOGETHER</h2>
      <div class="section-line"></div>
    </div>
    <div class="services-grid">
      <div v-for="service in services" :key="service.title" class="service-card">
        <div class="service-icon" v-html="getIcon(service.icon)"></div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-description">{{ service.description }}</p>
        <button class="service-button" @click="handleOpenModal(service.modalType)">
          {{ service.buttonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { services } from '../data/portfolio'

const openModal = inject<(type: 'employment' | 'project' | 'collaboration') => void>('openModal')

const handleOpenModal = (type: 'employment' | 'project' | 'collaboration') => {
  if (openModal) {
    openModal(type)
  }
}

const getIcon = (iconType: string) => {
  const icons: Record<string, string> = {
    user: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>`,
    briefcase: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>`,
    github: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>`
  }
  return icons[iconType] || ''
}
</script>

<style scoped>
.section {
  padding: 5rem 0;
  border-bottom: 1px solid var(--border-muted);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.section-number {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent-primary);
  font-size: 0.9rem;
  font-weight: 600;
}

.section-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.section-line {
  flex: 1;
  height: 1px;
  background: var(--border-muted);
  position: relative;
  overflow: hidden;
}

.section-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  animation: scan 4s infinite;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--chart-blue), var(--chart-purple));
  transform: scaleX(0);
  transition: transform 0.5s;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(88, 166, 255, 0.12);
}

.service-icon {
  width: 56px;
  height: 56px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--accent-primary);
}

.service-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.service-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.service-button {
  font-family: 'JetBrains Mono', monospace;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 0.875rem;
  transition: all 0.3s;
  cursor: pointer;
}

.service-button:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: var(--bg-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 166, 255, 0.3);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
