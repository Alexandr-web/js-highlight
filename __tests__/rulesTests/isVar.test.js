import Rules from "../../src/js/classes/Rules";
import errorsMessages from "../../src/js/helpers/errorsMessages";
import styles from "../../src/js/helpers/styles";

describe("Тесты для метода isVar класса Rules:", () => {
	const rules = new Rules();
	const { string: stringMessage, } = errorsMessages;
	const { var: varClassName, } = styles;

	test("Передаем тип null:", () => {
		expect(rules.isVar.bind(rules, null)).toThrow(stringMessage);
	});
	test("Передаем тип undefined:", () => {
		expect(rules.isVar.bind(rules)).toThrow(stringMessage);
	});
	test("Передаем тип number:", () => {
		expect(rules.isVar.bind(rules, Number())).toThrow(stringMessage);
	});
	test("Передаем пустую строку:", () => {
		expect(rules.isVar(String())).toBe("");
	});
	test("Передаем код, не содержащий переменные:", () => {
		const code = "function constants() {}; console.log();";

		expect(rules.isVar(code)).toBe(code);
	});
	test("Передаем код, содержащий const, let, var:", () => {
		const code = `
		const a = 1;
		let a= 1;
		a=1;
		var a =1;
		vara =1;
		`;
		const res = `
		<span class="${varClassName}">const</span> a = 1;
		<span class="${varClassName}">let</span> a= 1;
		a=1;
		<span class="${varClassName}">var</span> a =1;
		vara =1;
		`;

		expect(rules.isVar(code)).toBe(res);
	});
});