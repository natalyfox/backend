'use strict';

document.cookie = "username=John";

// Запишеться cookie  с именем username и значением John и будет работать на всех страницах
// по пути www.domen.com/lesson3/...

console.log( document.cookie );


// encodeURIComponent(переменная) - перекодирует данные для хранения в cookie

let name = 'my name'; // пробел не может храниться в cookie
let value = 'John Smith'; // пробел не может храниться cookie

document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

//перекодируем имя и значение для хранения в куки

console.log( document.cookie); // my%20name=John%20Smith

// %20 - исмвол отвечающий за пробел

// decodeURIComponent(переменная) - преобразует назад спецсимволы  (например: %20) в пробелы

// чтобы создать куки для всего домена, нужно указать параметр path=/

document.cookie = "username=Nick; path=/";

/*

domain=site.com - указывает на какком домене будут работать куки.
По умолчанию, домен на котором запущен код записи куки

Например domain=test.site.com - будет работать только на этом домене

domain=.site.com - будет работать на домене и на всех поддоменах

*/

let date = new Date(Date.now() + 86400e3); // Создадём текущую дату + 1день
date = date.toUTCString(); // Преобразуем дату к нужному формату

document.cookie = "username=Nick; path=/; expires="+date;

console.log("username=Nick; path=/; expires="+date);


// max-age=3600 - куки будут хранится 1 час (показывает сколько секунд будут храниться куки от текущего момента)

// Функции для работы с cookie

// getCookie(name)


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  console.log(getCookie('username') );

  /* localStorage - это аналог куки, только хранить можно уже не 4 кб, а до 2 мб
   тоесть можно хранить маленьку базу данных

   LocalStorage - хранит данные даже после перезагрузки браузера. (работает всегда на всём домене)

   SessionStorage - хранит данные при перезагрузке страницы. При перезагрузке браузера данные удалятся.

   Доступ к этим хранилищам имеет только js, на него не могут влиять HTTP заголовки.

   Также, хранилище привязывает только к текущему домену+протоколу+порту

   */

   // Запись в licalStoRage

   localStorage.setItem('user name', 1000); // set - задать

   localStorage.admin = 'привет';

   console.log( localStorage.getItem('user name')) ; //1000 (get - получить)

   console.log( localStorage.user);
   console.log( localStorage);

   delete localStorage.user;


   /// ДЗ learn.javascript читать 4.2 localStorage (перебор ключей) + повторить JSON + куки