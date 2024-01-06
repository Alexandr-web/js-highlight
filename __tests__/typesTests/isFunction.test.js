import Types from "../../src/js/classes/Types";

describe("Тесты для метода isFunction класса Types:", () => {
	const types = new Types();

	test("Передаем тип NaN:", () => expect(types.isFunction(NaN)).toBeFalsy());
	test("Передаем тип undefined:", () => expect(types.isFunction(undefined)).toBeFalsy());
	test("Передаем тип number:", () => expect(types.isFunction(Number())).toBeFalsy());
	test("Передаем тип infinity:", () => expect(types.isFunction(Infinity)).toBeFalsy());
	test("Передаем тип object:", () => expect(types.isFunction(Object())).toBeFalsy());
	test("Передаем тип array:", () => expect(types.isFunction(Array())).toBeFalsy());
	test("Передаем тип string:", () => expect(types.isFunction(String())).toBeFalsy());
	test("Передаем тип null:", () => expect(types.isFunction(null)).toBeFalsy());
	test("Передаем тип boolean:", () => expect(types.isFunction(Boolean())).toBeFalsy());
	test("Передаем HTML элемент:", () => expect(types.isFunction(document.body)).toBeFalsy());
	test("Передаем тип function:", () => expect(types.isFunction(Function)).toBeTruthy());
});