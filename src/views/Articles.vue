<template>
  <div class="articles-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Writing</h1>
        <p class="page-subtitle">
          Thoughts on distributed systems, backend architecture, performance optimization, and lessons learned building scalable applications.
        </p>
      </header>

      <div class="articles-list">
        <router-link
          v-for="article in articles"
          :key="article.slug"
          :to="`/articles/${article.slug}`"
          class="article-card"
        >
          <div class="article-meta">
            <span class="article-tag">{{ article.tag }}</span>
            <span>•</span>
            <span>{{ article.date }}</span>
          </div>
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-excerpt">{{ article.excerpt }}</p>
          <div class="article-footer">
            <span class="article-read-time">{{ article.readTime }}</span>
            <span class="article-link">Read article →</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { articles } from '../data/portfolio'
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.page-header {
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-default);
}

.page-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, var(--text-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
}

.articles-list {
  display: grid;
  gap: 2rem;
}

.article-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
  display: block;
}

.article-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(88, 166, 255, 0.12);
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text-dim);
  flex-wrap: wrap;
}

.article-tag {
  padding: 0.4rem 0.8rem;
  background: var(--bg-tertiary);
  border-radius: 4px;
  color: var(--accent-secondary);
  border: 1px solid var(--border-muted);
}

.article-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.article-excerpt {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-muted);
}

.article-read-time {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--text-dim);
}

.article-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .article-card {
    padding: 1.5rem;
  }

  .article-title {
    font-size: 1.25rem;
  }
}
</style>
