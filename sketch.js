var button;
var button_tri;
var button_destroy;
var input_h, input_v;
var placeSqr, group_placeSqr, placeTri, group_placeTri
var ponta, group_ponta;
var blue_sqr, red_sqr, white_sqr;
var blue_ponta, red_ponta, white_ponta;
var blue_rect, red_rect, white_rect;
var time = 1;
var sprite;
var player = 1;
var player1, player2;

function preload(){
 
 blue_sqr = loadImage("sqr_azul.png");
 red_sqr = loadImage("sqr_vermelho.png");
 white_sqr = loadImage("sqr_branco.png");

 blue_ponta = loadImage("ponta_azul.png")
 red_ponta = loadImage("ponta_vermelho.png")
 white_ponta = loadImage("ponta_branco.png")

 blue_rect = loadImage("rect_azul.png")
 red_rect = loadImage("rect_vermelho.png")
 white_rect = loadImage("rect_branco.png")

}

function setup(){

  button = createButton("retangulo");
  button.position(100,100);

  button_destroy = createButton("destruir");
  button_destroy.position(232, 100);

  button_tri = createButton("triangulo");
  button_tri.position(170,100);

  input_h = createInput("k horizontal", "number");
  input_v = createInput("k vertical", "number");

  group_placeSqr = createGroup();
  group_placeTri = createGroup();
  group_ponta = createGroup();
  sprite = createSprite(100,100,10,10);

  input_h.position(100,150);
  input_v.position(100,175);

  player1 = createSprite(225,220);
  player2 = createSprite(225,270);
}

function draw(){
  createCanvas(3000,3000);
  background("pink");
 
  textSize(20);
  fill("blue");
  text("PLAYER 1:", 100, 230);
  fill("red");
  text("PLAYER 2:", 100, 280);

  fill("black");
  textSize(15)
  text("para o retangulo: ", 100, 300);
  text("preencha o primeiro input com a largura ", 100, 315);
  text("e o segundo com a altura", 100, 330);
  text("para o triangulo:", 100, 345);
  text("preencha apenas o primeiro input com o lado", 100, 360);

  text("desenvolvido na biblioteca p5js pela equipe Alpha Sirius", 100, 375);
  text("suporta apenas desktop",100, 390);

  time +=1;

  sprite.x = mouseX;
  sprite.y = mouseY;
  sprite.visible = false;


  blue_sqr.resize(50,50);
  red_sqr.resize(34,34);
  white_sqr.resize(34,34);

  blue_ponta.resize(70,70);
  red_ponta.resize(70,70);
  white_ponta.resize(70,70);
 
  blue_rect.resize(100,100);
  red_rect.resize(100,100);
  white_rect.resize(100,100);


  player1.addImage(blue_sqr);
  player2.addImage(red_sqr);

  button.mousePressed(CreateRect);
  button_destroy.mousePressed(Destroy);
  button_tri.mousePressed(CreateTri);

  sprite.overlap(group_placeSqr, 
    function change(sprite, placeSqr){
      if(mouseDown("leftButton") && time > 7){
       if(player == 1){
         placeSqr.addImage(blue_sqr);
         player = 2
        }  
        else if(player == 2){
          placeSqr.addImage(red_sqr);
          player = 1;
        }
        time = 0;
      }
    }
  )

  sprite.overlap(group_placeTri, 
    function change(sprite, placeTri){
      if(mouseDown("leftButton") && time > 7){
       if(player == 1){
         placeTri.addImage(blue_rect);
         player = 2
        }  
        else if(player == 2){
          placeTri.addImage(red_rect);
          player = 1;
        }
        time = 0;
      }
    }
  )

  

  sprite.overlap(group_ponta,
     function change(sprite, ponta){
      if(mouseDown("leftButton") && time > 7){
        if(player == 1){
          ponta.addImage(blue_ponta);
          player = 2;
        }
        else if(player == 2){
          ponta.addImage(red_ponta);
          player = 1;
        }

        time = 0;
      }

    }
  )


  drawSprites();

}

function CreateRect (){
  
  for(var i = 0; i < (input_h.value() - 2); i++){
   
    placeSqr = createSprite(534 + i*34, 100,50,50);
    placeSqr.addImage(white_sqr);
    group_placeSqr.add(placeSqr);
    placeSqr = createSprite(534 + i*34, 100 + (input_v.value() -1) * 34,50,50);
    placeSqr.addImage(white_sqr);
    group_placeSqr.add(placeSqr);
  
  }
  for(var i = 0; i < input_v.value(); i++){
 
    placeSqr = createSprite(500, 100 + i*34,50,50);
    placeSqr.addImage(white_sqr);
    group_placeSqr.add(placeSqr);
    placeSqr = createSprite(500 + (input_h.value()-1)*34, 100 + i*34,50,50);
    placeSqr.addImage(white_sqr);
    group_placeSqr.add(placeSqr);
   
  }
}
  
function CreateTri (){
  ponta = createSprite(724,120,40,30);
  ponta.addImage(white_ponta);
  ponta.rotation = 120
  //ponta.debug = true;
  ponta.setCollider("rectangle", 15, 15, 20, 20,0)
  group_ponta.add(ponta);
  

  ponta = createSprite(670 - (input_h.value() - 2)*18.7, 140 + (input_h.value() - 2)*32.5 , 40, 30);
  ponta.addImage(white_ponta);
  ponta.rotation = 0
  //ponta.debug = true;
  ponta.setCollider("rectangle", 15, 15, 20, 20,0)
  group_ponta.add(ponta);
  

  ponta = createSprite(673 - (input_h.value() - 2)*18.7 + (input_h.value()-1)*38, 175 + (input_h.value() - 2)*32.5 , 40, 30);
  ponta.addImage(white_ponta);
  ponta.rotation = 240
  ponta.setCollider("rectangle", 15, 15, 20, 20,0);
  //ponta.debug = true;
  group_ponta.add(ponta);
  

  for(var i=0; i < (input_h.value()) - 2; i++){
    placeTri = createSprite(700 - i*19, 150+ i*33, 40, 30);
    placeTri.addImage(white_rect);
    placeTri.rotation = -60
    group_placeTri.add(placeTri);
    //placeTri.debug = true;
    placeTri.setCollider("rectangle", -10, -10, 20, 20,0)
    
  }
  for(var i=0; i < (input_h.value() - 2); i++){
    placeTri = createSprite(731 - (input_h.value()-2)*18.7 + i*38, 168 + (input_h.value()-2)*32.5, 40, 30);
    placeTri.addImage(white_rect);
    placeTri.rotation = 0
    //placeTri.debug = true;
    placeTri.setCollider("rectangle", -10, -10, 20, 20,0)
    group_placeTri.add(placeTri);
    
    
  }
  for(var i=0; i < (input_h.value()) - 2; i++){
    placeTri = createSprite(720 + i*19, 171+ i*33, 40, 30);
    placeTri.addImage(white_rect);
    placeTri.rotation = 60
    //placeTri.debug = true;
    placeTri.setCollider("rectangle", -10, -10, 20, 20,0)
    group_placeTri.add(placeTri);
    
  }
 
  
}

function Destroy(){
  group_placeTri.destroyEach();
  group_ponta.destroyEach();
  group_placeSqr.destroyEach();
}
