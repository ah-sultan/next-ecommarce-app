import LoginBtn from '@/components/Login/LoginBtn'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { totalQuantity } from '@/redux/slice/cartSlice'
import { totalWishlistItems } from '@/redux/slice/wishlistSlice'
import { useSelector } from 'react-redux'
import Search from './Search'

const navItems = [
    {
        id: 0,
        title: 'Home',
        url: '/'
    },

    {
        id: 0,
        title: 'Shop',
        url: '/shop'
    },

    {
        id: 0,
        title: 'Contact',
        url: '/'
    },
    {
        id: 0,
        title: 'Testimonial',
        url: '/'
    },
]

function Header() {
    const totalCartItems = useSelector(totalQuantity)
    const totalWishlist = useSelector(totalWishlistItems)
    return (
        <>
            <header className="sticky top-0 z-10">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </Link>
                        <div>
                            <Search />
                        </div>
                        <div className="flex items-center lg:order-2">

                            <Link href='/cart' className="relative text-lg">
                                <AiOutlineShoppingCart className='text-[24px]' />
                                <span className='text-xs p-1 rounded-full leading-none bg-rose-700 text-white absolute -right-2 -top-2'>{totalCartItems}</span>
                            </Link>
                            <Link href='/wishlist' className="relative text-lg ml-2">
                                <AiOutlineHeart className='text-[24px]' />
                                {
                                    <span className={`text-xs p-1 rounded-full leading-none bg-pink-300 text-white absolute -right-2 -top-2 ${totalWishlist > 0 ? 'block' : 'hidden'}`}>{totalWishlist}</span>
                                }
                            </Link>
                            <div className='ml-4'>
                                <LoginBtn />
                            </div>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                {
                                    navItems.map((items, index) => (
                                        <li key={index}>
                                            <Link href={items.url} className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">{items.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header></>
    )
}

export default Header