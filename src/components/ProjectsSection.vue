<template>
  <section class="section scroll-reveal" id="projects">
    <div class="section-header">
      <span class="section-number">[03]</span>
      <h2 class="section-title">SIDE PROJECTS</h2>
      <div class="section-line"></div>
    </div>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="tech-stack">{{ project.techStack }}</div>

        <div class="project-metrics">
          <div v-for="metric in project.metrics" :key="metric.label" class="project-metric">
            <span class="project-metric-value">{{ metric.value }}</span>
            <span class="project-metric-label">{{ metric.label }}</span>
          </div>
        </div>

        <div class="project-description">
          <p>{{ project.description }}</p>
          <ul class="project-highlights">
            <li v-for="(highlight, index) in project.highlights" :key="index">{{ highlight }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '../data/portfolio'
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
}

.project-card::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(88, 166, 255, 0.08) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}

.project-card:hover::after {
  opacity: 1;
}

.project-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(88, 166, 255, 0.12);
}

.project-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.project-title::before {
  content: '//';
  color: var(--accent-primary);
}

.tech-stack {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--text-dim);
  margin-bottom: 1.5rem;
}

.project-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.project-metric {
  padding: 0.75rem;
  background: var(--bg-tertiary);
  border-radius: 6px;
  text-align: center;
}

.project-metric-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--accent-secondary);
  display: block;
}

.project-metric-label {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 0.25rem;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.9rem;
}

.project-description p {
  margin-bottom: 1rem;
}

.project-highlights {
  list-style: none;
  margin-top: 1rem;
  display: grid;
  gap: 0.6rem;
}

.project-highlights li {
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.875rem;
}

.project-highlights li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--accent-secondary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-metrics {
    grid-template-columns: 1fr;
  }
}
</style>
