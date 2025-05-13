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
    console.log(`Attempting to load translations for ${lang}`);
    const response = await fetch(`lang/${lang}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch lang/${lang}.json: ${response.status}`);
    }
    translations[lang] = await response.json();
    console.log(`Translations loaded for ${lang}:`, translations[lang]);
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error);
  }
}

// Применение переводов
function applyTranslations(lang) {
  console.log(`Applying translations for ${lang}`);
  if (!translations[lang]) {
    console.warn(`No translations available for ${lang}, skipping`);
    return;
  }
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
  const langInfo =