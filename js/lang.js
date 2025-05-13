// Объект для хранения переводов
let translations = {};
// Текущий язык
let currentLang = localStorage.getItem('preferredLanguage') || 'en';
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
    console.log(`Translations loaded for ${lang}`);
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

// Применение переводов
function applyTranslations(lang) {
  console.log(`Applying translations for ${lang}`);
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
  const langInfo = languageList.find(l => l.code === lang);
  document.getElementById('flag').textContent = langInfo.flag;
  // Обновление атрибута lang для SEO
  document.documentElement.lang = lang;
}

// Переключение языка
async function toggleLanguage() {
  console.log(`Current language: ${currentLang}`);
  // Находим индекс текущего языка
  const currentIndex = languageList.findIndex(l => l.code === currentLang);
  // Переключаем на следующий язык (циклически)
  const nextIndex = (currentIndex + 1) % languageList.length;
  const nextLang = languageList[nextIndex].code;
  console.log(`Switching to: ${nextLang}`);

  if (!translations[nextLang]) {
    await loadTranslation(nextLang);
  }
  applyTranslations(nextLang);
  // Обновляем текущий язык
  currentLang = nextLang;
  // Сохранение выбранного языка
  localStorage.setItem('preferredLanguage', nextLang);
}

// Инициализация
(async () => {
  console.log(`Initializing with language: ${currentLang}`);
  await loadTranslation(currentLang);
  applyTranslations(currentLang);
})();