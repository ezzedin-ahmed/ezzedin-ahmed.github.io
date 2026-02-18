<template>
  <div class="home">
    <div class="container">
      <!-- Header -->
      <header class="header">
        <div class="header-content">
          <!--<div class="portrait-container">
            <div class="portrait">EA</div>
          </div>-->
          <div class="header-text">
            <div class="terminal-prompt">&gt; system.init() <span>// Software Engineer Portfolio</span></div>
            <h1>EZZEDIN AHMED</h1>
            <p class="subtitle">
            Software engineer focused on backend development and system design.
            <br>
            I work on APIs, distributed services, and real-time applications. Interested in performance, concurrency, and building systems that are straightforward and reliable.
            </p>
            <div class="status-bar">
              <div class="status-item">
                <span class="status-indicator"></span>
                <span class="mono">Open to opportunities</span>
              </div>
              <!--<div class="status-item">
                <span class="mono">Egypt (Remote)</span>
              </div>-->
            </div>
            <div class="contact-links">
              <a href="mailto:ezzedinahmedm@gmail.com">EMAIL</a>
              <a href="tel:+201550915323">PHONE</a>
              <a href="https://github.com/ezzedin-ahmed" target="_blank">GITHUB</a>
              <a href="https://linkedin.com/in/ezzedin-ahmed" target="_blank">LINKEDIN</a>
            </div>
          </div>
        </div>
      </header>

      <!-- Services Section -->
      <ServicesSection />

      <!-- Experience Section -->
      <ExperienceSection />

      <!-- Projects Section -->
      <ProjectsSection />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- Contributions Section -->
      <!-- <ContributionsSection /> -->

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <p>&gt; system.shutdown() <span>//</span> Built with precision • Designed for scale</p>
          <p style="margin-top: 1rem; opacity: 0.5;">© 2025 Ezzedin Ahmed</p>
        </div>
      </footer>
    </div>

    <!-- Modals -->
    <ModalForm :is-open="modalState.employment" modal-type="employment" @close="closeModal('employment')" />
    <ModalForm :is-open="modalState.project" modal-type="project" @close="closeModal('project')" />
    <ModalForm :is-open="modalState.collaboration" modal-type="collaboration" @close="closeModal('collaboration')" />
  </div>
</template>

<script setup lang="ts">
import { reactive, provide, onMounted } from 'vue'
import ServicesSection from '../components/ServicesSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContributionsSection from '../components/ContributionsSection.vue'
import ModalForm from '../components/ModalForm.vue'

const modalState = reactive({
  employment: false,
  project: false,
  collaboration: false
})

const openModal = (type: 'employment' | 'project' | 'collaboration') => {
  modalState[type] = true
}

const closeModal = (type: 'employment' | 'project' | 'collaboration') => {
  modalState[type] = false
}

provide('openModal', openModal)

onMounted(() => {
  // Scroll reveal on mount
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Header */
.header {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border-default);
}

.header-content {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  flex-direction: row-reverse;
}

.portrait-container {
  flex-shrink: 0;
  opacity: 0;
  animation: fadeIn 0.8s 0.3s forwards;
}

.portrait {
  width: 180px;
  height: 180px;
  border-radius: 12px;
  border: 2px solid var(--border-default);
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 3rem;
  color: var(--accent-primary);
  transition: all 0.3s;
}

.portrait:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 8px 24px rgba(88, 166, 255, 0.2);
  transform: translateY(-4px);
}

.header-text {
  flex: 1;
}

.terminal-prompt {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-dim);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
  letter-spacing: 0.02em;
}

.terminal-prompt span {
  color: var(--accent-primary);
}

h1 {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  opacity: 0;
  animation: fadeInUp 0.6s 0.2s forwards;
  background: linear-gradient(120deg, var(--text-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeInUp 0.6s 0.4s forwards;
  max-width: 700px;
  line-height: 1.7;
}

.status-bar {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 0.6s 0.6s forwards;
  margin-bottom: 1.5rem;
}

.status-item {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dim);
}

.status-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--success);
  animation: blink 2.5s infinite;
}

.contact-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.contact-links a {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border-default);
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--bg-secondary);
}

.contact-links a:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 166, 255, 0.15);
}

/* Footer */
.footer {
  padding: 3rem 0;
  text-align: center;
}

.footer-content {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--text-dim);
}

.footer-content span {
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 2rem;
  }

  .portrait {
    width: 140px;
    height: 140px;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
