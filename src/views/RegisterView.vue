<template>
  <section class="section">
    <div class="container reg-grid">

      <!-- Left: info -->
      <div class="reg-info">
        <p class="tag">{{ t("Ro'yxatdan o'tish", 'Register') }}</p>
        <h1 class="headline">{{ t('Birinchi qadamni qo\'ying', 'Take the first step') }}</h1>
        <div class="divider"></div>
        <p style="color:var(--muted); line-height:1.8; margin-bottom:2rem">
          {{ t(
            'Ro\'yxatdan o\'tgach, biz siz bilan 24 soat ichida bog\'lanamiz. Bepul daraja testi va konsultatsiya o\'tkazamiz.',
            'After registering, we will contact you within 24 hours for a free level test and consultation.'
          ) }}
        </p>

        <div class="steps">
          <div class="step" v-for="(s, i) in steps" :key="i">
            <span class="step-num">{{ i + 1 }}</span>
            <div>
              <strong>{{ t(s.titleUz, s.titleEn) }}</strong>
              <p>{{ t(s.descUz, s.descEn) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: form -->
      <div class="form-card card">
        <h2 class="form-title">{{ t('Ma\'lumotlaringizni kiriting', 'Enter your details') }}</h2>

        <form @submit.prevent="submit" novalidate>
          <!-- Name -->
          <div class="field">
            <label>{{ t('Ism va familya', 'Full name') }} *</label>
            <input v-model="form.name" type="text"
              :placeholder="t('Abdullayev Jasur', 'John Smith')"
              :class="{ err: errors.name }" />
            <span class="err-msg" v-if="errors.name">{{ errors.name }}</span>
          </div>

          <!-- Phone -->
          <div class="field">
            <label>{{ t('Telefon raqam', 'Phone number') }} *</label>
            <input v-model="form.phone" type="tel"
              placeholder="+998 90 000 00 00"
              :class="{ err: errors.phone }" />
            <span class="err-msg" v-if="errors.phone">{{ errors.phone }}</span>
          </div>

          <!-- Email -->
          <div class="field">
            <label>Email *</label>
            <input v-model="form.email" type="email"
              placeholder="example@mail.com"
              :class="{ err: errors.email }" />
            <span class="err-msg" v-if="errors.email">{{ errors.email }}</span>
          </div>

          <!-- Course -->
          <div class="field">
            <label>{{ t('Kurs', 'Course') }} *</label>
            <select v-model="form.course" :class="{ err: errors.course }">
              <option value="">{{ t('Kursni tanlang', 'Select a course') }}</option>
              <option value="general">General English</option>
              <option value="ielts">IELTS</option>
              <option value="sat">SAT</option>
            </select>
            <span class="err-msg" v-if="errors.course">{{ errors.course }}</span>
          </div>

          <!-- Format -->
          <div class="field">
            <label>{{ t('Format', 'Format') }}</label>
            <div class="radio-group">
              <label class="radio-opt" v-for="f in formats" :key="f.val">
                <input type="radio" v-model="form.format" :value="f.val" />
                <span class="radio-box"></span>
                {{ t(f.uz, f.en) }}
              </label>
            </div>
          </div>

          <!-- Message -->
          <div class="field">
            <label>{{ t('Qo\'shimcha izoh', 'Additional note') }}</label>
            <textarea v-model="form.note" rows="3"
              :placeholder="t('Savollaringiz yoki istagingiz...', 'Any questions or preferences...')">
            </textarea>
          </div>

          <button type="submit" class="btn btn-gold submit-btn" :disabled="loading">
            <span v-if="!loading">{{ t('Yuborish', 'Submit') }} →</span>
            <span v-else>{{ t('Yuborilmoqda...', 'Sending...') }}</span>
          </button>
        </form>

        <transition name="fade">
          <div class="success-box" v-if="submitted">
            ✅ {{ t('Muvaffaqiyatli! Tez orada siz bilan bog\'lanamiz.', 'Success! We will contact you shortly.') }}
          </div>
        </transition>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()

const steps = [
  { titleUz: 'Formani to\'ldiring',    titleEn: 'Fill the form',      descUz: 'Ism, telefon va kurs tanlang.',                descEn: 'Enter your name, phone and choose a course.' },
  { titleUz: 'Biz qo\'ng\'iroq qilamiz', titleEn: 'We call you',      descUz: '24 soat ichida siz bilan bog\'lanamiz.',       descEn: 'We will reach you within 24 hours.' },
  { titleUz: 'Daraja testi',            titleEn: 'Level test',         descUz: 'Bepul daraja testini topshirasiz.',            descEn: 'Take a free level assessment.' },
  { titleUz: 'O\'qishni boshlaysiz',    titleEn: 'Start learning',     descUz: 'Siz uchun eng mos guruhga yo\'naltirilasiz.', descEn: 'Get placed in the right group for you.' },
]

const formats = [
  { val: 'offline', uz: 'Oflayn', en: 'In-person' },
  { val: 'online',  uz: 'Onlayn', en: 'Online' },
  { val: 'both',    uz: 'Har ikkalasi', en: 'Both' },
]

const form    = reactive({ name:'', phone:'', email:'', course:'', format:'offline', note:'' })
const errors  = reactive({ name:'', phone:'', email:'', course:'' })
const loading = ref(false)
const submitted = ref(false)

function validate() {
  errors.name   = form.name.trim()  ? '' : t('Ism kiritilishi shart', 'Name is required')
  errors.phone  = form.phone.trim() ? '' : t('Telefon kiritilishi shart', 'Phone is required')
  errors.email  = /\S+@\S+\.\S+/.test(form.email) ? '' : t('Email noto\'g\'ri', 'Invalid email')
  errors.course = form.course ? '' : t('Kursni tanlang', 'Please select a course')
  return !errors.name && !errors.phone && !errors.email && !errors.course
}

async function submit() {
  if (!validate()) return
  loading.value = true
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  submitted.value = true
  Object.keys(form).forEach(k => form[k] = k === 'format' ? 'offline' : '')
  setTimeout(() => submitted.value = false, 6000)
}
</script>

<style scoped>
.reg-grid {
  display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: start;
}
@media (max-width: 768px) { .reg-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

/* Steps */
.steps { display: flex; flex-direction: column; gap: 1.2rem; }
.step { display: flex; gap: 1rem; align-items: flex-start; }
.step-num {
  width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
  background: rgba(200,169,110,.12); border: 1px solid rgba(200,169,110,.3);
  color: var(--gold); font-size: .8rem; font-weight: 700;
  display: grid; place-items: center;
}
.step strong { display: block; color: #fff; font-size: .92rem; margin-bottom: .2rem; }
.step p { color: var(--muted); font-size: .83rem; line-height: 1.6; }

/* Form */
.form-card { padding: 2rem; }
.form-title { color: #fff; font-size: 1.1rem; font-weight: 600; margin-bottom: 1.6rem; }

.field { display: flex; flex-direction: column; gap: .38rem; margin-bottom: 1.1rem; }
label { color: var(--muted); font-size: .8rem; font-weight: 500; }

input, select, textarea {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: var(--r); color: var(--text); font-size: .92rem;
  font-family: var(--ff-body); padding: .75rem 1rem; outline: none;
  transition: border-color .2s; width: 100%;
}
input:focus, select:focus, textarea:focus { border-color: var(--gold); }
input.err, select.err { border-color: #e24b4a; }
input::placeholder, textarea::placeholder { color: var(--muted); }
select { appearance: none; cursor: pointer; }
select option { background: #13121c; }
textarea { resize: vertical; min-height: 80px; }

.err-msg { color: #e24b4a; font-size: .76rem; }

/* Radio */
.radio-group { display: flex; gap: 1rem; flex-wrap: wrap; }
.radio-opt {
  display: flex; align-items: center; gap: .5rem;
  color: var(--muted); font-size: .88rem; cursor: pointer;
}
.radio-opt input { display: none; }
.radio-box {
  width: 16px; height: 16px; border-radius: 50%;
  border: 2px solid var(--border); transition: border-color .2s, background .2s;
}
.radio-opt input:checked + .radio-box {
  border-color: var(--gold); background: var(--gold);
  box-shadow: 0 0 0 3px rgba(200,169,110,.15);
}
.radio-opt:has(input:checked) { color: var(--gold-lt); }

.submit-btn { width: 100%; justify-content: center; margin-top: .5rem; font-size: .95rem; }
.submit-btn:disabled { opacity: .6; pointer-events: none; }

.success-box {
  margin-top: 1rem; padding: .9rem 1.1rem;
  background: rgba(45,212,191,.06); border: 1px solid rgba(45,212,191,.25);
  border-radius: var(--r); color: var(--teal); font-size: .88rem; text-align: center;
}
</style>
