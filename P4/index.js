console.log("Ejecutando JS...");

//----- Funcion que recupera el index.css para modificarlo
var video1border = false;
var video2border = false;
var video3border = false;

function getStyleSheet() {
	for(var i=0; i<document.styleSheets.length; i++) {
		var sheet = document.styleSheets[i];
		if(sheet.title == 'css') {
      console.log("Lo tengo");
			return sheet;
		}
	}
}

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
	
  var rule_sheet = getStyleSheet();
  function changeText() {
  	if(video1border == false) {
  		rule_sheet.insertRule("#video1 {border: solid;}", 0);
      console.log("Añadido");
  	}
  	video1border = true;
  }
  function resetText() {
	   if(video2border || video3border) {
		     rule_sheet.deleteRule(1,2);
	      }
	       video2border = false;
         video3border = false;
        }
};

play2.onclick = () => {
  console.log("Visualizando canal 2");
  video_master.src = video2.src;
  video_master.currentTime = video2.currentTime;
  video_master.play();

  var rule_sheet = getStyleSheet();
  function changeText() {
   if(!video2border) {
     rule_sheet.insertRule("#video2 {border: solid;}", 1);
     console.log("Añadido");
   }
   video2border = true;
  }
  function resetText() {
    if(video1border || video3border) {
        rule_sheet.deleteRule(0,2);
       }
        video1border = false;
        video3border = false;
        }
};

play3.onclick = () => {
  console.log("Visualizando canal 3");
  video_master.src = video3.src;
  video_master.currentTime = video3.currentTime;
  video_master.play();

  var rule_sheet = getStyleSheet();
  function changeText() {
    if(!video3border) {
      rule_sheet.insertRule("#video3 {border: solid;}", 2);
      console.log("Añadido");
    }
    video3border = true;
  }
  function resetText() {
     if(video1border || video2border) {
         rule_sheet.deleteRule(0,1);
        }
         video1border = false;
         video2border = false;
        }
};

play4.onclick = () => {
  console.log("Visualizando canal 4");
  video_master.src = video_master.poster;
};
