import styles from "../helpers/styles";
import errorsMessages from "../helpers/errorsMessages";
import Types from "./Types";

export default class Rules {
	/**
	 * Конструктор класса Rules
	 */
	constructor() {
		this.types = new Types();
	}

	/**
	 * Проверяет на функцию
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isFunction(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		return s.replace(/\bfunction\b|=>/gms, (match) => {
			const { function: functionClass, } = styles;

			return `<span class="${functionClass}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на название функции
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isFunctionName(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const ignoreFunctionNames = ["if", "while", "for", "do", "switch", "typeof", "else\sif", "void", "function"];
		const regexp =
			/([a-z|A-Z]+(?=(?<!class)\s*?\=\s*?(<.*?function|(\(.*?\)))))|((?<!new\s*?)\b[а-я|А-Я|_|a-z|A-Z|\d|\$]+\b(?=\s*?\:?\s*?(?=(\(.*?\))|(<.*?function))))/gms;
		const { functionName: functionNameClass, } = styles;

		return s.replace(regexp, (match) => {
			if (ignoreFunctionNames.includes(match)) {
				return match;
			}

			return `<span class="${functionNameClass}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на ключевые слова const, let и var
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isVar(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const regexp = /(\bconst\b|\bvar\b|\blet\b)(?=\s+)/gms;

		return s.replace(regexp, (match) => {
			const { var: varClass, } = styles;

			return `<span class="${varClass}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на ключевые слова return, continue, break, throw, in, typeof, of, delete, void, this, instanceof
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isOperators(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { operatorsStyle: operatorsClass, } = styles;
		const operators = ["return", "continue", "break", "throw", "in", "typeof", "of", "delete", "void", "this", "instanceof"];
		const regexp = new RegExp(`\\b(${operators.join("|")})\\b(?=\s*)`, "gms");

		return s.replace(regexp, (str) => {
			return `<span class="${operatorsClass}">${str}</span>`;
		});
	}
}