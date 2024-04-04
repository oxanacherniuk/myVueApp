/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Какой образ жизни предпочитаете?",
        ["Я домосед", "Люблю вечеринки", "Люблю путешествия", "Предпочитаю семейный уют", "Люблю роскошь"],
        [
            "this.score.zerg++",
            "this.score.terran++",
            "this.score.terran++",
            "this.score.zerg++",
            "this.score.taldarim++; this.score.protoss++"
        ]
    ],
    [
        "Ваш круг общения состоит из…",
        ["Одного человека", "Огромного количества людей", "Разных людей, которых меняю каждые две недели", "Моего партнера, семьи и близких", "Моих слуг и приспешников"],
        [
            "this.score.zerg++; this.score.terran--",
            "this.score.terran++; this.score.zerg--",
            "this.score.protoss++; this.score.zerg--",
            "this.score.protoss--",
            "this.score.protoss++; this.score.terran--"
        ]
    ],
    [
        "Вы удачливый человек?",
        ["Не очень", "Думаю, что да", "Вовсе нет"],
        [
            "this.score.primal++; this.score.zerg++",
            "this.score.terran++",
            "this.score.primal++"
        ]
    ],

    [
        "Выберите слово по душе",
        [ "Семья", "Путешествие", "Власть", "Друзья", "Свобода"],
        [
            "this.score.zerg++; this.score.taldarim--; this.score.protoss--", 
            "this.score.terran++; this.score.zerg--", 
            "this.score.taldarim++; this.score.protoss++",
            "this.score.terran++",
            "this.score.zerg--;  this.score.terran--"
        ]
    ],
    [
        "Что вы делаете в свободное время?",
        ["Провожу время с семьей/читаю", "Ухаживаю за собой", "Гуляю с друзьями", "Занимаюсь чем-нибудь активным", "Отдыхаю/сижу в интернете"],
        [
            "this.score.zerg++",
            "this.score.taldarim++",
            "this.score.terran++",
            "this.score.primal++",
            "this.score.protoss++"
        ]
    ],
    [
        "Ваше положительное качество?",
        ["Дружелюбность", "Оптимизм", "Элегантность", "Преданность", "Активность"],
        [
            "this.score.primal+=2; this.score.protoss--; this.score.taldarim--", 
            "this.score.primal++; this.score.terran++; this.score.protoss-=2", 
            "this.score.terran--; this.score.zerg-=2",
            "this.score.terran++; this.score.protoss--",
            "this.score.terran++; this.score.primal++; this.score.zerg-=2"
        ]
    ],
    [
        "Ваше отрицательное качество?",
        ["Болтливость", "Пытаюсь все контролировать", "Хвастовство", "Раздражительность", "Злость"],
        [
            "this.score.terran++; this.score.primal++; this.score.zerg++", 
            "this.score.zerg++", 
            "this.score.protoss++; this.score.zerg--; this.score.terran--",
            "this.score.zerg++; this.score.protoss++",
            "this.score.zerg++"
        ]
    ],
    [
        "Любимый цвет?",
        ["Зеленый", "Красный", "Розовый", "Голубой","Золотой"],
        [
            "this.score.zerg++", 
            "this.score.infested--", 
            "this.score.zerg--", 
            "this.score.terran++",
            "this.score.taldarim++"
        ]
    ],
    [
        "Верите в  магию?",
        ["Да", "Нет"],
        [
            "this.score.taldarim++; this.score.zerg--", 
            "this.score.zerg++; this.score.protoss--"
        ]
    ],
    [
        "Вас просят помочь незнакомому человеку. Сможете?",
        ["Помогу, конечно", "Мне что, делать нечего?", "Обычно я – тот человек, кому нужно помогать", "Не знаю, а что мне за это будет?"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.protoss++;this.score.primal--", 
            "this.score.terran++; this.score.zerg--",
            "this.score.taldarim++"
        ]
    ],
    [
        "Как думаете, чем вы привлекаете людей?",
        ["Кокетством/флиртом", "Своим упорством", "Оптимизмом", "Независимостью"],
        [
            "this.score.taldarim++; this.score.zerg--", 
            "this.score.zerg++", 
            "this.score.terran++; this.score.primal++",
            "this.score.protoss++"
        ]
    ],
    [
        "Как вы обычно решаете свои проблемы?",
        ["Сначала паникую, но потом беру себя в руки", "Использую  обаяние", "Тщательно продумываю план действий", "Я не решаю проблемы, я их создаю"],
        [
            "this.score.terran++; this.score.zerg--", 
            "this.score.terran++; this.score.zerg--", 
            "this.score.zerg++",
            "this.score.terran++"
        ]
    ],
    [
        "Как выглядит ваш идеальный выходной?",
        ["Спокойный день: чтение книги, принятие ванны, релакс", "Я за активный отдых! Тусовки, алкоголь", "Целый день не вылезать из кровати", "Встреча с друзьями"],
        [
            "this.score.zerg++", 
            "this.score.primal++; this.score.terran++", 
            "this.score.zerg++; this.score.terran--; this.score.primal--",
            "this.score.primal++;"
        ]
    ],
    [
        "Вы собираетесь праздновать день рождения. Как отметите?",
        ["Тихо, в кругу родных и близких", "Я уже столько лет не отмечаю дни рождения", "Закачу большую вечеринку и позову всех!", "Позову нескольких друзей, пойдем в кафе"],
        [
            "this.score.protoss--", 
            "this.score.zerg++", 
            "this.score.primal++", 
            "this.score.terran++"
        ]
    ],
    [
        "Что важнее в человеке?",
        ["Ум", "Красота"],
        [
            "this.score.terran--; this.score.zerg++", 
            "this.score.taldarim++"
        ]
    ],
    [
        "Что может вывести вас из себя?",
        ["Нарушение личных границ", "Пренебрежение моими чувствами", "Недооценка моих сил и насмешки", "Если кто-то обижает моих друзей и близких"],
        [
            "this.score.zerg++; this.score.terran--; this.score.primal--", 
            "this.score.taldarim++", 
            "this.score.zerg++; this.score.taldarim--",
            "this.score.zerg++"
        ]
    ],
    [
        "Идеальная работа — какая она?",
        ["Тихая и спокойная", "Очевидно, там, где платят много денег!", "Творческая", "Со стабильным карьерным ростом"],
        [
            "this.score.zerg++", 
            "this.score.protoss++", 
            "this.score.primal++",
            "this.score.taldarim++"
        ]
    ],
    [
        "Вы умеете любить?",
        ["Да, есть любимый человек", "Да, но пока в сердце никого нет", "Только себя", "Никого не люблю, даже себя"],
        [
            "this.score.hybrid++", 
            "this.score.zerg--; this.score.terran--", 
            "this.score.protoss++", 
            "this.score.zerg--"
        ]
    ],
    [
        "Увлекаетесь спортом?",
        ["Да, люблю спорт", "Спорт - моя жизнь!", "Иногда", "Я ленивый, какой спорт?"],
        [
            "this.score.zerg--", 
            "this.score.zerg-=2", 
            "this.score.taldarim++",
            "this.score.zerg+=2"
        ]
    ],
    [
        "Есть предположения, какой персонаж вам выпадет?",
        ["Да я осел 100%", "Я же чсв, поэтому Принц Чарминг", "Хочу быть котиком!"],
        [
            "this.score.terran++", 
            "this.score.taldarim++",
            "this.score.zerg--"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'zerg': {
        name: "Шрек",
        description: "Вы обладаете достаточно сильным характером, вас часто невозможно переспорить, потому что вы упрямы и любите доказывать свою правоту. Часто можете злиться по пустякам, присуща вспыльчивость и эмоциональность. Вы не любите большие компании, но не откажете себе в небольшом путешествии с верным другом. Несмотря на то, что многие люди вам неприятны, вы имеете большое и доброе сердце, а также всегда готовы прийти на помощь в трудную минуту.",
        quote1: "Не будьте как дома, вам тут официально не рады. Это факт.",
        quote2: "",
        author: "© Шрек",
        points: "190"
    },
    'primal': {
        name: "Пряня",
        description: "Вы веселы и разговорчивы, всегда находитесь в центре внимания. Отличаетесь экстравагантным стилем одежды, из-за чего всегда выглядите очень модно и стильно. Можете казаться поверхностным человеком, но на самом деле  обладаете добрым сердцем и помогаете друзьям в трудных ситуациях. Вы дружелюбны и открыты к общению, всегда готовы поддержать близких вам людей.",
        quote1: "Пряники не сдаются!",
        quote2: "",
        author: "© Пряня",
        points: "90"
    },
    'terran': {
        name: "Осел",
        description: "Вы прирожденный оптимист и тот еще милфхантер. Вам необходимо постоянно выбираться из дома и искать приключения на свою пятую точку. Мало думаете о последствиях, поэтому соглашаетесь на любую авантюру. Любите большие компании, но и также способны проводить время только с одним человеком. Несмотря на большое количество друзей рядом, вы каждому готовы помочь в трудную минуту, так как обладаете большим и добрым сердцем.",
        quote1: "Будет прикольно! Посидим допоздна, потравим анекдоты, а утром... я испеку вафельки.",
        quote2: "",
        author: "© Осел",
        points: "180"
    },
    'infested': {
        name: "Кот в сапогах",
        description: "Вы слишком привлекательны и грациозны для этого мира. Обаяние и красота - ваши главные козыри. Умеете себя грамотно показать, чтобы люди наблюдали только ваши хорошие стороны. Однозначно любите вкусно покушать, так как очень заботитесь о себе. Несмотря на позицию одиночки, умеете любить и обладаете большим сердцем, но прежде чем в него попасть кому-то, покажете свои коготки и четко расставите личные границы.",
        quote1: "Покорми меня,если посмеешь!",
        quote2: "",
        author: "© Кот в сапогах",
        points: "160"
    },
    'protoss': {
        name: "Лорд Фаркуад",
        description: "Вы горды и безупречны. Обладаете уникальным стилем и харизмой, характеризуетесь как слегка жестокий и безжалостный человек. Часто стремитесь к власти и контролю, используя манипуляции и интеллект для достижения целей. У людей вызываете уважение и иногда даже страх. Не умеете любить никого, кроме себя.",
        quote1: "Многие из вас могут погибнуть, но я готов пойти на эту жертву.",
        quote2: "",
        author: "© Лорд Фаркуад",
        points: "80"
    },
    'taldarim': {
        name: "Принц Чарминг",
        description: "Вы самовлюбленны и эгоистичны, так как обладаете шикарной внешностью. Вы помешены только на себе, вас волнует ваш статус в обществе, поэтому стремитесь к славе и власти. Ради достижения цели вы готовы идти по головам. Не обращаете внимание на чувства других людей, из-за чего часто делаете им больно. Но в душе являетесь хрупким и ранимым человеком, которому нужна любовь и поддержка.",
        quote1: "Сейчас и ты узнаешь, каково это — разом лишиться всего того, к чему ты стремился, чем дорожил… Сейчас ты поймешь, что я чувствовал. ",
        quote2: "",
        author: "© Принц Чарминг",
        points: "90"
    },
    'hybrid': {
        name: "Фиона",
        description: "Вы очень привлекательны. Обладаете силой и решительностью, что делает вас еще более обворожительным человеком. Вы храбры и независимы от мнения окружающих, не боитесь защищать своих близких и свои убеждения, присуща верность. Вечно стремитесь стать лучшей версией себя. Часто бываете скрытной личностью, и, чтобы добраться до вашего сердца, людям приходится сражаться с драконами и уничтожать кирпичные стены, которые вы выстроили, дабы не открываться людям.",
        quote1: "Ослик, я принцесса, а принцессе не положено быть уродкой!",
        quote2: "",
        author: "© Фиона",
        points: "170"
    }
}