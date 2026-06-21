// js/minecraft-wiki.js
async function loadItemData(itemId) {
    try {
        const response = await fetch('../../data/items.json');
        const data = await response.json();
        return data[itemId];
    } catch (e) {
        console.error('Ошибка загрузки JSON', e);
        return null;
    }
}

function createCraftingGrid(recipe) {
    const grid = document.createElement('div');
    grid.className = 'crafting-grid';

    const slots = Array(9).fill(null);
    // Заполняем по pattern (упрощённо)
    if (recipe.pattern) {
        let idx = 0;
        recipe.pattern.forEach(row => {
            for (let char of row) {
                if (char !== ' ') {
                    const ingredient = recipe.key[char];
                    if (ingredient) slots[idx] = ingredient;
                }
                idx++;
            }
        });
    }

    slots.forEach(ing => {
        const slot = document.createElement('div');
        slot.className = 'crafting-slot mc-item';

        if (ing) {
            const img = document.createElement('img');
            img.src = ing.image || `../../img/${ing.item.replace(':', '/')}.png`;
            img.alt = ing.name;
            slot.appendChild(img);

            const tooltip = document.createElement('div');
            tooltip.className = 'mc-tooltip';
            tooltip.textContent = ing.name;
            slot.appendChild(tooltip);
        }
        grid.appendChild(slot);
    });

    // Output слот
    const output = document.createElement('div');
    output.className = 'crafting-slot crafting-output mc-item';
    const outImg = document.createElement('img');
    outImg.src = recipe.result.image || '../../img/items/fire_sausage.png';
    output.appendChild(outImg);

    const outTip = document.createElement('div');
    outTip.className = 'mc-tooltip';
    outTip.textContent = `${recipe.result.name || 'Результат'} x${recipe.result.count || 1}`;
    output.appendChild(outTip);
    grid.appendChild(output);

    return grid;
}

function createHungerBar(hunger, saturation) {
    const container = document.createElement('div');
    container.className = 'hunger-info';

    // Простая визуализация (можно улучшить спрайтами)
    let html = `<div class="hunger-bar">`;
    for (let i = 0; i < Math.floor(hunger / 2); i++) {
        html += `<span class="hunger-icon full"></span>`;
    }
    if (hunger % 2 === 1) html += `<span class="hunger-icon half"></span>`;
    html += `</div>`;
    html += `<span>+${hunger} 🍖 + ${saturation} 🍗</span>`;
    container.innerHTML = html;
    return container;
}

function createEffectsList(effects) {
    const div = document.createElement('div');
    effects.forEach(eff => {
        const el = document.createElement('div');
        el.className = 'effect';
        el.innerHTML = `
            <img src="../../img/${eff.icon}" width="24" height="24">
            <span>${eff.name} ${eff.level > 1 ? eff.level : ''} (${eff.duration})</span>
        `;
        div.appendChild(el);
    });
    return div;
}

// Главная функция для вставки подробного описания
async function renderDetailedInfo(containerId, itemId) {
    const data = await loadItemData(itemId);
    if (!data) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `<h3>${data.name}</h3>`;

    if (data.recipe) {
        html += `<h4>Рецепт крафта</h4>`;
        const grid = createCraftingGrid(data.recipe);
        container.appendChild(grid); // добавляем DOM-элемент
    }

    if (data.type === 'food') {
        html += `<h4>Восстановление</h4>`;
        container.appendChild(createHungerBar(data.hunger, data.saturation));
    }

    if (data.effects && data.effects.length > 0) {
        html += `<h4>Эффекты</h4>`;
        container.appendChild(createEffectsList(data.effects));
    }

    container.innerHTML += html; // для текстовых частей
}

// Простой toggle для подробного описания
function toggleDetailed(btn) {
    const container = btn.nextElementSibling; // предполагаем, что div.detailed-descr сразу после кнопки
    
    if (!container) {
        console.error("Не найден контейнер с подробным описанием!");
        return;
    }

    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
        btn.textContent = "Скрыть подробное описание";
    } else {
        container.style.display = "none";
        btn.textContent = "Показать подробное описание";
    }
}

// Для JSON-варианта (если используешь renderDetailedInfo)
async function loadAndRenderDetailed(containerId, itemId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Контейнер не найден:", containerId);
        return;
    }

    const data = await loadItemData(itemId); // твоя функция из прошлого сообщения
    if (!data) {
        container.innerHTML = "<p style='color:red'>Ошибка загрузки данных</p>";
        return;
    }

    // Очищаем и заполняем
    container.innerHTML = '';

    // Здесь вставь код создания рецепта, hunger, effects (из прошлого ответа)
    if (data.recipe) {
        const recipeTitle = document.createElement('h4');
        recipeTitle.textContent = 'Рецепт крафта';
        container.appendChild(recipeTitle);
        container.appendChild(createCraftingGrid(data.recipe));
    }

    if (data.type === 'food' && data.hunger) {
        const hungerTitle = document.createElement('h4');
        hungerTitle.textContent = 'Восстановление';
        container.appendChild(hungerTitle);
        container.appendChild(createHungerBar(data.hunger, data.saturation || 0));
    }

    if (data.effects && data.effects.length > 0) {
        const effectsTitle = document.createElement('h4');
        effectsTitle.textContent = 'Эффекты';
        container.appendChild(effectsTitle);
        container.appendChild(createEffectsList(data.effects));
    }
}