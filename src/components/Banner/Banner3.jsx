import React from 'react'
import BannerImg from "../images/banner-bg.jpg"
import { motion } from 'framer-motion'
import { FadeLeaf, FadeUp } from '../../utility/animation'


const bgstyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // hight: "100%",
    // width: "100%"
}

function Banner3() {
    return (
        <section className=''>
            <div 
            style={bgstyle}
            className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
                {/* img */}
                <div>
            leaf
                </div>
                {/* text */}
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1 
                        variants={FadeLeaf(0.5)}
                        initial= "hidden"
                        whileInView= "visibility"
                        viewport={{once:true}}
                        className='text-2xl lg:text-5xl font-bold uppercase'>Banner Info
                        </motion.h1>
                        <motion.p 
                        variants={FadeLeaf(0.7)}
                        initial= "hidden"
                        whileInView= "visibility"
                        viewport={{once:true}}
                        className=''>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore temporibus velit nam quo ducimus? Neque velit facilis suscipit natus illum non commodi quae est quidem, assumenda explicabo optio exercitationem aspernatur.
                        </motion.p>
                        
                        <motion.div 
                        variants={FadeLeaf(1.1)}
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

export default Banner3

