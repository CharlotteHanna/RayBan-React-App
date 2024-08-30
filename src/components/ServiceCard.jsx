

const ServiceCard = ( {imgURL, label, subtext} ) => {
  return (
    <div className="w-[350px]  rounded-[20px] 
     shadow-3xl px-10 py-16">
        <div className="w-11 h-11 rounded-full flex justify-center items-center bg-red-600">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">{label}</h3>
        <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words">{subtext}</p>

    </div>
  )
}

export default ServiceCard