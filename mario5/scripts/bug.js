Quintus.bugComponent = function(Q) {
	Q.Sprite.extend("Bug", {
		init: function(p) {
			this._super(p ,{
				vy: -50,
				dir: -1,
				sheet: "ghost",
				gravity: 0
			});
			console.log("bug");
			this.add("2d");
			this.on("bump.top ,bump.bottom", function(col) {
				if(this.p.dir == -1) {
					this.p.dir = 1;
					this.p.vy =50;
				}
				else {
					this.p.dir = -1;
					this.p.vy = -50;
				}
			});
			this.on("hit.sprite", function(col) {
				if(col.obj.isA("Player")) {
					Q.stageScene("level1");
                    a=0;
					Q.audio.play("playerdie.mp3");

					alert("You died!");
				}
			});
		}
	});
}