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
  
  function dateDifference(){
      let cookie_visit_date = 0,
        current_date = Date.parse( new Date(Date.now() ) ),
        diff_date = 0;

        if( getCookie('visit_date') == undefined ){

            setCookie('visit_date', current_date); // создаём куки, если зашли первый раз

            console.log('Вы зашли первый раз - обновите страницу');

} else{

    cookie_visit_date = getCookie('visit_date');

    console.log(cookie_visit_date);

    diff_date = current_date - cookie_visit_date;

    diff_date = diff_date / 1000 / 60;

    console.log( diff_date);

    setCookie('visit_date', current_date); // перезаписываем куки



    }
 }

 dateDifference(); // запускаем функцию