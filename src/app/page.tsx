'use client';

import Image from "next/image";
import { siteConfig } from "../config/site.config";
import { useTranslation } from 'react-i18next';

export default function Home() {
	const { t } = useTranslation();

	return (
		<>
			<main className="grid grid-cols-2 grid-rows-3 gap-4 justify-between overflow-hidden">
				<div>
					<div className="mb-4">{t('Доступна для сотрудничества - Минск, Беларусь')}</div>
					<h2 className="font-bold text-4xl">
						Frontend
						<span className="text-yellow-600">&nbsp;{t('Разработчик')}</span>
					</h2>
					<div className="mt-4 text-2xl">
						{t('Меня зовут Татьяна и я Frontend разработчик с 3+ годами коммерческого опыта в продуктовой компании - маркетплэйсе.')}</div>
					</div>
				<div className="relative justify-self-end mb-8">
					<Image
						src="/main-photo.JPG"
						alt=""
						width={300} height={300}
						priority
						className="rounded-2xl"
					/>
					<span className="absolute text-focus rounded-sm bg-accent bottom-0 right-0 text-xs font-bold px-2.5 py-1 border-2 border-gray-700 animate-wiggle">3 {t('года опыта')}</span>
				</div>
				<div className="col-span-2">
					<h4 className="flex self-center justify-center mb-8">{t('Стек технологий')}</h4>
					<div className="flex min-w-full shrink-0 justify-around gap-4 animate-marquee" aria-hidden="true">
						{siteConfig.scills.length && siteConfig.scills.map(item  => (
							<span className="px-2" key={item.key}>{item.item}</span>
						))}
						{siteConfig.scills.length && siteConfig.scills.map(item  => (
							<span className="px-2" key={item.key}>{item.item}</span>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
