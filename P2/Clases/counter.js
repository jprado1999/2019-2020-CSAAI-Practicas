console.log("Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = {
  display: document.getElementById("display"),
  Boton_inc: document.getElementById("Boton_inc"),
  Boton_dec: document.getElementById("Boton_dec")
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = {
  valor: 0,
  inc : function(value) {
    this.valor += value;
    gui.display.innerHTML = this.valor;
  }
}

//Incremento automatico del contador cada segundo
setInterval(()=> {
  counter.inc(1);
}, 1000);

//-------- Accciones:
//-- Incrementar contador
gui.Boton_inc.onclick = () => {
  counter.inc(1);
}

//-- Decrementar contador
gui.Boton_dec.onclick = () =>{
  counter.inc(-1);
}
