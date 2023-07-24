var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dc4ecf8d-08d3-4cdc-af0d-cfe215a03d04","67480465-8beb-427d-9597-0b28eb3aa9ce"],"propsByKey":{"dc4ecf8d-08d3-4cdc-af0d-cfe215a03d04":{"name":"basketball","sourceUrl":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png"},"67480465-8beb-427d-9597-0b28eb3aa9ce":{"name":"box2","sourceUrl":"assets/api/v1/animation-library/gamelab/y5x21LxrMhtyUYun4bwNOI7ql3y1cylX/category_faces/box2.png","frameSize":{"x":200,"y":73},"frameCount":3,"looping":true,"frameDelay":2,"version":"y5x21LxrMhtyUYun4bwNOI7ql3y1cylX","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":219},"rootRelativePath":"assets/api/v1/animation-library/gamelab/y5x21LxrMhtyUYun4bwNOI7ql3y1cylX/category_faces/box2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="yellow";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="green";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="yellow";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="green";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="yellow";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="green";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="yellow";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="green";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="green";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="yellow";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="green";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="yellow";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="green";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="yellow";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="green";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="yellow";
var score = 0;

var lose = createSprite(200,470,400,20)

paddle=createSprite(200,390,100,20)
paddle.setAnimation("box2")
paddle.scale = 0.5
ball=createSprite(200,200,20,20)
ball.setAnimation("basketball")
ball.scale = 0.09
createEdgeSprites() 

function draw() {
  background("white");
  stroke("black")
  fill("blue")
  textSize(20);
  text("Points: "  + score, 320, 20);
  
  if (keyDown("left")) {
    paddle.x=paddle.x-10;
  }
  
  if (keyDown("right")) {
    paddle.x=paddle.x+10;
  }
  
  if(keyDown("ENTER"))
  {
     ball.velocityX=2;
     ball.velocityY=3;
  }
  
  if (ball.bounceOff(box1)) {
    score=score+1
  box1.destroy();
  
    
  }
  if (ball.bounceOff(box2)) {
    score=score+1
  box2.destroy();
  
    
  }
  if (ball.bounceOff(box3)) {
    score=score+1
  box3.destroy();
  
    
  }
  if (ball.bounceOff(box4)) {
    score=score+1
  box4.destroy();
  
    
  }
  if (ball.bounceOff(box5)) {
    score=score+1
  box5.destroy();
  
    
  }
  if (ball.bounceOff(box6)) {
    score=score+1
  box6.destroy();
  
    
  }
  if (ball.bounceOff(box7)) {
    score=score+1
  box7.destroy();
  
    
  }
  if (ball.bounceOff(box8)) {
    score=score+1
  box8.destroy();
  
    
  }
  if (ball.bounceOff(box9)) {
    score=score+1
  box9.destroy();
  
    
  }
  if (ball.bounceOff(box10)) {
    score=score+1
  box10.destroy();
  
    
  }
  if (ball.bounceOff(box11)) {
    score=score+1
  box11.destroy();
  
    
  }
  if (ball.bounceOff(box12)) {
    score=score+1
  box12.destroy();
  
    
  }
  if (ball.bounceOff(box13)) {
    score=score+1
  box13.destroy();
  
    
  }
  if (ball.bounceOff(box14)) {
    score=score+1
  box14.destroy();
  
    
  }
  if (ball.bounceOff(box15)) {
    score=score+1
  box15.destroy();
  
  }
  
  if (ball.bounceOff(box16)) {
    score=score+1
  box16.destroy();
  
    
  
  
  }
  if (ball.isTouching(lose)) {
  ball.setVelocity(0,0)
  background("red")
  textSize(62);
  stroke("black")
  textFont("black")
  fill("black")
  text("You Lose", 90, 190);
  box1.destroy()
  box2.destroy()
  box3.destroy()
  box4.destroy()
  box5.destroy()
  box6.destroy()
  box7.destroy()
  box8.destroy()
  box9.destroy()
  box10.destroy()
  box11.destroy()
  box12.destroy()
  box13.destroy()
  box14.destroy()
  box15.destroy()
  box16.destroy()
  paddle.destroy()
    
  
  
  }
 
  
  
  
  ball.bounceOff(rightEdge)
  ball.bounceOff(leftEdge)
  ball.bounceOff(topEdge)
  ball.bounceOff(paddle)
  paddle.bounce(edges)
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
