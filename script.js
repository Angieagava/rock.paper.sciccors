const computer = {

	name: 'computer',
	score: 0,
	pick: ''

};

const player = {

	name: '',
	score: 0,
	pick: ''

};

let round = 0;

const newGame = () => {

	computer.score = 0;
	computer.pick = "";
	player.score = 0;
	player.pick = "";
	round = 0;
	player.name = prompt ("Jak się nazywasz?", "John Smith");
	document.getElementById("playerName").innerHTML = player.name;
	const buttons = document.getElementsByClassName("pick-button");

		for(let i = 0; i < buttons.length; i++) {

			buttons[i].style.visibility = 'visible';

		};
};

function playerPick(pick) {

	player.pick = pick;
	computerPick();
	checkResult();

};

function computerPick() {

	switch (Math.floor(Math.random()*3)) {

		case 0: computer.pick = "rock";
		break;
		case 1: computer.pick = "paper";
		break;
		case 2: computer.pick = "scissors";
		break;

	}

}

function checkResult() {

	let gameResult;

	if (player.pick === computer.pick) {

		gameResult = "tie!";

	}
	else if (player.pick === "rock") {

		if (computer.pick === "scissors") {

			player.score++; 
			gameResult = "Player wins!";

		} else if (computer.pick === "paper") {

			computer.score++; 
			gameResult = "Computer wins!";


		}
	}

	else if (player.pick === "paper") {

		if (computer.pick === "rock") {

			player.score++; 
			gameResult = "Player wins!";

		} else if (computer.pick === "scissors") {

			computer.score++; 
			gameResult = "Computer wins!";
		}

	} else if (player.pick === "scissors") {

		if (computer.pick === "paper") {

			player.score++; 
			gameResult = "Player wins!";

		} else if (computer.pick === "rock") {

			computer.score++; 
			gameResult = "Computer wins!";

		}

	}

document.getElementById("computerPick").innerHTML = computer.pick;
document.getElementById("playerPick").innerHTML = player.pick;
document.getElementById("gameResult").innerHTML = gameResult;
document.getElementById("computerScore").innerHTML = computer.score;
document.getElementById("playerScore").innerHTML = player.score;




if ( (player.score >= 10) || (computer.score >=10) ) {

		if (player.score > computer.score) {

			document.getElementById("roundResult").innerHTML = "player wins the game!";

		} else {

			document.getElementById("roundResult").innerHTML = "computer wins the game!";

		} 

		const buttons = document.getElementsByClassName("pick-button");

		for(let i = 0; i < buttons.length; i++) {

			buttons[i].style.visibility = 'hidden';

		};

	} 

}

