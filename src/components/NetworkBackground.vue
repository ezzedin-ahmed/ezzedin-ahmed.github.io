<template>
  <div class="network-bg" ref="networkBg"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const networkBg = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!networkBg.value) return

  const nodeCount = 25
  const container = networkBg.value

  // Create nodes
  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div')
    node.className = 'node'
    node.style.left = Math.random() * 100 + '%'
    node.style.top = Math.random() * 100 + '%'
    node.style.animationDelay = Math.random() * 4 + 's'
    container.appendChild(node)
  }

  // Create connection lines
  for (let i = 0; i < 12; i++) {
    const line = document.createElement('div')
    line.className = 'connection-line'
    const angle = Math.random() * 180
    const width = (Math.random() * 30 + 20) + '%'
    line.style.width = width
    line.style.left = Math.random() * 100 + '%'
    line.style.top = Math.random() * 100 + '%'
    line.style.transform = `rotate(${angle}deg)`
    line.style.animationDelay = Math.random() * 6 + 's'
    container.appendChild(line)
  }
})
</script>

<style scoped>
.network-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.12;
}

:deep(.node) {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--accent-primary);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-primary);
  animation: pulse 4s infinite ease-in-out;
}

:deep(.connection-line) {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  opacity: 0.12;
  animation: dataFlow 6s infinite linear;
}
</style>
