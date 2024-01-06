export default class Types {
	/**
	 * Проверяет, является ли тип элемента строкой
	 * @param {any} item Элемент для проверки
	 * @returns {boolean} Является ли элемент строкой
	 */
	isString(item) {
		return typeof item === "string";
	}

	/**
	 * Проверяет, является ли тип элемента числом
	 * @param {any} item Элемент для проверки
	 * @returns {boolean} Является ли элемент числом
	 */
	isNumber(item) {
		return isFinite(item)
			&& !isNaN(item)
			&& typeof item === "number";
	}

	/**
	 * Проверяет, является ли тип элемента булевым
	 * @param {any} item Элемент для проверки
	 * @returns {boolean} Является ли тип элемента булевым
	 */
	isBoolean(item) {
		return typeof item === "boolean";
	}

	/**
	 * Проверяет, является ли тип элемента объектом

	 * @param {any} item Элемент для проверки
	 * @returns {boolean} Является ли тип элемента объектом
	 */
	isObject(item) {
		return String(item) === "[object Object]";
	}

	/**
	 * Проверяет, является ли тип элемента функцией
	 * @param {any} item Элемент для проверки
	 * @returns {boolean} Является ли тип элемента функцией
	 */
	isFunction(item) {
		return item instanceof Function;
	}

	/**
	 * Проверяет, является ли элемент HTML элементом
	 * @param {any} item Элемент для проверки
	 * @returns {boolean} Является ли элемент HTML элементом
	 */
	isHTMLElement(item) {
		return item instanceof HTMLElement;
	}
}