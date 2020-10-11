var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var engine,world;
  var rect1,rect2,rect3,rect4,rect5,rect6,rect7;
  var rect8,rect9,rect10,rect11,rect12,rect13,rect14;
  var rect15,rect16,rect17,rect18,rect19,rect20,rect21;
  var rect22,rect23,rect24,rect25;
  var floor1,floor2,floor3;
  var slingshot,ball;
  var score=0;
  
  function setup() {
    var canvas = createCanvas(800,600);
    
    engine = Engine.create();
    world = engine.world;
  
     floor1 = new Floor(400,590,800,10);
     floor2 = new Floor(400,450,100,10);
    floor3 = new Floor(600,200,100,10);
  
    rect1 = new Rect(340,540,30,100);
    rect2 = new Rect(400,540,30,100);
    rect3 = new Rect(460,540,30,100);
    rect4 = new Rect(520,540,30,100);
    rect5 = new Rect(580,540,30,100);
    rect6 = new Rect(640,540,30,100);
    rect7 = new Rect(700,540,30,100);
  
    rect8 = new Rect(330,440,30,100);
    rect9 = new Rect(390,440,30,100);
    rect10 = new Rect(450,440,30,100);
    rect11 = new Rect(510,440,30,100);
    rect12 = new Rect(570,440,30,100);
    rect13 = new Rect(320,340,30,100);
    rect14 = new Rect(380,340,30,100);
    rect15 = new Rect(440,340,30,100);
    rect16 = new Rect(310,240,30,100);
  
    rect17 = new Rect(340,550,30,100);
    rect18 = new Rect(400,550,30,100);
    rect19 = new Rect(460,550,30,100);
    rect20 = new Rect(520,550,30,100);
    rect21 = new Rect(580,550,30,100);
  
    rect22 = new Rect(330,350,30,100);
    rect23 = new Rect(330,350,30,100);
    rect24 = new Rect(330,540,30,100);
  
    rect25 = new Rect(320,250,30,100);
    ball = new Ball(200,200,50,50);
  
    
    slingshot = new SlingShot(ball.body,{x:200, y:200});
  
    //World.add(world,engine);
  
   
  
  }
  
  function draw() {
    background(0);  
    line(220,220,ball.body.position.x,ball.body.position.y);

    //Engine.update();
 
    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
    rect8.display();
    rect9.display();
    rect10.display();
    rect11.display();
    rect12.display();
    rect13.display();
    rect14.display();
    rect25.display();
    rect15.display();
    rect16.display();
    rect17.display();
    rect18.display();
    rect19.display();
    rect20.display();
    rect21.display();
    rect22.display();
    rect23.display();
    rect24.display();
    ball.display();
    slingshot.display();

     text("score "+ score,400,100);
    
    
  }
  
  
  function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }
    