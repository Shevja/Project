const dictionary = {
    Dog: 'Собака',
    House: 'Дом',
    Laptop: 'Ноутбук',
    street: 'улица',
    company: 'компания',
    часть: 'part',
    system: 'система',
    number: 'номер',
    world: 'мир',
    case: 'случай',
    work: 'работа',
    party: 'вечеринка',
    girl: 'девочка',
    government: 'правительство',
    house: 'дом',
    woman: 'женщина',
    life: 'жизнь',
    people: 'люди',
    year: 'год',
    day: 'день',
    way: 'путь',
    thing: 'вещь',
    child: 'ребенок',
       group: 'группа',
    time: 'время',
    area: 'область',
    problem: 'проблема',
    place: 'место',
    hand: 'рука',
    service: 'сервис',
    school: 'школа',
    guy: 'парень',
    country: 'страна',
    point: 'точка',
    week: 'неделя',
    relationship: 'отношения',
    end: 'конец',
    word: 'слово',
    family: 'семья',
    fact: 'факт',
    head: 'голова',
    month: 'месяц',
    information: 'информация',
    power: 'власть',
    вопрос:	'question',
    business: 'бизнес',
    development: 'развитие',
    home: 'дом',
    side: 'сторона',
    night: 'ночь',
    money: 'деньги',
    eye: 'глаз'
};

const worden = Object.keys(dictionary);

const $button_start = $('.button_start');
const $button1 = $('.button1');
const $button2 = $('.button2');
const $button3 = $('.button3');
const $sent1 = $('.sent1');
const $sent2 = $('.sent2');
const $sent3 = $('.sent3');
const $Inputword1 = $('.Inputword1');
const $Inputword2 = $('.Inputword2');
const $Inputword3 = $('.Inputword3');
const $EnglishWord = $('.EnglishWord');
const $EnglishWord1 = $('.EnglishWord1');
const $RussianWord = $('.RussianWord');

$button_start.on('click', () => {
    console.log('Переход...');
    $(".mainText").css("display", "none");
    $(".site").css("display", "flex");
    $(".window1").css("display", "none");
    $(".window2").css("display", "none");
    $(".window3").css("display", "none");
    console.log('Переход выполнен');
});


$button1.on('click', () => {
    console.log('Переход... game1');
    $(".window1").css("display", "inherit");
    $(".window2").css("display", "none");
    $(".window3").css("display", "none");
    console.log('Переход выполнен');
});

$button2.on('click', () => {
    console.log('Переход... game2');
    $(".window3").css("display", "none");
    $(".window2").css("display", "inherit");
    $(".window1").css("display", "none");
    console.log('Переход выполнен');
});

$button3.on('click', () => {
    console.log('Переход... game3');
    $(".window2").css("display", "none");
    $(".window1").css("display", "none");
    $(".window3").css("display", "inherit");
    console.log('Переход выполнен');
});

const controller = {
    counter: 0,
    currentwordrus: null,
    currentworden: null,
    getnewword: function () {
        this.currentwordrus = dictionary[worden[this.counter]];
        this.currentworden = worden[this.counter];
        this.counter++;
        return this.currentworden || 'Тренировка закончена!';
    }    
};
const controller1 = {
    counter: 0,
    currentwordrus: null,
    currentworden: null,
    getnewword: function () {
        this.currentwordrus = dictionary[worden[this.counter]];
        this.currentworden = worden[this.counter];
        this.counter++;
        return this.currentwordrus || 'Тренировка закончена!';
    }    
};
const controller2 = {
    counter: 0,
    currentwordrus: null,
    currentworden: null,
    getnewword: function () {
        this.currentwordrus = dictionary[worden[this.counter]];
        this.currentworden = worden[this.counter];
        this.counter++;
        return this.currentworden || 'Тренировка закончена!';
    }    
};


$sent1.on('click', () => {
    const clientwordrus = $Inputword1.val();
    const { currentwordrus } = controller;
    console.log(currentwordrus + ' and ' + clientwordrus);
    if (currentwordrus.toLowerCase() === clientwordrus.toLowerCase()) {
        alert('RIGHT!!!');
        $Inputword1.val('');
        setnewword();
    }else {
        alert('Wrong');
    }
});

$sent2.on('click', () => {
    const clientworden = $Inputword2.val();
    const { currentworden } = controller1;
    console.log(currentworden + ' and ' + clientworden);
    if (currentworden.toLowerCase() === clientworden.toLowerCase()) {
        alert('RIGHT!!!');
        $Inputword2.val('');
        setnewword2();
    }else {
        alert('Wrong');
    }
});

$sent3.on('click', () => {
    const clientworden = $Inputword3.val();
    const { currentworden } = controller2;
    console.log(currentworden + ' and ' + clientworden);
    if (currentworden.toLowerCase() === clientworden.toLowerCase()) {
        alert('RIGHT!!!');
        $Inputword3.val('');
        setnewword1();
    }else {
        alert('Wrong');
    }
});

setnewword = () => {
    $EnglishWord.html(controller.getnewword());
};
setnewword();

setnewword1 = () => {
    $EnglishWord1.html(controller2.getnewword());
};
setnewword1();

setnewword2 = () => {
    $RussianWord.html(controller1.getnewword());
};
setnewword2();