import Types from "./Types";
import errorsMessages from "../helpers/errorsMessages";
import getFormattedStrByRules from "../helpers/getFormattedStrByRules";

export default class JSHighlight {
	/**
	 * Конструктор класса JSHighlight
	 * @param {string} str Строка кода JavaScript
	 */
	constructor(str) {
		this.str = str;
		this.types = new Types();
	}

	/**
	 * Отображает готовый результат в HTML элементе
	 * @param {HTMLElement} el Элемент
	 * @returns {undefined}
	 */
	_displayCode(el) {
		if (!this.types.isHTMLElement(el)) {
			throw new Error(errorsMessages.element);
		}

		el.innerHTML = getFormattedStrByRules(this.str);
	}

	/**
	 * Инициализация
	 * @param {string} idCodeEl Идентификатор элемента code
	 * @returns {undefined}
	 */
	init(idCodeEl) {
		if (!this.types.isString(idCodeEl)) {
			throw new Error(errorsMessages.string);
		}

		const el = document.querySelector(`[data-highlight-code="${idCodeEl}"]`);

		if (!this.types.isHTMLElement(el)) {
			throw new Error(errorsMessages.element);
		}

		this._displayCode(el);
	}
}