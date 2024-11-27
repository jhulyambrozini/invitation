import {Righteous} from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const font = Righteous({
    subsets: ['latin'],
    weight: '400',
})

export default function Logo(){
    return (
        <Link href='/' className={`${font.className} flex flex-item gap-2`}>
            <Image src='/logo.svg' alt='Logomarca do site' width={50} height={50}/>
            <h1 className='leading-5 items-center text-lg flex flex-col'>
                <div>CONVIT<span className='text-blue-500'>3</span></div>
                <div>DIGITAL</div>
            </h1>
        </Link>
    )
}