var Enemy=enchant.Class.create(TSprite, {
	onCreate: function () {
		this.image=this.game.assets["chara1.gif"];
		this.frame=5;
		this.x=Math.random()*300;
		this.y=Math.random()*300;
	},
	onEnterFrame: function () {
		this.x-=2;
		if (this.x<0) this.x=this.game.width;
	}
});