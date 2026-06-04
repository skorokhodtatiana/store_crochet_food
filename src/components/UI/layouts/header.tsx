"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

export const Logo = () => {
	return (
		<Image
			src="/food-logo.png"
			alt=""
			width={26} height={26}
			priority
		/>
	);
};

export default function Header() {

	return (
		<nav className="flex justify-center">
			<Button className="p-4">
				Регистрация
			</Button>
			<Button>
				Логин
			</Button>
		</nav>
	);
}