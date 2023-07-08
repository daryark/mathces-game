import { useEffect, useState } from "react";
import optimalGameFn from "../optimalGameFn";

export default function Game() {
	const [total, setTotal] = useState(25);
	const [myTotal, setMyTotal] = useState(0);
	const [AITotal, setAITotal] = useState(0);

	//change color of winner result
	useEffect(() => {
		const button = document.getElementById("confirm-btn") as HTMLButtonElement;
		const AIDivTotal = document.getElementById("ai-total") as HTMLDivElement;
		const myDivTotal = document.getElementById("my-total") as HTMLDivElement;

		if (total < 1) {
			button.disabled = true;
			let winner;

			const AINum = Number(AIDivTotal.innerHTML.match(/\d+/g));
			if (AINum % 2 === 0) {
				AIDivTotal.classList.add("text-green-500");
				winner = "Computer";
			} else {
				myDivTotal.classList.add("text-green-500");
				winner = "You";
			}

			alert(`Game ended, ${winner} win`);

			return;
		}
	}, [total]);

	function chooseMatchesAmount(): void {
		const inputTotal = document.getElementById("matches") as HTMLInputElement;

		if (total - inputTotal.valueAsNumber < 0) {
			alert(`You can't take more matches then ${total}`);
			return;
		}

		setMyTotal((prev) => prev + inputTotal.valueAsNumber);
		setTotal((prev) => prev - inputTotal.valueAsNumber);

		const AIMove: number | undefined = optimalGameFn(total - inputTotal.valueAsNumber, AITotal);

		if (typeof AIMove === "undefined") {
			return;
		}

		setAITotal((prev) => prev + AIMove);
		setTotal((prev) => prev - AIMove);
	}

	const maxInputValue = total > 2 ? 3 : total;
	// console.log(maxInputValue);

	return (
		<div>
			<h1 className="text-3xl font-semibold text-center pb-4">Matches game</h1>
			<div className="flex justify-around pb-4">
				<div id="my-total">My total: {myTotal}</div>
				<div className="text-orange-700 font-semibold">Total amount: {total}</div>
				<div id="ai-total">Computer total: {AITotal}</div>
			</div>
			<div className="flex flex-col items-center border-t-2 pt-6">
				<label htmlFor="matches">Pick number of matches from 1 to 3</label>
				<div className="mt-2">
					<input
						className="w-12 border-2 rounded-sm border-stone-400 mr-4  p-[4px]"
						type="number"
						id="matches"
						min={1}
						max={maxInputValue}
						defaultValue={1}
					/>
					<button
						type="button"
						id="confirm-btn"
						onClick={chooseMatchesAmount}
						className="border-2 rounded border-stone-400 py-1 px-2 hover:bg-slate-200 ease-in-out duration-300 disabled:opacity-25 ">
						Confirm choice
					</button>
				</div>
			</div>
		</div>
	);
}
