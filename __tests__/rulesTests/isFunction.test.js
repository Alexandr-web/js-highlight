import Rules from "../../src/js/classes/Rules";
import errorsMessages from "../../src/js/helpers/errorsMessages";
import styles from "../../src/js/helpers/styles";

describe("Тесты для метода isFunction класса Rules:", () => {
	const rules = new Rules();
	const { string: stringMessage, } = errorsMessages;
	const { function: funcClass, } = styles;

	test("Передаем тип null:", () => {
		expect(rules.isFunction.bind(rules, null)).toThrow(stringMessage);
	});
	test("Передаем тип undefined:", () => {
		expect(rules.isFunction.bind(rules)).toThrow(stringMessage);
	});
	test("Передаем тип number:", () => {
		expect(rules.isFunction.bind(rules, Number())).toThrow(stringMessage);
	});
	test("Передаем тип object:", () => {
		expect(rules.isFunction.bind(rules, Object())).toThrow(stringMessage);
	});
	test("Пустая строка:", () => expect(rules.isFunction(String())).toBe(""));
	test("Строка кода без функций:", () => {
		const code = "const a = 1;";

		expect(rules.isFunction(code)).toBe(code);
	});
	test("Строка кода со стрелочной функцией со скобками:", () => {
		const code = "const obj = { a: () => {}, };";
		const res = `const obj = { a: () <span class="${funcClass}">=></span> {}, };`;

		expect(rules.isFunction(code)).toBe(res);
	});
	test("Строка кода со стрелочной функцией без скобок:", () => {
		const code = "const obj = () => 1;";
		const res = `const obj = () <span class="${funcClass}">=></span> 1;`;

		expect(rules.isFunction(code)).toBe(res);
	});
	test("Строка кода с обычной функцией:", () => {
		const code = "function sayHello() { return 1; }";
		const res = `<span class="${funcClass}">function</span> sayHello() { return 1; }`;

		expect(rules.isFunction(code)).toBe(res);
	});
	test("Строка кода с методом:", () => {
		const code = "const a = { a: () => { return 0; }, };";
		const res = `const a = { a: () <span class="${funcClass}">=></span> { return 0; }, };`;

		expect(rules.isFunction(code)).toBe(res);
	});
});