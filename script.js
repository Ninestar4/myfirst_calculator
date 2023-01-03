var show = document.getElementById('show');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var num5 = document.getElementById('num5');
var num6 = document.getElementById('num6');
var num7 = document.getElementById('num7');
var num8 = document.getElementById('num8');
var num9 = document.getElementById('num9');
var c = document.getElementById('c');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var mul = document.getElementById('mul');
var equal = document.getElementById('equal');
var divie = document.getElementById('divie');


var num_first = '';
var num_second = '';
var num_first_active = true;
var num_second_active = false;
var con = '';


//number 
num1.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +1;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +1;
    show.innerHTML = num_second;
  }
})
c.addEventListener('click', function() {
    num_first = '';
    num_second = '';
    num_first_active = true;
    num_second_active = false;
    con = '';
    show.innerHTML = 0;
})
num0.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +0;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +0;
    show.innerHTML = num_second;
  }
})
num2.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +2;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +2;
    show.innerHTML = num_second;
  }
})
num3.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +3;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +3;
    show.innerHTML = num_second;
  }
})
num4.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +4;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +4;
    show.innerHTML = num_second;
  }
})
num5.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +5;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +5;
    show.innerHTML = num_second;
  }
})
num6.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +6;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +6;
    show.innerHTML = num_second;
  }
})
num7.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +7
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +7;
    show.innerHTML = num_second;
  }
})
num8.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +8;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +8;
    show.innerHTML = num_second;
  }
})
num9.addEventListener('click', function() {
  if (num_first_active) {
    num_first = num_first +9;
    show.innerHTML = num_first;
  }
  else if(num_second_active) {
    num_second = num_second +9;
    show.innerHTML = num_second;
  }
})





// con

plus.addEventListener('click', function() {
  if (num_first != '' && num_second == '') {
    num_first_active = false;
    num_second_active = true;
    con = '+'
  }
})

minus.addEventListener('click', function() {
  if (num_first != '' && num_second == '') {
    num_first_active = false;
    num_second_active = true;
    con = '-'
  }
  
})

mul.addEventListener('click', function() {
  if (num_first != '' && num_second == '') {
    num_first_active = false;
    num_second_active = true;
    con = 'x'
  }
  
})

divie.addEventListener('click', function() {
  if (num_first != '' && num_second == '') {
    num_first_active = false;
    num_second_active = true;
    con = 'di'
  }
  
})


equal.addEventListener('click', function() {
  if (con=='+') {
    var int1 = parseInt(num_first);
    var int2 = parseInt(num_second);
    var answer = int1 + int2;
    show.innerHTML = answer;
    num_first = answer;
    num_second = '';
    num_first_active = true;
    num_second_active = false;
    con = '';
  }
  else if(con=='-') {
    var int1 = parseInt(num_first);
    var int2 = parseInt(num_second);
    var answer = int1 - int2;
    show.innerHTML = answer;
    num_first = answer;
    num_second = '';
    num_first_active = true;
    num_second_active = false;
    con = '';
  }
  else if(con=='x') {
    var int1 = parseInt(num_first);
    var int2 = parseInt(num_second);
    var answer = int1*int2;
    show.innerHTML = answer;
    num_first = answer;
    num_second = '';
    num_first_active = true;
    num_second_active = false;
    con = '';
  }
  else if(con=='di') {
    var int1 = parseInt(num_first);
    var int2 = parseInt(num_second);
    var answer = int1/int2;
    show.innerHTML = answer;
    num_first = answer;
    num_second = '';
    num_first_active = true;
    num_second_active = false;
    con = '';
  }
})