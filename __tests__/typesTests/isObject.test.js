import Types from "../../src/js/classes/Types";

describe("Тесты для метода isObject класса Types:", () => {
	const types = new Types();

	test("Передаем тип NaN:", () => expect(types.isObject(NaN)).toBeFalsy());
	test("Передаем тип гndefined:", () => expect(types.isObject(undefined)).toBeFalsy());
	test("Передаем тип number:", () => expect(types.isObject(Number())).toBeFalsy());
	test("Передаем тип infinity:", () => expect(types.isObject(Infinity)).toBeFalsy());
	test("Передаем тип array:", () => expect(types.isObject(Array())).toBeFalsy());
	test("Передаем тип string:", () => expect(types.isObject(String())).toBeFalsy());
	test("Передаем тип null:", () => expect(types.isObject(null)).toBeFalsy());
	test("Передаем тип boolean:", () => expect(types.isObject(Boolean())).toBeFalsy());
	test("Передаем тип object:", () => expect(types.isObject(Object())).toBeTruthy());
	test("Передаем HTML элемент:", () => expect(types.isObject(document.body)).toBeFalsy());
});