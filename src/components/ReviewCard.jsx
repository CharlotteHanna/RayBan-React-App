import { star } from "../assets/icons"

const ReviewCard = ({customerName, imgURL, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt="customerImg" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="info-text mt-6 text-center leading-normal">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="rating" width={24} height={24} className="object-contain m-0"/>
            <p className="font-montserrat text-xl text-slate-gray"> ({rating})</p>
        </div>
        <h3 className="font-palanquin mt-1 text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard