import Rules from "../../src/js/classes/Rules";
import errorsMessages from "../../src/js/helpers/errorsMessages";
import styles from "../../src/js/helpers/styles";

describe("Тесты для метода isOperators класса Rules:", () => {
	const rules = new Rules();
	const { string: stringMessage, } = errorsMessages;
	const { operatorsStyle: operatorsClass, } = styles;

	test("Передаем тип null:", () => {
		expect(rules.isOperators.bind(rules, null)).toThrow(stringMessage);
	});
	test("Передаем тип undefined:", () => {
		expect(rules.isOperators.bind(rules)).toThrow(stringMessage);
	});
	test("Передаем тип number:", () => {
		expect(rules.isOperators.bind(rules, Number())).toThrow(stringMessage);
	});
	test("Передаем пустую строку:", () => {
		expect(rules.isOperators(String())).toBe("");
	});
	test("Передаем код, не содержащий операторы:", () => {
		const code = "function throwFunctions() {}; const returnble = 1;";

		expect(rules.isOperators(code)).toBe(code);
	});
	test("Передаем код, содержащий return, continue, break, throw, in, typeof, of, delete, void, this, instanceof, default:", () => {
		const code = `
		function exampleFunction(arr) {
			let fruit = 'apple';

			switch (fruit) {
			  default:
				console.log('Unknown fruit');
			}

			// return statement
			return arr.length;
		  
			// continue statement
			for (let i = 0; i < arr.length; i++) {
			  if (arr[i] === 0) continue;
			  // do something
			}
		  
			// break statement
			for (let i = 0; i < arr.length; i++) {
			  if (arr[i] === 0) break;
			  // do something
			}
		  
			// throw statement
			if (arr.length === 0) throw new Error('Array is empty');
		  
			// in operator
			if ('key' in obj) {
			  // do something
			}
		  
			// typeof operator
			if (typeof arr === 'object') {
			  // do something
			}
		  
			// of operator
			for (const item of arr) {
			  // do something with item
			}
		  
			// delete operator
			delete obj.key;
		  
			// void operator
			let result = void 0;
		  
			// this keyword
			console.log(this.name);
		  
			// instanceof operator
			if (obj instanceof Array) {
			  // ...
			}
		  }
		`;
		const res = `
		function exampleFunction(arr) {
			let fruit = 'apple';

			switch (fruit) {
			  <span class="${operatorsClass}">default</span>:
				console.log('Unknown fruit');
			}

			// <span class="${operatorsClass}">return</span> statement
			<span class="${operatorsClass}">return</span> arr.length;
		  
			// <span class="${operatorsClass}">continue</span> statement
			for (let i = 0; i < arr.length; i++) {
			  if (arr[i] === 0) <span class="${operatorsClass}">continue</span>;
			  // do something
			}
		  
			// <span class="${operatorsClass}">break</span> statement
			for (let i = 0; i < arr.length; i++) {
			  if (arr[i] === 0) <span class="${operatorsClass}">break</span>;
			  // do something
			}
		  
			// <span class="${operatorsClass}">throw</span> statement
			if (arr.length === 0) <span class="${operatorsClass}">throw</span> new Error('Array is empty');
		  
			// <span class="${operatorsClass}">in</span> operator
			if ('key' <span class="${operatorsClass}">in</span> obj) {
			  // do something
			}
		  
			// <span class="${operatorsClass}">typeof</span> operator
			if (<span class="${operatorsClass}">typeof</span> arr === 'object') {
			  // do something
			}
		  
			// <span class="${operatorsClass}">of</span> operator
			for (const item <span class="${operatorsClass}">of</span> arr) {
			  // do something with item
			}
		  
			// <span class="${operatorsClass}">delete</span> operator
			<span class="${operatorsClass}">delete</span> obj.key;
		  
			// <span class="${operatorsClass}">void</span> operator
			let result = <span class="${operatorsClass}">void</span> 0;
		  
			// <span class="${operatorsClass}">this</span> keyword
			console.log(<span class="${operatorsClass}">this</span>.name);
		  
			// <span class="${operatorsClass}">instanceof</span> operator
			if (obj <span class="${operatorsClass}">instanceof</span> Array) {
			  // ...
			}
		  }
		`;

		expect(rules.isOperators(code)).toBe(res);
	});
});