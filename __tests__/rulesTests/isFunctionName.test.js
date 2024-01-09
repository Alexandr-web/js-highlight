import Rules from "../../src/js/classes/Rules";
import styles from "../../src/js/helpers/styles";
import errorsMessages from "../../src/js/helpers/errorsMessages";

describe("Тесты для метода isFunctionName класса Rules:", () => {
	const rules = new Rules();
	const { string: stringMessage, } = errorsMessages;
	const { functionName: funcNameClass, function: functionClass, } = styles;

	test("Передаем тип null:", () => {
		expect(rules.isFunctionName.bind(rules, null)).toThrow(stringMessage);
	});
	test("Передаем тип undefined:", () => {
		expect(rules.isFunctionName.bind(rules, undefined)).toThrow(stringMessage);
	});
	test("Передаем тип array:", () => {
		expect(rules.isFunctionName.bind(rules, Array())).toThrow(stringMessage);
	});
	test("Передаем пустую строку:", () => expect(rules.isFunctionName(String())).toBe(""));
	test("Передаем код без функций:", () => {
		const code = "const a = { b: null, c: 1, }";

		expect(rules.isFunctionName(code)).toBe(code);
	});
	test("Передаем код с обычной функцией:", () => {
		const code = "function func() {}";
		const res = `function <span class="${funcNameClass}">func</span>() {}`;

		expect(rules.isFunctionName(code)).toBe(res);
	});
	test("Передаем код со стрелочной функцией:", () => {
		const code = "const func = () => null;";
		const res = `const <span class="${funcNameClass}">func</span> = () => null;`;

		expect(rules.isFunctionName(code)).toBe(res);
	});
	test("Передаем код с методом (стрелочная функция):", () => {
		const code = `
			{
				a: () => 123,
			}
		`;
		const res = `
			{
				<span class="${funcNameClass}">a</span>: () => 123,
			}
		`;

		expect(rules.isFunctionName(code)).toBe(res);
	});
	test("Передаем код с методом (обычная функция):", () => {
		const code = `
			{
				a: <span class="${functionClass}">function</span> () return 123,
			}
		`;
		const res = `
			{
				<span class="${funcNameClass}">a</span>: <span class="${functionClass}">function</span> () return 123,
			}
		`;

		expect(rules.isFunctionName(code)).toBe(res);
	});
});