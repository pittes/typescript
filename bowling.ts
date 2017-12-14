class Frame {
	score : number;

	constructor(score : number) {
		this.score = score;
	}
}

function score() : number {	/* generate random number between 0-30 */
	let scr: number = Math.floor(Math.random() * 31);
	return scr;
}

let frms: Frame[] = [];
let total: number = 0;
let scoreboard: string = "";

for(let i : number = 0; i < 10; i++) {
	
	frms[i] = new Frame(score());
	
	total += frms[i].score;
	scoreboard += frms[i].score.toString() + " ";
	
}

console.log(scoreboard + "Total: " + total);
