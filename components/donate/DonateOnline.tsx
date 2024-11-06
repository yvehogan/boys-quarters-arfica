import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const DonateOnline = () => {
  return (
    <div className='bg-white mt-24 flex flex-col justify-center items-center'>
        <p className="font-semibold text-4xl mb-5">Donate Online</p>
        <Button
              className="bg-primary text-white hover:bg-primary hover:opacity-70"
              size="lg"
              asChild
            >
              <Link href="/donate">
              Donate
              </Link>
            </Button>
    </div>
  )
}

export default DonateOnline