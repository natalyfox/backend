"use strict";
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
  };

  if (options.hasOwnProperty('expires') && options.expires.toUTCString) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function arrayInCookie(){
  let arraySaved = getCookie('arraySaved');
  console.log(getCookie('arraySaved'));

  if(arraySaved == undefined || arraySaved == 'no'){
    console.log('Вы зашли первый раз');
    let slova = [];
    while(true){
      let slovo = prompt('Введите слово:');
      if(slovo == null) break;
    
      slova.push(slovo);
    }
    
    setCookie('arraySaved', 'yes'); // создаём куки, после первого захода на страницу
    setCookie('slova', JSON.stringify(slova)); // создаём куки, после сохранения массива
    console.log('Массив сохранен:');
    console.log(slova);

  } else if(arraySaved == 'yes'){
    console.log('Вы зашли второй раз');
    let slova = JSON.parse(getCookie('slova'));
    let slovo = prompt('Введите слова для проверки:');    
    if(slova.indexOf(slovo) >= 0){
      alert('Верно');
    } else {
      alert('Не верно');
    }
       
    setCookie('arraySaved', 'no');
    setCookie('slova', '');
    console.log('Массив удален');
  }
}

arrayInCookie();