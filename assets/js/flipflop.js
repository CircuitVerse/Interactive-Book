/**
 * Generates the state table.
 * @param {Number} flipflopCount The number of flipflops.
 * @param {Number} inputCount The number of input variables.
 * @param {{name:String, expression:String}} booleanFunctions
 */
function generateStateTable(flipflopCount, inputCount, booleanFunctions, flipflop) {
	var stateTable = [];
	var inputs = [];
	var flipflopInputs = [];
	var nextStates = [];

	for (var i = 0; i < flipflopCount; i++) {
		var key = String.fromCharCode(65 + i);
		inputs.push({
			col : key,
			row : ""
		});

		nextStates.push({
			col : key,
			row : ""
		});
	}

	for (var i = 0; i < inputCount; i++) {
		var key = String.fromCharCode(122 - inputCount + i);
		inputs.push({
			col : key,
			row : ""
		});
	}

	var length = flipflopCount + inputCount;
	var rowCount = Math.pow(2, length);
	var dec, bin = "";

	for (var i = 0; i < rowCount; i++) {
		bin = decimalToBinary(i, length)
		for (var j = 0; j < bin.length; j++) {
			inputs[j].row += bin[j];
		}
	}

	for (i in inputs) {//push present state and input to stateTable
		stateTable.push(inputs[i]);
	}

	for (i in flipflops) {//push flipflop inputs to stateTable
		flipflopInputs.push({
			col : i,
			row : evaluateFunction(rowCount, inputs, flipflops[i])
		});
	}

	var ff = [];
	for (var j = 0; j < nextStates.length; j++) {
		for (var i = 0; i < flipflopInputs.length; i++) {
			if (flipflopInputs[i].col.indexOf(nextStates[j].col) != -1) {
				console.log(flipflopInputs[i].col + ":" + nextStates[j].col);
				ff.push(flipflopInputs[i].row);
			}
		}
		nextStates[j].row = evaluateFlipflop(flipflop, ff, inputs[j].row);
		ff = [];
		console.log("---");
	}

	for(var i = 0; i < nextStates.length; i++) {
		stateTable.push({
			col : nextStates[i].col,
			row : nextStates[i].row
		});
	}

	for (var i = 0; i < flipflopInputs.length; i++) {
		stateTable.push(flipflopInputs[i]);
	}

	for (var i = 0; i < stateTable.length; i++) {
		console.log(stateTable[i].col + ":\t\t" + stateTable[i].row);
	}
	
	return stateTable;
}


function evaluateFlipflop(flipflop, ff, state) {
	var nextState = "", digit = "";
	if (flipflop == 'JK') {
		for (var i = 0; i < ff[0].length; i++) {
			digit = state.charAt(i);
			if(ff[0].charAt(i) == '0' && ff[1].charAt(i) == '1'){
				nextState += 0;
			}
			else if(ff[0].charAt(i) == '1' && ff[1].charAt(i) == '0'){
				nextState += 1;
			}
			else if(ff[0].charAt(i) == '1' && ff[1].charAt(i) == '1'){
				nextState += !digit | 0;
			}
			else{
				nextState += digit;
			}
		}
	}
	else if(flipflop == 'RS'){
		for (var i = 0; i < ff[0].length; i++) {
			digit = state.charAt(i);
			if(ff[0].charAt(i) == '0' && ff[1].charAt(i) == '1'){
				nextState += 0;
			}
			else if(ff[0].charAt(i) == '1' && ff[1].charAt(i) == '0'){
				nextState += 1;
			}
			else if(ff[0].charAt(i) == '1' && ff[1].charAt(i) == '1'){
				nextState += '?';
			}
			else{
				nextState += digit;
			}
		}
	}
	else if(flipflop == 'D'){
		for (var i = 0; i < ff[0].length; i++) {
			if(ff[0].charAt(i) == '0'){
				nextState += 0;
			}
			else if(ff[0].charAt(i) == '1'){
				nextState += 1;
			}
		}
	}
	else if(flipflop == 'T'){
		for (var i = 0; i < ff[0].length; i++) {
			digit = state.charAt(i);
			if(ff[0].charAt(i) == '0'){
				nextState += digit;
			}
			else if(ff[0].charAt(i) == '1'){
				nextState += !digit | 0;
			}
		}
	}

	return nextState;

	// var j = flipflops[0];
	// var k = flipflops[1];
	// for(var i = 0; i < j.length; i++){
	// console.log(j.charAt(i));
	// }
	// for(var l = 0; l < k.length; l++){
	// console.log(k.charAt(l));
	// }
}

/**
 * Converts decimal into its binary representation.
 * @param {Number} dec The decimal representation of an integer.
 * @param {Number} length The length of the binary representation needed.
 * @returns {String} binary representation with length defined by the user.
 */
function decimalToBinary(dec, length) {
	bin = dec.toString(2);
	var formatted = "";
	var zero = length - bin.length;
	while (zero > 0) {
		formatted += '0';
		zero--;
	}
	return formatted + bin;
}

/**
 * Evaluates a flipflop inputs/output function.
 * @param {Number} rowCount Number of rows.
 * @param {{col:String,row:String}} inputs Input variables to evaluate boolean function.
 * @param {String} booleanFunction Boolean expression to evaluate.
 */
function evaluateFunction(rowCount, inputs, booleanFunction) {
	var stack = [], result = "";
	var postfix = infixToPostfix(booleanFunction);

	var token = '', temp1 = 0, temp2 = 0;
	for (var row = 0; row < rowCount; row++) {
		console.log(row + "----------------");
		for (var i = 0; i < postfix.length; i++) {
			token = postfix.charAt(i);
			if (token.match('[a-zA-Z]')) {
				for (var j = 0; j < inputs.length; j++) {
					if (inputs[j].col == token) {
						console.log(token + ":" + inputs[j].row.charAt(row));
						stack.push(inputs[j].row.charAt(row) | 0);
						break;
					}
				}
			} else if (token == '\'') {
				temp1 = stack.pop();
				stack.push(!temp1 | 0);

			} else if (token == '*') {
				temp1 = stack.pop();
				temp2 = stack.pop();
				console.log(temp1 + '||' + temp2 + "=" + temp1 || temp2);
				stack.push(temp1 || temp2);
			} else if (token == '+') {
				temp1 = stack.pop();
				temp2 = stack.pop();
				console.log(temp1 + "&&" + temp2 + "=" + temp1 && temp2);
				stack.push(temp1 && temp2);
			}
			console.log(stack);
		}
		result += stack.pop();
		stack = [];
		console.log(result);
	}
	return result;
}

/**
 * Converts a boolean expression from infix to postfix before evaluating.
 * @param {String} expression Boolean function/ literal expression of the flipflop input function.
 * @returns {String} The booleanFunction in postfix form.
 */
function infixToPostfix(expression) {
	//console.log("Converting " + expression + " from infix to postfix...");
	var output = "", operators = [], token = "";
	var outputTail = '', stackHead = '';

	var infix = "";
	var temp = '';
	for (var i = 0; i < expression.length; i++) {
		temp = expression[i];
		if (infix.length == 0) {
			infix += temp;
			continue;
		} else if ((infix[infix.length - 1].match('[a-zA-Z]') && temp.match('[a-zA-Z]')) || (infix[infix.length - 1] == '\'' && temp.match('[a-zA-Z]'))) {
			infix += '*';
		}

		infix += temp;
	}
	console.log(infix);

	for (var i = 0; i < infix.length; i++) {
		token = infix[i];
		//queueTail = output.peekTail();
		stackHead = (operators.length > 0 ? operators[operators.length - 1] : '');

		// console.log("token:" + token);
		// console.log("sHead: " + stackHead);

		if (output != "") {
			if (token.match('[a-zA-Z]')) {
				output += token;
			} else if (token == '+') {
				while (operators.length > 0) {
					output += operators.pop();
				}
				operators.push('+');
			} else if (token == '\'') {
				output += token;
			} else if (token == '*') {
				if (stackHead == '*') {
					while (operators[operators.length - 1] == '*') {
						output += operators.pop();
					}
				}
				operators.push('*');
			}
		} else {
			output += token;
		}
	}

	while (operators.length > 0) {
		output += operators.pop();
	}

	console.log("output:" + output);
	return output;
}