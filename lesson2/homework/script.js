"use strict";

/*function getCookie(byname)	// возвращает по имени значение, здесь не используется
   {byname=byname+"=";
    nlen = byname.length;
    fromN = document.cookie.indexOf(byname)+0;
    if((fromN) != -1)
        {fromN +=nlen
         toN=document.cookie.indexOf(";",fromN)+0;
         if(toN == -1) {toN=document.cookie.length;}
         return unescape(document.cookie.substring(fromN,toN));
        }
    return null;
   }

 function parseCookie()   // Разделение cookie
   { let cookieList = document.cookie.split("; ");
   // Массив для каждого cookie в cookieList
   let cookieArray = new Array();
   for (var i = 0; i < cookieList.length; i++) {
       // Разделение пар имя-значение.
       let name = cookieList[i].split("=");
       // Декодирование и добавление в cookie-массив.
       cookieArray[unescape(name[0])] = unescape(name[1]);
    }
   return cookieArray;
  }
 function setCookie(visits) {
    //Счетчик числа посещений с указанием даты последнего посещения
       //и определением срока хранения в 1 год. 
    let expireDate = new Date();
    let today = new Date();
    // Установка даты истечения срока хранения.
    expireDate.setDate(365 + expireDate.getDate());
    // Сохранение числа посещений.
    document.cookie = "visits=" + visits +
                      "; expires=" + expireDate.toGMTString() + ";";
    // Сохранение настоящей даты как времени последнего посещения.
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
                       "; expires=" + expireDate.toGMTString() + ";";
    }

    if ("" == document.cookie)
	{ // Инициализация cookie.
	 setCookie(1);
	 document.write("<H3>Поздравляю Вас с первым посещением моего сайта.</H3>");
	}
    else {
       let cookies = parseCookie();
       // Вывод приветствия, числа посещений и увеличение числа посещений на 1.
       document.write("<H4>Мы снова рады видеть Вас на моем сайте! Число лично ваших посещений - " +
          cookies.visits++ + " !</H4>");
       // Вывод даты последнего посещения.
       document.write("<H4>Последний раз Вы были у меня на сайте: " + cookies.LastVisit + ".</H4>");
       // Обновление cookie.
       //setCookie(isNaN(cookies.visits)?1:cookies.visits);
    }*/

   /* let list = document.querySelector("#list");
  function addToList(name) {
    let option = document.createElement("option");
    option.textContent = name;
    list.appendChild(option);
  }

  // Берём список из локального хранилища
  var notes = JSON.parse(localStorage.getItem("notes")) ||
              {"что купить": ""};
  for (var name in notes)
    if (notes.hasOwnProperty(name))
      addToList(name);

  function saveToStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  var current = document.querySelector("#currentnote");
  current.value = notes[list.value];

  list.addEventListener("change", function() {
    current.value = notes[list.value];
  });
  current.addEventListener("change", function() {
    notes[list.value] = current.value;
    saveToStorage();
  });

  function addNote() {
    var name = prompt("Имя записи", "");
    if (!name) return;
    if (!notes.hasOwnProperty(name)) {
      notes[name] = "";
      addToList(name);
      saveToStorage();
    }
    list.value = name;
    current.value = notes[name];
  }*/

  /*function addCookie(szName,szValue,dtDaysExpires) 
    {
      var dtExpires = new Date();
      var dtExpiryDate = "";

      dtExpires.setTime(dtExpires.getTime() + 
        dtDaysExpires * 24 * 60 * 60 * 1000);

      dtExpiryDate = dtExpires.toGMTString();

      document.cookie = 
        szName + "=" + szValue + "; expires=" + 
        dtExpiryDate;
    }

    function findCookie(szName) 
    {
      var i = 0;
      var nStartPosition = 0;
      var nEndPosition = 0;  
      var szCookieString = document.cookie;  

      while (i <= szCookieString.length) 
      {
        nStartPosition = i;
        nEndPosition = nStartPosition + szName.length;

        if(szCookieString.substring( nStartPosition,nEndPosition) == szName) 
        {
          nStartPosition = nEndPosition + 1;
          nEndPosition = document.cookie.indexOf(";",nStartPosition);

          if(nEndPosition < nStartPosition)
            nEndPosition = document.cookie.length;

          return document.cookie.substring( nStartPosition,nEndPosition);  
          break;    
        }
        i++;  
      }
      return "";
    };
    /*

    function removeCookie(szName) 
    {
      var dtExpires = new Date();
      dtExpires.setTime(dtExpires.getTime() - 1);

      var szValue = findCookie(szName);

      document.cookie = szName + "=" + szValue +
        "; expires=" + dtExpires.toGMTString();
    }

    function btnClick()
    {
      if(findCookie("Visit") == "")
      {
        addCookie("Visit","Alexandr_Frolov",10);
        addCookie("Count","0",10);

        document.write("<H2>You are welcome!</H2>");     
      }
      else
      {
        var szCnt = findCookie("Count");
        var i=0;

        if(szCnt != "")
        {
          i = szCnt;
          i++;
          szCnt = i.toString();
  
          addCookie("Count",szCnt,10);
        }

        document.write("<H2>You are welcome AGAIN!</H2>");     
        document.write(document.cookie);     
      }
    }*/

    function getCookie(name_date) {
      let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name_date.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  
    function setCookie(name_date, value, options = {}) {
  
      options = {
        path: '/',
      };
    
      if (options.hasOwnProperty('expires') && options.expires.toUTCString) {
        options.expires = options.expires.toUTCString();
      }
    
      let updatedCookie = encodeURIComponent(name_date) + "=" + encodeURIComponent(value);
    
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
   dateDifference();