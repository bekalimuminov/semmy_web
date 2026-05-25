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
          <a href="#" class="social-link" title="Telegram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.12 14.851l-2.95-.924c-.64-.203-.654-.64.136-.954l11.5-4.433c.537-.194 1.006.131.756.708z"/></svg>
          </a>
          <a href="#" class="social-link" title="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" class="social-link" title="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
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