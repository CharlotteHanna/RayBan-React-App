import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold ">
        What Our <span className="text-red-600">Customers </span>Say?
      </h3>
      <p className="text-center info-text m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers
         about their exceptional experiences with us.</p>

      <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14 ">
        {reviews.map((review) => (
          <ReviewCard
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews