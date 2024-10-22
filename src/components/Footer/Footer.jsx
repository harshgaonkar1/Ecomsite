import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <footer className='bg-primary/10 py-12'>
            <motion.div 
            initial= {{opacity: 0}}
            whileInView = {{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.5}}
            className='flex justify-between items-center'>
                {/* logo */}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className='text-green-600' />
                </div>
                {/* midia */}
                <div className='flex items-center text-3xl gap-4 mt-6 text-gray-700'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer
