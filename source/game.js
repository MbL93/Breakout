var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });
var bot;
var ball;
var ballreleased;
var score = 0;
var scoreText;

function preload() {
    
    game.load.image('bot', 'images/Unbenannt1.png');
    game.load.image('leicht', 'images/leicht.png');
    game.load.image('ball', 'images/ball.png');
    game.load.image('stars','images/background1.png');
}


function create() {
    
    land = game.add.tileSprite(0, 0, 800, 600, 'stars');
    //game.physics.startSystem(Phaser.Physics.ARCADE);

    bot = game.add.sprite(game.world.centerX, 550, 'bot');
	game.physics.arcade.enable(bot);
    bot.anchor.setTo(0.5, 0.5);
    bot.scale.setTo(2, 2);
	bot.body.immovable = true;
	bot.body.collideWorldBounds = true;
	
	
	
   
    ball = game.add.sprite(game.world.centerX-15, 505, 'ball');
    ball.anchor.set(0.5);
    ball.checkWorldBounds = true;
   
    game.physics.arcade.enable(ball);
    
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);
    
    bricks = game.add.group();
    bricks.enableBody = true;

    var brick;

        for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 15; x++)
            {
                brick = bricks.create(120 + (x * 36), 100 + (y * 52), 'leicht', 'leicht.png');
                brick.body.bounce.set(1);
                brick.body.immovable = true;
            }
        }
    
	scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    game.input.mouse.capture = true;
    ballreleased=false;
}
   

function update() {
        
	
      if (game.input.activePointer.leftButton.isDown)
    {
        ballreleased = true;
         ball.body.velocity.y=-150;
    }
    else {}
   

  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        if(!ballreleased){ 
        ball.x -= 8 ;}
        bot.x -= 8;
        
        
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        
        if(!ballreleased){ 
        ball.x += 8 ;}
        bot.x += 8;
        
    }
	game.physics.arcade.collide(ball, bricks, ballHitBrick, null, this);
	game.physics.arcade.collide(ball, bot, ballHitPaddle, null, this);
}
	
	function ballHitPaddle (myBall, myBot) {

    var diff = 0;

    if (myBall.x < myBot.x)
    {
        //  Ball is on the left-hand side of the paddle
        diff = myBot.x - myBall.x;
        myBall.body.velocity.x = (-8 * diff);
    }
    else if (myBall.x > myBot.x)
    {
        //  Ball is on the right-hand side of the paddle
        diff = myBall.x - myBot.x;
        myBall.body.velocity.x = (8 * diff);
    }
    else
    {
        //  Ball is perfectly in the middle
        //  Add a little random X to stop it bouncing straight up!
        myBall.body.velocity.x = 2 + Math.random() * 8;
    }

}
    
function ballHitBrick (myBall, myBrick) {

    score = score +10;
	
	//brick.kill();
    

}  

 


        



