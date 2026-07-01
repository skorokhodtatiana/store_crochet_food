import { useTranslation } from 'react-i18next';

export default function Contacts() {
	const {t} = useTranslation();

	return (
		<h1>{t('Контакты')}</h1>
	);
}
