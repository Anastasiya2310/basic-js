module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(!Array.isArray(arr)) {
        	return 0;
        }
        let maxDepth = 0;
        for(let i = 0; i < arr.length; i++) {
        	maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]));
        }
        return 1 + maxDepth;
    }
};