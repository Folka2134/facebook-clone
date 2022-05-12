import Image from 'next/image'
import { signIn } from 'next-auth/react'

export const Login = () => {
  return (
    <div className='grid place-items-center'>
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        alt='logo'
      />
      <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-center text-white cursor-pointer'>Login to Facebook</h1>
    </div>
  )
}
