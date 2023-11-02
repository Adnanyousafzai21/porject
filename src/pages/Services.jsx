import React from 'react'
import { Check } from 'lucide-react';
import { Store } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { CloudHail } from 'lucide-react';
import { Image } from 'lucide-react';
import Slider from "react-slick";
const Services = () => {
  const data = [
    {
      icons: <Store />,
      name: "Nettbutikk",
      para: "Med vår erfaring innen nettbutikk utvikling, garanterer vi en unik og profesjonell nettbutikk"
    },
    {
      icons: <Globe />,
      name: "Nettside",
      para: "Vi utvikler brukervennlig nettsider som oppfyller dine formål"
    },
    {
      icons:   <CircleDollarSign />,
      name: "Digital markedsføring",
      para: "Vi markedsfører din bedrift på Google, Facebook osv"
    },
    {
      icons:  <Rocket/>,
      name: "Drift av nettside",
      para: "La profesjonelle drive nettsiden din med null risiko"
    }, {
      icons: <Image />,
      name: "Innhold & Bildeproduksjon",
      para: "Vi tilbyr innhold & bildeproduksjon på alle bestillinger"
    }
    , {
      icons: <CloudHail />,
      name: "Cloud Hosting",
      para: "Hosting i skyene til 99kr/mnd på alle bestillinger"
    },
  ]

  return (
    <div className='flex lg:justify-between flex-col lg:flex-row items-center  px-7 lg:px-20 max-w-[1500px] m-auto my-20'>
      <div className='lg:w-[30%] md:w-[60%] w-[100%] text-center lg:text-left'>
        <p className='text-heading'>Tjenester</p>
        <h2 className='text-[26px] font-bold text-heading'>Skreddersydde løsninger for å løfte din virksomhet til nye høyder</h2>
        <div className='my-6 lg:flex lg:flex-col gap-y-5 hidden '>
          <div className='flex  items-center gap-6 '>
            <span className='rounded-full text-green-500 bg-themshadow p-3'>  <Check /></span> <span>Alt bedriften din trenger</span>
          </div>
          <div className='flex  items-center gap-x-6 '>
            <span className='rounded-full text-green-500 bg-themshadow p-3'>  <Check /></span> <span>Alt bedriften din trenger</span>
          </div>
          <div className='flex  items-center gap-6'>
            <span className='rounded-full text-green-500 bg-themshadow p-3'>  <Check /></span> <span>Alt bedriften din trenger</span>
          </div>
          <div className='flex  items-center gap-6'>
            <span className='rounded-full text-green-500 bg-themshadow p-3'>  <Check /></span> <span>Alt bedriften din trenger</span>
          </div>
          <div className='flex  items-center gap-6'>
            <span className='rounded-full text-green-500 bg-themshadow p-3'>  <Check /></span> <span>Alt bedriften din trenger</span>
          </div>

        </div>
      </div>
      <div className='lg:w-[60%] w-[100%] flex items-center justify-center flex-wrap gap-5 mt-[20px] lg:mt-[0px]'>
        {
          data.map((service, index) => (
            <div key={index} className='p-8 rounded bg-themshadow md:max-w-[48%] max-w-[100%]  h-[190px] group hover:bg-themcolor hover:text-white text-heading duration-700'>
              <div key={index} className='text-center'>
              <div className="flex justify-center">
                {service.icons}
              </div>
                <h2 className='my-2 text-[22px]'>{service.name}</h2>
                <p className='text-[15px]'>{service.para}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}


export default Services
