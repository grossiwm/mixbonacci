l = console.log

const sequenceFunctions = {
	
	fibonacci: (n) => {
		const arr = [0, 1];

		for (let i = 2; i <= n; i++) {
			arr.push(arr[i-2] + arr[i-1]);
		}
		return arr[n];
	}
}

module.exports = sequenceFunctions ;










