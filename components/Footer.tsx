import Link from 'next/link'
import { M_PLUS_1_Code } from 'next/font/google'
import { MessageSquare } from 'react-feather'

const mPlus = M_PLUS_1_Code({
  weight: ['200', '500', '700'],
  subsets: ['latin']
})

export default function Footer() {
  return (
    <footer className="w-screen fixed bottom-0 left-0 p-2 flex-row items-end justify-between">
      {/* Only display the footer on screens larger than 'sm' (small) */}
      <div className="hidden sm:flex flex-row justify-between">
        <Link href="mailto:kezzaam@hotmail.com">
          <MessageSquare size='40' className="hover:text-peachcobbler hover:transition-all hover:scale-110" />
        </Link>
        <p className={`${mPlus.className} border p-2 rounded text-right text-xs max-w-[60%] mr-2 opacity-50`}>Built with Next JS, Typescript & Tailwind CSS ©2023</p>        
      </div>
    </footer>
  )
}

