import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import React from 'react'

const MenuOptions=[
  {
    name:'Home',
    path:'/'
  },
  {
    name: 'Pricing',
    path: '/pricing'
  },
  {
    name: 'Contact us',
    path:'/contact-us'
  }
]
const Header = () => {
  return (
    <div>
      {/* Logo */}
      <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt='logo' width={30} height={30}/>
        <h2 className='font-bold text-2xl'> AI Trip Planner</h2>
        </div>
      {/* Menu Options */}
        <div>
          {MenuOptions.map((menu,index)=>(
            <Link href={menu.path}>
            <h2>{menu.name}</h2>
            </Link>
          ))}
        </div>
      {/* Get Started Button */}
    </div>
  )
}

export default Header
