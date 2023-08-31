import Link from 'next/link'
import { Menu } from 'react-feather'
import { useActiveSection } from "@/context/ActiveSection"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Navigation({ menuOpen, toggleMenu }: any) {
    // Get the active section from the context
    const { activeSection } = useActiveSection() || {}

    // link styles
    const linkStyle = "hover:text-peachcobbler hover:transition-all hover:pl-1 hover:border-l-4 hover:border-peachcobbler"
    const activeStyle = "hover:text-blue-500 hover:transition-none hover:pl-0 hover:border-none text-blue-500"

    return (
        <nav className={`flex-grow sm:flex sm:items-center sm:space-x-10 relative`}>
            {/* Hamburger menu for small screens */}
            {/* Hamburger menu for small screens */}
            <button className="transition-all sm:hidden mt-3 hover:text-blue-500 active:blue-500 z-50" onClick={toggleMenu}>
                {menuOpen ? <FontAwesomeIcon icon={faTimes} size="xl"/> : <Menu />}
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
            <ul className={`absolute  sm:static top-0 left-10 flex flex-col sm:flex-row uppercase space-y-3 sm:space-y-0 sm:space-x-10 text-l tracking-wide ${menuOpen ? 'block' : 'hidden'} md:hidden z-0`}>
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
