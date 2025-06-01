let langs = {};

    // Загрузка переводов из JSON
    async function loadTranslations(lang) {
      try {
        const response = await fetch(`lang/${lang}.json`);
        langs[lang] = await response.json();
      } catch (error) {
        console.error('Ошибка загрузки переводов:', error);
      }
    }

    const toolbarItems = document.querySelectorAll('.toolbar__item');
    const allLangs = ['ru', 'en'];

    // Обработка клика по элементам переключения языка
    toolbarItems.forEach(function (item) {
      item.addEventListener('click', function () {
        let lang = this.dataset.lang;
        location.href = window.location.pathname + '#' + lang;
        location.reload();
      });
    });

    // Функция смены языка
    async function changeLang() {
      let hash = window.location.hash;
      hash = hash.substring(1); // Убираем символ #

      // Если язык не поддерживается, устанавливаем русский по умолчанию
      if (!allLangs.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
        return;
      }

      // Загружаем переводы, если они еще не загружены
      if (!langs[hash]) {
        await loadTranslations(hash);
      }

      // Применение переводов к элементам с атрибутом data-translate
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let translation = langs[hash];
        for (const k of keys) {
          translation = translation[k];
        }
        if (translation) {
          element.innerHTML = translation;
        }
      });

      // Обновление атрибута lang для SEO
      document.documentElement.lang = hash;
    }

    // Инициализация
    (async () => {
      await changeLang();
    })();