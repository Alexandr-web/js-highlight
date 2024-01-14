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
		const res = `
		function myFunction() {
			let arr = [1, 2, 3];
		  
			for (let i = 0; i < arr.length; i++) {
			  if (arr[i] === 2) {
				<span class="${operatorsClass}">continue</span>;
			  }
			  console.log(arr[i]);
			}
		  
			let x = <span class="${operatorsClass}">delete</span> arr[0];
			console.log(arr);
			
			try {
			  if (arr <span class="${operatorsClass}">instanceof</span> Array) {
				<span class="${operatorsClass}">throw</span> "Error";
			  }
			} catch (error) {
			  console.log(error);
			}
		  
			let person = {name: "John", age: 30};
			console.log("age" <span class="${operatorsClass}">in</span> person);
		  
			let age = <span class="${operatorsClass}">typeof</span> 10;
			console.log(age);
		  
			let num = 10;
			switch (num) {
			  case 1:
				console.log("One");
				<span class="${operatorsClass}">break</span>;
			  <span class="${operatorsClass}">default</span>:
				console.log("Other");
			}
		  
			let colors = ["red", "green", "blue"];
			for (let color <span class="${operatorsClass}">of</span> colors) {
			  console.log(color);
			}
		  
			<span class="${operatorsClass}">return</span> <span class="${operatorsClass}">void</span> 0;
		  }
		  
		  myFunction();		  
		`;
		const code = `
		function myFunction() {
			let arr = [1, 2, 3];
		  
			for (let i = 0; i < arr.length; i++) {
			  if (arr[i] === 2) {
				continue;
			  }
			  console.log(arr[i]);
			}
		  
			let x = delete arr[0];
			console.log(arr);
			
			try {
			  if (arr instanceof Array) {
				throw "Error";
			  }
			} catch (error) {
			  console.log(error);
			}
		  
			let person = {name: "John", age: 30};
			console.log("age" in person);
		  
			let age = typeof 10;
			console.log(age);
		  
			let num = 10;
			switch (num) {
			  case 1:
				console.log("One");
				break;
			  default:
				console.log("Other");
			}
		  
			let colors = ["red", "green", "blue"];
			for (let color of colors) {
			  console.log(color);
			}
		  
			return void 0;
		  }
		  
		  myFunction();		  
		`;

		expect(rules.isOperators(code)).toBe(res);
	});
});