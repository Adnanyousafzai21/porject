import React from 'react'

const Hero = () => {
    return (
        <div className='hero md:px-20 flex md:justify-between  px-3 flex-col md:flex-row items-center  justify-center py-7 max-w-[1500px] m-auto '>
            <div className=' flex flex-col justify-center gap-3 md:gap-10 w-[100%]  md:w-[50%]' >
                <h1 className='font-black text-[25px] md:text-[34px]  text-[#183b56] lg:leading-10 leading-8 lg:text-left text-center'>Vi leverer profesjonelle nettsider som oppfyller bedriftens formål</h1>
                <p className='lg:text-[22px] text-[18px] text-[#183b56] lg:leading-9 leading-7 lg:text-left text-center'>
                    Vårt dedikerte team av fagfolk kombinerer kreativitet og teknisk kompetanse, og gir deg en solid digital tilstedeværelse.
                </p>
                <div className="flex lg:gap-5 lg:justify-start justify-center gap-3">
                    <button className='bg-[#0088F9] lg:px-[80px] px-[35px] py-3 text-white rounded'>kam i gang</button>
                    <button className='text-[#0088F9] border border-[#0088F9] lg:px-[80px] px-[40px] py-3 rounded'> prri dijd</button>
                </div>
            </div>
           
                <img src="https://www.webiser.no/static/images/covers/cover.png" alt=""  className='lg:w-[40%] mt-14  mr-0'/>
            
        </div>
    )
}

export default Hero
