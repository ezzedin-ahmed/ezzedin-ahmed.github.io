<template>
  <section class="section scroll-reveal" id="experience">
    <div class="section-header">
      <span class="section-number">[02]</span>
      <h2 class="section-title">WHAT I DO</h2>
      <div class="section-line"></div>
    </div>
    <div class="experience-grid">
      <div v-for="exp in experiences" :key="exp.company" class="experience-card">
        <div class="experience-header">
          <div class="company-info">
            <h3>{{ exp.company }}</h3>
            <div class="role">{{ exp.role }}</div>
            <div class="location">{{ exp.location }}</div>
          </div>
          <div class="date-badge">{{ exp.period }}</div>
        </div>

        <div class="metrics-grid">
          <div v-for="metric in exp.metrics" :key="metric.label" class="metric-card">
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
            <div class="metric-sublabel">{{ metric.sublabel }}</div>
          </div>
        </div>

        <div class="work-description">
          <p>{{ exp.description }}</p>
          <ul class="work-highlights">
            <li v-for="(highlight, index) in exp.highlights" :key="index">{{ highlight }}</li>
          </ul>
        </div>

        <div class="tech-stack-visual">
          <span v-for="tech in exp.techStack" :key="tech" class="tech-badge">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '../data/portfolio'
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

.experience-grid {
  display: grid;
  gap: 2.5rem;
}

.experience-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.experience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  transition: left 0.5s;
}

.experience-card:hover::before {
  left: 100%;
}

.experience-card:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 8px 32px rgba(88, 166, 255, 0.12);
  transform: translateY(-2px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.company-info h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.role {
  font-size: 1.125rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.location {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--text-dim);
}

.date-badge {
  font-family: 'JetBrains Mono', monospace;
  background: var(--bg-tertiary);
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border-default);
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.metric-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--chart-blue), var(--chart-purple), var(--chart-cyan));
  transform: scaleX(0);
  transition: transform 0.5s;
}

.metric-card:hover::before {
  transform: scaleX(1);
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(88, 166, 255, 0.1);
}

.metric-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metric-sublabel {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 0.25rem;
}

.work-description {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
}

.work-description p {
  margin-bottom: 1.2rem;
}

.work-highlights {
  list-style: none;
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
}

.work-highlights li {
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.9rem;
}

.work-highlights li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-family: 'JetBrains Mono', monospace;
}

.tech-stack-visual {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: var(--bg-tertiary);
  border-radius: 8px;
  border: 1px solid var(--border-muted);
}

.tech-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 4px;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.tech-badge:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
