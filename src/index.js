import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth - 900, window.innerHeight, Phaser.AUTO);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();
