enchant();

window.onload = function() {
	var game = new Game(320, 320);
    game.fps = 30;
    game.preload('chara1.gif', 'map2.gif', 'jump.wav', 'gameover.wav');
    game.setFrameSize('chara1.gif',32,32);
    game.onload = function() {
    	var p=new Player('chara1.gif',0);
    	p.x=100;
    	p.y=100;
    	for (var i=0;i<10;i++) {
    		new Enemy('chara1.gif',5);
    	}
	};
	game.start();
};