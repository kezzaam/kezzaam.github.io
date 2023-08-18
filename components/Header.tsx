"use client"

import { useState, useEffect } from 'react'
import { M_PLUS_1_Code } from 'next/font/google'
import { Moon, Sun } from 'react-feather'
import Logo from './Logo'
import Navigation from './Navigation'
import Link from 'next/link'

const mPlus = M_PLUS_1_Code({
    weight: ['200', '500', '700'],
    subsets: ['latin']
})

export default function Header() {
    const [mode, setMode] = useState('dark')

    const toggleDarkMode = () => {
        setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'))
        // option to save the mode to local storage here if needed
    }

    // Update the body styles based on the mode
    useEffect(() => {
        const body = document.querySelector('body') as HTMLBodyElement
        body.classList.remove('body-dark', 'body-light')
        body.classList.add(`body-${mode}`)
    }, [mode])

    return (
        <header className={`w-full fixed flex flex-row items-center py-4 px-2 space-x-2 ${mPlus.className}`}>
            {/* Logo */}
            <Link href="#home">
            <div className="logo text-7xl font-bold">
                <Logo />
            </div>
            </Link>

            {/* Navigation */}
            <Navigation />

            {/* Light/dark mode toggle */}
            <button onClick={toggleDarkMode} className="absolute right-6 bg-blue-500 hover:opacity-100 rounded-full p-2">
                {mode === 'dark' ? <Sun /> : <Moon />}
            </button>
        </header>
    )
}
