var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e1ea48fa-df1f-42db-97d2-f877508356be","99e70923-f2c4-4e82-b22d-e162a8a6ea18","3c5f83fb-d445-4090-b9fc-c487d258d709","83ff4921-3749-4cb9-b59d-598cd998f1ea","36e38472-8a7b-489b-8552-f9e8ab114623","735b6107-b522-4eee-ac3e-567a279da2aa","b79738f9-07ff-4e61-a978-d85386c2ae39","9279bdfa-55fa-493c-bf95-a9a7559b7812"],"propsByKey":{"e1ea48fa-df1f-42db-97d2-f877508356be":{"name":"spacebattle_07_1","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"b.MPZl_A0rkdw_gdNav8JzPbLdPKOnHD","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/e1ea48fa-df1f-42db-97d2-f877508356be.png"},"99e70923-f2c4-4e82-b22d-e162a8a6ea18":{"name":"gameplayadventure_13_1","sourceUrl":null,"frameSize":{"x":328,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"QDp3bIHcO8GNXWO9Rtj..xmbj8PmO5KK","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":399},"rootRelativePath":"assets/99e70923-f2c4-4e82-b22d-e162a8a6ea18.png"},"3c5f83fb-d445-4090-b9fc-c487d258d709":{"name":"gameplayadventure_13_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sgPdLrZdfJvLRM1OXBLfDNS9Ietk5ayX/category_video_games/gameplayadventure_13.png","frameSize":{"x":328,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"sgPdLrZdfJvLRM1OXBLfDNS9Ietk5ayX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sgPdLrZdfJvLRM1OXBLfDNS9Ietk5ayX/category_video_games/gameplayadventure_13.png"},"83ff4921-3749-4cb9-b59d-598cd998f1ea":{"name":"retroaliens_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eJOw86q3DsRz49ubo.LxNssC2.7QWtee/category_retro/retroaliens_18.png","frameSize":{"x":356,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"eJOw86q3DsRz49ubo.LxNssC2.7QWtee","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eJOw86q3DsRz49ubo.LxNssC2.7QWtee/category_retro/retroaliens_18.png"},"36e38472-8a7b-489b-8552-f9e8ab114623":{"name":"retrocreature_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png"},"735b6107-b522-4eee-ac3e-567a279da2aa":{"name":"retrocreature_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc/category_retro/retrocreature_17.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc/category_retro/retrocreature_17.png"},"b79738f9-07ff-4e61-a978-d85386c2ae39":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"9279bdfa-55fa-493c-bf95-a9a7559b7812":{"name":"earth_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nGOenE1WijfC4DHy9IQB7Isq7IVsds8K/category_icons/earth.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"nGOenE1WijfC4DHy9IQB7Isq7IVsds8K","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nGOenE1WijfC4DHy9IQB7Isq7IVsds8K/category_icons/earth.png"}}};
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

function draw() {
  
  //animações
  navehero.setAnimation("spacebattle_07_1");
  navehero.scale = 0.15;
  alien.setAnimation("retrocreature_08_1");
  alien.scale = 0.2;
  meteoro.setAnimation("gameplayadventure_13_1");
  meteoro.scale = 0.2;
  alien2.setAnimation("retroaliens_18_1");
  alien2.scale = 0.1;
  alien3.setAnimation("retrocreature_17_1");
  alien3.scale = 0.15;
  terra.setAnimation("earth_1");
  terra.scale = 0.15;
  
  //cria as bordas
  createEdgeSprites();
  
  //faz os sprites colidirem na borda
  alien.bounceOff(edges);
  alien2.bounceOff(edges);
  alien3.bounceOff(edges);
  meteoro.bounceOff(edges);
  navehero.bounceOff(edges);
  
  //faz a movimentação da navehero
  if(keyDown(UP_ARROW)){
    navehero.y=navehero.y-7;
  }
  
  if(keyDown(DOWN_ARROW)){
    navehero.y=navehero.y+7;
  }

  if(keyDown(LEFT_ARROW)){
    navehero.x=navehero.x-7;
  }

  if(keyDown(RIGHT_ARROW)){
    navehero.x=navehero.x+7;
  }

  //condição de captura da navehero
  if (navehero.isTouching(alien) || navehero.isTouching(alien2)
  || navehero.isTouching(alien3) || navehero.isTouching(meteoro)) {
    playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
    navehero.x=200;
    navehero.y=350;
    alien.x=35;
    alien.y=190;
    alien2.x=350;
    alien2.y=240;
    alien3.x=100;
    alien3.y=85;
    meteoro.x=350;
    meteoro.y=120;
    mortes = mortes+1;
  }
  
  //condição da chegada a terra escapou
  if (navehero.isTouching(terra)) {
    navehero.x=200;
    navehero.y=350;
    playSound("assets/category_achievements/melodic_win_1.mp3");
    vitoria = vitoria+1;
  }

  //desenha os sprites
  drawSprites();
  
}

//coloca uma animação no fundo
var fundo = createSprite(200,200);
fundo.setAnimation("space_1");

//cria os sprites
var navehero = createSprite(200,350,2,2);
navehero.shapeColor = "blue";
var alien = createSprite(35,190,20,20);
alien.shapeColor = "lightgreen";
var meteoro = createSprite(350,120,20,20);
meteoro.shapeColor = "red";
var alien2 = createSprite(350,245,20,20);
alien2.shapeColor = "red";
var alien3 = createSprite(100,85,18,18);
alien3.shapeColor = "green";
var terra = createSprite(350,50,20,20);
terra.shapeColor = "blue";

//variaveis de derrota e vitoria
var vitoria = 0;
var mortes = 0;

// coloca velocida nos inimigos
alien2.velocityY = -15;
alien.velocityX = 10;
alien3.velocityX = 12;
meteoro.setSpeedAndDirection(10,meteoro.getDirection()+10);

//texto de derrotas
fill(rgb(24, 74, 253));
stroke("blue");
textSize(25);
text("mortes"+mortes,300, 25);

//texto de vitorias
fill(rgb(200,200, 3));
stroke("green");
textSize(25);
text("vitorias"+mortes,300, 25);

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
