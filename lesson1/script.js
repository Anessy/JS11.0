// ================= ЧЕКБОКСЫ ============

// получили чекбоксы

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let result = document.querySelector("#result");
// проверяем, выбраны ли они 

function checkbox() {
  if (one.checked || two.checked || three.checked) {
    result.innerHTML = (" Спасибо за ваш выбор!");
  }
  else {
    result.innerHTML = (" Вы не выбрали ни один вариант");
  }
}

// запускаем ф-цию по событию onchange из html

// ================= радио баттом =============

let radio = document.getElementsByName('r1');
let result2 = document.querySelector("#result2");
let butt = document.querySelector('#button');
console.log(radio.length);

// cлушатель события на кнопке
butt.addEventListener("click",function(){
  result2.innerHTML = ("Вы пока ничего не выбрали");
  for (let i = 0; i < radio.length; i++ ) {
    if (radio[i].checked) {
      result2.innerHTML = ("Вы выбрали " + [i+1] + " вариант"  );
    }
  }
});


