import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ filterItems, itemHead }) => {
    return (
        <>
            <div className="bg-gray-200">
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center text-gray-600 body-font">
                        <nav className=" md:border-gray-400	 md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center text-gray-600 body-font">
                            <Link href={"/"}><a className="flex md:mr-auto  md:py-3 md:pr-4 md:border-r md:border-gray-400 title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-0 md:mb-0">
                                <div className="w-20 h-16 rounded-full inline-flex items-center justify-center">
                                    <Image priority="true" width={"120px"} height={"80px"} layout='fixed' src="/images/LN2.png" alt='Logo' className="rounded-full inline-flex items-center justify-center" />
                                </div></a>
                            </Link>
                            {itemHead?.map((headItem, ind) => {
                                return <Link href="/" key={ind}><a className="mx-2 items-center justify-center hover:text-gray-900" onClick={() => filterItems(headItem)}>{headItem}</a></Link>
                            })}
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar