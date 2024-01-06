import Types from "../../src/js/classes/Types";

describe("Тесты для метода isHTMLElement класса Types:", () => {
	const types = new Types();

	test("Передаем тип NaN:", () => expect(types.isHTMLElement(NaN)).toBeFalsy());
	test("Передаем тип undefined:", () => expect(types.isHTMLElement(undefined)).toBeFalsy());
	test("Передаем тип number:", () => expect(types.isHTMLElement(Number())).toBeFalsy());
	test("Передаем тип infinity:", () => expect(types.isHTMLElement(Infinity)).toBeFalsy());
	test("Передаем тип array:", () => expect(types.isHTMLElement(Array())).toBeFalsy());
	test("Передаем тип string:", () => expect(types.isHTMLElement(String())).toBeFalsy());
	test("Передаем тип null:", () => expect(types.isHTMLElement(null)).toBeFalsy());
	test("Передаем тип boolean:", () => expect(types.isHTMLElement(Boolean())).toBeFalsy());
	test("Передаем тип object:", () => expect(types.isHTMLElement(Object())).toBeFalsy());
	test("Передаем HTML элемент:", () => expect(types.isHTMLElement(document.body)).toBeTruthy());
});