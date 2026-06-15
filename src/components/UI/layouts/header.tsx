"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/config/site.config";
import { usePathname } from "next/navigation";

export const Logo = () => {
	return (
		<Image
			src="/logo.jpg"
			alt=""
			width={26} height={26}
			priority
			className="rounded-full"
		/>
	);
};

export default function Header() {
	const pathname = usePathname();

		const getNavItems = () => {
		return (
			siteConfig.navItems.map(item => {
				const isActive = pathname === item.href;
				return <Link
					key={item.href}
					className={`px-2 ${isActive ? "text-blue-800" : "text-foreground"}`}
					href={item.href}>
					<div
						// className="hidden md:block"
						>
						{item.label}
					</div>
					{/* <Image
						src={item.src ?? "/empty-photo.png"}
						alt={item.href}
						width={26} height={26}
						className="block md:hidden"
					/> */}
				</Link>
			})
		);
	};

	return (
		<header>
			<nav aria-label="Пользовательское меню" className="flex justify-between p-4 bg-green-300">
				<Link href="/" className="flex gap-1 justify-center items-center">
					<Logo/>
					<h1 className="font-bold text-inherit">{siteConfig.title}</h1>
				</Link>
				<div className="flex items-center">
					<Link className="px-2" href="/basket">
						<Image
							src="/cart.svg"
							alt="Корзина"
							width={26} height={26}
							priority
							className="rounded-full"
						/>
						<span className="hidden md:block">Корзина</span>
					</Link>
					<Button variant="ghost" className="hidden md:block">
						Регистрация
					</Button>
					<Button variant="ghost">
						<span className="hidden md:block">Войти</span>
						<Image
							src="/login.png"
							alt="login"
							width={26} height={26}
							className="block md:hidden"
						/>
					</Button>
				</div>
			</nav>
			<nav aria-label="Основная навигация" className="flex justify-between p-4">
					{getNavItems()}
			</nav>
		</header>
	);
}
