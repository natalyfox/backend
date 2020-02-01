'use strict';

let user ={
    'name' : 'Анна',
    'age' : 25,
    'size' : [90, 60, 90]

};

for(let item in user){
    console.log(user[item]);
}


// JSON

let obj = {
    'name' : 'Иван',
    'age ' : 16,
    'address' : 'Полтава',
    'courses' : ['html', 'css', 'js']
};

// '{'name' : 'Иван', 'age ' : 16, 'address' : 'Полтава'}'

//JSON.stringify

let json = JSON.stringify( obj ); // string

console.log( typeof json );

console.log( json );


/*
1) При преобразовании stringify все кавычки заменяются на двойные ""
2) Если ключи свойств были без кавычек, то они тоже будут в двойных ""
3) Полученная строка называется "сериализованной" или JSON-форматированной

ДЛя преобразования поддреживаются такие форматы:

Обьекты
Массивы
Примитивы - строки / числа / логические / null

При преобразовании пропускаются такие типы:

свойства-функции (методы)
символьные свойства
свойства содержащщие underfined
*/

let user2 = {
    sayHi(){
        alert('Hello')
    },
    [Symbol('id')] : 123,
    'something' : undefined,
    'name' : null

};

console.log(JSON.stringify(user2)); // {"name" : null}

// Важно, чтобы в объекте не было циклических ссылок

let room = {
    number : 23
};

let meetup = {
    title : 'Conference',
    participation : ['John', 'Ann']
};

meetup.place = room;
room.occupiedBy = meetup;

console.log( room );


// JSON.stringify( meetup );

// Такое может быть, но так не делать!!!!!!!!

/*

JSON.stringify( value, replacer, space)

replacer - Массив свойств для кодирования функции соответствия function(key, value)

space - Дополнительное пространство(отступы), для удобного форматирования

*/

console.log( JSON.stringify( meetup, ['title', 'participation'], 5 ) );

// stringify работает на основе метода (функции) toJSON. встроен в класс Обьектов по умолчанию

/* JSON.parse( str, reviver)

str - строка вида JSON

reviver - это функция, которая будет вызываться для каждой пары ключ\значение

*/

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[1] ); // 1

/*
parse помагает преобразовать из объекта,массива в нормальный вид
*/

// JSON можеть быть очень сложным по структуре, насколько это нужно. Может иметь любой уровень сложенности данных

/*

let json = "{
    name : "John1", // name не в двойных кавычках
    "surname" : 'Smith', // Smith не в двойных кавычках
    'isAdmin' : false, // isAdmin не в двойных кавычках
    "birthday" : new Date(2000, 2, 3), // Дату надо передать как значение "02/03/2000" (new JSON не понимает)
}";
*/

// КУки - document.cookie

document.cookie = 'user=Nick';
console.log( document.cookie );

/*

Параметры передаваемые в cookie
'user=Nick' - передаём имя user и его значение Nick

Path - путь по которому куки будут доступны

'user=Nick; path=/'

Если мы задаём путь /admin, то куки будут доступны только по ссылкам

/admin
/admin/account
/admin/user/.../.../.../...

Если зададим / , то будет доступно на всём сайте

Domain - домен, на котором будут доступны куки

Мы не можем указать любой домен, по умолчанию куки доступны на домене на котором мы их установили.
Т.е. куки, которые были установлены для сайта site.ua не будут доступны для other.ua

Также, в случае, если установлены для site.ua, то не будут доступны для forum.site.ua

Чтобы разрешить куки для поддоменов нужно явно указать:
domain=site.ua
Старый формат domain=.site.ua

'user=Nick; path=/; domain=site.ua'

Expires, max=age

По умолчанию, если не задан ни один из этих параметров, то куки удаляются при закрытии браузера

expires=Tue, 19 Jan 2030 03:14:07 GMT

Это дата истечения срока cookie

Дата должна быть чётко в этом формате
Чтобы получить правильную дату нужно использовать функцию .toUTCString()


*/

// +1 день к текущему

let date = new Date( Date.now() + 86400e3 );
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;

console.log( document.cookie );

// max-age = 3600 - Альтернатива expires, определяет срок действия куки в секундах с текущего момента

// 'user=Nick; path=/; domain=site.ua; max-age=36000'

//Чтобы удалить куки можно ему поменять срок max-age на 0

// document.cookie = 'user=John; max-age=0'

/*
    По умолчанию, куки установленные сайтом http://site.ua, также будут доступны на сайте https://site.ua

    Для того, чтобы включить куки только на защищённом соединении, нужно установить параметр Secure

    'user=John; secure'

    Есть ещё одна настройка для безопасности - samesite
    Она защищает от XSRF-атак


    'samesite=strict' - куки никогда не отправятся, если позователь не с этого же сайта

    'samesite=lax' - в этом слусае куки будут работать, кроме 2 случаев:
    1) Если испльзуется только https
    2) Операция не осуществляет навигацию верхнего уровня, то есть исзменяет адресную строку, либо импользование 
    iframe

    Желательно не полагаться только на samesite, т.к. в старых браузерах его нет.


*/

// ДЗ раздел 5.12, 4.1 learn.javascript.ru