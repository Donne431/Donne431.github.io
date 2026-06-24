const schematics = [
    {
        title: "Автосборка корпусов",
        description: "Автосборка андезитов/латунных/медных корпусов",
        detailedDescription: "Схематика механизма автосборки корпусов, для которых требуется 1 вид материала + обтёсанное бревно. Масштаб: 4х2х4 (ДхШхВ)",
        tags: ["автосборка", "корпуса", "1.20.1", "0.5.1"],
        image: "/img/amethyst/andesite_brass_copper_casing_maker+.nbt-1.png",
        images: [
            "/img/amethyst/andesite_brass_copper_casing_maker+.nbt-1.png",
            "/img/amethyst/andesite_brass_copper_casing_maker+.nbt-2.png"
        ],
        downloads: [
            { name: "andesite_brass_copper_casing_maker+.nbt", description: "Схематика v2", url: "/files/amethyst/andesite_brass_copper_casing_maker+.nbt" }
        ],
        resources: [
            { text: "Автономный активатор x1", icon: "/img/minecraft/64x/автономный-активатор.png" },
            { text: "Вал x2", icon: "/img/minecraft/64x/вал.png" },
            { text: "Воронка x1", icon: "/img/minecraft/64x/воронка.png" },
            { text: "Коробка передач х6", icon: "/img/minecraft/64x/коробка-передач.png" },
            { text: "Латунный шлюз x1", icon: "/img/minecraft/64x/латунный-шлюз.png" },
            { text: "Механическая пила x1", icon: "/img/minecraft/64x/механическая-пила.png" },
            { text: "Механический ремень x1", icon: "/img/minecraft/64x/механический-ремень.png" },
            { text: "Сундук x5", icon: "/img/minecraft/64x/сундук.png" },
            { text: "Умный жёлоб x1", icon: "/img/minecraft/64x/умный-жёлоб.png" },
            { text: "Фильтр атрибутов x1", icon: "/img/minecraft/64x/фильтр-атрибутов.png" },
            { text: "Фильтр предметов x1", icon: "/img/minecraft/64x/фильтр-предметов.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" }
        ]
    },
    {
        title: "Ферма опыта | Чешуйницы | Batsy",
        description: "Ферма опыта на чешуйницах от Batsy (модифицированная)",
        detailedDescription: "Схематика фермы опыта на чешуйницах от Batsy, была модифицирована для быстрого развёртывания. Масштаб: 12x12x9 (ДхШхВ)",
        tags: ["ферма", "опыт", "чешуйницы", "1.20.1", "0.5.1"],
        image: "/img/amethyst/batsy_exp_farm_reverse.nbt-1.png",
        images: [
            "/img/amethyst/batsy_exp_farm_reverse.nbt-1.png",
            "/img/amethyst/batsy_exp_farm_reverse.nbt-2.png"
        ],
        downloads: [
            { name: "batsy_exp_farm_reverse.nbt", description: "Схематика reverse", url: "/files/amethyst/batsy_exp_farm_reverse.nbt" }
        ],
        resources: [
            { text: "Автономный активатор x27", icon: "/img/minecraft/64x/автономный-активатор.png" },
            { text: "Андезитовый корпус х89", icon: "/img/minecraft/64x/андезитовый-корпус.png" },
            { text: "Андезитовый шлюз х12", icon: "/img/minecraft/64x/андезитовый-шлюз.png" },
            { text: "Бочка х1", icon: "/img/minecraft/64x/бочка.png" },
            { text: "Вагонетка х1", icon: "/img/minecraft/64x/вагонетка.png" },
            { text: "Вагонеточный сборщик х1", icon: "/img/minecraft/64x/вагонеточный-сборщик.png" },
            { text: "Вал х23", icon: "/img/minecraft/64x/вал.png" },
            { text: "Вал линейного привода х4", icon: "/img/minecraft/64x/вал-линейного-привода.png" },
            { text: "Вентилятор в корпусе х2", icon: "/img/minecraft/64x/вентилятор-в-корпусе.png" },
            { text: "Дубовый люк х12", icon: "/img/minecraft/64x/дубовый-люк.png" },
            { text: "Еловый люк х8", icon: "/img/minecraft/64x/еловый-люк.png" },
            { text: "Жидкостный бак х9", icon: "/img/minecraft/64x/жидкостный-бак.png" },
            { text: "Жёлоб х27", icon: "/img/minecraft/64x/жёлоб.png" },
            { text: "Каменная нажимная плита х2", icon: "/img/minecraft/64x/каменная-нажимная-плита.png" },
            { text: "Каретка линейного привода х2", icon: "/img/minecraft/64x/каретка-линейного-привода.png" },
            { text: "Коробка передач х5", icon: "/img/minecraft/64x/коробка-передач.png" },
            { text: "Костёр душ х1", icon: "/img/minecraft/64x/костёр-душ.png" },
            { text: "Латунный шлюз х6", icon: "/img/minecraft/64x/латунный-шлюз.png" },
            { text: "Лианы х1", icon: "/img/minecraft/64x/лианы.png" },
            { text: "Линейное шасси х29", icon: "/img/minecraft/64x/линейное-шасси.png" },
            { text: "Механическая помпа х9", icon: "/img/minecraft/64x/механическая-помпа.png" },
            { text: "Механический ремень х8", icon: "/img/minecraft/64x/механический-ремень.png" },
            { text: "Питаемый рычаг х1", icon: "/img/minecraft/64x/питаемый-рычаг.png" },
            { text: "Плита из каменного кирпича х18", icon: "/img/minecraft/64x/плита-из-каменного-кирпича.png" },
            { text: "Реверсивная передача х2", icon: "/img/minecraft/64x/реверсивная-передача.png" },
            { text: "Редстоуновая пыль х4", icon: "/img/minecraft/64x/редстоуновая-пыль.png" },
            { text: "Редстоуновый передатчик сигнала х2", icon: "/img/minecraft/64x/редстоуновый-передатчик-сигнала.png" },
            { text: "Редстоуновый удлинитель импульса х2", icon: "/img/minecraft/64x/редстоуновый-удлинитель-импульса.png" },
            { text: "Рельсы х1", icon: "/img/minecraft/64x/рельсы.png" },
            { text: "Рычаг х5", icon: "/img/minecraft/64x/рычаг.png" },
            { text: "Стекло х63", icon: "/img/minecraft/64x/стекло.png" },
            { text: "Стойка для брони х1", icon: "/img/minecraft/64x/стойка-для-брони.png" },
            { text: "Суперклей х1", icon: "/img/minecraft/64x/суперклей.png" },
            { text: "Сцепление х1", icon: "/img/minecraft/64x/сцепление.png" },
            { text: "Хранилище предметов х89", icon: "/img/minecraft/64x/хранилище-предметов.png" },
            { text: "Цепной привод в корпусе х13", icon: "/img/minecraft/64x/цепной-привод-в-корпусе.png" },
            { text: "Шестерня х2", icon: "/img/minecraft/64x/шестерня.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" }
        ]
    },
    {
        title: "Горелка всплоха с соломкой",
        description: "Да, просто горелка всплоха с соломкой",
        detailedDescription: "Схематика, которая содержит лишь 1 блок - горелка всполоха с соломкой из Create: Crafts & Additions. Масштаб: 1х1х1 (ДхШхВ)",
        tags: ["1.20.1", "0.5.1"],
        image: "/img/amethyst/blaze_burner_with_straw.nbt-1.png",
        images: [
            "/img/amethyst/blaze_burner_with_straw.nbt-1.png"
        ],
        downloads: [
            { name: "blaze_burner_with_straw.nbt", description: "Схематика", url: "/files/amethyst/blaze_burner_with_straw.nbt" }
        ],
        resources: [
            { text: "Горелка всплоха х1", icon: "/img/minecraft/64x/горелка-всполоха.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" },
            { text: "Create: Crafts & Additions", icon: "/img/logo-icon/logo_create_crafts_and_additions.png", version: "" }
        ]
    },
    {
        title: "Автосоздание теста",
        description: "Схематика, создающая тесто.",
        detailedDescription: "Схематика механизма, создающего тесто. Требует пшеницу (и воду (если выбрать схематику с водой извне)) извне. Из лишних семян делается костная мука (В соотношении 64 теста к 1 костной муке). Масштаб: 4х3х6 (ДхШхВ)",
        tags: ["автосборка", "тесто", "костная мука", "1.20.1", "0.5.1"],
        image: "/img/amethyst/auto_dough_maker.nbt-1.png",
        images: [
            "/img/amethyst/auto_dough_maker.nbt-1.png",
            "/img/amethyst/auto_dough_maker.nbt-2.png"
        ],
        downloads: [
            { name: "auto_dough_maker.nbt", description: "Схематика (с водой извне)", url: "/files/amethyst/auto_dough_maker.nbt" },
            { name: "auto_dough_maker_without_out_water.nbt", description: "Схематика (без воды извне)", url: "/files/amethyst/auto_dough_maker_without_out_water.nbt" }
        ],
        resources: [
            { text: "Автономный активатор х1", icon: "/img/minecraft/64x/автономный-активатор.png" },
            { text: "Вал х3", icon: "/img/minecraft/64x/вал.png" },
            { text: "Воронка х3", icon: "/img/minecraft/64x/воронка.png" },
            { text: "Дубовые ступеньки х3 (Схематика без воды извне)", icon: "/img/minecraft/64x/дубовые-ступеньки.png" },
            { text: "Жидкостная труба х2", icon: "/img/minecraft/64x/жидкостная-труба.png" },
            { text: "Жёрнов х1", icon: "/img/minecraft/64x/жёрнов.png" },
            { text: "Компостница х1", icon: "/img/minecraft/64x/компостница.png" },
            { text: "Коробка передач х1", icon: "/img/minecraft/64x/коробка-передач.png" },
            { text: "Латунный шлюз х6", icon: "/img/minecraft/64x/латунный-шлюз.png" },
            { text: "Механическая помпа х1", icon: "/img/minecraft/64x/механическая-помпа.png" },
            { text: "Механический смешиватель х1", icon: "/img/minecraft/64x/механический-смешиватель.png" },
            { text: "Сундук х4", icon: "/img/minecraft/64x/сундук.png" },
            { text: "Чаша х1", icon: "/img/minecraft/64x/чаша.png" },
            { text: "Шестерня х7", icon: "/img/minecraft/64x/шестерня.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" }
        ]
    },
    {
        title: "Двигатель | v.0.0.2 | Alpha",
        description: "Двигатель на 147к ен, требующий лаву извне",
        detailedDescription: "Схематика двигателя, разработанного мной. Для запуска требует 2560ен. Требует лаву извне. Подключение нескольких двигателей происходит через вверх (через башню из коробок передач). Версия: 0.0.2. Масштаб: 6х4х7 (ДхШхВ)",
        tags: ["двигатель", "1.20.1", "0.5.1"],
        image: "/img/amethyst/my_engine_alpha_0_0_2.nbt-1.png",
        images: [
            "/img/amethyst/my_engine_alpha_0_0_2.nbt-1.png",
            "/img/amethyst/my_engine_alpha_0_0_2.nbt-2.png"
        ],
        downloads: [
            { name: "my_engine_alpha_0_0_2.nbt", description: "Схематика Alpha v.0.0.2", url: "/files/amethyst/my_engine_alpha_0_0_2.nbt" }
        ],
        resources: [
            { text: "Большая шестерня х1", icon: "/img/minecraft/64x/большая-шестерня.png" },
            { text: "Вал х9", icon: "/img/minecraft/64x/вал.png" },
            { text: "Горелка всполоха х9", icon: "/img/minecraft/64x/горелка-всполоха.png" },
            { text: "Дубовые ступеньки х5", icon: "/img/minecraft/64x/дубовые-ступеньки.png" },
            { text: "Жидкостная труба х18", icon: "/img/minecraft/64x/жидкостная-труба.png" },
            { text: "Жидкостный бак х36", icon: "/img/minecraft/64x/жидкостный-бак.png" },
            { text: "Катушка со шлангом х1", icon: "/img/minecraft/64x/катушка-со-шлангом.png" },
            { text: "Коробка передач х11", icon: "/img/minecraft/64x/коробка-передач.png" },
            { text: "Механическая помпа х2", icon: "/img/minecraft/64x/механическая-помпа.png" },
            { text: "Паровой двигатель х9", icon: "/img/minecraft/64x/паровой-двигатель.png" },
            { text: "Регулятор скорости вращения х1", icon: "/img/minecraft/64x/регулятор-скорости-вращения.png" },
            { text: "Шестерня х3", icon: "/img/minecraft/64x/шестерня.png" },
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" },
            { text: "Create: Crafts & Additions", icon: "/img/logo-icon/logo_create_crafts_and_additions.png", version: "" }
        ]
    },
    {
        title: "Купольная база",
        description: "База из колотого глубинного сланца с куплом из стекла",
        detailedDescription: "Схематика базы из колотого глубинного сланца с куполом из стекла. Масштаб: ~ 8х8 чанков",
        tags: ["база"],
        image: "/img/amethyst/dome_base-1.png",
        images: [
            "/img/amethyst/dome_base-1.png",
            "/img/amethyst/dome_base-2.png",
            "/img/amethyst/dome_base-3.png"
        ],
        downloads: [
            { name: "base_sever_vostok.nbt", description: "Северо-Восточная часть", url: "/files/amethyst/base_sever_vostok.nbt" },
            { name: "base_sever_zapad.nbt", description: "Северо-Западная часть", url: "/files/amethyst/base_sever_zapad.nbt" },
            { name: "base_yug_vostok.nbt", description: "Юго-Восточная часть", url: "/files/amethyst/base_yug_vostok.nbt" },
            { name: "base_yug_zapad.nbt", description: "Юго-Западная часть", url: "/files/amethyst/base_yug_zapad.nbt" },
            { name: "base_stolb.nbt", description: "Столб", url: "/files/amethyst/base_stolb.nbt" },
            { name: "base_stolb_bigger1.nbt", description: "Столб (Увеличенная версия)", url: "/files/amethyst/base_stolb_bigger1.nbt" },
            { name: "base_stolb_bigger2.nbt", description: "Столб (Увеличенная+ версия)", url: "/files/amethyst/base_stolb_bigger2.nbt" },
            { name: "base_stolb_diagonal.nbt", description: "Диагональный Столб", url: "/files/amethyst/base_stolb_diagonal.nbt" }
        ],
        resources: [
            { text: "Колотый глубинный сланец х28.008 (~438 стаков) [Минимальная комплектация]", icon: "/img/minecraft/64x/колотый-глубинный-сланец.png" },
            { text: "Стекло х19.416 (~304 стаков)", icon: "/img/minecraft/64x/стекло.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" }
        ]
    },
    {
        title: "Ферма опыта | Чешуйницы | Глубиносланец",
        description: "Ферма опыта на чешуйницах из глубинносланца",
        detailedDescription: "Схематика фермы опыта на чешуйницах сделанная из резного глубинносланцевого кирпича. Масштаб: 11x5x14 (ДхШхВ)",
        tags: ["ферма", "опыт", "чешуйницы", "1.20.1", "0.5.1"],
        image: "/img/amethyst/oc_xp_farm_m1-v2-deepslate.nbt-1.png",
        images: [
            "/img/amethyst/oc_xp_farm_m1-v2-deepslate.nbt-1.png",
            "/img/amethyst/oc_xp_farm_m1-v2-deepslate.nbt-2.png"
        ],
        downloads: [
            { name: "oc_xp_farm_m1-v2-deepslate.nbt", description: "Схематика", url: "/files/amethyst/oc_xp_farm_m1-v2-deepslate.nbt" }
        ],
        resources: [
            { text: "Автономный активатор x27", icon: "/img/minecraft/64x/автономный-активатор.png" },
            { text: "Большая шестерня х2", icon: "/img/minecraft/64x/большая-шестерня.png"},
            { text: "Вагонеточный сборщик х2", icon: "/img/minecraft/64x/вагонеточный-сборщик.png"},
            { text: "Вал х4", icon: "/img/minecraft/64x/вал.png"},
            { text: "Вентилятор в корпусе х2", icon: "/img/minecraft/64x/вентилятор-в-корпусе.png"},
            { text: "Воронка х27", icon: "/img/minecraft/64x/воронка.png"},
            { text: "Депо х4", icon: "/img/minecraft/64x/депо.png"},
            { text: "Жидкостный бак х27", icon: "/img/minecraft/64x/жидкостный-бак.png"},
            { text: "Заполняемая панель х1", icon: "/img/minecraft/64x/заполняемая-панель.png"},
            { text: "Коробка передач х3", icon: "/img/minecraft/64x/коробка-передач.png"},
            { text: "Костёр душ х1", icon: "/img/minecraft/64x/костёр-душ.png"},
            { text: "Латунный шлюз х5", icon: "/img/minecraft/64x/латунный-шлюз.png"},
            { text: "Линейное шасси х4", icon: "/img/minecraft/64x/линейное-шасси.png"},
            { text: "Механическая помпа х27", icon: "/img/minecraft/64x/механическая-помпа.png"},
            { text: "Механическая рука х2", icon: "/img/minecraft/64x/механическая-рука.png"},
            { text: "Обрамлённое стекло х81", icon: "/img/minecraft/64x/обрамлённое-стекло.png"},
            { text: "Парус ветряной мельницы х27", icon: "/img/minecraft/64x/парус-ветряной-мельницы.png"},
            { text: "Пороговый переключатель х1", icon: "/img/minecraft/64x/пороговый-переключатель.png"},
            { text: "Рама паруса ветряной мельницы х27", icon: "/img/minecraft/64x/рама-парус-ветряной-мельницы.png"},
            { text: "Регулятор скорости вращения х2", icon: "/img/minecraft/64x/регулятор-скорости-вращения.png"},
            { text: "Редстоуновый блок х2", icon: "/img/minecraft/64x/редстоуновый-блок.png"},
            { text: "Резные глубинносланцевые кирпичи х283", icon: "/img/minecraft/64x/резные-глубинносланцевые-кирпичи.png"},
            { text: "Рельсы х2", icon: "/img/minecraft/64x/рельсы.png"},
            { text: "Рычаг х2", icon: "/img/minecraft/64x/рычаг.png"},
            { text: "Суперклей х1", icon: "/img/minecraft/64x/суперклей.png"},
            { text: "Хранилище предметов х81", icon: "/img/minecraft/64x/хранилище-предметов.png"},
            { text: "Цепной привод в корпусе х4", icon: "/img/minecraft/64x/цепной-привод-в-корпусе.png"},
            { text: "Шестерня х13", icon: "/img/minecraft/64x/шестерня.png"},
            { text: "Вагонетка х2", icon: "/img/minecraft/64x/вагонетка.png"}
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" }
        ]
    },
    {
        title: "Банка Coca Cola",
        description: "Банка Coca Cola, возможно использование - хранилище лавы",
        detailedDescription: "Схематика банки Coca Cola. Внутри 13к свободного места. Можно использовать для хранилища лавы. Масштаб: 23x43x23 (ДхШхВ)",
        tags: ["хранилище лавы"],
        image: "/img/amethyst/coca_cola_lava_tank.nbt.png",
        images: [
            "/img/amethyst/coca_cola_lava_tank.nbt.png"
        ],
        downloads: [
            { name: "coca_cola-lava_tank.nbt", description: "Схематика", url: "/files/amethyst/coca_cola_lava_tank.nbt" }
        ],
        resources: [
            { text: "Белый бетон x455", icon: "/img/minecraft/64x/белый-бетон.png" },
            { text: "Железный блок х961", icon: "/img/minecraft/64x/железный-блок.png"},
            { text: "Красный бетон х1931", icon: "/img/minecraft/64x/красный-бетон.png"}
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "" }
        ]
    },
    {
        title: "Карьер | v.0.0.1 | Alpha",
        description: "Карьер, стандартный",
        detailedDescription: "Схематика карьера. Версия: 0.0.1 Масштаб: НЕ ИЗМЕРЯЛ (ДхШхВ)",
        tags: ["карьер", "1.20.1", "0.5.1"],
        image: "/img/amethyst/quarry_v_0_0_1-marked.png",
        images: [
            "/img/amethyst/quarry_v_0_0_1-marked.png",
            "/img/amethyst/quarry_v_0_0_1_controller-marked.png"
        ],
        downloads: [
            { name: "quarry_v_0_0_1-main_part.nbt", description: "Схематика", url: "/files/amethyst/quarry_v_0_0_1_main_part.nbt" },
            { name: "quarry_v_0_0_1-main_part-without_external_storage.nbt", description: "Схематика", url: "/files/amethyst/quarry_v_0_0_1_main_part-without_external_storage.nbt" },
            { name: "quarry_v_0_0_1-controller.nbt", description: "Схематика", url: "/files/amethyst/quarry_v_0_0_1_controller.nbt" }
        ],
        resources: [
            { text: "Временно отсуствует", icon: "/img/icon-lb/close.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" }
        ]
    },
    {
        title: "Дирижабль 'Дельта' | v.1.0.2",
        description: "Дирижабль, маленький, гражданский",
        detailedDescription: "Схематика гражданского дирижабля 'Дельта'. Версия: 1.0.2. Масштаб: 9x9x10 (ДхШхВ). Скорость: до 3 м/c. Максимальная высота: ~220",
        tags: ["техника", "дирижабль", "гражданский", "1.21.1", "6.0+"],
        image: "/img/amethyst/airship_delta_1_0_2.nbt-1.png",
        images: [
            "/img/amethyst/airship_delta_1_0_2.nbt-1.png"
        ],
        downloads: [
            { name: "airship_delta_1_0.nbt", description: "Схематика v.1.0", url: "/files/amethyst/airship_delta_1_0.nbt" },
            { name: "airship_delta_1_0_1.nbt", description: "Схематика v.1.0.1", url: "/files/amethyst/airship_delta_1_0_1.nbt" },
            { name: "airship_delta_1_0_2.nbt", description: "Схематика v.1.0.2", url: "/files/amethyst/airship_delta_1_0_2.nbt" }
        ],
        resources: [
            { text: "Временно отсуствует", icon: "/img/icon-lb/close.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.21.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "6.0+" },
            { text: "Create Aeronautics", icon: "/img/logo-icon/logo_create_aeronautics.png", version: "1.2+" }
        ]
    },
    {
        title: "Автосборка корпусов 6.0+",
        description: "Автосборка андезитов/латунных/медных корпусов",
        detailedDescription: "Схематика механизма автосборки корпусов, для которых требуется 1 вид материала + обтёсанное бревно. Масштаб: 4х2х4 (ДхШхВ)",
        tags: ["автосборка", "корпуса", "1.21.1", "6.0+"],
        image: "/img/amethyst/andesite_brass_copper_casing_maker_6_0.nbt-1.png",
        images: [
            "/img/amethyst/andesite_brass_copper_casing_maker_6_0.nbt-1.png"
        ],
        downloads: [
            { name: "andesite_brass_copper_casing_maker_6_0.nbt", description: "Схематика", url: "/files/amethyst/andesite_brass_copper_casing_maker_6_0.nbt" }
        ],
        resources: [
            { text: "Временно отсуствует", icon: "/img/icon-lb/close.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.21.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "6.0+" }
        ]
    },
    {
        title: "Автосборка двигательных узлов",
        description: "Автосборка двигательных узлов из Create Aeronautics",
        detailedDescription: "Схематика механизма автосборки двигательных узлов из Create Aeronautics, необходимых для создания портативного генератора. Масштаб: 5х2х3 (ДхШхВ)",
        tags: ["автосборка", "двигательный узел", "1.21.1", "6.0+"],
        image: "/img/amethyst/engine_assembly_maker.nbt-1.png",
        images: [
            "/img/amethyst/engine_assembly_maker.nbt-1.png"
        ],
        downloads: [
            { name: "engine_assembly_maker.nbt", description: "Схематика", url: "/files/amethyst/engine_assembly_maker.nbt" }
        ],
        resources: [
            { text: "Временно отсуствует", icon: "/img/icon-lb/close.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.21.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "6.0+" },
            { text: "Create Aeronautics", icon: "/img/logo-icon/logo_create_aeronautics.png", version: "1.2+" }
        ]
    },
    {
        title: "Автосборка механизмов точности",
        description: "Автосборка механизмов точности из Create",
        detailedDescription: "Схематика механизма автосборки механизмов точности из Create. Масштаб: 6х2х4 (ДхШхВ)",
        tags: ["автосборка", "механизм точности", "1.21.1", "6.0+"],
        image: "/img/amethyst/precision_mechanism_maker_6_0.nbt-1.png",
        images: [
            "/img/amethyst/precision_mechanism_maker_6_0.nbt-1.png"
        ],
        downloads: [
            { name: "precision_mechanism_maker_6_0.nbt", description: "Схематика", url: "/files/amethyst/precision_mechanism_maker_6_0.nbt" }
        ],
        resources: [
            { text: "Временно отсуствует", icon: "/img/icon-lb/close.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.21.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "6.0+" }
        ]
    } 
    /*,
    {
        title: "Пример | Название",
        description: "Пример | Краткое описание",
        detailedDescription: "Пример | Подробное описание",
        tags: ["пример"],
        image: "/img/amethyst/example-1.png",
        images: [
            "/img/amethyst/example-1.png",
            "/img/amethyst/example-2.png"
        ],
        downloads: [
            { name: "example.nbt", description: "Схематика", url: "/files/amethyst/example.nbt" }
        ],
        resources: [
            { text: "Пример x0", icon: "/img/minecraft/64x/пример.png" }
        ],
        mods: [
            { text: "Minecraft", icon: "/img/logo-icon/logo_minecraft.png", version: "1.20.1" },
            { text: "Create", icon: "/img/logo-icon/logo_create.png", version: "0.5.1j" }
        ]
    }
        */
];

const tagCategories = {
    "Версия игры": ["1.20.1", "1.21.1"],
    "Версия Create": ["0.5.1", "6.0+"],
    "Тип": ["автосборка", "ферма", "двигатель", "база", "хранилище лавы", "карьер", "техника"],
    "Тип техники": ["дирижабль"],
    "Предназначение техники": ["гражданский"],
    "Выходной материал": ["опыт", "корпуса", "костная мука", "тесто", "двигательный узел", "механизм точности"],
    "Другое": []
};

// =========================================================

let selectedTags = [];

// Получить все уникальные теги
function getAllTags() {
    const tags = new Set();
    schematics.forEach(s => s.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
}

// Получить теги для категории "Другое"
function getOtherTags() {
    const allAssigned = new Set();
    Object.keys(tagCategories).forEach(cat => {
        if (cat !== "Другое") {
            tagCategories[cat].forEach(tag => allAssigned.add(tag));
        }
    });
    
    return getAllTags().filter(tag => !allAssigned.has(tag));
}

// Отобразить теги по категориям
function renderTags() {
    const tagList = document.getElementById('tag-list');
    tagList.innerHTML = '';

    // Основные категории
    Object.keys(tagCategories).forEach(category => {
        let categoryTags = [];

        if (category === "Другое") {
            categoryTags = getOtherTags().sort((a, b) => a.localeCompare(b));
        } else {
            categoryTags = tagCategories[category]
                .filter(tag => getAllTags().includes(tag))
                .sort((a, b) => a.localeCompare(b));
        }

        if (categoryTags.length === 0) return;

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'tag-category';

        const header = document.createElement('h4');
        header.textContent = category;
        categoryDiv.appendChild(header);

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tag-list-inner';

        categoryTags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');
            if (selectedTags.includes(tag)) {
                tagElement.classList.add('active');
            }
            tagElement.textContent = tag;
            tagElement.onclick = () => toggleTag(tag);
            tagsContainer.appendChild(tagElement);
        });

        categoryDiv.appendChild(tagsContainer);
        tagList.appendChild(categoryDiv);
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

    filtered.forEach(s => {
        const originalIndex = schematics.indexOf(s);
        const card = document.createElement('div');
        card.classList.add('schematic-card');
        card.innerHTML = `
            <img src="${s.image}" alt="${s.title}">
            <div class="content">
                <h3>${s.title}</h3>
                <p>${s.description}</p>
                <div class="tags">${s.tags.join(', ')}</div>
                <a href="schematic.html?id=${originalIndex}" class="open-button">Открыть</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Поиск тегов (с поддержкой "Другое")
document.getElementById('tag-search').addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase().trim();
    const tagList = document.getElementById('tag-list');
    tagList.innerHTML = '';

    Object.keys(tagCategories).forEach(category => {
        let categoryTags = [];

        if (category === "Другое") {
            categoryTags = getOtherTags().filter(tag => tag.toLowerCase().includes(search));
        } else {
            categoryTags = tagCategories[category]
                .filter(tag => tag.toLowerCase().includes(search) && getAllTags().includes(tag));
        }

        if (categoryTags.length === 0) return;

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'tag-category';

        const header = document.createElement('h4');
        header.textContent = category;
        categoryDiv.appendChild(header);

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tag-list-inner';

        categoryTags.sort((a, b) => a.localeCompare(b)).forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');
            if (selectedTags.includes(tag)) tagElement.classList.add('active');
            tagElement.textContent = tag;
            tagElement.onclick = () => toggleTag(tag);
            tagsContainer.appendChild(tagElement);
        });

        categoryDiv.appendChild(tagsContainer);
        tagList.appendChild(categoryDiv);
    });
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderTags();
    filterSchematics();
});