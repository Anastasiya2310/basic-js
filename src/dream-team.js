module.exports = function createDreamTeam(arr) {
	if(Array.isArray(arr)) {
		let dreamTeam = [];

		for(let i = 0; i < arr.length; i++)   {
		    if(typeof arr[i] == "string") {
		        dreamTeam.push(arr[i].trim().charAt(0).toUpperCase());
		    }
		}

		dreamTeam.sort(function(a, b) {
	  		if(a < b) {
	  			return -1;
	  		} else if(a > b) {
	  			return 1
	  		} else {
	  			return 0;
	  		}
	  	});

	  	return dreamTeam.join('');

	} else {
		return false;
	}
};