console.log("Ejecutando js...");

const testequal = document.getElementById('testequal')
const testAC = document.getElementById('testAC')
const testborrar = document.getElementById('testborrar')
const testmult = document.getElementById('testmult')
const testdiv = document.getElementById('testdiv')
const testsuma = document.getElementById('testsuma')
const testresta = document.getElementById('testresta')
const testsqrt = document.getElementById('testsqrt')
const testexp = document.getElementById('testexp')
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
  display.innerHTML = "0";
  }
testborrar.onclick = () => {
  if (display.innerHTML == "0"){
    null;
  }else{
    var texto = display.innerHTML;
    if (texto.length == 1) {
      display.innerHTML = "0";
    }else{
      texto = texto.substring(0, texto.length - 1);
      display.innerHTML = texto;
    }
  }
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

testsqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
}

testexp.onclick = () => {
  display.innerHTML = Math.pow(display.innerHTML, 2);
}
