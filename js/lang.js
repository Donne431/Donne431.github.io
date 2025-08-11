const translations = {
  en: {
      universal: {
        button: {
          view_page: '<i class="fa-solid fa-hand-pointer"></i> View Page',
          more_pages: '<i class="fa-solid fa-list-ul"></i> More Pages',
          more_wiki: '<i class="fa-solid fa-book"></i> More Wiki',
          read_wiki: '<i class="fa-solid fa-book-open-reader"></i> Read Wiki',
          read: '<i class="fa-solid fa-book-open-reader"></i> Read',
          view_more: '<i class="fa-solid fa-hand-pointer"></i> View More',
          view_old_news: '<i class="fa-solid fa-hand-pointer"></i> View Old News',
        },
        information: '<i class="fa-solid fa-circle-info"></i> Information',
        wiki: '<i class="fa-solid fa-book"></i> Wiki',
        projects: '<i class="fa-solid fa-list-ul"></i> Projects',
        blog: '<i class="fa-solid fa-newspaper"></i> Blog',
        devblog: 'Devblog',
        gallery: '<i class="fa-solid fa-camera"></i> Gallery',
        links: '<i class="fa-solid fa-share"></i> Links',
      },
      index: {
        about_me: 'About me',
        bio: "Hi, my nickname is Donne431, I just a guy, who love made a modifications for games. I'm 16 years old, and I'm from Crimea (demi-island washed by the Black and Azov Sea), Russia. I also like to create almost any content for Minecraft, that is: mods, maps, resource packs, servers.",
        partners: 'Partners',
        partners_info: 'With regard to the partnership, write to the Discord personal account (@Donne431).',
        support: 'Support me by donating',
        status: 'Status',
        status_text: 'You can find out my nearest plans on page "<i class="fa-solid fa-road"></i> Roadmap"'
      },
      roadmap: {

      },
      wiki: {
        index: {

        },
        iafd: {
          index: {

          },
          drinks: {

          },
          foods: {

          },
          effects: {

          },
          items: {

          },
          tags: {

          },
          tools: {

          }
        }
      },
      projects: {
        iafd: {
          index: {

          },
          changelog: {

          },
          compatible_mods: {

          },
          download: {

          },
          incompatible_mods: {

          },
          spoilers: {

          }
        },
        bamboo_spikes: {

        },
        create_curios_backtank: {

        },
        dcigse: {

        },
        dmd: {

        },
        forbidden_axe_3d: {

        },
        htiap: {

        },
        lrofc: {

        },
        potion_of_flying: {

        }
      },
      blog: {

      },
      devblog: {
        iafd: {
          1: {

          }
        } 
      }
    },
  ru: {
      universal: {
        button: {
          view_page: '<i class="fa-solid fa-hand-pointer"></i> <strong>Посмотреть Страницу</strong>',
          more_pages: '<i class="fa-solid fa-list-ul"></i> <strong>Больше Страниц</strong>',
          more_wiki: '<i class="fa-solid fa-book"></i> <strong>Больше Вики</strong>',
          read_wiki: '<i class="fa-solid fa-book-open-reader"></i> <strong>Прочитать Вики</strong>',
          read: '<i class="fa-solid fa-book-open-reader"></i> <strong>Читать</strong>',
          view_more: '<i class="fa-solid fa-hand-pointer"></i> <strong>Посмотреть Больше</strong>',
          view_old_news: '<i class="fa-solid fa-hand-pointer"></i> <strong>Посмотреть Старые Новости</strong>',
        },
        information: '<i class="fa-solid fa-circle-info"></i> <strong>Информация</strong>',
        wiki: '<i class="fa-solid fa-book"></i> <strong>Вики</strong>',
        projects: '<i class="fa-solid fa-list-ul"></i> <strong>Проекты</strong>',
        blog: '<i class="fa-solid fa-newspaper"></i> <strong>Блог</strong>',
        devblog: '<strong>Дневник разработки</strong>',
        gallery: '<i class="fa-solid fa-camera"></i> <strong>Галерея</strong>',
        links: '<i class="fa-solid fa-share"></i> <strong>Ссылки</strong>',
      },
      index: {
        about_me: 'Обо мне',
        bio: 'Привет, мой никнейм - Donne431, я просто чел, который любит делать модификации для игр. Мне 16 лет, я с Крыма (полуостров, омываемый Чёрным и Азовским морем), Россия. Я также люблю создавать почти любой контент для Minecraft, к примеру: моды, карты, ресурспаки, сервера.',
        partners: 'Партнёры',
        partners_info: 'Если у вас есть предложение сотрудничать, тогда напишите мне на мой персональный дискорд аккаунт (@Donne431).',
        support: 'Поддержите меня донатом',
        status: 'Статус',
        status_text: 'Вы можете найти мои ближайшие планы на странице "<i class="fa-solid fa-road"></i> Дорожная карта"'
      },
      roadmap: {

      },
      wiki: {
        index: {

        },
        iafd: {
          index: {

          },
          drinks: {

          },
          foods: {

          },
          effects: {

          },
          items: {

          },
          tags: {

          },
          tools: {

          }
        }
      },
      projects: {
        iafd: {
          index: {

          },
          changelog: {

          },
          compatible_mods: {

          },
          download: {

          },
          incompatible_mods: {

          },
          spoilers: {

          }
        },
        bamboo_spikes: {

        },
        create_curios_backtank: {

        },
        dcigse: {

        },
        dmd: {

        },
        forbidden_axe_3d: {

        },
        htiap: {

        },
        lrofc: {

        },
        potion_of_flying: {
          
        }
      },
      blog: {

      },
      devblog: {
        iafd: {
          1: {

          }
        } 
      }
    }
};

// Получаем текущий язык из localStorage или по умолчанию 'en'
let language = localStorage.getItem('language') || 'en';

// Функция для получения значения по пути (например, index.greeting)
function getTranslation(obj, keyPath) {
  return keyPath.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
}

// Функция обновления переводов
function updateTranslations() {
  const t = translations[language];
  console.log(`Обновление переводов для языка: ${language}`);
  
  // Обновляем текст элементов с data-translate-key
  const translatableElements = document.querySelectorAll('[data-translate-key]');
  console.log(`Найдено элементов с data-translate-key: ${translatableElements.length}`);
  translatableElements.forEach(element => {
    const keyPath = element.getAttribute('data-translate-key');
    if (!keyPath) return;
    const value = getTranslation(t, keyPath);
    if (value) {
      if (value.includes('<')) {
        element.innerHTML = value; // поддержка HTML
      } else {
        element.textContent = value; // обычный текст
      }
    } else {
      console.warn(`Перевод для пути "${keyPath}" не найден на языке "${language}"`);
    }
  });

  // Обновляем атрибуты с data-translate-attr
  const attrElements = document.querySelectorAll('[data-translate-attr]');
  console.log(`Найдено элементов с data-translate-attr: ${attrElements.length}`);
  attrElements.forEach(element => {
    const attrString = element.getAttribute('data-translate-attr');
    if (!attrString) return;
    const [attrName, keyPath] = attrString.split(':');
    if (!attrName || !keyPath) return;
    const value = getTranslation(t, keyPath);
    if (value) {
      element.setAttribute(attrName, value);
    } else {
      console.warn(`Перевод атрибута для пути "${keyPath}" не найден на языке "${language}"`);
    }
  });
  
  // Обновляем текст кнопки переключения
  const toggleButton = document.getElementById('toggle-language');
  if (toggleButton) {
    toggleButton.textContent = language === 'en' ? 'Перейти на русский' : 'Switch to English';
  } else {
    console.error('Элемент с ID "toggle-language" не найден в DOM');
  }
}

// Функция переключения языка
function toggleLanguage() {
  language = language === 'en' ? 'ru' : 'en';
  localStorage.setItem('language', language);
  console.log(`Язык переключён на: ${language}`);
  updateTranslations();
}

// Наблюдатель за изменениями в #target (для динамического рендеринга Handlebars)
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM загружен, запускаем наблюдатель за #target');
  const targetNode = document.getElementById('target');
  if (!targetNode) {
    console.error('Элемент #target не найден в DOM');
    return;
  }

  // MutationObserver для отслеживания вставки содержимого в #target
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length > 0) {
        console.log('Содержимое вставлено в #target, обновляем переводы и кнопку');
        updateTranslations();
        const toggleButton = document.getElementById('toggle-language');
        if (toggleButton) {
          toggleButton.addEventListener('click', toggleLanguage);
          console.log('Обработчик события "click" добавлен для кнопки toggle-language');
        } else {
          console.error('После рендеринга кнопка "toggle-language" всё ещё не найдена');
        }
        // Отключаем observer после первого изменения, чтобы не вызывать повторно
        observer.disconnect();
      }
    });
  });

  // Наблюдаем за изменениями в #target
  observer.observe(targetNode, { childList: true, subtree: true });
});