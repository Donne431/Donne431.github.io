const schematics = [
    {
        title: "Электрическая схема",
        description: "Простая схема для домашнего использования.",
        detailedDescription: "Эта схема предназначена для создания базовой электрической системы в жилом доме. Она включает подключение розеток, выключателей и распределительного щита, обеспечивая безопасность и эффективность.",
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
        detailedDescription: "Данная схема разработана для офисных помещений, обеспечивая оптимальное освещение с использованием энергоэффективных LED-светильников. Включает план размещения и подключения.",
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
        detailedDescription: "Схема для автоматизированного управления электродвигателем мощностью 1.5 кВт с использованием контроллера Siemens S7-1200. Подходит для промышленных приложений.",
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
    const title = document.getElementById('new-title').value.trim();
    const description = document.getElementById('new-description').value.trim();
    const detailedDescription = document.getElementById('new-detailed-description').value.trim();
    const tags = document.getElementById('new-tags').value.split(',').map(t => t.trim()).filter(t => t);
    const image = document.getElementById('new-image').value.trim() || '/img/placeholders/purple_place_holder.png';
    const imagesInput = document.getElementById('new-images').value.split(',').map(i => i.trim()).filter(i => i);
    const images = imagesInput.length > 0 ? imagesInput : [image];
    const resources = document.getElementById('new-resources').value.split('\n').map(r => r.trim()).filter(r => r);
    const downloadsInput = document.getElementById('new-downloads').value.split('\n').map(d => d.trim()).filter(d => d);
    const downloads = downloadsInput.map(d => {
        const [name, url, description] = d.split('|').map(s => s.trim());
        return { name: name || 'Файл', url: url || '#', description: description || 'Без описания' };
    });

    if (title && description && tags.length > 0) {
        schematics.push({
            title,
            description,
            detailedDescription: detailedDescription || 'Подробное описание отсутствует',
            tags,
            image,
            images,
            downloads: downloads.length > 0 ? downloads : [{ name: "Новая_схема.pdf", description: "Файл с новой схемой", url: "#" }],
            resources: resources.length > 0 ? resources : ["Материалы не указаны"]
        });
        document.getElementById('new-title').value = '';
        document.getElementById('new-description').value = '';
        document.getElementById('new-detailed-description').value = '';
        document.getElementById('new-tags').value = '';
        document.getElementById('new-image').value = '';
        document.getElementById('new-images').value = '';
        document.getElementById('new-resources').value = '';
        document.getElementById('new-downloads').value = '';
        renderTags();
        filterSchematics();
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderTags();
    filterSchematics();
});