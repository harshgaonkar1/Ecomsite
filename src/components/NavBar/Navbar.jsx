import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdAddShoppingCart, MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';


const NavMenue = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Product",
        link: "#",
    },
    {
        id: 3,
        title: "Shop",
        link: "#",
    },
    {
        id: 4,
        title: "About",
        link: "#",
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
    },
]

const Navbar = () => {
    const [open, setopen] = React.useState(false)
    return (
        <>
            <nav>
                <motion.div 
                initial = {{ opacity: 0}}
                animate = {{ opacity: 1}}
                transition={{ duration: 0.5,delay: 0.2}}
                className="container flex justify-between items-center py-4 md:pt-4">
                    {/* logo section*/}

                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <p className='text-primary'>Fruit</p>
                        <p className='text-secondary'>Store</p>
                        <FaLeaf className='text-green-600' />
                    </div>
                    {/* menu section*/}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {
                                NavMenue.map((menu) => (
                                    <li key={menu.id} >
                                        <a href={menu.link}
                                            className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                                        >{menu.title}</a>
                                    </li>
                                ))
                            }
                            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                                <MdAddShoppingCart />
                            </button>
                        </ul>
                    </div>
                    {/* Mobile hamberger section*/}
                    <div className='md:hidden' onClick={() =>
                    setopen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </motion.div>
            </nav>

            <ResponsiveMenu open = {open}/>
        </>
    )
}

export default Navbar
