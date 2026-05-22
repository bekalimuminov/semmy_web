<template>
  <div>

    <!-- ── HERO ── -->
    <section class="hero">
      <div class="hero-bg-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
      </div>
      <div class="container hero-inner">
        <div class="hero-text">
          <p class="tag">{{ t('Til o\'rganish yangi darajada', 'Language learning, elevated') }}</p>
          <h1>
            {{ t('Ingliz tilini', 'Master English') }}<br />
            <em>{{ t('professional darajada', 'at a professional level') }}</em><br />
            {{ t('o\'rganing', '') }}
          </h1>
          <p class="sub">
            {{ t(
              'General English, IELTS va SAT kurslari orqali dunyo eshiklarini oching. Kichik guruhlar, tajribali o\'qituvchilar.',
              'Open doors to the world through General English, IELTS and SAT courses. Small groups, expert teachers.'
            ) }}
          </p>
          <div class="hero-btns">
            <router-link to="/courses" class="btn btn-gold">
              {{ t('Kurslarni ko\'rish', 'View Courses') }} →
            </router-link>
            <router-link to="/register" class="btn btn-outline">
              {{ t('Bepul sinov darsi', 'Free Trial Lesson') }}
            </router-link>
          </div>
        </div>

        <div class="hero-card-group">
          <div class="floating-card fc-1">
            <span class="fc-icon">🎯</span>
            <div>
              <strong>IELTS Band 7.5</strong>
              <span>{{ t('muvaffaqiyatli topshirildi', 'successfully achieved') }}</span>
            </div>
          </div>
          <div class="hero-badge-main">
            <div class="badge-ring">
              <span class="badge-num">5<sup>+</sup></span>
              <span class="badge-label">{{ t('Muvaffaqiyatli bitiruvchilar', 'Successful graduates') }}</span>
            </div>
          </div>
          <div class="floating-card fc-2">
            <span class="fc-icon">📐</span>
            <div>
              <strong>SAT 1480</strong>
              <span>{{ t('ball olindi', 'score achieved') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── STATS BAR ── -->
    <div class="stats-bar">
      <div class="container stats-inner">
        <div class="stat" v-for="s in stats" :key="s.labelUz">
          <span class="stat-num">{{ s.num }}</span>
          <span class="stat-label">{{ t(s.labelUz, s.labelEn) }}</span>
        </div>
      </div>
    </div>

    <!-- ── COURSES ── -->
    <section class="section">
      <div class="container">
        <p class="tag">{{ t('Bizning kurslar', 'Our Courses') }}</p>
        <div class="section-header">
          <h2 class="headline">{{ t('Qaysi yo\'nalish sizga mos?', 'Which path suits you?') }}</h2>
          <router-link to="/courses" class="btn btn-outline see-all">
            {{ t('Barchasini ko\'rish', 'See all') }} →
          </router-link>
        </div>
        <div class="divider"></div>
        <div class="courses-grid">
          <CourseCard v-for="c in courses" :key="c.id" :course="c" />
        </div>
      </div>
    </section>

    <!-- ── WHY SEEMY ── -->
    <section class="section why-section">
      <div class="container">
        <p class="tag">{{ t('Nima uchun biz?', 'Why Seemy?') }}</p>
        <h2 class="headline">{{ t('Farqimiz nima', 'What sets us apart') }}</h2>
        <div class="divider"></div>
        <div class="why-grid">
          <div class="why-item" v-for="w in whyItems" :key="w.iconUz">
            <div class="why-num">{{ w.num }}</div>
            <h4>{{ t(w.titleUz, w.titleEn) }}</h4>
            <p>{{ t(w.descUz, w.descEn) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="cta-section">
      <div class="container cta-inner">
        <div class="cta-text">
          <h2 class="headline" style="margin-bottom:.6rem">
            {{ t('Bugun boshlang', 'Start today') }}
          </h2>
          <p style="color:var(--muted); max-width:380px; line-height:1.75">
            {{ t(
              'Bepul daraja testi va konsultatsiya uchun hoziroq ro\'yxatdan o\'ting.',
              'Register now for a free level test and consultation.'
            ) }}
          </p>
        </div>
        <router-link to="/register" class="btn btn-gold cta-btn">
          {{ t("Ro'yxatdan o'tish", 'Register') }} →
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import CourseCard from '@/components/CourseCard.vue'
import { courses } from '@/assets/courses.js'
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()

const stats = [
  { num: '5+', labelUz: 'Bitiruvchilar',         labelEn: 'Graduates' },
  { num: '6–8',  labelUz: 'Kishi / guruh',          labelEn: 'Students / group' },
  { num: '95%',  labelUz: 'Maqsadga erishganlar',   labelEn: 'Goals achieved' },
  { num: '3+',   labelUz: 'Yillik tajriba',          labelEn: 'Years of experience' },
]

const whyItems = [
  { num:'01', titleUz:'Kichik guruhlar',    titleEn:'Small groups',       descUz:'6–8 kishilik guruh har bir o\'quvchiga alohida e\'tibor berish imkonini beradi.',           descEn:'Groups of 6–8 give every student individual attention.' },
  { num:'02', titleUz:'Tajribali ustozlar', titleEn:'Expert teachers',    descUz:'Barcha o\'qituvchilarimiz xalqaro sertifikatlarga ega va IELTS/SAT bo\'yicha ixtisoslashgan.', descEn:'All teachers hold international certificates and specialize in IELTS/SAT.' },
  { num:'03', titleUz:'Kafolatlangan natija',titleEn:'Guaranteed results', descUz:'IELTS uchun Band 6.5+, SAT uchun 1400+ ball kafolatlaymiz yoki pul qaytaramiz.',          descEn:'We guarantee IELTS Band 6.5+ and SAT 1400+ or your money back.' },
  { num:'04', titleUz:'Qulay jadval',       titleEn:'Flexible schedule',   descUz:'Ertalab, kechki va hafta oxiri guruhlar. Onlayn va oflayn formatda.',                       descEn:'Morning, evening and weekend groups. Online and in-person formats.' },
]
</script>

<style scoped>
/* ── HERO ── */
.hero {
  position: relative; overflow: hidden;
  padding: 7rem 0 5rem;
}
.hero-bg-orbs { position:absolute; inset:0; pointer-events:none; }
.orb {
  position:absolute; border-radius:50%;
  filter: blur(80px); opacity: .18;
}
.orb-1 { width:500px; height:500px; background:var(--gold); top:-100px; right:-100px; }
.orb-2 { width:350px; height:350px; background:#6366f1; bottom:-80px; left:10%; }

.hero-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
}
@media (max-width: 768px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-card-group { display: none; }
}

.hero h1 {
  font-family: var(--ff-display); font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 900; color: #fff; line-height: 1.08; margin-bottom: 1.2rem;
}
.hero h1 em { color: var(--gold); font-style: italic; }

.hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Floating cards */
.hero-card-group {
  position: relative; height: 340px; display: flex;
  align-items: center; justify-content: center;
}
.hero-badge-main {
  width: 200px; height: 200px; border-radius: 50%;
  border: 1px solid var(--border);
  background: radial-gradient(circle, var(--bg-2), var(--bg));
  display: grid; place-items: center; text-align: center;
  box-shadow: 0 0 60px rgba(200,169,110,.08);
}
.badge-num {
  font-family: var(--ff-display); font-size: 2.6rem; font-weight: 900; color: var(--gold); display: block;
}
.badge-num sup { font-size: 1rem; }
.badge-label { color: var(--muted); font-size: .75rem; line-height: 1.4; padding: 0 1rem; display: block; }

.floating-card {
  position: absolute; display: flex; align-items: center; gap: .7rem;
  background: var(--bg-1); border: 1px solid var(--border); border-radius: 12px;
  padding: .75rem 1rem; font-size: .82rem;
  box-shadow: 0 8px 32px rgba(0,0,0,.4);
}
.floating-card .fc-icon { font-size: 1.3rem; }
.floating-card strong { display: block; color: #fff; font-weight: 600; }
.floating-card span { color: var(--muted); }
.fc-1 { top: 30px; left: -20px; animation: float 4s ease-in-out infinite; }
.fc-2 { bottom: 30px; right: -20px; animation: float 4s ease-in-out infinite reverse; }
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

/* ── STATS BAR ── */
.stats-bar {
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  background: var(--bg-1);
}
.stats-inner {
  display: flex; justify-content: center; gap: 4rem; flex-wrap: wrap;
  padding: 2rem 0;
}
.stat { text-align: center; }
.stat-num {
  display: block; font-family: var(--ff-display);
  font-size: 2rem; font-weight: 800; color: var(--gold);
}
.stat-label { color: var(--muted); font-size: .82rem; }

/* ── COURSES ── */
.section-header {
  display: flex; align-items: flex-end; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem; margin-bottom: .5rem;
}
.see-all { font-size: .85rem; padding: .55rem 1.2rem; }
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.2rem;
}

/* ── WHY ── */
.why-section {
  background: var(--bg-1);
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.why-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem;
}
.why-item {
  background: var(--bg-2); border: 1px solid var(--border); border-radius: var(--r-lg);
  padding: 1.8rem 1.5rem; transition: border-color .2s;
}
.why-item:hover { border-color: var(--border-hover); }
.why-num {
  font-family: var(--ff-display); font-size: 2.2rem; font-weight: 900;
  color: var(--border-hover); margin-bottom: .6rem;
}
.why-item h4 { color: #fff; font-size: 1rem; font-weight: 600; margin-bottom: .5rem; }
.why-item p { color: var(--muted); font-size: .85rem; line-height: 1.7; }

/* ── CTA ── */
.cta-section {
  padding: 4.5rem 0;
  background: radial-gradient(ellipse 70% 100% at 50% 100%, rgba(200,169,110,.07) 0%, transparent 70%);
  border-top: 1px solid var(--border);
}
.cta-inner {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 2rem;
}
.cta-btn { padding: 1rem 2.2rem; font-size: 1rem; }
</style>
