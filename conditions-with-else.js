// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35, иначе выведет текст "не по-пацански"
*/
if(userAge > 35){
    console.log("ты пацан")
}
else{
    console.log("не по-пацански")
}



//задание 2
const isUser = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "привет, юзер", если 
  значение константы isTrue истинно, иначе нужно вывести "не пользователь ты мне"
*/
if(isUser == true){
    console.log("hi user")
}
else{
    console.log("u are not user")
}


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают,
   иначе необходимо вывести "неверный пароль".
*/   
if( password == realPassword){
    console.log("correct pasword")
}
else{
    console.log("uncorrect")
}


// задание 4 (со звездочкой)
const email = "admin@intocode.ru";

/*
  напиши ниже условие, которое выведет в консоль текст "неверный эмайл" если
  в значении переменной email нет символа "@", иначе выведи "ты зареган"
  Тебе понадобится метод indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/
if(email.indexOf('@') === -1){
    console.log("incorrect email")
}
else{
    console.log("correct email")
}

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль значение переменной x, если
  оно больше значения переменной y, иначе выведи значение переменной y
*/
if(x > y){
    console.log(x)
}
else{
    console.log(y)
}