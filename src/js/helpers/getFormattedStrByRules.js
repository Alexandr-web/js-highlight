import Rules from "../classes/Rules";

/**
 * Форматирует строку по правилам
 * @param {string} s Строка
 * @returns {string} Отформатированная строка
 */
export default (s) => {
	const rules = new Rules(s);
	const ignoreMethods = ["constructor"];
	const listRules = Object
		.getOwnPropertyNames(Rules.prototype)
		.filter((method) => !ignoreMethods.includes(method));

	return listRules.reduce((res, rule) => {
		res = rules[rule](res);

		return res;
	}, s);
};