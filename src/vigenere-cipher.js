class VigenereCipheringMachine {

		constructor(mode) {
			this.directMode = mode === undefined ? true : mode;

			this.aCode = 'a'.charCodeAt();
    	this.zCode = 'z'.charCodeAt();
    	this.ACode = 'A'.charCodeAt();
    	this.ZCode = 'Z'.charCodeAt();
		}

		getCharCode(code) {
			if (code >= this.aCode && code <= this.zCode) {
    		return code - this.aCode;
    	}
    	if (code >= this.ACode && code <= this.ZCode) {
    		return code - this.ACode;
    	}
    	return null;
		}

    encrypt(message, key) {
    	if (message === undefined || key === undefined) {
    		throw new Error();
    	}

    	let result = [];
    	for (let i = 0, j = 0; i < message.length; i++) {
    		let code = this.getCharCode(message[i].charCodeAt());

    		if (code === null) {
    			result.push(message[i]);
    			continue;
    		}

    		let keyCode = this.getCharCode(key[j].charCodeAt());

    		result.push(String.fromCharCode(this.ACode + (keyCode + code) % 26));
    		j = (j + 1) % key.length;
    	}

    	if (!this.directMode) {
    		result.reverse();
    	}

    	return result.join('');
    }

    decrypt(encryptedMessage, key) {
    	if (encryptedMessage === undefined || key === undefined) {
    		throw new Error();
    	}

    	let result = [];
    	for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
    		let code = this.getCharCode(encryptedMessage[i].charCodeAt());

    		if (code === null) {
    			result.push(encryptedMessage[i]);
    			continue;
    		}

    		let keyCode = this.getCharCode(key[j].charCodeAt());

    		let tmp = code - keyCode;
    		if (tmp < 0) {
    			tmp += 26;
    		}
    		result.push(String.fromCharCode(this.ACode + tmp));
    		j = (j + 1) % key.length;
    	}

    	if (!this.directMode) {
    		result.reverse();
    	}

    	return result.join('');
    }
}

module.exports = VigenereCipheringMachine;
