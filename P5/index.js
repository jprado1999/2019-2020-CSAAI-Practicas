console.log("Ejecutando JS....");

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
let imgData;
let data;

//-- Acceso al deslizador
const deslizador_R = document.getElementById('deslizador_R');
const deslizador_G = document.getElementById('deslizador_G');
const deslizador_B = document.getElementById('deslizador_B');

//-- Valor del deslizador
const range_value_R = document.getElementById('range_value_R');
const range_value_G = document.getElementById('range_value_G');
const range_value_B = document.getElementById('range_value_B');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada

img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0, 0);

  console.log("Imagen lista...");
};

function deslizadores () {
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  data = imgData.data;

  //-- Obtener el umbral de rojo del deslizador
  umbral_R = deslizador_R.value;
  umbral_G = deslizador_G.value;
  umbral_B = deslizador_B.value;

  //-- Mostrar el nuevo valor del deslizador
  range_value_R.innerHTML = deslizador_R.value;
  range_value_G.innerHTML = deslizador_G.value;
  range_value_B.innerHTML = deslizador_B.value;

  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_R)
      data[i] = umbral_R;
  }
  for (let i = 1; i < data.length; i+=4) {
    if (data[i] > umbral_G)
      data[i] = umbral_G;
  }
  for (let i = 2; i < data.length; i+=4) {
    if (data[i] > umbral_B)
      data[i] = umbral_B;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada de los deslizadores
deslizador_R.oninput = () => {
  deslizadores();
}

deslizador_G.oninput = () => {
  deslizadores();
}
deslizador_B.oninput = () => {
  deslizadores();
}

console.log("Fin...");
