var Player=enchant.Class.create(TSprite, {
	onCreate: function () {
		this.image=this.game.assets["chara1.gif"];
		this.frame=0;
	},
	onEnterFrame: function () {
		this.x+=1;
		//if (this.x>200) this.die();
		this.each(Enemy, function (t) {
			if (this.intersect(t)) {
				this.die();
			}
		});
	}
});