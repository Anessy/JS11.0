

function showFun() {
    if(document.getElementById('myShowBlock' ).style.display == 'none') {
        document.getElementById('myShowBlock' ).style.display = 'block';
    } else {
        document.getElementById('myShowBlock' ).style.display = 'none';
    }
}

function showFun2() {
  if(document.getElementById('myShowBlock2' ).style.display == 'none') {
      document.getElementById('myShowBlock2' ).style.display = 'block';
  } else {
      document.getElementById('myShowBlock2' ).style.display = 'none';
  }
}

function showFun3() {
  if(document.getElementById('myShowBlock3' ).style.display == 'none') {
      document.getElementById('myShowBlock3' ).style.display = 'block';
  } else {
      document.getElementById('myShowBlock3' ).style.display = 'none';
  }
}

// ================= ЧЕКБОКСЫ ==========================

// получили чекбоксы и вывод результата

let one = document.querySelector('#one'),
two = document.querySelector('#two'),
three = document.querySelector('#three'),
result = document.querySelector("#result");

// проверяем, выбраны ли они 

function checkbox() {
 
  result.innerHTML = (one.checked || two.checked || three.checked) ? 
        (" Спасибо за ваш выбор!") : (" Вы не выбрали ни один вариант");
}


// ================= радио баттом =============


let result2 = document.querySelector("#result2");
let butt = document.querySelector('#button');
let radio = document.getElementsByName('r1');

// addEventListener - cлушатель события на кнопке. При событии "click" он запустит function()

butt.addEventListener("click",function(){

  // и выведет в наш результат значение "по умолчанию" - "Вы пока ничего не выбрали"
  result2.innerHTML = ("Вы пока ничего не выбрали");

  // Перебором элементов от 0; пока i меньше количества элементов нашего radio; после каждого прохождения цикла, добавляем к i по 1
  for (let i = 0; i < radio.length; i++ ) {
    // если элемент масива radio с номером i выбран, то
    if (radio[i].checked) {
      // записать в наш результат сообщение с номером выбранного варианта (i+1), потому, что отсчет начинается с 0
      result2.innerHTML = ("Вы выбрали " + [i+1] + " вариант"  );
    }
  }
});

// ===================== выпадающий список =================

// получаем наш выпадающий список
let downList = document.querySelector('#downList'); 

// ставим слушатель события на "уход" мышки с элемента (mouseout)
downList.addEventListener("mouseout", function(){
  
// при срабатывании ф-ции выводим в наш результат полученный с помощью selectedIndex номер выбранного элемента  
  document.querySelector('#result3').innerHTML = ("Вы выбрали " + downList.selectedIndex + " вариант"  );
});

