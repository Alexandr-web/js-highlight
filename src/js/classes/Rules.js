import styles from "../helpers/styles";
import errorsMessages from "../helpers/errorsMessages";
import Types from "./Types";

export default class Rules {
	/**
	 * Конструктор класса Rules
	 * @param {string} initalString Изначальная строка
	 */
	constructor(initalString) {
		this.types = new Types();
		this.initalString = initalString;
	}

	/**
	 * Проверяет на кавычки '', ""
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isOneLineQuotes(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { quotes: quotesClass, } = styles;
		const regexp = /\B(\"|\')[^\"\'.]*?(\"|\')\B/g;

		return s.replace(regexp, (match) => {
			const res = `<span class="${quotesClass}">${match}</span>`;

			return res;
		});
	}

	/**
	 * Проверяет на кавычки ``
	 * @param {string} s Строка
	 * @returns {string} Измененная строка
	 */
	isMultilineQuotes(s) {
		if (!this.types.isString(s)) {
			throw new Error(errorsMessages.string);
		}

		const { quotes: quotesClass, } = styles;
		const regexp = /\`[^\`.]*?\`/g;

		return s.replace(regexp, (match) => {
			const res = `<span class="${quotesClass}">${match}</span>`;

			return res;
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
		const regexp = /\/{2}.*/g;

		return s.replace(regexp, (match) => {
			const res = `<span class="${commentsClass}">${match}</span>`;

			return res;
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
		const regexp = /\/\*[^]*?\*\//g;

		return s.replace(regexp, (match) => {
			const res = `<span class="${commentsClass}">${match}</span>`;

			return res;
		});
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

		const { function: functionClass, } = styles;

		return s.replace(/\bfunction\b|=>/g, (match) => {
			const res = `<span class="${functionClass}">${match}</span>`;

			return res;
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
			const res = `<span class="${functionNameClass}">${match}</span>`;

			if (ignoreFunctionNames.includes(match)) {
				return match;
			}

			return res;
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

		const words = ["const", "var", "let"];
		const regexp = new RegExp(`(\\b(${words.join("|")})\\b)(?=\\s+)`, "gms");
		const { var: varClass, } = styles;

		return s.replace(regexp, (match) => {
			const res = `<span class="${varClass}">${match}</span>`;

			return res;
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
		const regexp = new RegExp(`\\b(${operators.join("|")})\\b`, "gs");

		return s.replace(regexp, (match) => {
			const res = `<span class="${operatorsClass}">${match}</span>`;

			return res;
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
		const regexp = /(?<=(\b(new|class)\b)\s+)(\b[a-z|A-Z|\d|$|_|а-я|А-Я]+\b)/gms;

		return s.replace(regexp, (match) => {
			const res = `<span class="${className}">${match}</span>`;

			return res;
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
		const regexp = /\bnew\b/gms;

		return s.replace(regexp, (match) => {
			const res = `<span class="${newOperatorClass}">${match}</span>`;

			return res;
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
		const regexp = /\bclass\b\s+/gms;

		return s.replace(regexp, (match) => {
			const res = `<span class="${classStyle}">${match}</span>`;

			return res;
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
		const regexp = /\b\d+[\.|a-z|\d]*\b/gims;

		return s.replace(regexp, (match) => {
			const res = `<span class="${numberClass}">${match}</span>`;

			return res;
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
			const res = `<span class="${conditionsClass}">${match}</span>`;

			return res;
		});
	}
}