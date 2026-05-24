<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">

      <!-- Logo -->
      <router-link to="/" class="logo">
        Seemy<span>.</span>
      </router-link>

      <!-- Desktop links -->
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" @click="menuOpen = false">
            {{ t(link.uz, link.en) }}
          </router-link>
        </li>
      </ul>

      <!-- Right side -->
      <div class="nav-right">
        <!-- Lang toggle -->
        <button class="lang-toggle" @click="toggleLang" :title="isUz ? 'Switch to English' : 'O\'zbekchaga o\'tish'">
          {{ isUz ? 'EN' : 'UZ' }}
        </button>

        <router-link to="/register" class="btn btn-gold nav-cta" @click="menuOpen = false">
          {{ t("Ro'yxatdan o'tish", 'Register') }}
        </router-link>

        <!-- Burger -->
        <button class="burger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
          <span /><span /><span />
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <transition name="slide">
      <div class="mobile-menu" v-if="menuOpen">
        <ul>
          <li v-for="link in links" :key="link.to">
            <router-link :to="link.to" @click="menuOpen = false">
              {{ t(link.uz, link.en) }}
            </router-link>
          </li>
          <li>
            <router-link to="/register" @click="menuOpen = false" class="mobile-cta">
              {{ t("Ro'yxatdan o'tish", 'Register') }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '@/composables/useLang.js'

const { isUz, toggleLang, t } = useLang()

const isScrolled = ref(false)
const menuOpen   = ref(false)

const links = [
  { to: '/',         uz: 'Bosh sahifa',  en: 'Home' },
  { to: '/courses',  uz: 'Kurslar',      en: 'Courses' },
  { to: '/faq',      uz: 'Savollar',     en: 'FAQ' },
  { to: '/contact',  uz: 'Aloqa',        en: 'Contact' },
]

function onScroll() { isScrolled.value = window.scrollY > 50 }
onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
nav {
  position: sticky; top: 0; z-index: 200;
  border-bottom: 1px solid transparent;
  transition: background .3s, border-color .3s, backdrop-filter .3s;
}
nav.scrolled {
  background: rgba(8,8,16,.92);
  backdrop-filter: blur(16px);
  border-color: var(--border);
}

.nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 1.1rem; padding-bottom: 1.1rem;
}

/* Logo */
.logo { display: flex; align-items: center; font-family: var(--ff-display); font-size: 1.55rem; font-weight: 900; color: #fff; letter-spacing: -.01em; }
.logo span { color: var(--gold); }

/* Nav links */
.nav-links { display: flex; gap: 2rem; }
.nav-links a {
  color: var(--muted); font-size: .9rem; font-weight: 500;
  position: relative; transition: color .2s;
}
.nav-links a::after {
  content:''; position:absolute; bottom:-4px; left:0;
  width:0; height:1px; background:var(--gold); transition:width .25s;
}
.nav-links a:hover, .nav-links a.router-link-active { color: var(--text); }
.nav-links a.router-link-exact-active::after { width:100%; }

/* Right */
.nav-right { display:flex; align-items:center; gap:.9rem; }

.lang-toggle {
  background: var(--bg-2); border: 1px solid var(--border);
  color: var(--muted); border-radius: 6px;
  padding: .35rem .75rem; font-size: .78rem; font-weight: 600;
  letter-spacing:.08em; transition: all .2s;
}
.lang-toggle:hover { border-color: var(--gold); color: var(--gold); }

.nav-cta { padding: .55rem 1.2rem; font-size: .85rem; }

/* Burger */
.burger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; padding: 4px;
}
.burger span {
  display:block; width:22px; height:2px;
  background:var(--text); border-radius:2px; transition:transform .25s, opacity .25s;
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  background: var(--bg-1); border-top: 1px solid var(--border);
  padding: 1rem 1.5rem 1.5rem;
}
.mobile-menu ul { display:flex; flex-direction:column; gap:.1rem; }
.mobile-menu li a {
  display:block; padding:.7rem 0;
  border-bottom:1px solid var(--border); color:var(--muted); font-size:.95rem;
}
.mobile-menu li:last-child a { border:none; }
.mobile-cta {
  display:inline-block; background:var(--gold); color:#0a0a14 !important;
  padding:.65rem 1.4rem !important; border-radius:var(--r); font-weight:600;
  margin-top:.5rem; border:none !important;
}

/* Slide transition */
.slide-enter-active, .slide-leave-active { transition: all .25s ease; }
.slide-enter-from, .slide-leave-to { opacity:0; transform:translateY(-8px); }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .burger { display: flex; }
}
</style>