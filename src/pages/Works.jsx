
const Works = () => {

const data =[
    {
        id:"1",
        img:"https://www.webiser.no/static/images/other/woman-laptop.jpg",
        title:"Send en melding",
        text:"Med engang henvendelsen har blitt motatt vil vi kontaktere deg tilbake innen 60 minutter"
    },
    {
        id:"2",
        img:"https://www.webiser.no/static/images/other/man-talking-pc.jpg",
        title:" Snakk med oss",
        text:"Sammen skal vi finne ut akuratt det du trenger til å lykkes. Vi samarbeider tett sammen"
    },
    {
        id:"3",
        img:"https://www.webiser.no/static/images/other/dev.jpg",
        title:"Vi starter på",
        text:"Når alle krav har blitt gått gjennom, starter vi på nettsiden. Du vil få se nettsiden live mens vi gjør den ferdig"
    },    {
        id:"4",
        img:"https://www.webiser.no/static/images/other/man-phone.jpg",
        title:"Nettsiden er fullført",
        text:"Du vil få 100% eierskap innen 3 dager etter bestilling er fullført"
    }, {
        id:"1",
        img:"https://www.webiser.no/static/images/other/woman-laptop.jpg",
        title:"Send en melding",
        text:"Med engang henvendelsen har blitt motatt vil vi kontaktere deg tilbake innen 60 minutter"
    },
    {
        id:"2",
        img:"https://www.webiser.no/static/images/other/man-talking-pc.jpg",
        title:" Snakk med oss",
        text:"Sammen skal vi finne ut akuratt det du trenger til å lykkes. Vi samarbeider tett sammen"
    },
]

    return (
        <div className=" lg:px-20 px-8 py-6 m-auto max-w-[1500px]">
            <div className="p-5 mt-10"><p className="text-heading' text-center">Utvalgte prosjekter</p>
                <h2 className="text-[26px] font-bold text-heading text-center">Vi liker å levere resultater</h2></div>
            <div className="flex justify-between flex-wrap  py-5 gap-16  ">
                {
                    data.map((data, index)=>(
                        <div  className="lg:w-[28%] md:45% w-[100%] rounded-md shadow-lg lg:h-[350px] h-[300px] relative group overflow-hidden border" key={index} >
                    <img src={data.img} alt="" className=" z-0 w-[100%] lg:h-[350px] h-[300px] rounded-md shadow-md absolute " />
                    <div className="py-3 text-center lg:mt-[250px] mt-[200px] group-hover:mt-[0px] duration-500 text-white shadow-lg z-20 relative bg-opacity-80 h-[350px] bg-overflow flex flex-col gap-6 justify-center z items-center">
                        {/* <div className=""> */}
                            <div className="bg-works# z-50 w-8 h-8 rounded-full flex items-center justify-center mt-[-70px] " >{data.id}</div>
                        {/* </div> */}
                        <h2 className="text-[26px] font-bold text-center">{data.title}</h2>
                        <p>{data.text }</p>
                       
                    </div>
                </div>

                    ))
                }
            </div>
        </div>
    )
}
export default Works;