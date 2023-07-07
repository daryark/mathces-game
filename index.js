function testGame(boxTotal) {
	let boxAI = Math.ceil(Math.random() * 2);
	console.log("first ait", boxAI);

	boxAI += 1;
	boxTotal -= 1;
	if (boxAI % 2 === 0) {
		if (boxTotal - 1 === 4 || boxTotal - 2 === 4 || boxTotal - 3 === 4) {
			boxAI -= 1;
		} else {
			console.log("ait", boxAI, "total", boxTotal);
			return;
		}
		boxAI += 1;
		console.log("last ait", boxAI, "ooh, hard");
		return;
	} else {
		console.log("boxAI odd", boxAI, "boxTotal", boxTotal);
		return;
	}
}

testGame(8);
