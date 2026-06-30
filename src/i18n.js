"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationRU from '../public/locales/ru/translation.json';
import translationEN from '../public/locales/en/translation.json';

const resources = {
	ru: { translation: translationRU },
	en: { translation: translationEN }
};

i18n
	.use(LanguageDetector)	// Автоопределение языка браузера
	.use(initReactI18next) 	// Интеграция с React
	.init({
		resources,
		fallbackLng: 'ru',	// Язык по умолчанию, если язык браузера не найден
		interpolation: {
		escapeValue: false 	// React уже защищает от XSS
		}
	});

export default i18n;
