// import  from '';

class GameState extends Phaser.State {
	preload() {
		this.load.audio('backgroundMusic', '../assets/audio/background.mp3');
		this.load.image('backgroundImage', '../assets/images/backgrounds/background.jpg');
		this.load.image('donut', '../assets/images/donut.png');
		this.load.image('donutShadow', '../assets/images/big-shadow.png');
		this.load.image('soundButton', '../assets/images/btn-sfx.png');
		this.load.image('donutsLogo', '../assets/images/donuts_logo.png');
		this.load.image('playBtn', '../assets/images/btn-play.png');
	}

	create() {
		let backgroundMusic = this.add.audio('backgroundMusic');
		backgroundMusic.loop = true;
		backgroundMusic.play();

		this.add.sprite(0,0,'backgroundImage');

		let soundButton = this.createButton(this, 900, 10, 'soundButton', 80, 80, () => {
			if (backgroundMusic.mute === true) {
				backgroundMusic.mute = false;

				soundButton.tint = 0xFFFFFF;
			} else {
				backgroundMusic.mute = true;

				soundButton.tint = 0xff0000;
			}
		});

		this.animate(this, soundButton, 900, 10);

		let donutShadow = this.add.sprite(this.world.centerX - 185, this.world.centerY - 205, 'donutShadow');
		donutShadow.width = 450;
		donutShadow.height = 450;

		let donut = this.add.sprite(this.world.centerX - 225, this.world.centerY - 225, 'donut');
		donut.width = 450;
		donut.height = 450;

		let donutsLogo = this.add.sprite(this.world.centerX + 350, this.world.centerY - 325, 'donutsLogo');
		donutsLogo.width = 480;
		donutsLogo.height = 170;

		this.animate(this, donutsLogo, this.world.centerX + 350, 85);

		let playBtn = this.createButton(this, this.world.centerX + 350, this.world.centerY + 200, 'playBtn', 230, 150, () => {
			playBtn.kill();
		});

		this.animate(this, playBtn, this.world.centerX + 350, 195);
	}

	update() {

	}

	animate(game, item, start, end, stopNumber = 0) {
		if (stopNumber >= start - end) {
			return 0;
		}

		setTimeout(() => {
			item.x = start - stopNumber;

			stopNumber += 3;

			this.animate(game, item, start, end, stopNumber);
		}, 1);
	}

	createButton(game, x, y, image, width, height, cb) {
		let button = game.add.button(x, y, image, cb, this);

		button.width = width;
		button.height = height;

		return button;
	}
}

export default GameState;
