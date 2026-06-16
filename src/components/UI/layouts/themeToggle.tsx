'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true)
		}, 0) // Переносим в очередь макрозадач

		return () => clearTimeout(timer)
	}, [])

	const changeTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
		console.log("mmmm")
	}

	if (!mounted) return <div className="w-9 h-9" />

	return (
		<button
			// onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				onClick={changeTheme}
				className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
			>
			{theme === 'dark' ? '☀️ Светлая' : '🌙 Темная'}
		</button>
	)
}
