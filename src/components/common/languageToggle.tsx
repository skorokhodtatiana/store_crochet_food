'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n'; // Путь к вашему файлу конфигурации i18n

export default function LanguageSwitcher() {
	const { t, i18n } = useTranslation();
	const [isMounted, setIsMounted] = useState(false);

	// Используем setTimeout или асинхронное демпфирование, 
	// чтобы вывести смену состояния из синхронного цикла рендеринга React
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsMounted(true);
		}, 0);

		return () => clearTimeout(timer);
	}, []);

	// Пока компонент не смонтирован на клиенте, 
	// рендерим безопасную заглушку (кнопку без текста или скелетон),
	// чтобы серверный и клиентский HTML полностью совпадали при первой загрузке.
	if (!isMounted) {
		return (
			<button style={{ opacity: 0.5, cursor: 'not-allowed' }} disabled>
				...
			</button>
		);
	}

	const toggleLanguage = () => {
		const currentLang = i18n.language || 'ru';
		// Защита: отсекаем возможные локали вроде ru-RU или ru-BY
		const nextLanguage = currentLang.startsWith('ru') ? 'en' : 'ru';
		i18n.changeLanguage(nextLanguage);
	};

	return (
		<button onClick={toggleLanguage} className="p-2 w-11 ml-2 rounded-full border-2 border-accent transition-colors cursor-pointer">
			{t('switch_lang')}
		</button>
	);
}
