import Link from 'next/link'
import { Menu } from 'react-feather'
import { useState } from 'react'
import { useActiveSection } from "@/context/ActiveSection"


export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { activeSection } = useActiveSection() || {}

    const toggleMenu = () => {
        // toggle the menu open and closed here
        setMenuOpen(!menuOpen)
    }

    // link styles
    const linkStyle = "hover:text-peachcobbler hover:transition-all hover:pl-1 hover:border-l-4 hover:border-peachcobbler"
    const activeStyle = "hover:text-blue-500 hover:transition-none hover:pl-0 hover:border-none text-blue-500"

    return (
        <nav className={`flex-grow sm:flex sm:items-center sm:space-x-10 relative`}>
            {/* Hamburger menu for small screens */}
            <button className="sm:hidden mt-3 hover:text-peachcobbler active:blue-500" onClick={toggleMenu}>
                <Menu />
            </button>

            {/* Navigation list for large screens */}
            <ul className={`hidden sm:flex mt-3 ml-10 uppercase space-x-10 text-xl tracking-wide`}>
                <li>
                    <Link href='#background' className={activeSection === 'background' ? activeStyle : linkStyle}>Background</Link>
                </li>
                <li>
                    <Link href="#portfolio" className={activeSection === 'portfolio' ? activeStyle : linkStyle}>Portfolio</Link>
                </li>
                <li>
                    <Link href="#contact" className={activeSection === 'contact' ? activeStyle : linkStyle}>Contact</Link>
                </li>
            </ul>

            {/* Dropdown menu for small screens */}
            <ul className={`absolute w-auto sm:static top-3 left-10 right-24 sm:mt-0 flex flex-col sm:flex-row uppercase space-y-3 sm:space-y-0 sm:space-x-10 text-l tracking-wide ${menuOpen ? 'block' : 'hidden'} md:hidden z-10`}>
                <li>
                    <Link href="#background" className={activeSection === 'background' ? activeStyle : linkStyle}>Background</Link>
                </li>
                <li>
                    <Link href="#portfolio" className={activeSection === 'portfolio' ? activeStyle : linkStyle}>Portfolio</Link>
                </li>
                <li>
                    <Link href="#contact" className={activeSection === 'contact' ? activeStyle : linkStyle}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
