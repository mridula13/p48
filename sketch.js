 var bg1, bg2;
 var charImg, char;
 var form;
 var z1, z2, z3, z4, z5, z6, z7, z8, z9, z10, z11, z12, z13, z14, z15, z16, z17, z18, z19, z20;
 var zombie1, zombie2, zombie3, zombie4;
 var bulletImg, bullet;
 var zombieGroup;
 var score = 0;
 var gameState;
 gameState = "Intro";

 function preload(){
   bg1 = loadImage("images/start.png");
   bg2 = loadImage("images/z bg.jpg");

   charImg = loadImage("images/char p.png");

   bulletImg = loadImage("images/bullet.png");

   z1 = loadImage("images/z1.png");
   z2 = loadImage("images/z2.png");
   z3 = loadImage("images/z3.png");
   z4 = loadImage("images/z4.png");
   z5 = loadImage("images/z5.png");
   z6 = loadImage("images/z6.png");
   z7 = loadImage("images/z7.png");
   z8 = loadImage("images/z8.png");
   z9 = loadImage("images/z9.png");
   z10 = loadImage("images/z10.png");
   z11 = loadImage("images/z11.png");
   z12 = loadImage("images/z12.png");
   z13 = loadImage("images/z13.png");
   z14 = loadImage("images/z14.png");
   z15 = loadImage("images/z15.png");
   z16 = loadImage("images/z16.png");
   z17 = loadImage("images/z17.png");
   z18 = loadImage("images/z18.png");
   z19 = loadImage("images/z19.png");
   z20 = loadImage("images/z20.png");
 }


function setup() {
  createCanvas(displayWidth - 10, displayHeight - 130);
  form = new Form();

  char = createSprite(displayWidth/2 - 450, displayHeight/2 + 100, 20, 20);
  char.addImage(charImg);
  char.scale = 0.3;
  char.visible = false;

  zombieGroup = new Group();

}

function draw() {
  background(bg1); 

  if(gameState == "Start")
  {
    background(bg2);

    char.visible = true;

    textSize(30);
    stroke("white");
    fill("white");
    text("Score: " + score, displayWidth/2 + 400, displayHeight/4 - 100);

    spawn();
    move();
    shoot();
  }
 
  form.display(); 
  drawSprites();
}

function spawn()
{
    if(gameState == "Start" && frameCount % 60 == 0)
    {
       var zombie = createSprite(displayWidth - 50, random(50, displayHeight/2 + 100), 20, 20);
       zombie.velocityX = -50

       var rand = Math.round(random(1,5));
          console.log(rand);
       
          switch(rand)
          {
           case 1: zombie.addImage(z1);
                   zombie.scale = .3;
                   break;
           case 2: zombie.addImage(z2);
                   zombie.scale = .6;
                   break;
           case 3: zombie.addImage(z3);
                   zombie.scale = .5;
                   break;
           case 4: zombie.addImage(z4);
                   zombie.scale = .5;
                   break;
           case 5: zombie.addImage(z5);
                   zombie.scale = .5;
                   break;
          }

          zombieGroup.add(zombie);
       
    }
}

function move()
{
        if(gameState == "Start" && keyCode == 38)
        {
                char.y = char.y - 5;
        }

        if(gameState == "Start" && keyCode == 40)
        {
                char.y = char.y + 5;
        }
}

function shoot()
{
        if(keyDown("space"))
        {
                bullet = createSprite(displayWidth/2 - 400, char.y + 110, 20, 20);
                bullet.addImage(bulletImg);
                bullet.scale = 0.3;
                bullet.velocityX = 50;
        }   
        
        if(zombieGroup.isTouching(bullet))
        {
                // zombieGroup.destroyEach();
                // bullet.destroy();
                score = score + 1;
        }
       
}
// function spawn()
// {
//   if(frameCount % 307 == 0)
//   {
//    zombie1 = createSprite(displayWidth-50, displayHeight/2 + 100, 20, 20);

//    zombie1.velocityX = -5;
   
//    var rand = Math.round(random(1,5));
//    console.log(rand);

//    switch(rand)
//    {
//     case 1: zombie1.addImage(z1);
//             zombie1.scale = .3;
//             break;
//     case 2: zombie1.addImage(z2);
//             zombie1.scale = .6;
//             break;
//     case 3: zombie1.addImage(z3);
//             zombie1.scale = .5;
//             break;
//     case 4: zombie1.addImage(z4);
//             zombie1.scale = .5;
//             break;
//     case 5: zombie1.addImage(z5);
//             zombie1.scale = .5;
//             break;
//    }

//    zombie1.debug = true;

//   }

//   if(frameCount % 367 == 0)
//   {
//    zombie2 = createSprite(displayWidth-50, displayHeight/2 + 100, 20, 20);

//    zombie2.velocityX = -5;
   
//    var ran = Math.round(random(6,10));
//    console.log(ran);

//    switch(ran)
//    {
//     case 6: zombie2.addImage(z6);
//             zombie2.scale = .6;
//             break;  
//     case 7: zombie2.addImage(z7);
//             zombie2.scale = .5;
//             break;      
//     case 8: zombie2.addImage(z8);
//             zombie2.scale = .4;
//             break;
//     case 9: zombie2.addImage(z9);
//             zombie2.scale = .3;
//             break;
//     case 10: zombie2.addImage(z10);
//             zombie2.scale = .3;
//             break;
//    }

//    zombie2.debug = true;

//   }

//   if(frameCount % 431 == 0)
//   {
//    zombie3 = createSprite(displayWidth-50, displayHeight/2 + 100, 20, 20);

//    zombie3.velocityX = -5;
   
//    var ra = Math.round(random(11,15));
//    console.log(ra);

//    switch(ra)
//    {
//     case 11: zombie3.addImage(z11);
//             zombie3.scale = .3;
//             break;
//     case 12: zombie3.addImage(z12);
//             zombie3.scale = .6;
//             break;
//     case 13: zombie3.addImage(z13);
//             zombie3.scale = .5;
//             break;
//     case 14: zombie3.addImage(z14);
//             zombie3.scale = .5;
//             break;
//     case 15: zombie3.addImage(z15);
//             zombie3.scale = .5;
//             break;
//    }

//    zombie3.debug = true;
//    }

//    if(frameCount % 491 == 0)
//    {
//     zombie4 = createSprite(displayWidth-50, displayHeight/2 + 100, 20, 20);
 
//     zombie4.velocityX = -5;
    
//     var r = Math.round(random(16,20));
//     console.log(rand);
 
//     switch(r)
//     {
//      case 16: zombie4.addImage(z16);
//              zombie4.scale = .3;
//              break;
//      case 17: zombie4.addImage(z17);
//              zombie4.scale = .6;
//              break;
//      case 18: zombie4.addImage(z18);
//              zombie4.scale = .5;
//              break;
//      case 19: zombie4.addImage(z19);
//              zombie4.scale = .5;
//              break;
//      case 20: zombie4.addImage(z20);
//              zombie4.scale = .5;
//              break;
//     }
 
//     zombie4.debug = true;
//     }

  
// }

// function keyPressed()
// {
//    if(keyCode == 32 && gameState == "Start")
//    {
//      bullet = createSprite(displayWidth/2 - 400, displayHeight/2 + 110, 20, 20);
//      bullet.addImage(bulletImg);
//      bullet.scale = 0.3;
//      bullet.velocityX = 3;

//      bullet.debug = true;
//    }
//      if(bullet.isTouching(zombie1))
//      {
//          score = score + 1;
//          zombie1.destroy();
//          bullet.destroy();
//      }
   
//      else if(bullet.isTouching(zombie2))
//      {
//         score = score + 1;
//         zombie2.destroy();
//         bullet.destroy();   
//      }

//      else if(bullet.isTouching(zombie3))
//      {
//         score = score + 1;
//         zombie3.destroy();
//         bullet.destroy();   
//      }

//      else if(bullet.isTouching(zombie4))
//      {
//         score = score + 1;
//         zombie4.destroy();
//         bullet.destroy();   
//      }
// }