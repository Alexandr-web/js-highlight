import Rules from "../classes/Rules";

/**
 * Форматирует строку по правилам
 * @param {string} s Строка
 * @returns {string} Отформатированная строка
 */
export default (s) => {
	const listRules = Object
		.getOwnPropertyNames(Rules.prototype)
		.filter((method) => method !== "constructor");

	return listRules.reduce((res, rule) => {
		res = new Rules()[rule](res);

		return res;
	}, s);
};