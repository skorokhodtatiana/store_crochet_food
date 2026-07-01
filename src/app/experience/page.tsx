import { useTranslation } from 'react-i18next';


export default function Experience() {
	const {t} = useTranslation();

	return (
		<h1>{t('Опыт')}</h1>
	);
}
