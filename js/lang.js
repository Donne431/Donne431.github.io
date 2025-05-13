// Объект для хранения переводов
let translations = {};
// Доступные языки
const languageList = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'ru', flag: '🇷🇺' }
];

// Загрузка переводов
async function loadTranslation(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    translations[lang] = await response.json();
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

// Применение переводов
function applyTranslations(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const keys = key.split('.');
    let translation = translations[lang];
    for (const k of keys) {
      translation = translation[k];
    }
    element.textContent = translation || element.textContent;
  });
  // Обновление флага
  const currentLang = languageList.find(l => l.code === lang);
  document.getElementById('flag').textContent = currentLang.flag;
  // Обновление атрибута lang для SEO
  document.documentElement.lang = lang;
}

// Переключение языка
async function toggleLanguage() {
  const currentLang = localStorage.getItem('preferredLanguage') || 'en';
  // Находим индекс текущего языка
  const currentIndex = languageList.findIndex(l => l.code === currentLang);
  // Переключаем на следующий язык (циклически)
  const nextIndex = (currentIndex + 1) % languageList.length;
  const nextLang = languageList[nextIndex].code;

  if (!translations[nextLang]) {
    await loadTranslation(nextLang);
  }
  applyTranslations(nextLang);
  // Сохранение выбранного языка
  localStorage.setItem('preferredLanguage', nextLang);
}

// Инициализация
(async () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  await loadTranslation(savedLang);
  applyTranslations(savedLang);
})();