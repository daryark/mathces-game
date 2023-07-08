export default function optimalGameFn(total: number, AITotal: number): number | string {
	if (total > 8) {
		const turn: number = Math.ceil(Math.random() * 3);

		total - turn - 1 === 1;
	} else {
		switch (total) {
			case 13 || 14:
				return AITotal % 2 === 0 ? 2 : 3;

			case 10 || 11 || 12:
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

			case 1 || 5 || 9:
				return 1;
		}

		return "Not acceptable parameters";
	}
}

//! Explanation to chosen strategy:
//the percent of probability to predict better move is so insignificant, so It's not rational to spent resource to calculate the moves.

//On the contrary, it's totally possible to force game to win anyway starting from 8.
