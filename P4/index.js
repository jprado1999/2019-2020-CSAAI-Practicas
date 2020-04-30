console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video_master = document.getElementById("video_master");
video_master.width=400;  //-- Tamaño de la pantalla de video
video_master.height=200;

const video1 = document.getElementById("video1");
video1.width=200;
video1.height=100;

const video2 = document.getElementById("video2");
video2.width=200;
video2.height=100;

const video3 = document.getElementById("video3");
video3.width=200;
video3.height=100;

const image = document.getElementById("img");
image.width=200;
image.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video_master.poster="https://mmedia.uv.es/display?c=asamar4&name=enpruebas.jpg&path=/";

//-- Obtener los botones

const play = document.getElementById("play");

const play2 = document.getElementById("play2");

const play3 = document.getElementById("play3");

const play4 = document.getElementById("play4");

video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
video1.play();
video1.muted = true;

video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
video2.play();
video2.muted = true;

video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
video3.play();
video3.muted = true;

//-- Función de retrollamada del botón de ver
play.onclick = () => {
  console.log("Visualizando canal 1");
  video_master.src = video1.src;
  video_master.currentTime = video1.currentTime;
  video_master.play();

	video1.style.border = "medium solid #ff3300";
	video2.style.border = "initial";
	video3.style.border = "initial";
	image.style.border = "initial";
};

play2.onclick = () => {
  console.log("Visualizando canal 2");
  video_master.src = video2.src;
  video_master.currentTime = video2.currentTime;
  video_master.play();

	video1.style.border = "initial";
	video2.style.border = "medium solid #267326";
	video3.style.border = "initial";
	image.style.border = "initial";
};

play3.onclick = () => {
  console.log("Visualizando canal 3");
  video_master.src = video3.src;
  video_master.currentTime = video3.currentTime;
  video_master.play();

	video1.style.border = "initial";
	video2.style.border = "initial";
	video3.style.border = "medium solid #0000FF";
	image.style.border = "initial";
};

play4.onclick = () => {
  console.log("Visualizando canal 4");
  video_master.src = video_master.poster;

	video1.style.border = "initial";
	video2.style.border = "initial";
	video3.style.border = "initial";
	image.style.border = "medium solid #ffff00";
};
