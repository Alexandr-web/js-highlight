import Types from "../../src/js/classes/Types";

describe("Тесты для метода isNumber класса Types:", () => {
	const types = new Types();

	test("Передаем тип NaN:", () => expect(types.isNumber(NaN)).toBeFalsy());
	test("Передаем тип undefined:", () => expect(types.isNumber(undefined)).toBeFalsy());
	test("Передаем тип number:", () => expect(types.isNumber(Number())).toBeTruthy());
	test("Передаем тип iInfinity:", () => expect(types.isNumber(Infinity)).toBeFalsy());
	test("Передаем тип object:", () => expect(types.isNumber(Object())).toBeFalsy());
	test("Передаем тип array:", () => expect(types.isNumber(Array())).toBeFalsy());
	test("Передаем тип string:", () => expect(types.isNumber(String())).toBeFalsy());
	test("Передаем тип null:", () => expect(types.isNumber(null)).toBeFalsy());
	test("Передаем тип boolean:", () => expect(types.isNumber(Boolean())).toBeFalsy());
	test("Передаем HTML элемент:", () => expect(types.isNumber(document.body)).toBeFalsy());
});