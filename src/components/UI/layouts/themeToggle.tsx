'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true)
		}, 0)

		return () => clearTimeout(timer)
	}, [])

	if (!mounted) return <div className="w-9 h-9" />

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white transition-colors"
			>
			{theme === 'dark' ? '☀️ Светлая' : '🌙 Темная'}
		</button>
	)
}
