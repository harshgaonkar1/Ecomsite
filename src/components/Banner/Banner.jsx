import React from 'react'
import BannerImg from "../images/fruits-splash.png"
import { motion } from 'framer-motion'
import { FadeLeaf, FadeUp } from '../../utility/animation'

function Banner() {
    return (
        <section className='bg-secondary/10'>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* img */}
                <div className='flex justify-center items-center'>
                    <motion.img 
                    initial = {{opacity: 0, scale: 0.5}}
                    whileInView={{ opacity: 1, scale: 1}}
                    transition={{type: "spring", stiffness: 100, delay: 0.2}}
                    viewport={{once: true}}
                    src={BannerImg} alt="" className='w-[300px] md:max-w-[400px] h-full object-cover'/>
                </div>
                {/* text */}
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1 
                        variants={FadeUp(0.5)}
                        initial= "hidden"
                        whileInView= "visibility"
                        viewport={{once:true}}
                        className='text-2xl lg:text-5xl font-bold uppercase'>Banner Info
                        </motion.h1>
                        <motion.p 
                        variants={FadeUp(0.7)}
                        initial= "hidden"
                        whileInView= "visibility"
                        viewport={{once:true}}
                        className=''>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore temporibus velit nam quo ducimus? Neque velit facilis suscipit natus illum non commodi quae est quidem, assumenda explicabo optio exercitationem aspernatur.
                        </motion.p>
                        <motion.p
                        variants={FadeUp(0.9)}
                        initial= "hidden"
                        whileInView= "visibility"
                        viewport={{once:true}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi a aperiam necessitatibus soluta qui cum.
                        </motion.p>
                        <motion.div 
                        variants={FadeUp(1.1)}
                        initial="hidden"
                        animate= "visibility"
                        // transition={{duration:1}}
                        className='flex justify-center md:justify-start'>
                            <button className='primary-btn'>
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
