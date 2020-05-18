class Puntos {
  constructor(ctx) {
    //-- Guardar el contexto de dibujo
    this.ctx = ctx;

    this.puntos1 = 0;
    this.puntos2 = 0;

    //-- Inicializar
    this.init();
  }

  draw() {
    //----- Dibujar la Bola
    this.ctx.beginPath();
    this.ctx.font = "100px Arial";
    this.ctx.fillStyle='white';

    //-- x,y, anchura, altura
    this.ctx.fillText(points1, 200, 80);
    this.ctx.fillText(points2, 340, 80);
  }

  init() {
    //-- Inicializa la bola: A su posicion inicial
    this.x = this.x_ini;
    this.y = this.y_ini;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
