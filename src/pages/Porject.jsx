import React from "react";
import { Link } from "react-router-dom";
// import {ecomrce} from "../components/images/e-comrace.PNG"

const Project = () => {
  const data = [
    {
      id: 1,

      imag: "https://www.webiser.no/static/images/other/man-hat.jpg",
      link: "https://hakthonpro.vercel.app/",
      proname: "E-comerce Website",
      techname: "text about the projects",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
    {
      id: 2,
      imag: "https://www.webiser.no/static/images/other/man-hat.jpg",
      link: "https://contact-list-bice-zeta.vercel.app/",
      proname: "Contact list",
      techname: "text about the projects",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
    {
      id: 3,
      imag: "https://www.webiser.no/static/images/other/man-hat.jpg",
      link: "https://adnanyousafzai21.github.io/adnan-app/",
      proname: "Frist portpolio",
      techname: "text about the projects",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
    {
      id: 4,
      imag: "https://www.webiser.no/static/images/other/man-hat.jpg",
      link: "https://adnanyousafzai21.github.io/Todo_List/",

      proname: "ToDo list",
      techname: "text about the projects",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
    {
      id: 5,
      imag: "https://www.webiser.no/static/images/other/man-hat.jpg",
      proname: "Text editor",
      techname: "text about the projects",
      },
    {
      id: 6,
      imag: "https://www.webiser.no/static/images/other/man-hat.jpg",
      proname: "Resturant ui",
      techname: "text about the projects",
       },

  
  ];

  return (
    <div className=" lg:px-20 px-8  py-6 max-w-[1500px] m-auto">
      <div className=" mt-8 my-5"><p className="text-heading' text-center">Utvalgte prosjekter</p>
        <h2 className="text-[26px] font-bold text-heading text-center">Vi liker å levere resultater</h2></div>

      <div className="flex lg:justify-between justify-center flex-wrap  py-5 gap-16">
        {data.map((item ,index) => {
          return (
            <div className="lg:w-[28%] md:45% w-[100%] rounded-md shadow-lg" key={item.id}>
              <img src={item.imag} alt="Avatar" className="rounded-md" />
              <div className="py-3 text-center text-heading">
                <h4 className="text-heading font-bold">{item.proname}</h4>
                <p>{item.techname}</p> 
                <div className="flex lg:gap-8 gap-5 pt-4 p-3 justify-center">
                  <div to={item.link} className="font-normal lg:px-9 px-6 py-1 te rounded text-center text-white bg-themcolor hover:bg-white duration-500 cursor-pointer hover:border border-thecolor hover:text-themcolor">
                    Visit
                  </div>
                  <div to={item.link} className="font-ormal px-6 text-themcolor py-1 lg:px-9 rounded text-center border border-themcolor hover duration-500 cursor-pointer hover:bg-themcolor hover:text-white">
                    Detials
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Project