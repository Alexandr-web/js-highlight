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

		const ignoreFunctionNames = ["if", "while", "for", "do", "switch", "typeof", "else\\sif", "void", "function"];
		const regexp =
			/([a-z|A-Z]+(?=(?<!class)\s*?\=\s*?(<span.*?function|(\(.*?\)))))|((?<!new\s*?)\b[а-я|А-Я|_|a-z|A-Z|\d|\$]+\b(?=\s*?\:?\s*?(?=(\(.*?\))|(<span.*?function))))/gms;
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
	 * Проверяет на ключевые слова return, continue, break, throw, in, typeof, of, delete, void, this, instanceof, default
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isOperators(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { operatorsStyle: operatorsClass, } = styles;
		const operators = ["return", "continue", "break", "throw", "in", "typeof", "of", "delete", "void", "this", "instanceof", "default"];
		const regexp = new RegExp(`\\b(${operators.join("|")})\\b(?=\\s*)`, "gms");

		return s.replace(regexp, (str) => {
			return `<span class="${operatorsClass}">${str}</span>`;
		});
	}

	/**
	 * Проверяет на название класса
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isClassName(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { className, } = styles;

		return s.replace(/(?<=(\b(new|class)\b)\s+)(\b[a-z|A-Z|\d|$|_|а-я|А-Я]+\b)/gms, (match) => {
			return `<span class="${className}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на ключевое слово new
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isNewOperator(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { newOperatorStyle: newOperatorClass, } = styles;

		return s.replace(/\bnew\b/gms, (match) => {
			return `<span class="${newOperatorClass}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на ключевое слово class
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isClass(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { classStyle, } = styles;

		return s.replace(/\bclass\b\s+/gms, (match) => {
			return `<span class="${classStyle}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на число
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isNumber(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { number: numberClass, } = styles;

		return s.replace(/\b\d+[\.|a-z|\d]*\b/gims, (match) => {
			return `<span class="${numberClass}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на условные операторы if, switch case, else, else if
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isConditions(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { conditions: conditionsClass, } = styles;
		const listConditionsOperators = ["if", "else\\sif", "else", "switch", "case"];
		const regexp = new RegExp(`\\b(${listConditionsOperators.join("|")})\\b`, "gms");

		return s.replace(regexp, (match) => {
			return `<span class="${conditionsClass}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на однострочный комментарий
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isOneLineComment(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { comments: commentsClass, } = styles;

		return s.replace(/\/{2}.*/g, (match) => {
			return `<span class="${commentsClass}">${match}</span>`;
		});
	}

	/**
	 * Проверяет на многострочный комментарий
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isMultilineComment(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { comments: commentsClass, } = styles;

		return s.replace(/\/\*[^]*?\*\//g, (match) => {
			return `<span class="${commentsClass}">${match}</span>`;
		});
	}
}