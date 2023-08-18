import { useEffect, useState } from 'react'

export const useScrollDirection = () => {
   const [scrollDirection, setScrollDirection] = useState('right')

   useEffect(() => {
      const handleScroll = (event: { deltaX: any }) => {
         const deltaX = event.deltaX
         let newScrollDirection = ''

         if (deltaX > 0) {
            newScrollDirection = 'right'
         } else if (deltaX < 0) {
            newScrollDirection = 'left'
         }

         setScrollDirection(newScrollDirection)
      }

      window.addEventListener('wheel', handleScroll, { passive: true })

      return () => {
         window.removeEventListener('wheel', handleScroll)
      }
   }, [])

   // console.log(scrollDirection)
   return scrollDirection
}