import Types from "../../src/js/classes/Types";

describe("Тесты для метода isBoolean класса Types:", () => {
	const types = new Types();

	test("Передаем тип NaN:", () => expect(types.isBoolean(NaN)).toBeFalsy());
	test("Передаем тип undefined:", () => expect(types.isBoolean(undefined)).toBeFalsy());
	test("Передаем тип number:", () => expect(types.isBoolean(Number())).toBeFalsy());
	test("Передаем тип infinity:", () => expect(types.isBoolean(Infinity)).toBeFalsy());
	test("Передаем тип object:", () => expect(types.isBoolean(Object())).toBeFalsy());
	test("Передаем тип array:", () => expect(types.isBoolean(Array())).toBeFalsy());
	test("Передаем тип string:", () => expect(types.isBoolean(String())).toBeFalsy());
	test("Передаем тип null:", () => expect(types.isBoolean(null)).toBeFalsy());
	test("Передаем тип boolean:", () => expect(types.isBoolean(Boolean())).toBeTruthy());
	test("Передаем HTML элемент:", () => expect(types.isBoolean(document.body)).toBeFalsy());
});