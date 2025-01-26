
import { Typography } from "@mui/material";
import TestimonialCarousel from "../../../components/Review slider";
const Review=()=>{
    return(
        <>
        <div className="h-12"></div>
        <div className="flex-row bg-slate-800 h-56"> <Typography variant="h4" sx={{color:"white",textAlign:"center", fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,}}> Our Clients’ Feedback</Typography>
        <TestimonialCarousel></TestimonialCarousel></div>
       </>
    )
}
export default Review