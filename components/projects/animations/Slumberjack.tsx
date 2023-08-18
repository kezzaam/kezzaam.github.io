
import logo from '../../../public/images/logo.svg'
import Image from 'next/image'

export default function Slumberjack() {
    const getRandomDelay = () => Math.random() * 10 // Generate a random delay value between 0 and 5

    return (
        <div className="dreamy flex flex-col justify-center items-center" style={{ animationDelay: `${getRandomDelay()}s` }}>
        <Image src={logo} width={100} height={100} alt={'slumberjack'}/>
        </div>
    )
  }
