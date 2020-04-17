console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video_master = document.getElementById("video_master")
video_master.width=400;  //-- Tamaño de la pantalla de video
video_master.height=200;

const video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

const video2 = document.getElementById("video2")
video2.width=200;  //-- Tamaño de la pantalla de video
video2.height=100;

const video3 = document.getElementById("video3")
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video_master.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones

const play = document.getElementById("play")
const stop = document.getElementById("stop")

const play2 = document.getElementById("play2")
const stop2 = document.getElementById("stop2")

const play3 = document.getElementById("play3")
const stop3 = document.getElementById("stop3")

video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video1.play();
video1.muted = true;

video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video2.play();
video2.muted = true;

video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
video3.play();
video3.muted = true;

//-- Función de retrollamada del botón de ver
play.onclick = () => {
  console.log("Click!");
  video_master.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video_master.play();

  video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";;
};

play2.onclick = () => {
  console.log("Click!");
  video_master.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video_master.play();

  video2.pause();
  video2.src="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";;
};

play3.onclick = () => {
  console.log("Click!");
  video_master.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video_master.play();

  video3.pause();
  video3.src="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";;
};
//-- Funcion de retrollamada del boton de parar
stop.onclick = () => {
  video_master.pause();
  video_master.src="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";;
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.play();
  video1.muted = true;
}

stop2.onclick = () => {
  video_master.pause();
  video_master.src="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";;
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.play();
  video2.muted = true;
}

stop3.onclick = () => {
  video_master.pause();
  video_master.src="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";;
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.play();
  video3.muted = true;
}
/*Meter los comandos para que de base se esten reproduciendo los tres videos en la parte de abajo
video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video1.play();
sacando estas dos lineas de cada bucle ya que al darle a play deberia empezar a reproducirse arriba y
mostrar la señal de test correspondiente abajo (como cuando lo paramos), al darle a stop deberia de parar
el video arriba y volver a empezar abajo
Me espero para hacer esto hasta la proxima sesion para adaptarlo a los cambios que introduzcamos*/
