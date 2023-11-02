

import React from 'react'
import Slider from "react-slick";
const Reprences = () => {
  const data = [
    {
      id: "1",
      // img:"https://www.webiser.no/static/images/other/woman-laptop.jpg",
      title: "Send en melding",
      text: "Med engang henvendelsen har blitt motatt vil vi kontaktere deg tilbake innen 60 minutter"
    },
    {
      id: "2",
      // img:"https://www.webiser.no/static/images/other/man-talking-pc.jpg",
      title: " Snakk med oss",
      text: "Sammen skal vi finne ut akuratt det du trenger til å lykkes. Vi samarbeider tett sammen"
    },
    {
      id: "3",
      // img:"https://www.webiser.no/static/images/other/dev.jpg",
      title: "Vi starter på nettsiden",
      text: "Når alle krav har blitt gått gjennom, starter vi på nettsiden. Du vil få se nettsiden live mens vi gjør den ferdig"
    }, {
      id: "4",
      // img:"https://www.webiser.no/static/images/other/man-phone.jpg",
      title: "Nettsiden er fullført",
      text: "Du vil få 100% eierskap innen 3 dager etter bestilling er fullført"
    }, {
      id: "5",
      // img:"https://www.webiser.no/static/images/other/man-talking-pc.jpg",
      title: "Vi starter på nettsiden",
      text: "Når alle krav har blitt gått gjennom, starter vi på nettsiden. Du vil få se nettsiden live mens vi gjør den ferdig"
    }

  ]
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='max-w-[1500px] px-10 my-10 m-auto'>
      <div className="text-xl  text-sky-300 text-bold text-center">Products Features</div>
      {/* <div className='flex justify-center items-center mt-3 -ml-6'><span className='w-3 h-3 rounded-full bg-customcolor '></span><span className='rounded bg-customcolor w-[140px] h-[1px]  -ml-1'></span></div> */}

      <Slider {...settings}>
        {data.map((product, i) => (
          <div>
            <div className="bp-0 rounded pt-4 m-auto my-10 py-5 duration-300 max-w-[250px] border border-sky-200 " style={{ boxShadow: "-1px -1px 5px 2px #e0e0eb" }}>
              <div className=" flex flex-col items-center gap-y-3 pt-3 ">
                <p className="font-semibold text-sky-300">{product.title}</p>
                <p className="px-6 font-extralight text-center line-clamp-2 ">
                  {product.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
    // </div>
  )
}


export default Reprences