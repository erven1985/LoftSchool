
/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:
 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(fn(array[i], i, array));
    }
    return newArr;
}

/*
 Задание 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var result = 0;
    if (typeof initial !== 'undefined') {
        result = fn(initial, array[0], 0, array);
    }
    for (var i = 1; i < array.length; i++) {
        var previousValue = result;
        if (typeof initial === 'undefined' && i === 1) {
            previousValue = array[0];
        }
        result = fn(previousValue, array[i], i, array);
    }
    return result;
}

/*
 Задание 4:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива
 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var arr = Object.keys(obj);
    return arr.map(item => item.toUpperCase());
}

/*
 Задание 5 *:
 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var newArr = [], 
        from = from, 
        to = to;
    if (typeof from === 'undefined' || from === null) {
        from = 0;
    }
    if (typeof to === 'undefined' || to === null) {
        to = array.length;
    }
    if (from < 0 ) {
        from = array.length + from;
        if (from < 0) {
            from = 0;
        }
    }
    if (to < 0) {
        to = array.length + to;
        if (to < 0) {
            return [];
        }
    }
    if (to > array.length) {
        to = array.length;
    }
    for (var i = from; i < to; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}

/*
 Задание 6 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {

}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};