import Types from "../../src/js/classes/Types";

describe("Тесты для метода isString класса Types:", () => {
	const types = new Types();

	test("Передаем тип NaN:", () => expect(types.isString(NaN)).toBeFalsy());
	test("Передаем тип undefined:", () => expect(types.isString(undefined)).toBeFalsy());
	test("Передаем тип number:", () => expect(types.isString(Number())).toBeFalsy());
	test("Передаем тип infinity:", () => expect(types.isString(Infinity)).toBeFalsy());
	test("Передаем тип object:", () => expect(types.isString(Object())).toBeFalsy());
	test("Передаем тип array:", () => expect(types.isString(Array())).toBeFalsy());
	test("Передаем тип string:", () => expect(types.isString(String())).toBeTruthy());
	test("Передаем тип null:", () => expect(types.isString(null)).toBeFalsy());
	test("Передаем тип boolean:", () => expect(types.isString(Boolean())).toBeFalsy());
	test("Передаем HTML элемент:", () => expect(types.isString(document.body)).toBeFalsy());
});