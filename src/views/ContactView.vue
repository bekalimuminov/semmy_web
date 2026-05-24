<template>
  <section class="section">
    <div class="container contact-grid">

      <!-- Left: contact info -->
      <div class="contact-info">
        <p class="tag">{{ t('Aloqa', 'Contact') }}</p>
        <h1 class="headline">{{ t('Biz bilan bog\'laning', 'Get in touch') }}</h1>
        <div class="divider"></div>
        <p style="color:var(--muted); line-height:1.8; margin-bottom:2.5rem">
          {{ t(
            'Savollaringiz bormi yoki kurs haqida ko\'proq bilmoqchimisiz? Qulay yo\'l bilan murojaat qiling.',
            'Have questions or want to know more about a course? Reach us through your preferred channel.'
        ) }}
        </p>

        <div class="contact-channels">
          <a href="tel:+998908572700" class="channel-card">
            <div class="ch-icon" style="background: rgba(45,212,191,.1); border-color: rgba(45,212,191,.25);">📞</div>
            <div>
              <span class="ch-label">{{ t('Telefon', 'Phone') }}</span>
              <span class="ch-val">+998 90 857 27 00</span>
            </div>
          </a>

          <a href="mailto:seemyacademy@gmail.com" class="channel-card">
            <div class="ch-icon" style="background: rgba(200,169,110,.1); border-color: rgba(200,169,110,.25);">✉️</div>
            <div>
              <span class="ch-label">Email</span>
              <span class="ch-val">seemyacademy@gmail.com</span>
            </div>
          </a>

          <a href="https://t.me/Seemy_admin" target="_blank" class="channel-card">
            <div class="ch-icon" style="background: rgba(41,182,246,.1); border-color: rgba(41,182,246,.25);">✈️</div>
            <div>
              <span class="ch-label">Telegram</span>
              <span class="ch-val">@seemyacademy</span>
            </div>
          </a>
        </div>

        <div class="working-hours">
          <h4>{{ t('Ish vaqtimiz', 'Working hours') }}</h4>
          <div class="hours-row" v-for="h in hours" :key="h.dayUz">
            <span>{{ t(h.dayUz, h.dayEn) }}</span>
            <span class="hours-time">{{ h.time }}</span>
          </div>
        </div>
      </div>

      <!-- Right: quick message form -->
      <div class="form-card card">
        <h2 class="form-title">{{ t('Xabar qoldiring', 'Leave a message') }}</h2>

        <form @submit.prevent="submit" novalidate>
          <div class="field">
            <label>{{ t('Ismingiz', 'Your name') }} *</label>
            <input v-model="form.name" type="text"
                   :placeholder="t('Jasur', 'John')"
                   :class="{ err: errors.name }" />
            <span class="err-msg" v-if="errors.name">{{ errors.name }}</span>
          </div>

          <div class="field">
            <label>{{ t('Telefon yoki Telegram', 'Phone or Telegram') }} *</label>
            <input v-model="form.contact" type="text"
                   placeholder="+998 90 000 00 00 / @username"
                   :class="{ err: errors.contact }" />
            <span class="err-msg" v-if="errors.contact">{{ errors.contact }}</span>
          </div>

          <div class="field">
            <label>{{ t('Xabar', 'Message') }} *</label>
            <textarea v-model="form.message" rows="5"
                      :placeholder="t('Savolingizni yozing...', 'Write your question...')"
                      :class="{ err: errors.message }">
            </textarea>
            <span class="err-msg" v-if="errors.message">{{ errors.message }}</span>
          </div>

          <button type="submit" class="btn btn-gold submit-btn" :disabled="loading">
            <span v-if="!loading">{{ t('Yuborish', 'Send') }} →</span>
            <span v-else>{{ t('Yuborilmoqda...', 'Sending...') }}</span>
          </button>
        </form>

        <transition name="fade">
          <div class="success-box" v-if="submitted">
            ✅ {{ t('Xabaringiz qabul qilindi! Tez orada javob beramiz.', 'Message received! We will reply shortly.') }}
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

const hours = [
  { dayUz: 'Dushanba – Shanba',  dayEn: 'Monday – Friday',  time: '09:00 – 20:00' },
  { dayUz: 'Yakshanba',        dayEn: 'Sunday',            time: t('Dam olish kuni', 'Closed') },
]

const BOT_TOKEN = '8854523325:AAHaFQOYiVc2R8HZrjHlUs7Tz1i001L8kp4'
const CHAT_ID   = '6572829497'

const form    = reactive({ name:'', contact:'', message:'' })
const errors  = reactive({ name:'', contact:'', message:'' })
const loading = ref(false)
const submitted = ref(false)

function validate() {
  errors.name    = form.name.trim()    ? '' : t('Ism kiritilishi shart', 'Name is required')
  errors.contact = form.contact.trim() ? '' : t('Telefon yoki Telegram kiritilishi shart', 'Contact is required')
  errors.message = form.message.trim() ? '' : t('Xabar kiritilishi shart', 'Message is required')
  return !errors.name && !errors.contact && !errors.message
}

async function submit() {
  if (!validate()) return
  loading.value = true

  const text = `
📩 *Yangi xabar (Aloqa sahifasi)*

👤 *Ism:* ${form.name}
📞 *Telefon/Telegram:* ${form.contact}
💬 *Xabar:* ${form.message}
  `.trim()

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' })
    })
    submitted.value = true
    form.name = ''; form.contact = ''; form.message = ''
  } catch (e) {
    console.error('Telegram xato:', e)
  }

  loading.value = false
  setTimeout(() => submitted.value = false, 6000)
}
</script>

<style scoped>
.contact-grid {
  display: grid; grid-template-columns: 1fr 1.1fr; gap: 4rem; align-items: start;
}
@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

/* Channels */
.contact-channels { display: flex; flex-direction: column; gap: .8rem; margin-bottom: 2.5rem; }

.channel-card {
  display: flex; align-items: center; gap: 1rem;
  background: var(--bg-1); border: 1px solid var(--border); border-radius: var(--r-lg);
  padding: 1rem 1.2rem; transition: border-color .2s;
}
.channel-card:hover { border-color: var(--border-hover); }

.ch-icon {
  width: 44px; height: 44px; border-radius: 10px; border: 1px solid;
  display: grid; place-items: center; font-size: 1.2rem; flex-shrink: 0;
}
.ch-label { display: block; color: var(--muted); font-size: .75rem; margin-bottom: .15rem; }
.ch-val   { display: block; color: #fff; font-size: .9rem; font-weight: 500; }

/* Working hours */
.working-hours {
  background: var(--bg-1); border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 1.3rem 1.5rem;
}
.working-hours h4 { color: #fff; font-size: .88rem; font-weight: 600; margin-bottom: 1rem; }
.hours-row {
  display: flex; justify-content: space-between;
  color: var(--muted); font-size: .85rem; padding: .4rem 0;
  border-bottom: 1px solid var(--border);
}
.hours-row:last-child { border: none; }
.hours-time { color: var(--text); font-weight: 500; }

/* Form */
.form-card { padding: 2rem; }
.form-title { color: #fff; font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; }

.field { display: flex; flex-direction: column; gap: .38rem; margin-bottom: 1.1rem; }
label { color: var(--muted); font-size: .8rem; font-weight: 500; }

input, textarea {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: var(--r); color: var(--text); font-size: .92rem;
  font-family: var(--ff-body); padding: .75rem 1rem; outline: none;
  transition: border-color .2s; width: 100%;
}
input:focus, textarea:focus { border-color: var(--gold); }
input.err, textarea.err { border-color: #e24b4a; }
input::placeholder, textarea::placeholder { color: var(--muted); }
textarea { resize: vertical; }

.err-msg { color: #e24b4a; font-size: .76rem; }
.submit-btn { width: 100%; justify-content: center; margin-top: .4rem; }
.submit-btn:disabled { opacity: .6; pointer-events: none; }

.success-box {
  margin-top: 1rem; padding: .9rem 1.1rem;
  background: rgba(45,212,191,.06); border: 1px solid rgba(45,212,191,.25);
  border-radius: var(--r); color: var(--teal); font-size: .88rem; text-align: center;
}
</style>