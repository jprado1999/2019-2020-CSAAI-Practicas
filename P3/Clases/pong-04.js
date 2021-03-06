console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='white';

//-- x,y, anchura, altura
ctx.rect(100, 200, 10, 10);
ctx.fill();

//------- Dibujar las raquetas
ctx.beginPath();
ctx.fillStyle='white';

//-- Raqueta izquierda
ctx.rect(50, 100, 10, 40);

//-- Raqueta derecha
ctx.rect(540, 300, 10, 40);

//-- Pintar!
ctx.fill();

//--------- Dibujar la red
ctx.beginPath();

//-- Estilo de la linea: discontinua
//-- Trazos de 10 pixeles, y 10 de separacion
ctx.setLineDash([20, 7]);
ctx.strokeStyle = 'red';
ctx.lineWidth = 1;
//-- Punto superior de la linea. Su coordenada x está en la mitad
//-- del canvas
ctx.moveTo(canvas.width/2, 0);

//-- Dibujar hasta el punto inferior
ctx.lineTo(canvas.width/2, canvas.height/2);
ctx.stroke();
