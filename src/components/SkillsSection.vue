<template>
  <section class="section scroll-reveal" id="skills">
    <div class="section-header">
      <span class="section-number">[04]</span>
      <h2 class="section-title">SKILLS</h2>
      <div class="section-line"></div>
    </div>
    <div class="skills-grid">
      <div v-for="category in skillCategories" :key="category.title" class="skill-category">
        <h3>{{ category.title }}</h3>
        <div class="skill-tags">
          <span v-for="skill in category.skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '../data/portfolio'
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  background: var(--bg-secondary);
  border-left: 3px solid var(--accent-primary);
  border-radius: 0 8px 8px 0;
  padding: 1.5rem;
  transition: all 0.3s;
}

.skill-category:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.1);
}

.skill-category h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 6px;
  color: var(--text-secondary);
  transition: all 0.2s;
  cursor: default;
}

.skill-tag:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(88, 166, 255, 0.15);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
