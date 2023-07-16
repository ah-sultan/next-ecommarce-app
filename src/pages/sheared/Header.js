import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const navItems = [
    {
        id: 0,
        title : 'Home',
        url : '/'
    },

    {
        id: 0,
        title : 'About',
        url : '/'
    },

    {
        id: 0,
        title : 'Contact',
        url : '/'
    },
    {
        id: 0,
        title : 'Testimonial',
        url : '/'
    },
]

function Header() {
  return (
   <>
   <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            <div class="flex items-center lg:order-2">
                <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                <Link href='/cart' className="relative text-lg">
                    <AiOutlineShoppingCart className='text-[24px]'/>
                    <span className='text-xs p-1 rounded-full leading-none bg-rose-700 text-white absolute -right-2 -top-2'>10</span>
                </Link>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    {
                        navItems.map((items, index) => (
                            <li key={index}>
                                <Link href={items.url} class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">{items.title}</Link>
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