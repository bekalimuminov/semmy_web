<template>
  <div class="card course-card">
    <div class="course-icon" :style="{ background: `${course.color}15`, borderColor: `${course.color}30` }">
      {{ course.icon }}
    </div>
    <span class="course-tag" :style="{ color: course.color }">
      {{ t(course.tagUz, course.tagEn) }}
    </span>
    <h3>{{ t(course.titleUz, course.titleEn) }}</h3>
    <p>{{ t(course.descUz, course.descEn) }}</p>

    <div class="levels">
      <span class="level-chip" v-for="lv in course.levels" :key="lv">{{ lv }}</span>
    </div>

    <div class="course-meta">
      <div class="meta-item">
        <span class="meta-label">{{ t('Davomiyligi', 'Duration') }}</span>
        <span class="meta-val">{{ t(course.durationUz, course.durationEn) }}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">{{ t('Narxi', 'Price') }}</span>
        <span class="meta-val gold">{{ t(course.priceUz, course.priceEn) }}</span>
      </div>
    </div>

    <router-link to="/register" class="btn btn-outline enroll-btn">
      {{ t("Yozilish →", 'Enroll →') }}
    </router-link>
  </div>
</template>

<script setup>
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()
defineProps({ course: { type: Object, required: true } })
</script>

<style scoped>
.course-card { display: flex; flex-direction: column; gap: .65rem; }

.course-icon {
  width: 52px; height: 52px; border-radius: 12px; border: 1px solid;
  display: grid; place-items: center; font-size: 1.5rem; margin-bottom: .2rem;
}

.course-tag { font-size: .72rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }

h3 { font-family: var(--ff-display); font-size: 1.35rem; color: #fff; font-weight: 700; }

p { color: var(--muted); font-size: .88rem; line-height: 1.7; flex: 1; }

.levels { display: flex; gap: .4rem; flex-wrap: wrap; margin-top: .3rem; }
.level-chip {
  background: var(--bg-2); border: 1px solid var(--border);
  color: var(--muted); font-size: .72rem; padding: .2rem .6rem;
  border-radius: 999px;
}

.course-meta {
  display: flex; justify-content: space-between;
  padding-top: .8rem; border-top: 1px solid var(--border);
  margin-top: .3rem;
}
.meta-item { display: flex; flex-direction: column; gap: .15rem; }
.meta-label { color: var(--muted); font-size: .72rem; text-transform: uppercase; letter-spacing:.06em; }
.meta-val { font-size: .9rem; font-weight: 600; color: var(--text); }
.meta-val.gold { color: var(--gold); }

.enroll-btn { justify-content: center; margin-top: .4rem; font-size: .88rem; padding: .65rem 1rem; }
</style>
