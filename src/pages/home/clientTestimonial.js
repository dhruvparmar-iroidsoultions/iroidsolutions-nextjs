import axiosApi from "@/api/axiosConfig";
import TestimonialReview from "@/components/home/testimonialReview";

const ClientTestimonial = async () => {
  try {
    const response = await axiosApi.get("getAllClientTestimonials");
    const data = response.data;

    return <TestimonialReview clientTestimonial={data} />;
  } catch (error) {
    console.error(error);
    return <TestimonialReview clientTestimonial={[]} />;
  }
};

export default ClientTestimonial;
