import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { handleLogoutAction } from '@/features/users/actions/userActions'
import Form from 'next/form'

const Navbar = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')
    const userDetails = jwt.decode(token?.value as unknown as string) as UserDetails
    const userInitials = userDetails && userDetails.user?.fullname?.split(" ").map(singleDetail => singleDetail.at(0)).join('')
    
    return (
        <header className='h-16 center bg-gray-200'>
            <nav className='box between'>
                <h2 className='text-2xl font-semibold text-gray-800'>BookEase</h2>
                <ul className='center gap-4'>
                    <Link 
                        className='px-5 py-3 rounded-md text-lg font-semibold text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:border-b-2 hover:border-blue-600'
                        href={"/"}
                    >
                        Home
                    </Link>
                    <Link 
                        className='px-5 py-3 rounded-md text-lg font-semibold text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:border-b-2 hover:border-blue-600'
                        href={"/about"}
                    >
                        About
                    </Link>
                    <Link 
                        className='px-5 py-3 rounded-md text-lg font-semibold text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:border-b-2 hover:border-blue-600'
                        href={"/bookings"}
                    >
                        Bookings
                    </Link>
                </ul>
                <div className='space-x-4'>
                    {token?.value && token.value.length > 0 ? (
                        <Popover>
                            <PopoverTrigger>
                                <div className='h-12 w-12 center rounded-full bg-gray-800 text-white'>
                                    {userInitials}
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className='flex flex-col gap-2'>
                                <p className='grid grid-cols-3 gap-2'>
                                    <span className='col-span-1'>Name</span>
                                    <span className='col-span-2'>{userDetails?.user?.fullname}</span>
                                </p>
                                <p className='grid grid-cols-3 gap-2'>
                                    <span className='col-span-1'>Email</span>
                                    <span className='col-span-2'>{userDetails?.user?.email}</span>
                                </p>
                                <Form action={handleLogoutAction}>
                                    <Button className='w-full relative top-1 bg-gray-800 hover:bg-gray-700'>Sign out</Button>
                                </Form>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <>
                            <Link 
                                className='px-5 py-3 rounded-md text-lg font-semibold text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:border-b-2 hover:border-blue-600' 
                                href={"/sign-up"}
                            >
                                Sign Up
                            </Link>
                            <Link 
                                className='px-5 py-3 rounded-md text-lg font-semibold text-gray-800 transition-transform duration-300 transform hover:scale-105 hover:border-b-2 hover:border-blue-600' 
                                href={"/login"}
                            >
                                Sign In
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
