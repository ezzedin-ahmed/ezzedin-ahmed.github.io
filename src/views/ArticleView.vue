<template>
  <div class="article-view">
    <div class="container">
      <div class="back-link">
        <router-link to="/articles">← Back to Writing</router-link>
      </div>
      <article class="article-content">
        <header class="article-header">
          <div class="article-meta">
            <span class="article-tag">Distributed Systems</span>
            <span>•</span>
            <span>December 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1>{{ route.params.slug }}</h1>
          <p class="article-intro">
            Article content would go here. This is a placeholder for the full article view.
          </p>
        </header>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.back-link a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s;
}

.back-link a:hover {
  color: var(--accent-primary);
}

.article-content {
  margin-top: 2rem;
}

.article-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-default);
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--text-dim);
}

.article-tag {
  padding: 0.4rem 0.8rem;
  background: var(--bg-tertiary);
  border-radius: 4px;
  color: var(--accent-secondary);
  border: 1px solid var(--border-default);
}

h1 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.article-intro {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
</style>
