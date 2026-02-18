<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal" @click="handleBackdropClick">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="emit('close')">×</button>
        <h2 class="modal-title">{{ modalTitle }}</h2>

        <!-- Success Message -->
        <div v-if="showSuccess" class="success-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I'll get back to you soon!</p>
        </div>

        <!-- Error Message -->
        <div v-if="showError" class="error-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          <h3>Something went wrong</h3>
          <p>Please try again</p>
        </div>

        <!-- Form -->
        <form v-if="!showSuccess && !showError" :action="formSubmitUrl" method="POST" @submit="handleSubmit">
          <!-- Hidden field for form type identification -->
          <input type="hidden" name="_subject" :value="emailSubject">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_captcha" value="false">

          <div class="form-group">
            <label class="form-label">Your Name</label>
            <input type="text" name="name" class="form-input" required placeholder="John Doe" v-model="formData.name">
          </div>

          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" name="email" class="form-input" required placeholder="john@example.com" v-model="formData.email">
          </div>

          <div v-if="modalType === 'employment'" class="form-group">
            <label class="form-label">Company</label>
            <input type="text" name="company" class="form-input" required placeholder="Your company name" v-model="formData.company">
          </div>

          <div v-if="modalType === 'employment'" class="form-group">
            <label class="form-label">Position Type</label>
            <input type="text" name="position_type" class="form-input" placeholder="Full-time / Contract / Part-time" v-model="formData.positionType">
          </div>

          <div v-if="modalType === 'project'" class="form-group">
            <label class="form-label">Budget Range</label>
            <input type="text" name="budget" class="form-input" placeholder="e.g., $5,000 - $10,000" v-model="formData.budget">
          </div>

          <div v-if="modalType === 'project'" class="form-group">
            <label class="form-label">Timeline</label>
            <input type="text" name="timeline" class="form-input" placeholder="e.g., 2-3 months" v-model="formData.timeline">
          </div>

          <div v-if="modalType === 'collaboration'" class="form-group">
            <label class="form-label">Project Repository</label>
            <input type="text" name="repository" class="form-input" placeholder="github.com/owner/repo" v-model="formData.repo">
          </div>

          <div class="form-group">
            <label class="form-label">{{ getMessageLabel() }}</label>
            <textarea name="message" class="form-textarea" required :placeholder="getPlaceholder()" v-model="formData.description"></textarea>
          </div>

          <button type="submit" class="form-submit" :disabled="isSubmitting">
            <span v-if="isSubmitting">Sending...</span>
            <span v-else>{{ submitButtonText }}</span>
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
  modalType: 'employment' | 'project' | 'collaboration'
}>()

const emit = defineEmits<{
  close: []
}>()

const formData = ref({
  name: '',
  email: '',
  company: '',
  positionType: '',
  budget: '',
  timeline: '',
  repo: '',
  description: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// FormSubmit endpoint - replace with your actual FormSubmit email hash
// Get your hash from https://formsubmit.co/
const formSubmitUrl = 'https://formsubmit.co/ezzedinahmedm@gmail.com'

const modalTitle = computed(() => {
  const titles = {
    employment: 'Employment Opportunity',
    project: 'Project Inquiry',
    collaboration: 'Open Source Collaboration'
  }
  return titles[props.modalType]
})

const emailSubject = computed(() => {
  const subjects = {
    employment: 'New Employment Opportunity - Portfolio Contact',
    project: 'New Project Inquiry - Portfolio Contact',
    collaboration: 'New Open Source Collaboration Request - Portfolio Contact'
  }
  return subjects[props.modalType]
})

const submitButtonText = computed(() => {
  const buttons = {
    employment: 'Submit Opportunity',
    project: 'Request Quote',
    collaboration: 'Send Request'
  }
  return buttons[props.modalType]
})

const getMessageLabel = () => {
  const labels = {
    employment: 'Job Details',
    project: 'Project Description',
    collaboration: 'What would you like help with?'
  }
  return labels[props.modalType]
}

const getPlaceholder = () => {
  const placeholders = {
    employment: 'Describe the role, responsibilities, and what you\'re looking for...',
    project: 'Describe your project, technical requirements, and what you\'re trying to achieve...',
    collaboration: 'Describe the contribution you\'re looking for...'
  }
  return placeholders[props.modalType]
}

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  isSubmitting.value = true

  const form = event.target as HTMLFormElement

  try {
    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      showSuccess.value = true
      resetForm()
      setTimeout(() => {
        showSuccess.value = false
        emit('close')
      }, 3000)
    } else {
      showError.value = true
      setTimeout(() => {
        showError.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Form submission error:', error)
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    company: '',
    positionType: '',
    budget: '',
    timeline: '',
    repo: '',
    description: ''
  }
}

const handleBackdropClick = () => {
  if (!isSubmitting.value) {
    emit('close')
  }
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    showSuccess.value = false
    showError.value = false
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 17, 23, 0.9);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: fadeIn 0.3s;
}

.modal-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: var(--text-primary);
}

.modal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: block;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 6px;
  color: var(--text-primary);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  font-family: 'JetBrains Mono', monospace;
  width: 100%;
  padding: 0.875rem;
  background: var(--accent-primary);
  border: none;
  border-radius: 6px;
  color: var(--bg-primary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.form-submit:hover {
  background: var(--accent-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 166, 255, 0.3);
}

.form-submit:hover {
  background: var(--accent-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 166, 255, 0.3);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Success and Error Messages */
.success-message,
.error-message {
  text-align: center;
  padding: 2rem;
  animation: slideUp 0.3s;
}

.success-message svg {
  color: var(--success);
  margin-bottom: 1rem;
}

.error-message svg {
  color: #f85149;
  margin-bottom: 1rem;
}

.success-message h3,
.error-message h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.success-message p,
.error-message p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .modal-content {
    padding: 2rem;
  }
}
</style>
