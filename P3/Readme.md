# Funcionamiento de la Práctica 3: Pong

En esta práctica, además del funcionamiento básico del Pong he añadido unas mejoras:

- Cambio del ángulo de rebote: cuando la bola impacta con la raqueta cambiarán tanto su velocidad vertical como  su velocidad horizontal en caso de que la raqueta estuviera en movimiento. Esto quiere decir que en caso de rebotar con las raquetas paradas su velocidad será la misma que la del saque en ambas direcciones, mientras que si estamos desplazando la raqueta para parar la bola las velocidades serán multiplicadas x1.5 en ambas dimensiones. De esta forma el juego aumenta de dificultad de forma progresiva.

- Introducción de sonidos: han sido introducidos tres sonidos en total, cuando la bola rebota con las raquetas y se produce el saque, cuando la bola rebota con los límites superior e inferior del área de juego y un último sonido cuando se marca un tanto.

- Velocidad y ángulo aleatorios de la bola en el saque: mediante una función random acotada para cada velocidad de movimiento he conseguido que las velocidades vertical y horizontal de la bola en el saque varíen cada vez que se saca la pelota. De esta forma también varían los ángulos del saque además de la velocidad y se pueden crear situaciones en las que el juego es muy fácil o muy difícil.

Para jugar al Pong es muy sencillo, solo hay que pulsar el botón Start para entrar en el estado de saque y una vez ahí pulsar la tecla 's' que dará velocidades a la pelota. No hay límite de puntos en la partida por lo que cuando se quiere dejar de jugar hay que pulsar el botón Stop, haciendo que el juego se reinicie (ambas puntuaciones a 0 y las raquetas en su posición por defecto) y quede preparado para una nueva partida.
