(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    game.load.spritesheet('button1', 'assets/buttons/tipo1.png', 193, 71);
    game.load.spritesheet('button2', 'assets/buttons/tipo2.png', 193, 71);
    game.load.spritesheet('button3', 'assets/buttons/adelante.png', 193, 71);
    game.load.spritesheet('button4', 'assets/buttons/FALSO.png', 193, 71);
    game.load.spritesheet('button5', 'assets/buttons/verdadero.png', 193, 71);
    game.load.image('background','assets/misc/starfield.jpg');

}


var button;
var background;
var timer, timer2, text;

function create() {
	game.time.desiredFps = 5;
  this.set = 0;
  this.it = 0;
   this.tiempos = new Array();
  this.preguntas = new Array();
  this.preguntas.push("1.	Las vacas son mamíferos. ");
  this.preguntas.push("2.	La mandarina es una fruta.");
  this.preguntas.push("3.	La natación sincronizada es un deporte individual. ");
  this.preguntas.push("4.	La paloma es un ave.");
  this.preguntas.push("5.	Las judías verdes son verduras.");
  this.preguntas.push("6.	El atletismo es un deporte individual. ");
  this.preguntas.push("7.	El tigre es un mamífero. ");
  this.preguntas.push("8.	El plátano es una verdura. ");
  this.preguntas.push("9.	El béisbol es un deporte colectivo. ");
  this.preguntas.push("10.	El pato no es un ave.");
  this.preguntas.push("11.	El brócoli es una verdura. ");
  this.preguntas.push("12.	La natación es un deporte individual.");
  this.preguntas.push("13.	El león no es un mamífero. ");
  this.preguntas.push("14.	La naranja es una fruta. ");
  this.preguntas.push("15.	El rugby es un deporte colectivo. ");
  this.preguntas.push("16.	El halcón es un ave. ");
  this.preguntas.push("17.	Las espinacas son verduras. ");
  this.preguntas.push("18.	El tenis es un deporte individual. ");
  this.preguntas.push("19.	El gato es un mamífero. ");
  this.preguntas.push("20.	El melocotón es una verdura. ");
  this.preguntas.push("21.	El vóley es un deporte colectivo. ");
  this.preguntas.push("22.	La gallina es un ave. ");
  this.preguntas.push("23.	Las acelgas son frutas. ");
  this.preguntas.push("24.	El boxeo es un deporte individual.");
  this.preguntas.push("25.	El perro no es un mamífero.");
  this.preguntas.push("26.	La manzana es una fruta. ");
  this.preguntas.push("27.	El waterpolo es un deporte colectivo. ");
  this.preguntas.push("28.	El avestruz no es un ave. ");
  this.preguntas.push("29.	Los espárragos son verdura. ");
  this.preguntas.push("30.	El kárate es un deporte individual.");
  this.preguntas.push("31.	El canario es un ave. ");
  this.preguntas.push("32.	La sandia es una fruta. ");
  this.preguntas.push("33.	El fútbol es un deporte individual. ");
  this.preguntas.push("34.	El gorrión es un ave. ");
  this.preguntas.push("35.	La coliflor es una verdura.");
  this.preguntas.push("36.	El bádminton es un deporte individual.");
  this.preguntas.push("37.	El águila es un ave. ");
  this.preguntas.push("38.	La pera es una fruta. ");
  this.preguntas.push("39.	El baloncesto es un deporte colectivo. ");
  this.preguntas.push("40.	Los pimientos son frutas. ");
  this.preguntas.push("Fin, recarga la página ");


  this.preguntas2 = new Array();
this.preguntas2.push("1.	El guepardo es un mamífero. ");
this.preguntas2.push("2.	El kiwi es una fruta.");
this.preguntas2.push("3.	El fútbol americano es un deporte individual.");
this.preguntas2.push("4.	La cacatúa es un ave.");
this.preguntas2.push("5.	El repollo es una verdura.");
this.preguntas2.push("6.	El patinaje es un deporte individual.");
this.preguntas2.push("7.	El caballo es un mamífero.");
this.preguntas2.push("8.	El mango es una verdura.");
this.preguntas2.push("9.	El fútbol sala es un deporte colectivo.");
this.preguntas2.push("10.	El loro no es un ave.");
this.preguntas2.push("11.	La calabaza es una verdura.");
this.preguntas2.push("12.	El golf es un deporte individual.");
this.preguntas2.push("13.	La ballena no es un mamífero.");
this.preguntas2.push("14.	El albaricoque es una fruta");
this.preguntas2.push("15.	El hockey sobre hielo es un deporte colectivo.");
this.preguntas2.push("16.	El flamenco es un ave.");
this.preguntas2.push("17.	La berenjena es una verdura.");
this.preguntas2.push("18.	El ciclismo es un deporte individual.");
this.preguntas2.push("19.	El oso es un mamífero.");
this.preguntas2.push("20.	La fresa no es una fruta.");
this.preguntas2.push("21.	La gimnasia rítmica es un deporte individual.");
this.preguntas2.push("22.	La gaviota es un ave.");
this.preguntas2.push("23.	La col es una fruta.");
this.preguntas2.push("24.	El motociclismo es un deporte individual.");
this.preguntas2.push("25.	El burro no es un mamífero.");
this.preguntas2.push("26.	La ciruela es una fruta.");
this.preguntas2.push("27.	La escalada es un deporte individual.");
this.preguntas2.push("28.	El pájaro carpintero no es un ave.");
this.preguntas2.push("29.	El puerro es una verdura.");
this.preguntas2.push("30.	El ajedrez es un deporte individual.");
this.preguntas2.push("31.	La oveja es un mamífero.");
this.preguntas2.push("32.	La cereza es una fruta.");
this.preguntas2.push("33.	El judo es un deporte colectivo.");
this.preguntas2.push("34.	El buitre es un ave.");
this.preguntas2.push("35.	La alcachofa es una verdura.");
this.preguntas2.push("36.	La esgrima es un deporte individual.");
this.preguntas2.push("37.	El ratón es un mamífero.");
this.preguntas2.push("38.	El coco es una fruta.");
this.preguntas2.push("39.	El paracaidismo es un deporte individual.");
this.preguntas2.push("40.	El cisne no es un ave.");
this.preguntas2.push("Fin, recarga la página ");

timer2= 0;
this.cuenta = new Cuenta();
 timer = game.time.create();
//    timerEvent = timer.add(Phaser.Timer.SECOND * 2, this.endTimer, this);
  timer.start();
    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');
    this.texto = this.game.add.text(320,300,"");
   this.texto.font = "Times New Roman";
   this.texto.fontSize = 64;
   this.texto.fill = "white";

   this.texto2 = this.game.add.text(100,300,"");
  this.texto2.font = "Times New Roman";
  this.texto2.fontSize = 28;
  this.texto2.fill = "white";

  button1 = game.add.button(game.world.centerX -300, 400, 'button1', actionOnClick, this, 2, 1, 0);
    button2 = game.add.button(game.world.centerX +150, 400, 'button2', action, this, 2, 1, 0);

}
function action(){
  this.set= 1;
  this.texto2.text =" ";
button2.destroy();
button1.destroy();
if(this.cuenta.stopTimer() > 1){
this.texto.text = this.cuenta.stopTimer()/1000+" s";
}
button3 = game.add.button(game.world.centerX-80, 400, 'button3', adelante, this, 2, 1, 0);
}

function render() {

        //  console.log((Math.floor)(timer.ms/1000));



}
 var Cuenta = function(){
    this.startTimer = function() {
        this.start = new Date().getTime();
    };

    this.stopTimer = function() {
        return (new Date().getTime()) - this.start;
    };
};
function endtimer() {
      // Stop the timer when the delayed event triggers
      game.time.reset();
      timer =game.time.create();
  }
function final(){
	for(var i = 0; i < 20 ; i++){
       var vida = this.game.add.sprite(250+ i*30, 230 , 'corasao');
	   var texto = this.game.add.text(0,i*15,i +"."+ this.tiempos[i]);
  texto.font = "Times New Roman";
  texto.fontSize = 15;
  texto.fill = "white";
	}
}
function adelante(){

this.cuenta.startTimer();
  button3.destroy();
  this.texto.text =" ";

if(this.set == 1){
  this.texto2.text = this.preguntas2[this.it];//this.preguntas[this.it];
}
else{
    this.texto2.text = this.preguntas[this.it];
}
if(this.it == 40)  final();
  button1 = game.add.button(game.world.centerX-300, 400, 'button5', actionOnClick, this, 2, 1, 0);
  button2 = game.add.button(game.world.centerX+150, 400, 'button4', actionOnClick, this, 2, 1, 0);
  //timer = game.time.create();

}

function actionOnClick () {
  this.texto2.text =" ";
button2.destroy();
button1.destroy();
if(this.cuenta.stopTimer() > 1){
	var tiempo  =this.cuenta.stopTimer()/1000;
	this.tiempos.push(tiempo);
this.texto.text = tiempo +" s";
}
button3 = game.add.button(game.world.centerX-80, 400, 'button3', adelante, this, 2, 1, 0);

}

},{}]},{},[1]);
