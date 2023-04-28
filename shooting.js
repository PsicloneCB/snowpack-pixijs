import * as PIXI from 'pixi.js';
import Victor from 'victor';
export default class Shooting
{
	constructor({app, player})
	{
		this.app = app;
		this.player = player;
		this.bulletSpeed = 4;
		this.bullet = [];
		this.bulletRadius = 8;
		this.maxBulltets = 3;
	}

	fire()
	{
		const bullet = new PIXI
		bullet.position.set(this.player.posiion.x, this.player.position.y);
		bullet.beginFill(0x0000ff, 1);
		bullet.drawCircle(0,0,this.bulletRadius);
		bullet.endFill();
		let angle = this.player.rotation;
		bullet.velocity = new Victor(Math.cos(angle), Math.sin(angle)).multiplyScalar(this.bulletSpeed);
		this.bullets.push(bullet);
		this.app.stage.addChild(bullet);
	}

}