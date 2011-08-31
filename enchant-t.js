var enchant.TSprite=enchant.Class.create(enchant.Sprite,{
	/**
	 * 初期化をする。サブクラスがonAddedToScene, onEnterFrame をオーバーライドしている場合はそれらを
	 * イベントリスナとして登録する
	 * @param {String} image 画像ファイル名。game.setFrameSize(image,w,h) で大きさが指定されている必要がある。 
	 * @param {Number} frame フレーム番号
	 */
	initialize: function(image,frame) {
		var game=this.game=enchant.Game.instance;
		var sz=game._frameSize[image];
		if (sz==null) sz={width:16,height:16};
		Sprite.call(this,sz.width,sz.height);
		this.image=game.assets[image];
		this.input=game.input;
		if (this.onAddedToScene) {
			this.addEventListener(enchant.Event.ADDED_TO_SCENE, this.onAddedToScene);
		}
		if (this.onEnterFrame) {
			this.addEventListener(enchant.Event.ENTER_FRAME, this.onEnterFrame);
		}
		if (this.onCreate) {
			this.onCreate.apply(this,arguments);
		}
		game.rootScene.addChild(this);
	},
	each: function (klass,iter) {
		var game=this.game;
		if (iter==null) game.rootScene.eachChildren(klass,this);
		else game.rootScene.filterChildren(klass,iter,this);
	},
	die: function () {
		var game=this.game;
		game.rootScene.removeChild(this);
	}
	//onAddedToScene: function () {},
	//onEnterFrame: function () {},
});
