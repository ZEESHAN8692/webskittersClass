import { notFound } from "next/navigation";

const ReviewDetails = ({ params }: { 
  params: { 
    prodId: string; 
    reviewID: string; 
  } 
}) => {
  
  if (parseInt(params.reviewID) > 1000) {
    notFound();
  }

  return (
    <div>
      <h3>
        Review {params.reviewID} for product {params.prodId}
      </h3>
    </div>
  );
};

export default ReviewDetails;