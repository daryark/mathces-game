export default function optimalGameFn(total: number, AITotal: number): number | undefined {
	if (total > 14) {
		return Math.ceil(Math.random() * 3);
	} else {
		switch (total) {
			case 14:
				return AITotal % 2 === 0 ? 2 : 3;

			case 13:
				return AITotal % 2 === 0 ? 2 : 3;

			case 12:
				return AITotal % 2 === 0 ? 2 : 1;

			case 11:
				return AITotal % 2 === 0 ? 2 : 1;

			case 10:
				return AITotal % 2 === 0 ? 2 : 1;

			case 9:
				return 1;

			case 8:
				return AITotal % 2 === 0 ? 3 : 1;

			case 7:
				return AITotal % 2 === 0 ? 3 : 2;

			case 6:
				return AITotal % 2 === 0 ? 1 : 2;

			case 5:
				return 1;

			case 4:
				return AITotal % 2 === 0 ? 1 : 3;

			case 3:
				return AITotal % 2 === 0 ? 2 : 3;

			case 2:
				return AITotal % 2 === 0 ? 2 : 1;

			case 1:
				return 1;
		}

		console.log(total);
		return;
	}
}

//! Explanation to chosen strategy:
//the percent of probability to predict better move is so insignificant, so It's not rational to spent resource to calculate the moves.

//On the contrary, it's totally possible to force game to win anyway starting from 8.

//Except one situation (when you have odd total and need to take some number of matches from box with 8 left). So just for last situation, I made 2moves *3 possible matches (9-14 cases), that lover the possibility of this situation at least a little bit. But still - strategic game mostly starts from 8.

//
