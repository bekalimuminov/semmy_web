import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import HomeView      from './views/HomeView.vue'
import CoursesView   from './views/CoursesView.vue'
import RegisterView  from './views/RegisterView.vue'
import FaqView       from './views/FaqView.vue'
import ContactView   from './views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',          component: HomeView,     meta: { titleUz: 'Bosh sahifa',        titleEn: 'Home' } },
    { path: '/courses',   component: CoursesView,  meta: { titleUz: 'Kurslar',            titleEn: 'Courses' } },
    { path: '/register',  component: RegisterView, meta: { titleUz: "Ro'yxatdan o'tish",  titleEn: 'Register' } },
    { path: '/faq',       component: FaqView,      meta: { titleUz: 'Savollar',           titleEn: 'FAQ' } },
    { path: '/contact',   component: ContactView,  meta: { titleUz: 'Aloqa',              titleEn: 'Contact' } },
  ],
  scrollBehavior: () => ({ top: 0 })
})

createApp(App).use(router).mount('#app')
