export default function optimalGameFn(total: number, AITotal: number): number | Error {
	if (total > 8) {
		return Math.ceil(Math.random() * 3);
	} else {
		switch (total) {
			case 8:
				return AITotal % 2 === 0 ? 3 : 1; //need fixes to avoid this num, if your total is //!odd

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

		throw new Error("Not acceptable parameters");
	}
}

//! Explanation to chosen strategy:
//the percent of probability to predict better move is so insignificant, so It's not rational to spent resource to calculate the moves.

//On the contrary, it's totally possible to force game to win anyway starting from 8.

////(better to get it with even sum before the move), or 10(in case of your even sum, you'll force to start with 8 in box, and your opponent will have odd at the time, which is less optimal situation)
