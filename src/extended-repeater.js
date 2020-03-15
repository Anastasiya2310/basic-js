module.exports = function repeater(str, options) {
	str = String(str);

    let addition = options.addition === undefined ? '' : String(options.addition);
    let separator = options.separator || '+';
    let additionSeparator = options.additionSeparator || '|';
    let repeatTimes = options.repeatTimes || 1;
    let additionRepeatTimes = options.additionRepeatTimes || 1;

    let additionalArray = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionalArray.push(addition);
    }
    let substring = additionalArray.join(additionSeparator);
  
  	additionalArray = [];
    for (let i = 0; i < repeatTimes; i++) {
      additionalArray.push(str + substring);
    }
  	
  	return additionalArray.join(separator);
};
  