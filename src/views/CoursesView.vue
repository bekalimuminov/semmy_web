<template>
  <section class="section">
    <div class="container">
      <p class="tag">{{ t('Kurslar', 'Courses') }}</p>
      <h1 class="headline">{{ t('Barcha kurslarimiz', 'All our courses') }}</h1>
      <p class="sub">{{ t(
        'Har bir kurs sizning maqsadingizga erishish uchun puxta ishlab chiqilgan.',
        'Every course is carefully designed to help you reach your goal.'
      ) }}</p>

      <div class="courses-grid">
        <CourseCard v-for="c in courses" :key="c.id" :course="c" />
      </div>

      <!-- Payment info strip -->
      <div class="payment-strip">
        <div class="pay-item" v-for="p in payInfo" :key="p.iconUz">
          <span class="pay-icon">{{ p.icon }}</span>
          <span>{{ t(p.textUz, p.textEn) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CourseCard from '@/components/CourseCard.vue'
import { courses } from '@/assets/courses.js'
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()

const payInfo = [
  { icon:'💳', textUz:'Har oylik to\'lov',          textEn:'Monthly payment' },
  { icon:'📱', textUz:'Payme va Click qabul qilinadi', textEn:'Payme and Click accepted' },
  { icon:'🎁', textUz:'Birinchi dars bepul',         textEn:'First lesson is free' },
  { icon:'🔄', textUz:'Natija bo\'lmasa — pul qaytadi', textEn:'No result — full refund' },
]
</script>

<style scoped>
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.3rem;
  margin-bottom: 3rem;
}

.payment-strip {
  display: flex; flex-wrap: wrap; gap: 1rem;
  background: var(--bg-1); border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 1.5rem 2rem;
}
.pay-item {
  display: flex; align-items: center; gap: .6rem;
  color: var(--muted); font-size: .88rem; flex: 1; min-width: 180px;
}
.pay-icon { font-size: 1.1rem; }
</style>
