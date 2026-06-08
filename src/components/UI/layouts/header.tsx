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
					{item.label}
				</Link>
			})
		);
	};

	return (
		<header>
			<nav className="flex justify-between p-4">
				<Link href="/" className="flex gap-1 justify-center items-center">
					<Logo/>
					<h1 className="font-bold text-inherit">{siteConfig.title}</h1>
				</Link>
				<div>
					{getNavItems()}
				</div>
				<div>
					<Button variant="ghost">
						Регистрация
					</Button>
					<Button variant="ghost">
						Логин
					</Button>
				</div>
			</nav>
		</header>
	);
}
