module.exports = {
	// Какие типы файлов сканировать (.js, .jsx, .ts, .tsx)
	lexers: {
		js: ['JsxLexer'],
		jsx: ['JsxLexer'],
		ts: ['JsxLexer'],
		tsx: ['JsxLexer'],
		default: ['JsxLexer'],
	},

	// Языки, для которых нужно создать JSON-файлы
	locales: ['ru', 'en'],
	
	// Где сохранять созданные JSON-файлы (%LOCALE% заменится на ru и en)
	output: 'src/locales/%LOCALE%.json',

	// Путь к файлам вашего React-кода, которые нужно сканировать
	input: ['src/**/*.{js,jsx,ts,tsx}'],

	// Использовать ключ как значение по умолчанию (для файла ru.json)
	defaultValue: (locale, namespace, key) => {
		return locale === 'ru' ? key : '';
	},

	// Сохранять ли старые ключи, если вы удалили их из кода (false — удалять)
	keepRemoved: false, 

	// Сортировать ключи в JSON по алфавиту для порядка
	sort: true,
};
