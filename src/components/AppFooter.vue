<template>
  <footer>
    <div class="container footer-inner">

      <div class="brand-col">
        <span class="logo">Seemy<span class="dot">.</span></span>
        <p>{{ t(
          'General English, IELTS va SAT bo\'yicha professional ingliz tili o\'quv markazi.',
          'Professional English language learning centre for General English, IELTS and SAT.'
        ) }}</p>
        <div class="socials">
          <a href="#" class="social-link" title="Telegram">✈️</a>
          <a href="#" class="social-link" title="Instagram">📸</a>
          <a href="#" class="social-link" title="YouTube">▶️</a>
        </div>
      </div>

      <div class="links-col">
        <h4>{{ t('Sahifalar', 'Pages') }}</h4>
        <ul>
          <li><router-link to="/">{{ t('Bosh sahifa', 'Home') }}</router-link></li>
          <li><router-link to="/courses">{{ t('Kurslar', 'Courses') }}</router-link></li>
          <li><router-link to="/register">{{ t("Ro'yxatdan o'tish", 'Register') }}</router-link></li>
          <li><router-link to="/faq">{{ t('Savollar', 'FAQ') }}</router-link></li>
          <li><router-link to="/contact">{{ t('Aloqa', 'Contact') }}</router-link></li>
        </ul>
      </div>

      <div class="links-col">
        <h4>{{ t('Kurslar', 'Courses') }}</h4>
        <ul>
          <li><router-link to="/courses">General English</router-link></li>
          <li><router-link to="/courses">IELTS</router-link></li>
          <li><router-link to="/courses">SAT</router-link></li>
        </ul>
      </div>

      <div class="links-col">
        <h4>{{ t('Aloqa', 'Contact') }}</h4>
        <ul>
          <li><a href="tel:+998712345678">+998 71 234 56 78</a></li>
          <li><a href="mailto:info@seemy.uz">info@seemy.uz</a></li>
          <li><a href="https://t.me/seemyacademy" target="_blank">@seemyacademy</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} <span class="gold">Seemy Academy</span>. {{ t('Barcha huquqlar himoyalangan.', 'All rights reserved.') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLang } from '@/composables/useLang.js'
const { t } = useLang()
</script>

<style scoped>
footer { border-top: 1px solid var(--border); background: var(--bg-1); }

.footer-inner {
  display: flex; gap: 3rem; flex-wrap: wrap;
  padding-top: 3.5rem; padding-bottom: 3rem;
}

.brand-col { flex: 1.5; min-width: 200px; }
.logo {
  font-family: var(--ff-display); font-size: 1.4rem; font-weight: 900; color: #fff;
  display: block; margin-bottom: .9rem;
}
.dot { color: var(--gold); }
.brand-col p { color: var(--muted); font-size: .88rem; line-height: 1.75; max-width: 250px; margin-bottom: 1.2rem; }

.socials { display: flex; gap: .6rem; }
.social-link {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid var(--border); display: grid; place-items: center;
  font-size: .9rem; transition: border-color .2s;
}
.social-link:hover { border-color: var(--gold); }

.links-col { min-width: 130px; }
.links-col h4 { color: #fff; font-size: .82rem; font-weight: 600; letter-spacing:.06em; text-transform:uppercase; margin-bottom: 1rem; }
.links-col ul li { margin-bottom: .5rem; }
.links-col ul li a { color: var(--muted); font-size: .88rem; transition: color .2s; }
.links-col ul li a:hover { color: var(--gold-lt); }

.footer-bottom { border-top: 1px solid var(--border); padding: 1.2rem 0; }
.footer-bottom p { color: var(--muted); font-size: .82rem; text-align: center; }
.gold { color: var(--gold); }
</style>
