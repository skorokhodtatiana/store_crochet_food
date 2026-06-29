'use client';

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
			className="py-2 px-3 rounded-full border-2 border-accent transition-colors"
		>
			{theme === 'dark' ? '☀️' : '🌙'}
		</button>
	)
}
