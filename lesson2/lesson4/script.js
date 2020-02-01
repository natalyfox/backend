'use strict';

// Флаги и дескрипторы свойств

/*
    writable - if оно true, то свойстов можно менять, иначе оно только для чтения ( по-умолчанию true)

    enumerable - если true, свойство перечисляется в циклах, в противном - игнорируется циклом. 
    По-умолчанию -  true

    configurable - если true, то свойсво можно удалить и изменять атрибуты writable/enumerable, иначе нельзя.

    WEC работает только с 'use strict' или на новых версиях.
*/

let obj={
    'name': 'Иван',
    'age' : 55,
    'access' : 'admin'
}

/*
    object.getOwnPropertyDescriptor(obj, propertyName) - получает параметры writable, enumerable , 
    configurable (WEC)
*/

let descriptor = Object.getOwnPropertyDescriptor(obj, 'access' );

console.log(descriptor);

/*
    Object.defineProperty(obj, propertyName, descriptor)
*/

Object.defineProperty( obj, 'access', { writable : false } );

descriptor = Object.getOwnPropertyDescriptor(obj, 'access' );

console.log(descriptor);

let pi = Math.PI;

/*
    Функция для нескольких свойств сразу
    Object.defineProperties(obj, {

        prop1: {descriptor}
    })

    Функция позволяет задать дескрипторы сразу нескольким свойствам обьекта
*/

descriptor = Object.defineProperties(obj, {

    name : {writable : false},
    age : {enumerable : false, writable : true}
});

/*
    Object.getOwnPropertyDescriptors(obj)
    Получить сразу все дескрипторы всех свойств обьекта
*/

descriptor = Object.getOwnPropertyDescriptors(obj);
console.log(descriptor);

/*
Object.preventExtensions(obj) - запрещает добавлять новые свойства в обьект.

Object.seal(obj) - запрещает добавлять/удалять свойства. Устанавливает configurable false
для всех свойств

Object.freeze(obj) - Запрещает добавлять, удалять, менять.

                                Методы проверки

    Object.isExtensible - возвращает false, если запрещено добавление свойств.
    
    Object.isSealed(obj) - возвращает true, если запрещено добавление/удаление.

    Object.isFrozen(obj) - возвращает true
*/

// Геттеры и сеттеры (get / set) - свойтва-аксессоры (вспомогательные свойства)

let user = {

    'name' : 'John',
    'surname' : 'Smith',

    get fullName() {
        return `${this.name} ${this.surname}`; 
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
 };

 console.log( user.fullName ) ; // John Smith

user.fullName = 'Иван Кочерга';


console.log( user.fullName ) ;

/*

    1) get  и set не имеют дискриптора writable, но имеет enumerable и configurable;
    2) get - функия без аргументов, которая срабатывает при чтении свойства;
    3) set -  функция, принмающая один аргумент, вызываемая при присвоении свойства.

*/


let user2 = {
    get name() {
        return this._name;
    },
    set name(value) {
        if( value.length < 4 ) {
            console.log('Имя слишком короткое');
            return;
        }
        this._name = value;
    }
};

user2.name = 'Иван';

console.log (user2.name ); // Иван

user2.name = '';

console.log( user2 ); /* Имя слишком короткое
{_name: "Иван"}
name: (...)
_name: "Иван"
get name: ƒ name()
set name: ƒ 
name(value)__proto__: Object
 */

 localStorage.setItem( 'user', JSON.stringify(user) );

 console.log( JSON.parse(localStorage.getItem('user') ) );

 let message;

message = 'Приветик!';

alert (message);

console.log(message);
