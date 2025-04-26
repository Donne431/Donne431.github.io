// Пример данных схем
const schematics = [
    {
        title: "Электрическая схема",
        description: "Простая схема для домашнего использования.",
        tags: ["электрика", "дом", "простая"],
        image: "/img/placeholders/purple_place_holder.png",
        images: [
            "/img/placeholders/purple_place_holder.png",
            "/img/placeholders/purple_place_holder.png"
        ],
        downloads: [
            { name: "Схема.pdf", description: "Файл с полной схемой в формате PDF", url: "#" },
            { name: "Инструкция.docx", description: "Инструкция по установке", url: "#" }
        ],
        resources: [
            "Медные провода 2.5 мм²",
            "Розетки и выключатели",
            "Распределительный щит",
            "Мультиметр"
        ]
    },
    {
        title: "Схема освещения",
        description: "Схема для системы освещения офиса.",
        tags: ["освещение", "офис", "электрика"],
        image: "/img/placeholders/purple_place_holder.png",
        images: [
            "/img/placeholders/purple_place_holder.png"
        ],
        downloads: [
            { name: "План.pdf", description: "План размещения светильников", url: "#" }
        ],
        resources: [
            "LED-светильники 20 Вт",
            "Кабель ВВГ 3x1.5",
            "Автоматический выключатель",
            "Монтажные коробки"
        ]
    },
    {
        title: "Схема двигателя",
        description: "Схема для управления электродвигателем.",
        tags: ["двигатель", "автоматизация"],
        image: "/img/placeholders/purple_place_holder.png",
        images: [
            "/img/placeholders/purple_place_holder.png",
            "/img/placeholders/purple_place_holder.png",
            "/img/placeholders/purple_place_holder.png"
        ],
        downloads: [
            { name: "Контроллер.pdf", description: "Схема контроллера двигателя", url: "#" },
            { name: "Настройки.xlsx", description: "Таблица настроек", url: "#" }
        ],
        resources: [
            "Электродвигатель 1.5 кВт",
            "Контроллер Siemens S7-1200",
            "Кабель силовой 3x2.5",
            "Тестер для проверки"
        ]
    }
];

let selectedTags = [];

// Получить все уникальные теги
function getAllTags() {
    const tags = new Set();
    schematics.forEach(s => s.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
}

// Отобразить теги
function renderTags() {
    const tagList = document.getElementById('tag-list');
    tagList.innerHTML = '';
    const tags = getAllTags();
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        if (selectedTags.includes(tag)) {
            tagElement.classList.add('active');
        }
        tagElement.textContent = tag;
        tagElement.onclick = () => toggleTag(tag);
        tagList.appendChild(tagElement);
    });
}

// Переключение тега
function toggleTag(tag) {
    if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(t => t !== tag);
    } else {
        selectedTags.push(tag);
    }
    renderTags();
    filterSchematics();
}

// Фильтрация схем
function filterSchematics() {
    const grid = document.getElementById('schematics-grid');
    grid.innerHTML = '';
    const filtered = selectedTags.length === 0
        ? schematics
        : schematics.filter(s => selectedTags.every(tag => s.tags.includes(tag)));

    filtered.forEach((s, index) => {
        const card = document.createElement('div');
        card.classList.add('schematic-card');
        card.innerHTML = `
            <img src="${s.image}" alt="${s.title}">
            <div class="content">
                <h3>${s.title}</h3>
                <p>${s.description}</p>
                <div class="tags">${s.tags.join(', ')}</div>
                <a href="schematic.html?id=${index}" class="open-button">Открыть</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Поиск тегов
document.getElementById('tag-search').addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const tagList = document.getElementById('tag-list');
    tagList.innerHTML = '';
    const tags = getAllTags().filter(tag => tag.toLowerCase().includes(search));
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        if (selectedTags.includes(tag)) {
            tagElement.classList.add('active');
        }
        tagElement.textContent = tag;
        tagElement.onclick = () => toggleTag(tag);
        tagList.appendChild(tagElement);
    });
});

// Добавление новой схемы
function addSchematic() {
    const title = document.getElementById('new-title').value;
    const description = document.getElementById('new-description').value;
    const tags = document.getElementById('new-tags').value.split(',').map(t => t.trim());
    const image = document.getElementById('new-image').value || '/img/placeholders/purple_place_holder.png';
    const images = [image];
    const downloads = [
        { name: "Новая_схема.pdf", description: "Файл с новой схемой", url: "#" }
    ];
    const resources = [
        "Материалы для новой схемы",
        "Инструменты для сборки"
    ];

    if (title && description && tags.length > 0) {
        schematics.push({ title, description, tags, image, images, downloads, resources });
        document.getElementById('new-title').value = '';
        document.getElementById('new-description').value = '';
        document.getElementById('new-tags').value = '';
        document.getElementById('new-image').value = '';
        renderTags();
        filterSchematics();
    }
}

// Инициализация
renderTags();
filterSchematics();