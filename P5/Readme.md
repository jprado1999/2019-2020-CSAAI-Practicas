Funcionamiento de la P5:

En esta práctica, además de los apartados obligatorios (cambiar los distintos canales de color de la imagen y ponerla en escala de grises) he implementado las siguientes funcionalidades opcionales:

- Umbralizar la imagen, de modo que los pixeles toman únicamente dos valores de intensidad, 0 o 255 según un umbral que he establecido (110)
- Imagen especular, en este modo la imagen se da la vuelta (en el eje Y) de forma que parece ser vista en un espejo
- Imagen boca abajo, en este modo la imagen se da la vuelta (en el eje X) de forma que parece ser vista en el reflejo del agua

En cuanto a su funcionamiento, el botón 'grises' pone la imagen en gris en cualquier momento en el que sea pulsado, el botón 'B&W' es mejor pulsarlo cuando la imagen está en escala de grises, puesto que en otro caso tomará como referencia únicamente el canal azul por la forma en la que está programado este modo. Los botones 'especular' y 'boca abajo' se pueden pulsar en cualquier momento y harán sus respectivas funciones.
En cuanto a los deslizadores, éstos están programados para que cuando los muevas estando en imagen de grises o B&W reseteen la acción de dichos botones antes de aplicar los cambios de color, en cualquier otra situación, mantendrán los cambios hechos en la imagen además de añadir el filtro de color.
