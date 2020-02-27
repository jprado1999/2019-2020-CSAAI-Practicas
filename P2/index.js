console.log("Ejecutando js...");

//const test0 = document.getElementById('test0')
//const test1 = document.getElementById('test1')
//const test2 = document.getElementById('test2')
//const test3 = document.getElementById('test3')
//const test4 = document.getElementById('test4')
//const test5 = document.getElementById('test5')
//const test6 = document.getElementById('test6')
//const test7 = document.getElementById('test7')
//const test8 = document.getElementById('test8')
//const test9 = document.getElementById('test9')
//const testpoint = document.getElementById('testpoint')
const testequal = document.getElementById('testequal')
const testAC = document.getElementById('testAC')
const testborrar = document.getElementById('testborrar')
const testmult = document.getElementById('testmult')
const testdiv = document.getElementById('testdiv')
const testsuma = document.getElementById('testsuma')
const testresta = document.getElementById('testresta')
const display = document.getElementById("display")

let digito = document.getElementsByClassName("digito");

for (i = 0; i<digito.length; i++){
  digito[i].onclick = (ev) => {
    digitos(ev.target);
  }
}

function digitos(boton){
  if (display.innerHTML == "0"){
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
  }
}

testequal.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  }
testAC.onclick = () => {
  display.innerHTML = "";
  }
testborrar.onclick = () => {
  console.log("Yo borraré");
  }
testmult.onclick = () => {
  display.innerHTML += testmult.value;
  }
testdiv.onclick = () => {
  display.innerHTML += testdiv.value;
  }
testsuma.onclick = () => {
  display.innerHTML += testsuma.value;
  }
testresta.onclick = () => {
  display.innerHTML += testresta.value;
  }
