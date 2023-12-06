//Поле вывода
let input = document.querySelector('.input');
//Основание для возведения в степень
let power = "";
//Вставить
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//Удалить
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
//Очистить
function clean() {
    input.textContent = "0";
    power = "";
}

//Подсчет выражения
function resultExp() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) { //Если включает символ возведения в степень
        let tmp = input.textContent.split('^') //Получаем массив из основания и степени
        let num = eval(power);  //Вычисляем основани
        let pow = +tmp[1]   //степень берем как второй элемент массива
        input.textContent = Math.pow(num, pow); 
        power = "";
        return;
    }
    if (exp) {  //Если поле с выражением не пустое
        input.textContent = eval(exp);
    }
}


//Корень квадратный, вовзедение в степень/квадрат
function operation(name) {
    if (name == "sqrt")
        input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "sqr")
        input.textContent = Math.pow(eval(input.textContent), 2);
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}