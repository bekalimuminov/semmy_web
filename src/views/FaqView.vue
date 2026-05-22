<template>
  <section class="section">
    <div class="container faq-grid">

      <!-- Left -->
      <div class="faq-intro">
        <p class="tag">FAQ</p>
        <h1 class="headline">{{ t('Ko\'p so\'raladigan savollar', 'Frequently Asked Questions') }}</h1>
        <div class="divider"></div>
        <p style="color:var(--muted); line-height:1.8; margin-bottom:2rem">
          {{ t(
            'Javob topa olmadingizmi? Biz bilan bog\'laning.',
            'Didn\'t find an answer? Get in touch with us.'
          ) }}
        </p>
        <router-link to="/contact" class="btn btn-outline">
          {{ t('Savol yuborish', 'Ask a question') }} →
        </router-link>
      </div>

      <!-- Right: accordion -->
      <div class="faq-list">
        <div
          class="faq-item"
          v-for="(item, i) in faqs"
          :key="i"
          :class="{ open: openIdx === i }"
          @click="toggle(i)"
        >
          <div class="faq-q">
            <span>{{ item.q }}</span>
            <span class="faq-icon">{{ openIdx === i ? '−' : '+' }}</span>
          </div>
          <transition name="expand">
            <div class="faq-a" v-if="openIdx === i">
              <p>{{ item.a }}</p>
            </div>
          </transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { faqsUz, faqsEn } from '@/assets/courses.js'
import { useLang } from '@/composables/useLang.js'

const { t, isUz } = useLang()
const openIdx = ref(null)

const faqs = computed(() => isUz.value ? faqsUz : faqsEn)

function toggle(i) {
  openIdx.value = openIdx.value === i ? null : i
}
</script>

<style scoped>
.faq-grid {
  display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start;
}
@media (max-width: 768px) { .faq-grid { grid-template-columns: 1fr; gap: 2rem; } }

.faq-list { display: flex; flex-direction: column; gap: .6rem; }

.faq-item {
  background: var(--bg-1); border: 1px solid var(--border);
  border-radius: var(--r-lg); overflow: hidden;
  transition: border-color .2s; cursor: pointer;
}
.faq-item.open { border-color: var(--border-hover); }

.faq-q {
  display: flex; justify-content: space-between; align-items: center;
  gap: 1rem; padding: 1.2rem 1.4rem;
  color: var(--text); font-weight: 500; font-size: .95rem;
  user-select: none;
}
.faq-icon {
  font-size: 1.3rem; color: var(--gold); flex-shrink: 0;
  width: 24px; text-align: center;
}

.faq-a { padding: 0 1.4rem 1.2rem; }
.faq-a p { color: var(--muted); font-size: .9rem; line-height: 1.75; }

/* Expand animation */
.expand-enter-active, .expand-leave-active { transition: all .28s ease; overflow: hidden; }
.expand-enter-from, .expand-leave-to { opacity: 0; max-height: 0; }
.expand-enter-to, .expand-leave-from { opacity: 1; max-height: 200px; }
</style>
