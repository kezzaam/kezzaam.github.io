"use client"

import { createContext, useContext, useState, useEffect } from 'react'

type ActiveSectionContextType = {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: any) {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const options = {
            threshold: 0.5 // Adjust threshold as needed
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, options)

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSection() {
    return useContext(ActiveSectionContext)
}
