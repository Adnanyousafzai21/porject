import React from 'react'

const Contact = () => {
    return (
        <div className=''>
            <div className='mt-8  bg-contanbg  bg-opacity-20 lg:py-20 py-10 '>
                <div className=" mt-8 ">
                    <p className="text-heading' text-center">Klar for en prat med oss? Ring gjerne til +4745397946 eller bruk kontaktskjema</p>
                    <h2 className="text-[26px] font-bold text-heading text-center">Kom i gang nå, og ta bedriften din til neste nivå</h2></div>
                <div>
                    <div className="m-auto w-[100%] lg:w-[70%] my-10 ">
                        <div className='flex flex-col lg:gap-6 text-heading gap-3 items-center justify-center w-[100%] '>
                            <div className=' w-[80%] lg:w-[50%]'>
                                <label htmlFor="">Name</label><br />
                                <input type="text" className='border px-9 py-3 rounded-md  w-[90%] ' />
                            </div>
                            <div className='w-[80%] lg:w-[50%]'>
                                <label htmlFor="">Email</label><br />
                                <input type="text" className='border px-9 py-3 rounded-md  w-[90%] ' />
                            </div>
                            <div className='w-[80%] lg:w-[50%]'>
                                <label htmlFor="">message</label><br />
                                <textarea name="" id="" cols="25" rows="4" className='border px-9 py-3 rounded-md w-[90%]' ></textarea>
                                {/* // <input type="text" className='border px-9 py-3 rounded-md ' /> */}
                            </div>
                            <div className="font-normal lg:px-9 px-8 py-2 te rounded text-center text-white bg-themcolor hover:bg-white duration-500 cursor-pointer hover:border border-thecolor hover:text-themcolor">
                                Send
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
