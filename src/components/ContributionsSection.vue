<template>
  <section class="section scroll-reveal" id="opensource">
    <div class="section-header">
      <span class="section-number">[05]</span>
      <h2 class="section-title">OPEN SOURCE</h2>
      <div class="section-line"></div>
    </div>
    <div class="contributions-grid">
      <div v-for="contrib in contributions" :key="contrib.prNumber" class="contribution-card">
        <div class="contribution-icon" v-html="getIcon(contrib.icon)"></div>
        <div class="contribution-content">
          <div class="contribution-header">
            <div>
              <div class="contribution-repo">{{ contrib.repo }}</div>
              <h3 class="contribution-title">{{ contrib.title }}</h3>
            </div>
            <span class="contribution-status" :class="`status-${contrib.status}`">
              {{ contrib.status === 'merged' ? 'Merged' : 'Open' }}
            </span>
          </div>
          <p class="contribution-description">{{ contrib.description }}</p>
          <div class="contribution-meta">
            <a :href="contrib.prUrl" class="contribution-link">{{ contrib.prNumber }}</a>
            <span>•</span>
            <span>{{ contrib.changes }}</span>
            <span>•</span>
            <span>{{ contrib.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contributions } from '../data/portfolio'

const getIcon = (iconType: string) => {
  const icons: Record<string, string> = {
    settings: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m5.2-13.2-4.2 4.2m0 0-4.2-4.2m13.2 5.2h-6m-6 0H1m18.8 5.2-4.2-4.2m0 0-4.2 4.2"></path>
    </svg>`,
    zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>`,
    code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
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

.section-number, .section-title, .section-line, .section-line::after {
  /* Same styles as other sections */
}

.contributions-grid {
  display: grid;
  gap: 1.5rem;
}

.contribution-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.contribution-card:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.1);
}

.contribution-icon {
  width: 48px;
  height: 48px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--accent-primary);
}

.contribution-content {
  flex: 1;
}

.contribution-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.contribution-repo {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--accent-secondary);
  margin-bottom: 0.5rem;
}

.contribution-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.125rem;
  color: var(--text-primary);
  font-weight: 600;
}

.contribution-status {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  white-space: nowrap;
}

.status-merged {
  background: rgba(63, 185, 80, 0.15);
  color: var(--success);
  border: 1px solid var(--success);
}

.status-open {
  background: rgba(88, 166, 255, 0.15);
  color: var(--accent-primary);
  border: 1px solid var(--accent-primary);
}

.contribution-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.contribution-meta {
  display: flex;
  gap: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text-dim);
  flex-wrap: wrap;
}

.contribution-link {
  color: var(--accent-primary);
  text-decoration: none;
  transition: color 0.3s;
}

.contribution-link:hover {
  color: var(--accent-secondary);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contribution-card {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
