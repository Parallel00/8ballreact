function choice(arr){
	let rndId = Math.floor(Math.random() * arr.length);
	return arr[rndId];
}

export { choice };