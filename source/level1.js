function LevelEins (game)
	{
		
		 //Hintergrund
        land = game.add.tileSprite(0, 0, 1024, 768, 'hintergrund1');
		
        if(musicon){
		music.play();
        }
        
		 //Hinzufügen der Blöcke 
        bricks = game.add.group();
        bricks.enableBody = true;
		bricks.exists = true;
        
		//mittlere Blöcke
		middleBricks = game.add.group();
		middleBricks.enableBody = true;
		middleBricks.exists = true;
        
        //Starke blöcke
        strongBricks = game.add.group();
		strongBricks.enableBody = true;
		strongBricks.exists = true;
        impossibleBricks = game.add.group();
		impossibleBricks.enableBody = true;
		impossibleBricks.exists = true;
		
        bottom = game.add.group();
        bottom.enableBody = true;
        
       
        //Algorithmus zur Blockplatzierung
   
            for (var y = 0; y < 3; y++)
            {
                for (var x = 0; x < 14; x++)
                {
                    var brick;
                    brick = bricks.create(100 + (x * 60), 100 + (y * 50), 'leicht', 'leicht.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
            }

			var i = 0;
            for (var y = 3; y < 5; y++)
            {
                for (var x = 0; x < 14; x++)
                {
                    var brick;
                    brick = middleBricks.create(100 + (x * 60), 100 + (y * 50), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					alreadyHittedBricks[i] = 0;
                }
            }


	}