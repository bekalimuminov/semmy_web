import { ref, computed } from 'vue'

// Global reactive lang state (singleton pattern)
const lang = ref('uz')

export function useLang() {
  const isUz = computed(() => lang.value === 'uz')
  const isEn = computed(() => lang.value === 'en')

  function setLang(l) { lang.value = l }
  function toggleLang() { lang.value = lang.value === 'uz' ? 'en' : 'uz' }

  // Helper: pick text by lang
  function t(uz, en) { return lang.value === 'uz' ? uz : en }

  return { lang, isUz, isEn, setLang, toggleLang, t }
}
